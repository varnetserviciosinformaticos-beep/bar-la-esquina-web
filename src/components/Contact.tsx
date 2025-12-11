import { MapPin, Phone, Clock, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsApp = () => {
    const phone = "34600000000"; // Replace with actual number
    const message = encodeURIComponent("Hola, me gustaría hacer una reserva en Bar La Esquina.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-sand">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Encuéntranos
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Ven a <span className="text-gradient-warm italic">visitarnos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground">
                  Calle de la Esquina, 1
                  <br />
                  Pueblo con encanto, España
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Horario</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Martes - Domingo: 09:00 - 23:00</p>
                  <p>Cocina: 13:00 - 16:00 y 20:00 - 22:30</p>
                  <p className="text-primary/70">Lunes cerrado</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Teléfono</h3>
                <a
                  href="tel:+34600000000"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 600 000 000
                </a>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" onClick={handleWhatsApp}>
                <MessageCircle size={18} />
                WhatsApp
              </Button>
              <Button
                variant="elegant"
                onClick={() => window.open("https://facebook.com/barlaesquina", "_blank")}
              >
                <Facebook size={18} />
                Facebook
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden border border-border shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4687529706766!2d-3.6879099!3d40.4189933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289c5b5f8a3f%3A0x4b3e1c5f4f6e4b5!2sSpain!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Bar La Esquina"
              />
            </div>
            {/* Overlay with branding */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
              <p className="font-serif text-foreground">Anka Loren</p>
              <p className="text-sm text-muted-foreground">Tu bar de toda la vida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
