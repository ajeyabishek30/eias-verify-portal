import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/eias-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="EIAS Logo" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Eastern Institute for Applied Science (Pvt) Ltd is committed to
              providing quality education and professional development in
              Batticaloa, Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a
                href="#home"
                className="block text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#courses"
                className="block text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                Our Courses
              </a>
              <a
                href="#verify"
                className="block text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                Verify Certificate
              </a>
              <a
                href="#contact"
                className="block text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-foreground font-display font-semibold text-lg mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+94754007573"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+94 754 007 573</span>
              </a>
              <a
                href="mailto:info@eias.lk"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>info@eias.lk</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Stephan Lane, Batticaloa, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Eastern Institute for Applied Science (Pvt) Ltd. All
              rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              www.eias.lk
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
