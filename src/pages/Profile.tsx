import { User, FileText, Settings, LogOut, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const menuItems = [
  { icon: FileText, label: "Saved Reports", labelHi: "सहेजी गई रिपोर्ट", count: 3 },
  { icon: Settings, label: "Settings", labelHi: "सेटिंग्स" },
  { icon: LogOut, label: "Logout", labelHi: "लॉग आउट" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Profile" subtitle="प्रोफ़ाइल" showBack={false} />

      <div className="px-4 py-5 max-w-lg mx-auto space-y-5">
        {/* User info */}
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-card border border-border">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground">
            <User size={28} />
          </div>
          <div>
            <p className="text-base font-bold text-foreground">Rahul Sharma</p>
            <p className="text-xs text-muted-foreground">rahul.sharma@email.com</p>
            <p className="text-xs text-muted-foreground mt-0.5">📍 Jaipur, Rajasthan</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Reports", value: "3" },
            { label: "Saved", value: "5" },
            { label: "Alerts", value: "12" },
          ].map((s) => (
            <div key={s.label} className="p-3 rounded-xl bg-card shadow-card border border-border text-center">
              <p className="text-lg font-bold text-primary">{s.value}</p>
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="space-y-1">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <item.icon size={20} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-[11px] text-muted-foreground">{item.labelHi}</p>
              </div>
              {item.count && (
                <span className="text-xs font-bold text-primary-foreground bg-primary px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
              <ChevronRight size={16} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
