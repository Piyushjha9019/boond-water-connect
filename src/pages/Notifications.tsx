import { ShieldAlert, CloudRain, Wrench, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const notifications = [
  { title: "🔴 Dengue outbreak alert in Jaipur", titleHi: "जयपुर में डेंगू प्रकोप चेतावनी", time: "10 min ago", icon: ShieldAlert, urgent: true },
  { title: "🔴 Water contamination warning", titleHi: "जल प्रदूषण चेतावनी", time: "1 hour ago", icon: ShieldAlert, urgent: true },
  { title: "Rainfall forecast updated", titleHi: "वर्षा पूर्वानुमान अपडेट", time: "3 hours ago", icon: CloudRain, urgent: false },
  { title: "Contractor Rajesh confirmed your booking", titleHi: "ठेकेदार राजेश ने बुकिंग की पुष्टि की", time: "5 hours ago", icon: CheckCircle, urgent: false },
  { title: "New cost estimate available", titleHi: "नई लागत अनुमान उपलब्ध", time: "1 day ago", icon: Wrench, urgent: false },
];

const Notifications = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Notifications" subtitle="सूचनाएं" showBack={false} />

      <div className="px-4 py-5 max-w-lg mx-auto space-y-2">
        {notifications.map((n, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border transition-all animate-fade-in ${
              n.urgent
                ? "bg-danger/5 border-danger/20"
                : "bg-card border-border"
            }`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                n.urgent ? "bg-danger/10 text-danger" : "bg-primary/10 text-primary"
              }`}>
                <n.icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground leading-snug">{n.title}</p>
                <p className="text-[11px] text-muted-foreground">{n.titleHi}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{n.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Notifications;
