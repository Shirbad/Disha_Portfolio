import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-10 md:pt-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />

        <Contact />
      </div>
    </main>
  )
}
