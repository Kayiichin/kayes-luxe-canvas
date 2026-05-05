export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-bold text-foreground">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-violet text-primary-foreground text-xs">K</span>
          Kaye<span className="text-primary">.</span>
        </div>
        <p>© {new Date().getFullYear()} Kaye — UX/UI Designer. Design with intention.</p>
        <div className="flex items-center gap-5">
          <a href="#about" className="hover:text-primary transition-smooth">About</a>
          <a href="#projects" className="hover:text-primary transition-smooth">Work</a>
          <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
        </div>
      </div>
    </footer>
  );
};
