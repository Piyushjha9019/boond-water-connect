import { useState } from "react";
import { AlertTriangle, ShieldAlert, Send, Bug, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { toast } from "sonner";

const alerts = [
  {
    title: "Dengue risk high in your area",
    titleHi: "आपके क्षेत्र में डेंगू का खतरा अधिक",
    icon: Bug,
    severity: "high",
    time: "2 hours ago",
  },
  {
    title: "Contaminated water reported nearby",
    titleHi: "पास में दूषित पानी की रिपोर्ट",
    icon: Droplets,
    severity: "high",
    time: "5 hours ago",
  },
  {
    title: "Waterborne disease advisory",
    titleHi: "जलजनित रोग सलाहकार",
    icon: ShieldAlert,
    severity: "medium",
    time: "1 day ago",
  },
];

const HealthAlerts = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = () => {
    toast.success("Issue reported successfully! / समस्या सफलतापूर्वक दर्ज की गई!");
    setShowForm(false);
    setName("");
    setIssue("");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Health Alerts" subtitle="स्वास्थ्य चेतावनी" />

      <div className="px-4 py-5 max-w-lg mx-auto space-y-3">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className={`p-4 rounded-2xl border-l-4 bg-card shadow-card animate-fade-in ${
              alert.severity === "high" ? "border-l-danger" : "border-l-warning"
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                alert.severity === "high" ? "bg-danger/10 text-danger" : "bg-warning/10 text-warning"
              }`}>
                <alert.icon size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{alert.title}</p>
                <p className="text-[11px] text-muted-foreground">{alert.titleHi}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    alert.severity === "high"
                      ? "bg-danger/10 text-danger"
                      : "bg-warning/10 text-warning"
                  }`}>
                    {alert.severity === "high" ? "🔴 High Risk" : "🟡 Medium"}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{alert.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          onClick={() => setShowForm(!showForm)}
          variant="outline"
          className="w-full h-12 rounded-xl text-sm font-semibold border-primary text-primary"
        >
          <AlertTriangle className="mr-2" size={18} />
          Report an Issue / समस्या दर्ज करें
        </Button>

        {showForm && (
          <div className="space-y-3 p-4 bg-card rounded-2xl shadow-card border border-border animate-slide-up">
            <h3 className="text-sm font-bold text-foreground">Report Issue / समस्या बताएं</h3>
            <Input
              placeholder="Your Name / आपका नाम"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-xl"
            />
            <Textarea
              placeholder="Describe the issue / समस्या का वर्णन करें"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="rounded-xl min-h-[100px]"
            />
            <Button onClick={handleSubmit} className="w-full h-12 rounded-xl gradient-primary text-primary-foreground">
              <Send className="mr-2" size={16} />
              Submit / जमा करें
            </Button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default HealthAlerts;
