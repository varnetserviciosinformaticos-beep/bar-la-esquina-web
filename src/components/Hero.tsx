import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/terraza-vistas.webp";

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
          alt="Bar La Esquina - Terraza con vistas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
          {/* Tagline */}
          <p className="text-cream uppercase tracking-[0.3em] text-sm font-medium opacity-0 animate-fade-up delay-100">
            Bar tradicional con vistas
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream leading-tight opacity-0 animate-fade-up delay-200">
            <span className="text-gradient-warm italic">Anka Loren</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cream/90 max-w-xl mx-auto opacity-0 animate-fade-up delay-300">
            Sabores auténticos, ambiente familiar y las mejores vistas del pueblo.
            Donde cada visita se convierte en un recuerdo.
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
              className="border-cream text-cream hover:bg-cream hover:text-foreground"
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
            className="text-cream/70 hover:text-cream transition-colors"
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
