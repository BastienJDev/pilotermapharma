import { Pill } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl gradient-primary">
              <Pill className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">PilotermaPharma</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <a href="#fonctionnalites" className="text-background/70 hover:text-background transition-colors font-medium">
              Fonctionnalités
            </a>
            <a href="#avantages" className="text-background/70 hover:text-background transition-colors font-medium">
              Avantages
            </a>
            <a href="#tarifs" className="text-background/70 hover:text-background transition-colors font-medium">
              Tarifs
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors font-medium">
              Mentions légales
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors font-medium">
              Confidentialité
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © 2026 PilotermaPharma. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}