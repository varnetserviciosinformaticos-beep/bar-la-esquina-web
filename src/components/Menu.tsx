import { useState } from "react";
import { Coffee, Wine, Beer, UtensilsCrossed } from "lucide-react";

const menuCategories = [
  {
    id: "raciones",
    name: "Raciones",
    icon: UtensilsCrossed,
    items: [
      { name: "Huevos Rotos", description: "Con jamón y patatas", price: "12 €" },
      { name: "Perdiz", description: "A la cazadora", price: "15 €" },
      { name: "Guiso de Ciervo", description: "Receta tradicional", price: "15 €" },
      { name: "Alitas de Pollo", description: "Crujientes con salsa", price: "8 €" },
      { name: "Ensalada", description: "Mixta de temporada", price: "7 €" },
    ],
  },
  {
    id: "bocadillos",
    name: "Bocadillos",
    icon: UtensilsCrossed,
    items: [
      { name: "Bocadillo", description: "Consulta opciones disponibles", price: "5 €" },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: Beer,
    items: [
      { name: "Caña", description: "Cerveza de barril", price: "1,50 €" },
      { name: "Copa de Vino", description: "Tinto, blanco o rosado de la tierra", price: "2 €" },
      { name: "Tinto de Verano", description: "Con gaseosa o limón", price: "2,50 €" },
      { name: "Refrescos", description: "Coca-Cola, Fanta, etc.", price: "2 €" },
    ],
  },
  {
    id: "cafes",
    name: "Cafés",
    icon: Coffee,
    items: [
      { name: "Café Solo", description: "Espresso", price: "1,20 €" },
      { name: "Café con Leche", description: "Normal o cortado", price: "1,50 €" },
      { name: "Tostada", description: "Con tomate y aceite o mantequilla", price: "2 €" },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("raciones");

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Nuestra Carta
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Sabores <span className="text-gradient-warm italic">auténticos</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                <IconComponent size={18} />
                <span className="text-sm uppercase tracking-wide">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {currentCategory?.items.map((item, index) => (
              <div
                key={item.name}
                className="group flex justify-between items-start gap-4 p-4 rounded-lg bg-background hover:shadow-warm transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-lg font-serif text-gradient-warm">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          * Precios con IVA incluido. Pregunta por nuestro menú del día.
        </p>
      </div>
    </section>
  );
};

export default Menu;
