import { Facebook, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-wood text-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif">La Esquina</h3>
            <p className="text-sm text-cream/70 mt-1">
              Bar tradicional con vistas
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+34600000000"
              className="p-2 rounded-full bg-cream/10 text-cream/70 hover:text-cream hover:bg-cream/20 transition-all"
              aria-label="Teléfono"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://facebook.com/barlaesquina"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-cream/10 text-cream/70 hover:text-cream hover:bg-cream/20 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:hola@barlaesquina.com"
              className="p-2 rounded-full bg-cream/10 text-cream/70 hover:text-cream hover:bg-cream/20 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-cream/70 text-center md:text-right">
            © {currentYear} Bar La Esquina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
