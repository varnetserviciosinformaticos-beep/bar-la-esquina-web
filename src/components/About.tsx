import barInterior from "@/assets/bar-interior.jpg";
import cocktailFeatured from "@/assets/cocktail-featured.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Nuestra Historia
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Más que un <span className="text-gradient-gold italic">bar</span>
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
                src={cocktailFeatured}
                alt="Cóctel artesanal"
                className="w-full h-full object-cover rounded-lg shadow-elegant border-4 border-background"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg" />
          </div>

          {/* Text Content */}
          <div className="space-y-6 lg:pl-8">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              Un rincón donde el tiempo se detiene
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Desde 2015, Bar La Esquina ha sido el refugio de quienes buscan
              más que una copa. Nacimos con la pasión de crear experiencias
              únicas, donde cada detalle importa: desde la selección de nuestros
              destilados premium hasta la atmósfera que envuelve cada noche.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestros bartenders son artistas que transforman ingredientes en
              obras maestras líquidas. Con técnicas clásicas y toques
              contemporáneos, cada cóctel es una invitación a descubrir nuevos
              sabores.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-gold">+50</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Cócteles de autor
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-gold">9</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Años de experiencia
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-gold">+200</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Etiquetas de whisky
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-gradient-gold">∞</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Momentos inolvidables
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
