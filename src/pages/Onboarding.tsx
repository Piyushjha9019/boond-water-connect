import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Upload, Droplets, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import heroImage from "@/assets/onboarding-hero.jpg";
import logo from "@/assets/boond-logo.png";

const Onboarding = () => {
  const navigate = useNavigate();
  const [locationGranted, setLocationGranted] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleLocation = () => {
    setLocationGranted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="relative h-56 overflow-hidden">
        <img src={heroImage} alt="Water harvesting landscape" className="w-full h-full object-cover" width={800} height={600} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 -mt-8 relative z-10">
        <img src={logo} alt="Boond logo" width={72} height={72} className="mb-4 drop-shadow-lg" />

        <h1 className="text-2xl font-bold text-foreground text-center">
          Boond <span className="text-gradient">💧</span>
        </h1>
        <p className="text-sm font-medium text-primary mt-1">Smart Water & Health Platform</p>
        <p className="text-sm text-muted-foreground mt-1 text-center">
          Save Water. Stay Healthy.<br />पानी बचाओ। स्वस्थ रहो।
        </p>

        <div className="w-full max-w-sm mt-8 space-y-3">
          <button
            onClick={handleLocation}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
              locationGranted
                ? "border-success bg-success/5"
                : "border-border bg-card shadow-card"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              locationGranted ? "bg-success/10 text-success" : "gradient-primary text-primary-foreground"
            }`}>
              <MapPin size={22} />
            </div>
            <div className="text-left flex-1">
              <p className="text-sm font-semibold text-foreground">
                {locationGranted ? "Location Enabled ✓" : "Enable Location"}
              </p>
              <p className="text-xs text-muted-foreground">स्थान की अनुमति दें</p>
            </div>
          </button>

          <button
            onClick={() => setImageUploaded(true)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
              imageUploaded
                ? "border-success bg-success/5"
                : "border-border bg-card shadow-card"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              imageUploaded ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
            }`}>
              <Upload size={22} />
            </div>
            <div className="text-left flex-1">
              <p className="text-sm font-semibold text-foreground">
                {imageUploaded ? "Image Uploaded ✓" : "Upload Area Image"}
              </p>
              <p className="text-xs text-muted-foreground">क्षेत्र की तस्वीर (वैकल्पिक)</p>
            </div>
          </button>
        </div>

        <div className="w-full max-w-sm mt-auto pb-8 pt-6 space-y-3">
          <Button
            onClick={() => navigate("/signin")}
            className="w-full h-14 text-base font-semibold gradient-primary text-primary-foreground rounded-xl shadow-elevated"
            size="lg"
          >
            <Droplets className="mr-2" size={20} />
            Get Started / शुरू करें
          </Button>

          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/signin")}
              variant="outline"
              className="flex-1 h-12 rounded-xl font-semibold"
            >
              <LogIn size={18} />
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              variant="outline"
              className="flex-1 h-12 rounded-xl font-semibold"
            >
              <UserPlus size={18} />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
