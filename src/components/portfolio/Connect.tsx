import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, MessageCircle, Linkedin, Facebook, Phone } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "www.linkedin.com/in/kaye-bearneza", handle: "Kaye Bearneza" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/chxn0402e", handle: "@chxn0402" },
  { icon: Mail, label: "Email", href: "kayebearnezaa@gmail.com", handle: "kayebearnezaa@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "tel:+639940524366", handle: "+63 994 052 4366" },
];

export const Connect = () => {
  return (
    <section id="connect" className="relative py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-violet-50/40 to-white" />
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            Resume & Socials
          </span>
          <h2 className="mt-5 font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
            Get my resume <span className="text-primary">&</span> let's connect
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Download my full résumé or reach out on your favorite platform — I usually reply within a few hours.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Resume card */}
          <Reveal className="lg:col-span-2">
            <div className="relative h-full rounded-3xl p-8 md:p-10 bg-gradient-violet text-primary-foreground shadow-glow overflow-hidden">
              <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur grid place-items-center mb-6">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl leading-snug">
                  My Résumé
                </h3>
                <p className="mt-3 text-primary-foreground/80 text-sm md:text-base">
                  A quick look at my experience, skills, tools and the brands I've collaborated with.
                </p>
                <div className="mt-auto pt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-soft">
                    <a href="/resume.pdf" download>
                      <Download /> Download PDF
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 border-white/40 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      View Online
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Socials grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {socials.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-primary/40 hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
                >
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-violet group-hover:text-primary-foreground transition-smooth">
                    <s.icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display font-semibold text-foreground">{s.label}</p>
                    <p className="text-sm text-muted-foreground truncate">{s.handle}</p>
                  </div>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-smooth">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
