import { Pill } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <Pill className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">PharmaGest</span>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#fonctionnalites" className="text-background/70 hover:text-background transition-colors text-sm">
              Fonctionnalités
            </a>
            <a href="#avantages" className="text-background/70 hover:text-background transition-colors text-sm">
              Avantages
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Mentions légales
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Confidentialité
            </a>
          </nav>
          
          <p className="text-background/50 text-sm">
            © 2026 PharmaGest. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
