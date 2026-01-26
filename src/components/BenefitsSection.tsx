import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Gain de temps considérable sur les analyses mensuelles",
  "Gérer le planning de vos employés efficacement",
  "Meilleure visibilité sur la rentabilité",
  "Décisions basées sur des données fiables",
  "Interface intuitive, aucune formation requise"
];

const stats = [
  { value: "40%", label: "Temps gagné sur les bilans" },
  { value: "10%", label: "Diminution du coût salarial" },
  { value: "15%", label: "Économies réalisées" },
  { value: "4.9/5", label: "Satisfaction client" },
];

export function BenefitsSection() {
  return (
    <section id="avantages" className="py-32 bg-background relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-accent/10 to-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left column */}
          <div className="animate-slide-in-left">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              Pourquoi nous choisir
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pourquoi choisir{" "}
              <span className="text-gradient">PilotermaPharma</span> ?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Conçu par des pharmaciens, pour des pharmaciens. Notre solution répond aux vrais défis de la gestion officinale.
            </p>
            
            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <li key={benefit} className="flex items-start gap-4 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="xl" className="group">
              Découvrir la solution
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right column - Stats grid */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 gradient-primary rounded-3xl rotate-3 opacity-10" />
              
              <div className="relative bg-card rounded-3xl p-10 shadow-elevated border border-border/50">
                <p className="text-center text-muted-foreground mb-10 font-semibold text-lg">
                  Résultats constatés chez nos clients
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label} 
                      className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">
                        {stat.value}
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}