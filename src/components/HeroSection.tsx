import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

export function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden gradient-hero">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30" style={{ background: 'var(--gradient-glow)' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Créé et pensé par un pharmacien pour les pharmaciens
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
            Solution tout-en-un pour <span className="text-gradient font-extrabold">piloter</span> votre pharmacie
          </h1>
          
        </div>
        
        {/* Dashboard mockup */}
        <div className="relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl overflow-hidden shadow-prominent border border-border/50">
            <img 
              src={dashboardMockup} 
              alt="Tableau de bord PilotermaPharma" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -left-4 md:-left-8 top-1/4 bg-card rounded-xl p-4 shadow-elevated border border-border/50 animate-float hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-light flex items-center justify-center">
                <span className="text-lg">📈</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">+24%</p>
                <p className="text-xs text-muted-foreground">Ce mois</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-4 md:-right-8 top-1/3 bg-card rounded-xl p-4 shadow-elevated border border-border/50 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-lg">💊</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Avertissement: trop de stock</p>
                <p className="text-xs text-muted-foreground">98% disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
