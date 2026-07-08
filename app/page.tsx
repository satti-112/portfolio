import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/scroll-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Credentials } from "@/components/sections/credentials";
import { GithubStats } from "@/components/sections/github-stats";
import { Focus } from "@/components/sections/focus";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <GithubStats />
        <Focus />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
