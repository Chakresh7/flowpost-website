import { motion } from "framer-motion";
import { Clock, BarChart3, Puzzle } from "lucide-react";

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <problem.icon className="w-5 h-5 text-muted-foreground mb-5" strokeWidth={1.5} />
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
