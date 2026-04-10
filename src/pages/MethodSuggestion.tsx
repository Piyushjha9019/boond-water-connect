import { Home, Layers, Droplets, CloudRain, Mountain, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const methods = [
  {
    name: "Rooftop Harvesting",
    nameHi: "छत पर जल संचयन",
    icon: Home,
    recommended: true,
    description: "Best for urban and semi-urban homes with flat or sloped roofs.",
    descHi: "फ्लैट या ढलान वाली छतों वाले शहरी घरों के लिए सबसे अच्छा।",
  },
  {
    name: "Recharge Pit",
    nameHi: "रिचार्ज गड्ढा",
    icon: Layers,
    recommended: false,
    description: "Ideal for recharging groundwater in areas with permeable soil.",
    descHi: "पारगम्य मिट्टी वाले क्षेत्रों में भूजल रिचार्ज के लिए आदर्श।",
  },
  {
    name: "Storage Tank",
    nameHi: "भंडारण टैंक",
    icon: Droplets,
    recommended: false,
    description: "Simple storage solution for direct use during dry seasons.",
    descHi: "शुष्क मौसम में सीधे उपयोग के लिए सरल भंडारण समाधान।",
  },
];

const conditions = [
  { label: "Rainfall Level", labelHi: "वर्षा स्तर", value: "Medium", icon: CloudRain, color: "text-primary" },
  { label: "Terrain Type", labelHi: "भूभाग प्रकार", value: "Flat", icon: Mountain, color: "text-accent" },
];

const MethodSuggestion = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Suggest Method" subtitle="विधि सुझाव" />

      <div className="px-4 py-5 max-w-lg mx-auto space-y-4">
        {/* Conditions */}
        <div className="grid grid-cols-2 gap-3">
          {conditions.map((c) => (
            <div key={c.label} className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
              <c.icon size={28} className={`mx-auto mb-2 ${c.color}`} />
              <p className="text-xs text-muted-foreground">{c.label}</p>
              <p className="text-sm font-bold text-foreground">{c.value}</p>
              <p className="text-[10px] text-muted-foreground">{c.labelHi}</p>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-bold text-foreground">Recommended Methods / अनुशंसित विधियाँ</h3>

        {methods.map((m) => (
          <div
            key={m.name}
            className={`p-4 rounded-2xl border transition-all ${
              m.recommended
                ? "border-primary bg-primary/5 shadow-elevated"
                : "border-border bg-card shadow-card"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                m.recommended ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                <m.icon size={22} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">{m.name}</p>
                  {m.recommended && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-medium">
                      Best Match
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground">{m.nameHi}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{m.description}</p>
              </div>
              <ArrowRight size={16} className="text-muted-foreground mt-1" />
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default MethodSuggestion;
