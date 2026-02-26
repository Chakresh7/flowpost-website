import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6"
        >
          AI-Powered Content for Commerce
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-foreground text-balance"
        >
          Turn Your Shopify Products Into High‑Performing Social Content.{" "}
          <span className="italic text-muted-foreground">Automatically.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Generate, publish, and learn what works — without hiring a marketing team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/signup"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-6 py-3.5"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Abstract UI Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 max-w-5xl mx-auto"
      >
        <div className="bg-secondary rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Product Card */}
            <div className="flex-1 bg-background rounded-xl border border-border p-5">
              <div className="w-full h-32 bg-accent/50 rounded-lg mb-4" />
              <div className="h-3 bg-accent rounded w-3/4 mb-2" />
              <div className="h-3 bg-accent/60 rounded w-1/2" />
            </div>

            {/* Arrow */}
            <div className="text-accent text-2xl font-light hidden md:block">→</div>
            <div className="text-accent text-2xl font-light md:hidden rotate-90">→</div>

            {/* Content Cards */}
            <div className="flex-1 space-y-3">
              {["Instagram", "TikTok", "Pinterest"].map((platform) => (
                <div key={platform} className="bg-background rounded-xl border border-border p-4 flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/50 rounded-lg shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs font-medium text-foreground">{platform}</div>
                    <div className="h-2 bg-accent/40 rounded w-full mt-1.5" />
                  </div>
                  <div className="text-xs text-muted-foreground">Ready</div>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="text-accent text-2xl font-light hidden md:block">→</div>
            <div className="text-accent text-2xl font-light md:hidden rotate-90">→</div>

            {/* Analytics */}
            <div className="flex-1 bg-background rounded-xl border border-border p-5">
              <div className="text-xs font-medium text-foreground mb-3">Performance</div>
              <div className="flex items-end gap-1.5 h-24">
                {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-accent/60 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
