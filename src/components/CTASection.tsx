import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 md:p-16 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à transformer votre gestion officinale ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Rejoignez les pharmaciens qui ont déjà optimisé leur quotidien avec PharmaGest. Démo gratuite et sans engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-prominent"
              >
                Demander ma démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <p className="mt-6 text-primary-foreground/60 text-sm">
              Configuration en 10 minutes • Support dédié • Annulation à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
