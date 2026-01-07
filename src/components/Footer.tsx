import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="AKTIS" className="h-8 w-auto invert" />
              <div>
                <h3 className="font-serif text-lg font-bold">AKTIS</h3>
                <p className="text-xs opacity-75">{t.footer.tagline}</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg font-bold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#a-propos" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#horaires" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg font-bold mb-4">{t.contact.label}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+41794217583" className="opacity-75 hover:opacity-100 transition-opacity">
                  +41 79 421 75 83
                </a>
              </li>
              <li>
                <a href="mailto:info@aktis.ch" className="opacity-75 hover:opacity-100 transition-opacity">
                  info@aktis.ch
                </a>
              </li>
              <li className="opacity-75">
                Route de Chardonne 47<br />
                1071 St-Saphorin
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            {new Date().getFullYear()} AKTIS Sàrl. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
