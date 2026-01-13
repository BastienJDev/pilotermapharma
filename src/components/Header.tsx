import { Button } from "@/components/ui/button";
import { Pill } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-primary">
              <Pill className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PharmaGest</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#fonctionnalites" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Fonctionnalités
            </a>
            <a href="#avantages" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Avantages
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Connexion
            </Button>
            <Button variant="hero" size="lg">
              Demander une démo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
