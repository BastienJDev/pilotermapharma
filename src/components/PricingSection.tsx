import { Check } from "lucide-react";
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
    price: "29,99",
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
    price: "59,99",
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
    <section id="tarifs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tarifs transparents
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choisissez le plan adapté à{" "}
            <span className="text-gradient">vos besoins</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des formules flexibles sans engagement. Commencez gratuitement 
            et évoluez selon vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-card border border-border shadow-soft hover:shadow-elevated"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
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
                <span className={`text-4xl font-bold ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.price === "Sur devis" ? "" : "€"}{plan.price}
                </span>
                <span className={`text-lg ${
                  plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted 
                        ? "bg-primary-foreground/20" 
                        : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${
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
                variant={plan.highlighted ? "heroOutline" : "hero"}
                size="lg"
                className={`w-full ${
                  plan.highlighted 
                    ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
                    : ""
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          Tous les prix sont HT. Facturation mensuelle ou annuelle (-20%).
        </p>
      </div>
    </section>
  );
};
