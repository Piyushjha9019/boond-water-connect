import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Lock, User, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/boond-logo.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    return digits.startsWith("91") ? `+${digits}` : `+91${digits}`;
  };

  const sendOtp = async () => {
    if (phone.replace(/\D/g, "").length < 10) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      phone: formatPhone(phone),
      options: {
        data: { full_name: name },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setOtpSent(true);
    toast.success("OTP sent to your phone");
  };

  const verifyOtp = async () => {
    if (otp.length < 4) {
      toast.error("Enter the OTP");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      phone: formatPhone(phone),
      token: otp,
      type: "sms",
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Account created");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background px-6 pt-6 pb-8">
      <div className="flex items-center justify-between max-w-sm w-full mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted text-foreground"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-sm w-full mx-auto">
        <img src={logo} alt="Boond" width={64} height={64} className="mb-4 drop-shadow-lg" />
        <h1 className="text-2xl font-bold text-foreground">Create account</h1>
        <p className="text-sm text-muted-foreground mt-1 text-center">
          Join Boond with your phone number<br />
          <span className="text-xs">अपना फ़ोन नंबर दर्ज करें</span>
        </p>

        <div className="w-full mt-8 space-y-3">
          {!otpSent && (
            <label className="block">
              <span className="text-xs font-semibold text-foreground">Your Name</span>
              <div className="mt-1 relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </label>
          )}

          <label className="block">
            <span className="text-xs font-semibold text-foreground">Phone Number</span>
            <div className="mt-1 relative">
              <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="tel"
                inputMode="numeric"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={otpSent || loading}
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </label>

          {otpSent && (
            <label className="block animate-fade-in">
              <span className="text-xs font-semibold text-foreground">OTP</span>
              <div className="mt-1 relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={loading}
                  className="pl-10 h-12 rounded-xl tracking-widest"
                  maxLength={6}
                />
              </div>
            </label>
          )}

          <Button
            onClick={otpSent ? verifyOtp : sendOtp}
            disabled={loading}
            className="w-full h-12 text-base font-semibold gradient-primary text-primary-foreground rounded-xl shadow-elevated"
          >
            <Droplets size={18} />
            {loading ? "Please wait…" : otpSent ? "Verify & Create Account" : "Send OTP"}
          </Button>

          {otpSent && (
            <button
              onClick={() => {
                setOtpSent(false);
                setOtp("");
              }}
              className="w-full text-xs text-muted-foreground hover:text-foreground"
            >
              Change phone number
            </button>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-8 text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/signin")}
            className="text-primary font-semibold"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
