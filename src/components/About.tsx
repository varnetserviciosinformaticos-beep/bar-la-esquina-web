import barInterior from "@/assets/interior-clientes.webp";
import decoracion from "@/assets/decoracion-rustica.webp";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-sand">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Nuestra Historia
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Más que un <span className="text-gradient-warm italic">bar</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={barInterior}
                alt="Interior del Bar La Esquina"
                className="w-full h-80 object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 z-20 hidden md:block">
              <img
                src={decoracion}
                alt="Decoración tradicional"
                className="w-full h-full object-cover rounded-lg shadow-elegant border-4 border-background"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg" />
          </div>

          {/* Text Content */}
          <div className="space-y-6 lg:pl-8">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              El corazón del pueblo desde siempre
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Bar La Esquina es mucho más que un lugar donde tomar algo. Es el punto de 
              encuentro de vecinos y visitantes, donde las historias se comparten y las 
              tradiciones se mantienen vivas. Con nuestra terraza panorámica, ofrecemos 
              las mejores vistas del valle mientras disfrutas de la auténtica cocina casera.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestra decoración con piezas antiguas, herramientas tradicionales y cerámica 
              artesanal cuenta la historia de nuestra tierra. Cada rincón tiene su encanto, 
              cada detalle habla de nuestras raíces.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-warm">Terraza</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Con vistas al valle
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-warm">Casero</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Cocina tradicional
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-warm">Familiar</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Ambiente acogedor
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-warm">Eventos</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Celebraciones privadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
