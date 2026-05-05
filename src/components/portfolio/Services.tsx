import { Reveal } from "./Reveal";
import { Palette, LayoutTemplate, Globe, Megaphone, Check } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UX/UI Design",
    desc: "Research-driven interfaces that feel effortless and put users at the center.",
    items: [
      "Wireframes & interactive prototypes",
      "Scalable Figma design systems",
      "Intuitive, user-friendly interfaces",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page Design",
    desc: "Pages engineered for clarity, speed and measurable performance.",
    items: [
      "High-converting landing pages",
      "Sales, marketing & product pages",
      "Startup and SaaS landing pages",
    ],
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Modern, responsive websites that scale gracefully and grow with your brand.",
    items: [
      "Modern, responsive business websites",
      "Personal portfolio websites",
      "Redesigns & UI improvements for usability",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Social",
    desc: "On-brand visuals and funnels that turn scrollers into customers.",
    items: [
      "Carousels, posts & reels visuals",
      "Content calendar planning & scheduling",
      "Brand-consistent marketing materials",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Services</span>
          <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
            What I can help you <span className="text-gradient-violet">achieve</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A multi-disciplinary toolkit — design, web and marketing — built around one goal: results.
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
                  <ul className="mt-5 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-gradient-violet grid place-items-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary-foreground" />
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};