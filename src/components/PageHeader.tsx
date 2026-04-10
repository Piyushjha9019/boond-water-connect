import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

const PageHeader = ({ title, subtitle, showBack = true }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-3 px-4 h-14 max-w-lg mx-auto">
        {showBack && (
          <button onClick={() => navigate(-1)} className="text-foreground p-1 -ml-1">
            <ArrowLeft size={22} />
          </button>
        )}
        <div>
          <h1 className="text-base font-semibold text-foreground leading-tight">{title}</h1>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
