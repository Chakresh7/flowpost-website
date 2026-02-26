const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-semibold tracking-tight text-foreground">FlowPost</div>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors duration-200">Product</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">Docs</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FlowPost
        </div>
      </div>
    </footer>
  );
};

export default Footer;
