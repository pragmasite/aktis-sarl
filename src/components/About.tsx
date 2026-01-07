import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const features = t.about.features;

  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-card rounded-lg p-6 text-center border border-border">
              <div className="font-serif text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-sm text-muted-foreground">{t.about.stat1}</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center border border-border">
              <div className="font-serif text-4xl font-bold text-accent mb-2">5</div>
              <p className="text-sm text-muted-foreground">{t.about.stat2}</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center border border-border lg:col-span-2">
              <div className="font-serif text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">{t.about.stat3}</p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="font-serif text-lg font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
