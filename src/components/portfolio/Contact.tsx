import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center bg-gradient-violet-deep shadow-glow">
            <div aria-hidden className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl animate-blob" />
            <div aria-hidden className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
            <div aria-hidden className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}/>

            <div className="relative">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold text-primary-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                Available for new projects
              </span>
              <h2 className="mt-6 font-display font-extrabold text-4xl md:text-6xl text-primary-foreground leading-[1.05]">
                Let's build something that<br/>works — and converts.
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
                Have a project in mind? I'd love to hear about it. Quick reply, friendly chat, no pressure.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5 shadow-glow rounded-full">
                  <a href="mailto:hello@kaye.design">Hire Me <ArrowRight className="ml-1" /></a>
                </Button>
                <Button asChild size="xl" variant="outline" className="rounded-full bg-white/10 border-white/40 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                  <a href="mailto:hello@kaye.design"><Mail className="mr-1" /> Send a Message</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};