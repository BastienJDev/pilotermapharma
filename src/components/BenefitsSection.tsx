import { StatCard } from "./StatCard";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Gain de temps considérable sur les analyses mensuelles",
  "Gérer le planning de vos employés pour piloter aux mieux votre pharmacie",
  "Meilleure visibilité sur la rentabilité",
  "Décisions basées sur des données fiables",
  "Interface intuitive, aucune formation requise"
];

export function BenefitsSection() {
  return (
    <section id="avantages" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pourquoi choisir PilotermaPharma ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conçu par des pharmaciens, pour des pharmaciens. Notre solution répond aux vrais défis de la gestion officinale au quotidien.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card rounded-3xl p-10 shadow-elevated">
            <p className="text-center text-muted-foreground mb-8 font-medium">
              Résultats constatés chez nos clients
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <StatCard value="40" suffix="%" label="Temps gagné sur les bilans" />
              <StatCard value="10" suffix="%" label="Diminution du coût salarial" />
              <StatCard value="15" suffix="%" label="Économies réalisées" />
              <StatCard value="4.9" suffix="/5" label="Satisfaction client" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
