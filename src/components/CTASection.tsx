import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-primary p-16 md:p-20 text-center">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            
            {/* Floating shapes */}
            <div className="absolute top-10 right-20 w-20 h-20 border-2 border-white/20 rounded-2xl rotate-12 animate-float" />
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              Prêt à transformer votre gestion ?
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Démarrez votre essai gratuit aujourd'hui
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Rejoignez les 30 pharmaciens qui ont déjà optimisé leur quotidien avec PilotermaPharma.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl group"
              >
                Essayer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Play className="w-5 h-5" />
                Voir la démo
              </Button>
            </div>
            
            <p className="mt-10 text-primary-foreground/60 text-sm animate-fade-up" style={{ animationDelay: '400ms' }}>
              Support dédié • Annulation à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}