import terrazaComedor from "@/assets/terraza-comedor.webp";
import cafeTerraza from "@/assets/cafe-terraza.webp";
import barInterior from "@/assets/bar-interior.webp";
import terrazaExterior from "@/assets/terraza-exterior.webp";
import decoracionTradicional from "@/assets/decoracion-tradicional.webp";
import interiorClientes from "@/assets/interior-clientes.webp";

const images = [
  { src: terrazaComedor, alt: "Terraza comedor con vistas", caption: "Terraza cubierta" },
  { src: cafeTerraza, alt: "Café con vistas a la montaña", caption: "Desayunos con vistas" },
  { src: barInterior, alt: "Interior del bar", caption: "Barra tradicional" },
  { src: terrazaExterior, alt: "Terraza exterior", caption: "Terraza al aire libre" },
  { src: decoracionTradicional, alt: "Decoración tradicional", caption: "Detalles rústicos" },
  { src: interiorClientes, alt: "Ambiente familiar", caption: "Momentos especiales" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-gradient-sand">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Galería
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Nuestros <span className="text-gradient-warm italic">espacios</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-lg transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream font-serif text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
