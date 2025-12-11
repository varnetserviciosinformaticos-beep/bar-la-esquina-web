import { Calendar, Music, Sparkles, Clock } from "lucide-react";

const events = [
  {
    title: "Jazz en Vivo",
    day: "Viernes",
    time: "21:00 - 00:00",
    description: "Disfruta de los mejores músicos de jazz de la ciudad en un ambiente íntimo.",
    icon: Music,
    highlight: true,
  },
  {
    title: "Happy Hour",
    day: "Lun - Jue",
    time: "18:00 - 20:00",
    description: "2x1 en cócteles seleccionados y 30% en cervezas artesanales.",
    icon: Clock,
    highlight: false,
  },
  {
    title: "Cata de Whisky",
    day: "Último Sábado",
    time: "19:00",
    description: "Degustación guiada de whiskies premium. Plazas limitadas.",
    icon: Sparkles,
    highlight: false,
  },
  {
    title: "DJ Sessions",
    day: "Sábados",
    time: "23:00 - 03:00",
    description: "Deep house y nu-disco para terminar la semana con estilo.",
    icon: Music,
    highlight: true,
  },
];

const Events = () => {
  return (
    <section id="eventos" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Agenda
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Próximos <span className="text-gradient-gold italic">eventos</span>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={event.title}
                className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                  event.highlight
                    ? "bg-card border-primary/30 shadow-gold"
                    : "bg-card/50 border-border hover:border-primary/20"
                }`}
              >
                {/* Highlight Badge */}
                {event.highlight && (
                  <div className="absolute -top-3 right-4 bg-gradient-gold text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Destacado
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-lg ${event.highlight ? "bg-primary/20" : "bg-secondary"}`}>
                    <IconComponent className="text-primary" size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{event.day}</span>
                      <span className="text-primary">•</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ¿Quieres celebrar un evento privado?{" "}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:underline"
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
