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
    title: "Suivi des stocks",
    description: "Optimisez vos commandes grâce à des alertes intelligentes et évitez les ruptures de stock."
  },
  {
    icon: Wallet,
    title: "Coûts & Dépenses",
    description: "Maîtrisez vos coûts salariaux, matériel et fournisseurs avec une vision détaillée de chaque poste."
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
    description: "Vos données sont cryptées et hébergées en France, conformément aux normes pharmaceutiques."
  }
];

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-32 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-up">
            Fonctionnalités
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Maîtriser votre{" "}
            <span className="text-gradient">officine</span>
            {" "}en un seul outil
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}