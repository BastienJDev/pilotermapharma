import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Essentiel",
    description: "Pour les pharmacies qui débutent leur transformation digitale",
    price: "49,99",
    period: "/mois",
    features: [
      "Tableau de bord principal",
      "Suivi des ventes",
      "Gestion des stocks de base",
      "Rapports mensuels",
      "Support par email",
      "1 utilisateur"
    ],
    buttonText: "Commencer"
  },
  {
    name: "Automatisation",
    description: "La solution complète pour optimiser votre officine",
    price: "69,99",
    period: "/mois",
    features: [
      "Tout de Essentiel +",
      "Analyses avancées & prévisions",
      "Gestion des coûts salariaux",
      "Alertes intelligentes",
      "Rapports personnalisés",
      "Support prioritaire",
      "5 utilisateurs",
      "Export des données"
    ],
    highlighted: true,
    buttonText: "Essai gratuit 14 jours"
  },
  {
    name: "+ Planning",
    description: "Module complémentaire pour la gestion du personnel",
    price: "10",
    period: "/mois",
    features: [
      "Planning des employés",
      "Gestion des congés",
      "Suivi des heures",
      "Alertes de planning",
      "Export planning",
      "Compatible avec tous les plans"
    ],
    buttonText: "Ajouter"
  }
];

export const PricingSection = () => {
  return (
    <section id="tarifs" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-up">
            Tarifs transparents
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Choisissez le plan adapté à{" "}
            <span className="text-gradient">vos besoins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Des formules flexibles sans engagement. Commencez gratuitement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 hover-lift animate-fade-up ${
                plan.highlighted
                  ? "gradient-primary text-primary-foreground shadow-glow scale-105 z-10"
                  : "bg-card border border-border/50 shadow-soft"
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-bold ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  €{plan.price}
                </span>
                <span className={`text-lg ${
                  plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      plan.highlighted 
                        ? "bg-primary-foreground/20" 
                        : "bg-primary/10"
                    }`}>
                      <Check className={`w-4 h-4 ${
                        plan.highlighted ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "secondary" : "hero"}
                size="xl"
                className={`w-full ${
                  plan.highlighted 
                    ? "bg-white text-primary hover:bg-white/90 shadow-lg" 
                    : ""
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 animate-fade-up" style={{ animationDelay: '600ms' }}>
          Tous les prix sont HT. Facturation mensuelle ou annuelle (-20%).
        </p>
      </div>
    </section>
  );
};