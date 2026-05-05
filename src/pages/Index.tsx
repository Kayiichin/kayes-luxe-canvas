import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { WhyMe } from "@/components/portfolio/WhyMe";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
