import { useState } from "react";
import { Wine, Beer, Martini, UtensilsCrossed } from "lucide-react";

const menuCategories = [
  {
    id: "cocteles",
    name: "Cócteles",
    icon: Martini,
    items: [
      { name: "Old Fashioned", description: "Bourbon, azúcar, angostura, twist de naranja", price: "€12" },
      { name: "Negroni", description: "Gin, Campari, vermut rojo", price: "€11" },
      { name: "Espresso Martini", description: "Vodka, Kahlúa, espresso", price: "€13" },
      { name: "La Esquina Signature", description: "Ron añejo, miel, lima, jengibre, espumante", price: "€14" },
      { name: "Whisky Sour", description: "Bourbon, limón, clara de huevo, angostura", price: "€11" },
      { name: "Mojito Premium", description: "Ron blanco, menta fresca, lima, soda", price: "€10" },
    ],
  },
  {
    id: "vinos",
    name: "Vinos",
    icon: Wine,
    items: [
      { name: "Rioja Reserva", description: "Tempranillo, roble francés, 14 meses", price: "€8 / €28" },
      { name: "Ribera del Duero", description: "Tinto fino, intenso y elegante", price: "€9 / €32" },
      { name: "Albariño Rías Baixas", description: "Blanco fresco, notas cítricas", price: "€7 / €25" },
      { name: "Cava Brut Nature", description: "Xarel·lo, Macabeo, Parellada", price: "€6 / €24" },
      { name: "Priorat", description: "Garnacha, Cariñena, mineral", price: "€10 / €38" },
    ],
  },
  {
    id: "cervezas",
    name: "Cervezas",
    icon: Beer,
    items: [
      { name: "IPA Artesanal", description: "Lupulado, cítrico, 6.5%", price: "€5" },
      { name: "Stout Imperial", description: "Chocolate, café, 8%", price: "€6" },
      { name: "Pilsner Checa", description: "Ligera, refrescante, 4.5%", price: "€4" },
      { name: "Belgian Tripel", description: "Frutal, especiada, 9%", price: "€7" },
      { name: "Wheat Beer", description: "Trigo, plátano, clavo, 5%", price: "€5" },
    ],
  },
  {
    id: "tapas",
    name: "Tapas",
    icon: UtensilsCrossed,
    items: [
      { name: "Tabla de Ibéricos", description: "Jamón, lomo, chorizo, queso manchego", price: "€18" },
      { name: "Croquetas de Jamón", description: "6 unidades, bechamel cremosa", price: "€9" },
      { name: "Patatas Bravas", description: "Salsa brava casera, alioli", price: "€7" },
      { name: "Pulpo a la Gallega", description: "Pimentón, aceite de oliva, sal gruesa", price: "€16" },
      { name: "Tortilla Española", description: "Patata, cebolla caramelizada", price: "€8" },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("cocteles");

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Nuestra Carta
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Sabores <span className="text-gradient-gold italic">selectos</span>
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
                    ? "bg-primary text-primary-foreground shadow-gold"
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
          <div className="space-y-6">
            {currentCategory?.items.map((item, index) => (
              <div
                key={item.name}
                className="group flex justify-between items-start gap-4 p-4 rounded-lg hover:bg-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-lg font-serif text-gradient-gold">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          * Precios sujetos a IVA. Consulta alérgenos con nuestro personal.
        </p>
      </div>
    </section>
  );
};

export default Menu;
