import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import subvencionClm from "@/assets/subvencion-clm.jpg";

const Contact = () => {
  const handleWhatsApp = () => {
    const phone = "34664295673";
    const message = encodeURIComponent("Hola, me gustaría hacer una reserva en Anka Loren.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-sand">
      <div className="container mx-auto px-6">
        {/* Imagen subvención */}
        <div className="mb-12 max-w-3xl mx-auto">
          <img 
            src={subvencionClm} 
            alt="Empresa beneficiaria de subvenciones de la Junta de Comunidades de Castilla-La Mancha - Cofinanciado por la Unión Europea" 
            className="w-full object-contain rounded-lg"
          />
        </div>

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
                  Calle Rosario, 5
                  <br />
                  13593 Solana del Pino, Ciudad Real
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
                  <p>Lunes - Sábado: 08:30 - 15:30 y 21:00 - 00:00</p>
                  <p>Domingos: 08:30 - 15:30</p>
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
                  href="tel:+34664295673"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 664 29 56 73
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
                onClick={() => window.open("https://www.facebook.com/barankaloren", "_blank")}
              >
                <Facebook size={18} />
                Facebook
              </Button>
              <Button
                variant="elegant"
                onClick={() => window.open("https://www.instagram.com/barankaloren/", "_blank")}
              >
                <Instagram size={18} />
                Instagram
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden border border-border shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d-4.0447!3d38.4297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d3f8a9f8a9f8a9%3A0x1234567890abcdef!2sCalle%20Rosario%2C%205%2C%2013593%20Solana%20del%20Pino%2C%20Ciudad%20Real!5e0!3m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Anka Loren"
              />
            </div>
            {/* Overlay with branding */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
              <p className="font-serif text-foreground">Anka Loren</p>
              <p className="text-sm text-muted-foreground">Calle Rosario, 5 · Solana del Pino</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
