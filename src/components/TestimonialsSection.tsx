import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  pharmacy: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Marie Dupont",
    role: "Pharmacienne Titulaire",
    pharmacy: "Pharmacie du Centre",
    location: "Lyon",
    content: "PilotermaPharma a transformé ma façon de gérer ma pharmacie. Les tableaux de bord sont clairs et me permettent de prendre des décisions éclairées en quelques minutes.",
    rating: 5,
    avatar: "MD"
  },
  {
    name: "Philippe Martin",
    role: "Pharmacien Adjoint",
    pharmacy: "Grande Pharmacie de Paris",
    location: "Paris",
    content: "L'analyse des coûts salariaux est exceptionnelle. On visualise enfin clairement la rentabilité de chaque poste. L'équipe support est très réactive.",
    rating: 5,
    avatar: "PM"
  },
  {
    name: "Dr. Sophie Lefèvre",
    role: "Pharmacienne Titulaire",
    pharmacy: "Pharmacie des Halles",
    location: "Bordeaux",
    content: "Après avoir testé plusieurs solutions, PilotermaPharma est de loin la plus intuitive. Mes préparatrices l'ont adoptée en moins d'une semaine.",
    rating: 5,
    avatar: "SL"
  },
  {
    name: "Jean-Pierre Rousseau",
    role: "Pharmacien Titulaire",
    pharmacy: "Pharmacie Saint-Michel",
    location: "Toulouse",
    content: "Les alertes de stock et les prévisions d'achat ont révolutionné notre gestion. Fini les ruptures sur les produits essentiels !",
    rating: 5,
    avatar: "JR"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <div 
      className="group relative bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover-lift animate-fade-up"
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Quote className="w-6 h-6 text-primary" />
      </div>
      
      <StarRating rating={testimonial.rating} />
      
      <p className="text-foreground/80 leading-relaxed mt-6 mb-8 text-lg">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4 pt-6 border-t border-border/50">
        <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-glow">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.pharmacy} • {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-up">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Ils nous font{" "}
            <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Découvrez ce que les pharmaciens pensent de PilotermaPharma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-20 animate-fade-up" style={{ animationDelay: '700ms' }}>
          <div className="inline-flex items-center gap-12 bg-card rounded-3xl px-12 py-8 shadow-elevated border border-border/50 mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">30</div>
              <div className="text-sm text-muted-foreground font-medium">Pharmacies équipées</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">4.9/5</div>
              <div className="text-sm text-muted-foreground font-medium">Note moyenne</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}