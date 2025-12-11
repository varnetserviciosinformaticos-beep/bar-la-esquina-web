import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "¡Reserva enviada!",
      description: "Te confirmaremos tu reserva en breve.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="reservas" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="text-primary" size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              ¡Gracias, {formData.name}!
            </h2>
            <p className="text-muted-foreground mb-6">
              Tu reserva para {formData.guests} personas el {formData.date} a las {formData.time} ha sido recibida.
              Te contactaremos pronto para confirmarla.
            </p>
            <Button variant="elegant" onClick={() => setIsSubmitted(false)}>
              Nueva Reserva
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservas" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Reservaciones
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Reserva tu <span className="text-gradient-gold italic">mesa</span>
          </h2>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={20}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            {/* Date & Time & Guests */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm text-muted-foreground mb-2">
                  <Calendar size={14} className="inline mr-1" />
                  Fecha *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm text-muted-foreground mb-2">
                  <Clock size={14} className="inline mr-1" />
                  Hora *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                >
                  <option value="">Seleccionar</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm text-muted-foreground mb-2">
                  <Users size={14} className="inline mr-1" />
                  Personas
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                  <option value="9+">Más de 8</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Comentarios (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                maxLength={500}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                placeholder="Ocasión especial, preferencias de mesa..."
              />
            </div>

            {/* Submit */}
            <Button type="submit" variant="hero" size="xl" className="w-full">
              Confirmar Reserva
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Te confirmaremos por teléfono o WhatsApp en menos de 2 horas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
