import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const Philosophy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6]);

  return (
    <section ref={ref} className="py-32 md:py-44 px-6 overflow-hidden">
      <motion.div style={{ scale, opacity }} className="max-w-3xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
        >
          <p className="text-2xl md:text-4xl font-serif font-medium leading-snug text-foreground italic text-balance">
            "FlowPost replaces content chaos with a structured, learning system."
          </p>
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-8 text-sm text-muted-foreground"
          >
            A commerce content operating system — built for intelligence, simplicity, and long-term reliability.
          </motion.footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
};

export default Philosophy;
