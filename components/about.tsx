"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">About</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate developer who crafts accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm an entry-level Software Development Engineer specializing in full-stack development. I
              contribute to the creation and maintenance of applications using Java, Spring Boot, and React.js, ensuring
              our platforms meet modern web standards and best practices to deliver exceptional user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              In the past, I've had the opportunity to develop software across a variety of settings — from building
              comprehensive systems like Virtual Blood Bank platforms to creating Job Recruitment Portals with advanced
              features. Additionally, I also completed an internship at Softtronix Software Services, where I honed my
              skills in API development and database management.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building full-stack applications with modern technologies, focusing on clean architecture, performance
                optimization, and user experience. Always learning and exploring new frameworks and best practices in
                software development.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
