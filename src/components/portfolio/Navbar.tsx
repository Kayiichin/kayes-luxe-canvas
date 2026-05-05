import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Me" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-smooth",
            scrolled ? "glass shadow-soft" : "bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center w-8 h-8 rounded-xl bg-gradient-violet text-primary-foreground shadow-soft">
              K
            </span>
            <span className="text-foreground">Kaye<span className="text-primary">.</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative hover:text-primary transition-smooth after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-gradient-violet after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="violet" size="sm" className="rounded-full">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};