import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary text-primary">
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="mb-3 text-xl font-semibold text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
