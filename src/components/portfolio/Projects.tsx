import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Lumen Finance",
    tag: "Fintech · Web App",
    problem: "Users abandoned the onboarding flow at the KYC step.",
    solution: "Redesigned the flow into 3 progressive steps with inline validation — completion jumped from 41% to 78%.",
    tools: ["Figma", "Maze", "Hotjar"],
    metric: "+90% onboarding completion",
  },
  {
    title: "Bloom Skincare",
    tag: "E-commerce · Landing",
    problem: "Beautiful brand, low conversion on PDPs.",
    solution: "Restructured PDPs around social proof and benefit-led copy with a sticky add-to-cart.",
    tools: ["Figma", "Shopify", "GA4"],
    metric: "+38% revenue per visitor",
  },
  {
    title: "Northwind SaaS",
    tag: "B2B SaaS · Dashboard",
    problem: "New users couldn't find the value in the first session.",
    solution: "Designed a contextual onboarding tour and revamped the empty states.",
    tools: ["Figma", "Mixpanel", "Notion"],
    metric: "+62% activation rate",
  },
  {
    title: "Aurora Wellness",
    tag: "Mobile · Health",
    problem: "Habit-tracking screens overwhelmed first-time users.",
    solution: "Simplified the daily view into a single focused card with gentle motion cues.",
    tools: ["Figma", "ProtoPie", "UserTesting"],
    metric: "+2.4x daily active usage",
  },
];

export const Projects = () => {
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

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
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
                      <span className="text-[10px] font-semibold text-primary">{p.metric}</span>
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

                <p className="mt-4 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Problem · </span>{p.problem}</p>
                <p className="mt-2 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Solution · </span>{p.solution}</p>

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