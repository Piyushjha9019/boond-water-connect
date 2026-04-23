import { useNavigate } from "react-router-dom";
import {
  Calculator,
  Lightbulb,
  ShieldAlert,
  CloudRain,
  Wrench,
  Droplets,
  LogIn,
  UserPlus,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import logo from "@/assets/boond-logo.png";
import rainBg from "@/assets/boond-rain-bg.jpg";

const cards = [
  { icon: Calculator, label: "Estimate Cost", labelHi: "लागत अनुमान", path: "/cost", color: "bg-primary/10 text-primary" },
  { icon: Lightbulb, label: "Suggest Method", labelHi: "विधि सुझाव", path: "/method", color: "bg-accent/10 text-accent" },
  { icon: ShieldAlert, label: "Health Alerts", labelHi: "स्वास्थ्य चेतावनी", path: "/health", color: "bg-danger/10 text-danger" },
  { icon: CloudRain, label: "Drought Status", labelHi: "सूखा स्थिति", path: "/drought", color: "bg-warning/10 text-warning" },
  { icon: Wrench, label: "Find Contractors", labelHi: "ठेकेदार खोजें", path: "/contractors", color: "bg-secondary/10 text-secondary" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div
        className="relative px-5 pt-6 pb-10 rounded-b-3xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${rainBg})` }}
      >
        <div className="absolute inset-0 gradient-primary opacity-80" aria-hidden="true" />
        <div className="relative">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Boond" width={40} height={40} className="rounded-xl" />
            <div>
              <h1 className="text-lg font-bold text-primary-foreground">Boond 💧</h1>
              <p className="text-xs text-primary-foreground/80">Smart Water Platform</p>
            </div>
          </div>
          <Droplets className="text-primary-foreground/60" size={28} />
        </div>

        {/* Auth buttons */}
        <div className="mt-5 flex gap-2 max-w-lg mx-auto">
          <Button
            onClick={() => navigate("/signin")}
            className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
          >
            <LogIn size={18} />
            Sign In
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            variant="outline"
            className="flex-1 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold"
          >
            <UserPlus size={18} />
            Sign Up
          </Button>
        </div>

        <div className="mt-4 bg-primary-foreground/15 rounded-2xl p-4 max-w-lg mx-auto backdrop-blur-sm">
          <p className="text-sm font-medium text-primary-foreground">
            🌧️ Rainfall in your area: <span className="font-bold">Medium</span>
          </p>
          <p className="text-xs text-primary-foreground/70 mt-1">
            Water harvesting recommended • जल संचयन अनुशंसित
          </p>
        </div>
        </div>
      </div>

      {/* Cards */}
      <div className="px-4 -mt-5 max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {cards.map((card) => (
            <button
              key={card.path}
              onClick={() => navigate(card.path)}
              className="bg-card rounded-2xl p-5 shadow-card border border-border text-left transition-all active:scale-[0.97] hover:shadow-elevated animate-fade-in"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                <card.icon size={24} />
              </div>
              <p className="text-sm font-semibold text-foreground">{card.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{card.labelHi}</p>
            </button>
          ))}
        </div>

        {/* Quick tip */}
        <div className="mt-5 p-4 rounded-2xl border border-border bg-card shadow-card">
          <p className="text-xs font-semibold text-foreground mb-1">💡 Quick Tip / त्वरित सुझाव</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Rooftop rainwater harvesting can save up to 50,000 liters of water annually for an average household.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
