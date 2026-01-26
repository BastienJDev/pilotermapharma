

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient blob */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-accent/25 to-primary/15 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-[15%] w-24 h-24 border-2 border-primary/20 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-[20%] w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[25%] w-20 h-20 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-[10%] w-32 h-32 bg-primary/5 rounded-3xl rotate-45 animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
            Solution tout-en-un pour{" "}
            <span className="relative inline-block">
              <span className="text-gradient">piloter</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="hsl(210, 100%, 50%)" />
                    <stop offset="1" stopColor="hsl(190, 100%, 45%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}votre pharmacie
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Bilans financiers, gestion des stocks, coûts salariaux — tout synthétisé dans des tableaux de bord intuitifs.
          </p>
          
          
          {/* Stats row */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Pharmacies équipées</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Temps gagné</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H0Z" className="fill-muted/50"/>
        </svg>
      </div>
    </section>
  );
}