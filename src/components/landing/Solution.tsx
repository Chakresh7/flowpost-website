import { motion } from "framer-motion";

const steps = [
  { label: "Shopify Catalog", description: "Your products, synced" },
  { label: "AI Content Engine", description: "Captions, visuals, campaigns" },
  { label: "Auto Publishing", description: "Multi-platform, scheduled" },
  { label: "Performance Analytics", description: "What drives sales" },
];

const Solution = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground">
            From catalog to content to insights. One connected system.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-secondary rounded-xl border border-border p-6 h-full">
                <div className="text-xs font-medium text-muted-foreground mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{step.label}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 text-accent text-lg">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
