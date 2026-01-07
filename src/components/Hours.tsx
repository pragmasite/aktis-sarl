import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Sample schedule - can be updated with actual hours
  const schedule = [
    { hours: "08:00 - 17:00" },
    { hours: "08:00 - 17:00" },
    { hours: "08:00 - 17:00" },
    { hours: "08:00 - 17:00" },
    { hours: "08:00 - 17:00" },
    { hours: "09:00 - 13:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <section id="horaires" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">{t.hours.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.hours.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border border-border bg-muted overflow-hidden shadow-soft"
        >
          <div className="flex items-center gap-3 border-b border-border bg-primary/10 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-semibold text-primary">{t.hours.header}</span>
          </div>
          <div className="divide-y divide-border">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-accent/10" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />}
                    <div>
                      <p className={`text-sm font-medium ${isToday ? "text-accent font-semibold" : "text-foreground"}`}>
                        {t.hours.days[i]}
                      </p>
                      {isToday && (
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full inline-block mt-1">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${isClosed ? "text-muted-foreground" : "text-foreground"}`}>
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
