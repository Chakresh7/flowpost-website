import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section className="py-32 md:py-44 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-2xl md:text-4xl font-serif font-medium leading-snug text-foreground italic text-balance">
            "FlowPost replaces content chaos with a structured, learning system."
          </p>
          <footer className="mt-8 text-sm text-muted-foreground">
            A commerce content operating system — built for intelligence, simplicity, and long-term reliability.
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Philosophy;
