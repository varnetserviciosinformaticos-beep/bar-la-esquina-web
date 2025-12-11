import huevosRotos from "@/assets/platos/huevos-rotos.jpg";
import guisoCiervo from "@/assets/platos/guiso-ciervo.jpg";
import alitasMiel from "@/assets/platos/alitas-miel.jpg";
import croquetas from "@/assets/platos/croquetas.jpg";
import solomilloCerdo from "@/assets/platos/solomillo-cerdo.jpg";
import patatasBravas from "@/assets/platos/patatas-bravas.jpg";
import perdizCazadora from "@/assets/platos/perdiz-cazadora.jpg";
import bocadilloPerdigon from "@/assets/platos/bocadillo-perdigon.jpg";

const dishes = [
  { src: huevosRotos, name: "Huevos Rotos con Jamón Ibérico", category: "Especialidad" },
  { src: guisoCiervo, name: "Guiso de Carne de Ciervo", category: "Caza" },
  { src: alitasMiel, name: "Alitas de Pollo con Miel", category: "Tapa" },
  { src: croquetas, name: "Croquetas Caseras", category: "Tapa" },
  { src: solomilloCerdo, name: "Solomillo de Cerdo al Horno", category: "Plato" },
  { src: patatasBravas, name: "Patatas Bravas", category: "Tapa" },
  { src: perdizCazadora, name: "Perdiz a la Cazadora", category: "Caza" },
  { src: bocadilloPerdigon, name: "Bocadillo Perdigón", category: "Bocadillo" },
];

const FeaturedDishes = () => {
  return (
    <section id="platos" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Nuestros Platos
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Especialidades de la <span className="text-gradient-warm italic">casa</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Cocina tradicional manchega con productos de la tierra. Caza, guisos caseros y tapas de siempre.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-elegant bg-background"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.src}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 left-3">
                <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {dish.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm">
                <h3 className="font-serif text-foreground text-center">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
