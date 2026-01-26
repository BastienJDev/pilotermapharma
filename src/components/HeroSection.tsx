export function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-white">
      {/* Wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-[70%]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200C240 100 480 300 720 250C960 200 1200 50 1440 150V600H0V200Z"
            className="fill-primary/20"
          />
          <path
            d="M0 300C200 200 400 350 700 300C1000 250 1200 150 1440 250V600H0V300Z"
            className="fill-primary/30"
          />
          <path
            d="M0 400C300 300 500 450 800 380C1100 310 1300 250 1440 350V600H0V400Z"
            className="fill-primary/40"
          />
        </svg>
      </div>
      
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
