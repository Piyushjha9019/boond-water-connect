import { CloudRain, Droplets, Clock, Database } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const DroughtStatus = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Drought Status" subtitle="सूखा स्थिति" />

      <div className="px-4 py-5 max-w-lg mx-auto space-y-4">
        {/* Status card */}
        <div className="p-6 rounded-2xl gradient-primary text-primary-foreground text-center shadow-elevated">
          <Droplets size={40} className="mx-auto mb-3 opacity-80" />
          <p className="text-sm opacity-80">Water Availability / जल उपलब्धता</p>
          <p className="text-3xl font-bold mt-1">Low</p>
          <p className="text-sm opacity-70 mt-1">कम</p>
          <div className="mt-4 w-full bg-primary-foreground/20 rounded-full h-3">
            <div className="h-3 rounded-full bg-primary-foreground/60" style={{ width: "30%" }} />
          </div>
          <div className="flex justify-between text-[10px] opacity-60 mt-1">
            <span>Low / कम</span>
            <span>Medium / मध्यम</span>
            <span>High / अधिक</span>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
            <CloudRain size={24} className="mx-auto mb-2 text-primary" />
            <p className="text-xs text-muted-foreground">Rainfall</p>
            <p className="text-sm font-bold text-foreground">120mm</p>
            <p className="text-[10px] text-muted-foreground">This Month</p>
          </div>
          <div className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
            <Droplets size={24} className="mx-auto mb-2 text-accent" />
            <p className="text-xs text-muted-foreground">Ground Water</p>
            <p className="text-sm font-bold text-foreground">45%</p>
            <p className="text-[10px] text-muted-foreground">Below Normal</p>
          </div>
        </div>

        {/* Meta info */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
            <Clock size={16} className="text-muted-foreground" />
            <div>
              <p className="text-xs font-medium text-foreground">Last Updated / अंतिम अपडेट</p>
              <p className="text-[11px] text-muted-foreground">10 April 2026, 08:30 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
            <Database size={16} className="text-muted-foreground" />
            <div>
              <p className="text-xs font-medium text-foreground">Source / स्रोत</p>
              <p className="text-[11px] text-muted-foreground">India Water Resources Information System (Govt. Data)</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default DroughtStatus;
