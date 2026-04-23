import { useState } from "react";
import { Upload, MapPin, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const CostEstimation = () => {
  const [area, setArea] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Estimate Cost" subtitle="लागत अनुमान" />

      <div className="px-4 py-5 max-w-lg mx-auto space-y-4">
        {/* Upload */}
        <button
          onClick={() => setImageUploaded(true)}
          className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
            imageUploaded ? "border-success bg-success/5" : "border-dashed border-border bg-card"
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Upload size={22} />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-foreground">
              {imageUploaded ? "Image Uploaded ✓" : "Upload Area Image"}
            </p>
            <p className="text-xs text-muted-foreground">तस्वीर अपलोड करें</p>
          </div>
        </button>

        {/* Area input */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Area (sq ft) / क्षेत्रफल
          </label>
          <Input
            type="number"
            placeholder="e.g. 1200"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="h-12 rounded-xl text-base"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-success/5 border border-success/20">
          <MapPin size={18} className="text-success" />
          <div>
            <p className="text-sm font-medium text-foreground">Auto-detected: Solan, Himanchal Pradesh</p>
            <p className="text-xs text-muted-foreground">स्थान: सोलन, हिमाचल प्रदेश</p>
          </div>
        </div>

        <Button
          onClick={() => setShowResults(true)}
          className="w-full h-13 text-base font-semibold gradient-primary text-primary-foreground rounded-xl"
          size="lg"
        >
          <Calculator className="mr-2" size={20} />
          Calculate / गणना करें
        </Button>

        {showResults && (
          <div className="space-y-3 animate-slide-up">
            <h3 className="text-sm font-bold text-foreground pt-2">Estimated Costs / अनुमानित लागत</h3>

            {[
              { name: "Rooftop Rainwater Harvesting", nameHi: "छत पर वर्षा जल संचयन", range: "₹20,000 – ₹40,000", color: "border-l-primary" },
              { name: "Recharge Pit", nameHi: "रिचार्ज गड्ढा", range: "₹40,000 – ₹70,000", color: "border-l-accent" },
              { name: "Storage Tank", nameHi: "भंडारण टैंक", range: "₹15,000 – ₹30,000", color: "border-l-secondary" },
            ].map((item) => (
              <div key={item.name} className={`p-4 rounded-xl bg-card shadow-card border-l-4 ${item.color}`}>
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.nameHi}</p>
                <p className="text-lg font-bold text-primary mt-1">{item.range}</p>
              </div>
            ))}

            <p className="text-xs text-muted-foreground p-3 bg-muted rounded-xl leading-relaxed">
              💡 Costs vary based on terrain, materials, and labor. Contact a local contractor for precise quotes. / लागत इलाके, सामग्री और श्रम के अनुसार बदलती है।
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default CostEstimation;
