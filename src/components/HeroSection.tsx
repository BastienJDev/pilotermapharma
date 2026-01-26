export function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-gradient-to-br from-white via-white to-primary/10">
      {/* Background glow effect */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-20 bg-gradient-to-br from-primary/30 to-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Créé et pensé par un pharmacien pour les pharmaciens
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
            Solution tout-en-un pour <span className="text-gradient font-extrabold">piloter</span> votre pharmacie
          </h1>
        </div>
      </div>
    </section>
  );
}
