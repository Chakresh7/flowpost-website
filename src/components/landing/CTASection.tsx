import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground">
          Start building a smarter content engine today.
        </h2>
        <p className="mt-5 text-muted-foreground">
          No credit card required. Connect your Shopify store in minutes.
        </p>
        <Link
          to="/signup"
          className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200"
        >
          Create Account <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
