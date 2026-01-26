import { FeatureCard } from "./FeatureCard";
import { 
  BarChart3, 
  Package, 
  Wallet, 
  Users, 
  TrendingUp, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Bilans & Tableaux de bord",
    description: "Visualisez l'ensemble de vos indicateurs financiers et opérationnels en temps réel avec des graphiques clairs et exploitables."
  },
  {
    icon: Package,
    title: "Gestion des stocks",
    description: "Optimisez vos commandes grâce à des alertes intelligentes."
  },
  {
    icon: Wallet,
    title: "Coûts & Dépenses",
    description: "Maîtrisez vos coûts salariaux, matériel et fournisseurs avec une vision détaillée de chaque poste de dépense."
  },
  {
    icon: TrendingUp,
    title: "Évolutions & Tendances",
    description: "Analysez l'évolution de votre activité mois par mois et identifiez les leviers de croissance."
  },
  {
    icon: Users,
    title: "Gestion du personnel",
    description: "Suivez les plannings et les coûts associés à votre équipe officinale."
  },
  {
    icon: Shield,
    title: "Sécurité des données",
    description: "Vos données sont cryptées et hébergées en France, conformément aux normes de sécurité pharmaceutique."
  }
];

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une suite complète d'outils pour piloter votre pharmacie efficacement et prendre des décisions éclairées.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
