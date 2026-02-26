import { motion } from "framer-motion";
import { Sparkles, Send, TrendingUp, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intelligent Content Generation",
    description: "Create captions, reels, and campaigns from product data. AI that understands commerce context.",
  },
  {
    icon: Send,
    title: "Multi-Platform Publishing",
    description: "Push to Instagram, TikTok, Pinterest, X from one place. Scheduled or instant.",
  },
  {
    icon: TrendingUp,
    title: "Performance Intelligence",
    description: "See which posts actually drive engagement and sales. Data that connects to revenue.",
  },
  {
    icon: ShoppingBag,
    title: "Built for Commerce",
    description: "Designed specifically for Shopify and modern D2C teams. Not another generic social tool.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground">
            Everything you need. Nothing you don't.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-background rounded-xl border border-border p-8 hover:border-accent transition-colors duration-300"
            >
              <feature.icon className="w-5 h-5 text-muted-foreground mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
