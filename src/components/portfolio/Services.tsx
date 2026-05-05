import { Reveal } from "./Reveal";
import { Palette, LayoutTemplate, Globe, Megaphone } from "lucide-react";

const services = [
  { icon: Palette, title: "UX/UI Design", desc: "Intuitive, research-driven interfaces that put the user — and their next click — at the center." },
  { icon: LayoutTemplate, title: "Landing Page Design", desc: "High-converting landing pages engineered for clarity, speed, and measurable performance." },
  { icon: Globe, title: "Web Design", desc: "Beautiful, modern websites that scale gracefully across devices and grow with your brand." },
  { icon: Megaphone, title: "Digital Marketing & Social", desc: "On-brand visuals and funnels that turn scrollers into subscribers and clicks into customers." },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Services</span>
          <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
            Everything you need to <span className="text-gradient-violet">launch & grow</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From first sketch to last A/B test — design that's beautiful, usable, and built to convert.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group relative h-full rounded-3xl glass p-7 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-smooth border border-primary/5 hover:border-primary/30 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-violet opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-violet grid place-items-center text-primary-foreground shadow-soft group-hover:scale-110 transition-smooth">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-6 font-display font-bold text-xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};