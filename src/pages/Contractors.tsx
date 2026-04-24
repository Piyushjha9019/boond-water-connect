import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const contractors = [
  { name: "Rajesh Kumar", location: "Jaipur", rating: 4.5, jobs: 120, price: "₹15,000 – ₹50,000", specialty: "Rooftop Systems" },
  { name: "Sunil Sharma", location: "Jodhpur", rating: 4.2, jobs: 85, price: "₹20,000 – ₹70,000", specialty: "Recharge Pits" },
  { name: "Priya Singh", location: "Udaipur", rating: 4.8, jobs: 200, price: "₹10,000 – ₹40,000", specialty: "Storage Tanks" },
  { name: "Amit Verma", location: "Ajmer", rating: 4.0, jobs: 65, price: "₹25,000 – ₹60,000", specialty: "Complete Solutions" },
  { name: "Deepa Meena", location: "Kota", rating: 4.6, jobs: 150, price: "₹18,000 – ₹55,000", specialty: "Rooftop + Storage" },
];

const Contractors = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Find Contractors" subtitle="ठेकेदार खोजें" />

      <div className="px-4 py-5 max-w-lg mx-auto space-y-3">
        {contractors.map((c, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-card shadow-card border border-border animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-muted-foreground" />
                    <span className="text-[11px] text-muted-foreground">{c.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-warning/10 px-2 py-1 rounded-lg">
                <Star size={14} className="text-warning fill-warning" />
                <span className="text-xs font-bold text-foreground">{c.rating}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
              <span className="px-2 py-1 bg-muted rounded-md">{c.specialty}</span>
              <span>{c.jobs} jobs done</span>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <p className="text-sm font-bold text-primary">{c.price}</p>
              <Button size="sm" className="h-9 rounded-xl gradient-primary text-primary-foreground text-xs">
                Message
              </Button>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Contractors;
