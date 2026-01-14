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
    content: "PilotermaPharma a transformé ma façon de gérer ma pharmacie. Les tableaux de bord sont clairs et me permettent de prendre des décisions éclairées en quelques minutes. J'ai réduit mes stocks dormants de 40% en 6 mois.",
    rating: 5,
    avatar: "MD"
  },
  {
    name: "Philippe Martin",
    role: "Pharmacien Adjoint",
    pharmacy: "Grande Pharmacie de Paris",
    location: "Paris",
    content: "L'analyse des coûts salariaux est exceptionnelle. On visualise enfin clairement la rentabilité de chaque poste. L'équipe support est également très réactive et à l'écoute.",
    rating: 5,
    avatar: "PM"
  },
  {
    name: "Dr. Sophie Lefèvre",
    role: "Pharmacienne Titulaire",
    pharmacy: "Pharmacie des Halles",
    location: "Bordeaux",
    content: "Après avoir testé plusieurs solutions, PilotermaPharma est de loin la plus intuitive. Mes préparatrices l'ont adoptée en moins d'une semaine. Le gain de temps est considérable.",
    rating: 5,
    avatar: "SL"
  },
  {
    name: "Jean-Pierre Rousseau",
    role: "Pharmacien Titulaire",
    pharmacy: "Pharmacie Saint-Michel",
    location: "Toulouse",
    content: "Les alertes de stock et les prévisions d'achat ont révolutionné notre gestion. Fini les ruptures de stock sur les produits essentiels. Je recommande vivement !",
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
            i < rating ? "fill-accent text-accent" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-8 h-8 text-primary/30" />
        <StarRating rating={testimonial.rating} />
      </div>
      
      <p className="text-foreground/80 leading-relaxed flex-grow mb-6">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
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
    <section id="temoignages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ils nous font{" "}
            <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que les pharmaciens pensent de PilotermaPharma et comment 
            notre solution a transformé leur quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-card rounded-2xl px-8 py-6 shadow-lg border border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">500+</div>
              <div className="text-sm text-muted-foreground">Pharmacies équipées</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">4.9/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">98%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
