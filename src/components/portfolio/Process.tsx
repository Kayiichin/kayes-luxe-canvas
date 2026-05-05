import { Reveal } from "./Reveal";
import { Search, Microscope, PenTool, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Understand", desc: "Goals, audience, brand and KPIs." },
  { icon: Microscope, title: "Research", desc: "Users, competitors, data, insights." },
  { icon: PenTool, title: "Wireframe", desc: "Information architecture & flows." },
  { icon: Sparkles, title: "Design", desc: "High-fidelity, on-brand, accessible UI." },
  { icon: TrendingUp, title: "Optimize", desc: "Test, measure, iterate, grow." },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-28">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">My Process</span>
          <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
            A simple flow that <span className="text-gradient-violet">delivers results</span>.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="relative text-center">
                  <div className="mx-auto w-[72px] h-[72px] rounded-2xl glass shadow-soft grid place-items-center relative">
                    <div className="absolute inset-1 rounded-xl bg-gradient-violet opacity-10" />
                    <s.icon className="w-7 h-7 text-primary relative" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-violet text-primary-foreground text-xs font-bold grid place-items-center shadow-soft">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};