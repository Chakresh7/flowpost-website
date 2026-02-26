import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          FlowPost
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors duration-300">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors duration-300">How It Works</a>
          <Link to="/login" className="hover:text-foreground transition-colors duration-300">Sign In</Link>
          <Link
            to="/signup"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          >
            Get Started
          </Link>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm">
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <Link to="/login" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
              <Link to="/signup" onClick={() => setMobileOpen(false)} className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium text-center mt-2">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
