import { motion } from "framer-motion";
import { Zap, BarChart3, Shield, Lightbulb, TrendingUp, Wrench, AlertCircle, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const iconMap = [
  Zap,
  Shield,
  Lightbulb,
  BarChart3,
  AlertCircle,
  Wrench,
  TrendingUp,
  BookOpen,
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.services.title}</h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-6 hover:shadow-soft transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
