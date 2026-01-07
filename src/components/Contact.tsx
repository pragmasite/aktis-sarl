import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {t.contact.phone}
                  </h3>
                  <a href="tel:+41794217583" className="text-foreground/80 hover:text-accent transition-colors">
                    +41 79 421 75 83
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {t.contact.email}
                  </h3>
                  <a href="mailto:info@aktis.ch" className="text-foreground/80 hover:text-accent transition-colors">
                    info@aktis.ch
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {t.contact.address}
                  </h3>
                  <p className="text-foreground/80">
                    Route de Chardonne 47<br />
                    1071 St-Saphorin (Lavaux)<br />
                    Suisse
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <a href="tel:+41794217583">
                <Phone className="mr-2 h-5 w-5" />
                {t.contact.callNow}
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-soft border border-border h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.7641738747143!2d6.790003!3d46.480458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e35a1e5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sRoute%20de%20Chardonne%2047%2C%201071%20St-Saphorin%20(Lavaux)!5e0!3m2!1sfr!2sch!4v1234567890"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
