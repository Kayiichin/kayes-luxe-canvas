import { Reveal } from "./Reveal";
import { Brain, Rocket, Sparkles, Globe } from "lucide-react";

const reasons = [
  { icon: Brain, title: "Design + marketing mindset", desc: "I think like a designer and a growth marketer — every screen has a job to do." },
  { icon: Rocket, title: "Conversion-focused approach", desc: "Pixels are great. Pixels that move metrics are better. I obsess over both." },
  { icon: Sparkles, title: "Clean, modern UI style", desc: "Bright, premium, minimal. Designs that age well and feel effortless." },
  { icon: Globe, title: "International experience", desc: "Worked with clients across 12+ countries — async-friendly and dependable." },
];

export const WhyMe = () => {
  return (
    <section id="why" className="relative py-28 bg-gradient-soft overflow-hidden">
      <div aria-hidden className="absolute -top-32 right-0 w-[500px] h-[500px] bg-gradient-violet opacity-10 blur-3xl rounded-full" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Why work with me</span>
            <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
              A designer who thinks like a <span className="text-gradient-violet">strategist</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              I don't just deliver screens — I deliver outcomes. Every decision is rooted in user research,
              brand strategy and conversion principles.
            </p>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="rounded-3xl glass p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-smooth h-full border border-primary/5 hover:border-primary/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-violet grid place-items-center text-primary-foreground shadow-soft">
                    <r.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};