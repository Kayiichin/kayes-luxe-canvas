import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MousePointerClick, Layers } from "lucide-react";
import { useParallax } from "@/hooks/useReveal";

export const Hero = () => {
  const { x, y, scroll } = useParallax();

  return (
    <section id="top" className="relative pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden">
      {/* Parallax blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-70 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, hsl(271 91% 75% / 0.55), transparent 70%)",
          transform: `translate3d(${x * 25}px, ${scroll * -0.15 + y * 15}px, 0)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-32 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, hsl(258 90% 76% / 0.45), transparent 70%)",
          animationDelay: "4s",
          transform: `translate3d(${x * -30}px, ${scroll * -0.1 + y * 20}px, 0)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(262 83% 58% / 0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 glass text-xs font-semibold text-primary shadow-soft">
              <Sparkles className="w-3.5 h-3.5" />
             UX/UI Designer • Web & Landing Page Designer • Graphic Designer • Digital Marketing
            </span>
            <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Designing experiences that{" "}
              <span className="text-gradient-violet">convert</span>, not just{" "}
              <span className="relative inline-block">
                look good.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 300 14"
                  fill="none"
                >
                  <path
                    d="M2 9 Q 75 2, 150 7 T 298 6"
                    stroke="url(#g)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="hsl(262 83% 58%)" />
                      <stop offset="1" stopColor="hsl(271 91% 75%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Hi, I'm <span className="font-semibold text-foreground">Kaye</span> — a
              UX/UI Designer crafting user-centered, conversion-driven
              digital experiences for brands that want to grow, not just exist.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="violet" size="xl">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="violet-outline" size="xl">
                <a href="#contact">Let's Work Together</a>
              </Button>
            </div>

        

          {/* Floating UI mockup */}
          <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
            <div
              className="absolute top-4 right-6 w-72 rounded-3xl glass shadow-glow p-5 animate-float"
              style={{ transform: `translate3d(${x * -18}px, ${scroll * -0.05 + y * -10}px, 0)` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">Conversion</span>
                <span className="text-xs font-bold text-primary">+100%</span>
              </div>
              <div className="mt-3 h-24 rounded-xl bg-gradient-violet relative overflow-hidden">
                <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full">
                  <path d="M0 60 Q 40 50 60 40 T 120 25 T 200 10" stroke="white" strokeWidth="2.5" fill="none" />
                  <path d="M0 60 Q 40 50 60 40 T 120 25 T 200 10 L 200 80 L 0 80 Z" fill="white" fillOpacity="0.15" />
                </svg>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Mon","Wed","Fri"].map(d => (
                  <div key={d} className="text-[10px] text-center text-muted-foreground">{d}</div>
                ))}
              </div>
            </div>

            <div
              className="absolute top-44 left-0 w-64 rounded-3xl glass shadow-soft p-5 animate-float"
              style={{ animationDelay: "1.5s", transform: `translate3d(${x * 22}px, ${scroll * -0.08 + y * 12}px, 0)` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-violet grid place-items-center text-primary-foreground">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Design system</div>
                  <div className="text-xs text-muted-foreground">100+ components</div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                {["bg-primary","bg-primary-soft","bg-primary-glow","bg-secondary"].map(c => (
                  <div key={c} className={`w-7 h-7 rounded-lg ${c} ring-2 ring-white`} />
                ))}
              </div>
            </div>

            <div
              className="absolute bottom-4 right-2 w-60 rounded-3xl glass shadow-soft p-4 animate-float"
              style={{ animationDelay: "3s", transform: `translate3d(${x * -12}px, ${scroll * -0.04 + y * 8}px, 0)` }}
            >
              <div className="flex items-center gap-2">
                <MousePointerClick className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">User flow optimized</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`h-2 flex-1 rounded-full ${i<=4?'bg-gradient-violet':'bg-muted'}`} />
                ))}
              </div>
              <div className="mt-2 text-[10px] text-muted-foreground">Step 4 of 5 · 92% completion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
