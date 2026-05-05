import { Reveal } from "./Reveal";
import { GraduationCap, Target, Globe2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-28 bg-gradient-soft">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-violet opacity-20 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden glass shadow-glow p-1">
                <div className="w-full h-full rounded-[2.2rem] bg-gradient-violet relative grid place-items-center">
                  <div className="text-[10rem] font-display font-extrabold text-primary-foreground/90 select-none">K</div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={150}>
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">About me</span>
            <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
              Strategy + design — built to <span className="text-gradient-violet">move metrics</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I'm Kaye, a multi-skilled designer working across
              UX/UI, web design, landing pages and digital marketing. I blend a UX research
              mindset with a marketer's eye for conversion — designing clean, modern interfaces
              that feel effortless and measurably outperform for business.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              I've partnered with international clients, including Dubai-based company, to deliver
              high-performing digital experiences end-to-end.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: GraduationCap, label: "Summa Cum Laude", sub: "Academic excellence recognition" },
                { icon: Target, label: "Conversion-first", sub: "Design for results" },
                { icon: Globe2, label: "Global client", sub: "Cross-regional collaboration" },
              ].map((f) => (
                <div key={f.label} className="rounded-2xl glass p-4 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1">
                  <f.icon className="w-6 h-6 text-primary" />
                  <div className="mt-3 font-semibold text-foreground">{f.label}</div>
                  <div className="text-sm text-muted-foreground">{f.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
