import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-gradient-gold">La Esquina</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Coctelería de autor desde 2015
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/barlaesquina"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/barlaesquina"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:hola@barlaesquina.com"
              className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Bar La Esquina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
