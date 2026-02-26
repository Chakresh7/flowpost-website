import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          FlowPost
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors duration-200">How It Works</a>
          <Link to="/login" className="hover:text-foreground transition-colors duration-200">Sign In</Link>
          <Link
            to="/signup"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Get Started
          </Link>
        </div>
        <Link
          to="/signup"
          className="md:hidden bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
