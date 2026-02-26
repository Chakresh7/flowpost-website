import { motion } from "framer-motion";
import { Clock, BarChart3, Puzzle } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const problems = [
  {
    icon: Clock,
    title: "Content fatigue",
    description: "Your team spends hours creating posts that don't move the needle. The content treadmill never stops.",
  },
  {
    icon: BarChart3,
    title: "No performance clarity",
    description: "You're posting blindly with no understanding of what actually drives engagement and conversions.",
  },
  {
    icon: Puzzle,
    title: "Disconnected tools",
    description: "Your catalog, content tools, and analytics live in different places. Nothing talks to each other.",
  },
];

const Problem = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground">
            Most brands struggle to post consistently, don't know what content works, and waste time manually creating campaigns.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 * index, ease }}
              className="group"
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.15 * index, ease }}
                >
                  <problem.icon className="w-5 h-5 text-muted-foreground mb-5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
                </motion.div>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
