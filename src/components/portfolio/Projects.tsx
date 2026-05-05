import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Category = "Landing Page" | "UI/UX Design" | "Graphics";

const categories: ("All" | Category)[] = ["All", "Landing Page", "UI/UX Design", "Graphics"];

const projects: {
  title: string;
  category: Category;
  tag: string;
  description?: string;
  tools: string[];
  metric?: string;
}[] = [
  {
    title: "wCookin",
    category: "Landing Page",
    tag: "Mobile App · Landing",
    description: "A high-converting landing page for a family-focused recipe and meal-planning app.",
    tools: ["Figma", "Google Stitch"],
  },
  {
    title: "wCookin",
    category: "UI/UX Design",
    tag: "Food Tech · AI · Mobile App",
    description: "A personalized recipe discovery experience with built-in nutrition insights and smart meal planning.",
    tools: ["Figma", "Google Stitch", "Canva", "Unsplash"],
  },
  {
    title: "CashMate",
    category: "UI/UX Design",
    tag: "Accessibility · AI · Mobile App",
    description: "An accessible mobile app using AI image recognition to help visually impaired users identify currency.",
    tools: ["Figma", "Canva"],
  },
  {
    title: "Kwar.ta",
    category: "UI/UX Design",
    tag: "FinTech · Mobile App",
    description: "A streamlined finance tracker and digital wallet for effortless personal expense management.",
    tools: ["Figma", "Canva"],
  },
  {
    title: "Leadership Webinar: Event Countdown",
    category: "Graphics",
    tag: "Event Marketing · Visual Identity",
    description: "Event countdown visuals for a leadership webinar series.",
    tools: ["Canva"],
  },
  {
    title: "UI/UX Webinar",
    category: "Graphics",
    tag: "Event Branding · Promotional Materials",
    description: "Promotional branding materials for a UI/UX design webinar.",
    tools: ["Canva"],
  },
  {
    title: "University Campaign Pubmats",
    category: "Graphics",
    tag: "Campaign Branding · Marketing Materials",
    description: "Campaign publication materials for a university marketing initiative.",
    tools: ["Canva"],
  },
  {
    title: "Callbox Webinar Events",
    category: "Graphics",
    tag: "Campaign Branding · Marketing Materials · Digital Assets",
    description: "Digital event assets and branding for Callbox webinar campaigns.",
    tools: ["Canva"],
  },
];

export const Projects = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <section id="projects" className="relative py-28 bg-gradient-soft overflow-hidden">
      <div aria-hidden className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-gradient-violet opacity-10 blur-3xl rounded-full" />
      <div className="container relative">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Selected work</span>
          <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
            Real problems. <span className="text-gradient-violet">Measurable wins.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-smooth ${
                    isActive
                      ? "bg-gradient-violet text-primary-foreground border-transparent shadow-soft"
                      : "bg-white/60 text-primary border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative h-full rounded-3xl glass p-7 md:p-8 shadow-card hover:shadow-glow hover:-translate-y-1.5 transition-smooth border border-primary/5 hover:border-primary/30">
                <div className="aspect-[16/9] rounded-2xl bg-gradient-violet relative overflow-hidden mb-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                  <div className="absolute inset-5 rounded-xl glass shadow-soft p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary/40" />
                        <span className="w-2 h-2 rounded-full bg-primary/40" />
                        <span className="w-2 h-2 rounded-full bg-primary/40" />
                      </div>
                      {p.metric && <span className="text-[10px] font-semibold text-primary">{p.metric}</span>}
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 rounded-full bg-primary/15 w-3/4" />
                      <div className="h-2 rounded-full bg-primary/10 w-1/2" />
                      <div className="h-8 rounded-lg bg-gradient-violet w-28 mt-3" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-primary">{p.tag}</span>
                    <h3 className="mt-1 font-display font-bold text-2xl text-foreground">{p.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary grid place-items-center text-primary group-hover:bg-gradient-violet group-hover:text-primary-foreground transition-smooth">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {p.description && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.description}</p>}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-primary border border-primary/10">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
