import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bar.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bar La Esquina - Interior elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
          {/* Tagline */}
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium opacity-0 animate-fade-up delay-100">
            Coctelería de autor
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight opacity-0 animate-fade-up delay-200">
            Bar{" "}
            <span className="text-gradient-gold italic">La Esquina</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-up delay-300">
            Donde cada cóctel cuenta una historia. Ambiente sofisticado, música
            selecta y los mejores destilados de la ciudad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-up delay-400">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#reservas")}
            >
              Hacer Reserva
            </Button>
            <Button
              variant="elegant"
              size="xl"
              onClick={() => scrollToSection("#menu")}
            >
              Ver Carta
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up delay-500">
          <button
            onClick={() => scrollToSection("#nosotros")}
            className="text-muted-foreground hover:text-primary transition-colors animate-shimmer"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
