"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineItems = [
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "University of Witwatersrand",
      period: "2025 - Present",
      description: "Began First Year Uninversity in computer science",
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Bluewave Media",
      period: "2024 - 2025",
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with design teams to create pixel-perfect user interfaces.",
    },
    {
      type: "work",
      title: "Tutor",
      company: "Youth academy",
      period: "2023 - Present",
      description:
        "I worked with the young kids and introduced them to technologies and helped them get started with the amazing thing that is software engeneering",
    },
    {
      type: "work",
      title: "Freelancer",
      company: "",
      period: "2024",
      description: "Developed websites for small businesses and individuals to help them connect to an unrealised client.",
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const rect = timelineRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      if (sectionTop <= viewportHeight / 2 && sectionTop + sectionHeight >= viewportHeight / 2) {
        const scrollProgress = Math.max(
          0,
          Math.min(1, (viewportHeight / 2 - sectionTop) / (sectionHeight - viewportHeight)),
        )
        const newIndex = Math.floor(scrollProgress * timelineItems.length)
        setCurrentTimelineIndex(Math.min(newIndex, timelineItems.length - 1))
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [timelineItems.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-card/80 backdrop-blur-md border-b border-border/50 px-12 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? "bg-emerald-500/20 text-emerald-600 shadow-lg shadow-emerald-500/20 backdrop-blur-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 backdrop-blur-sm"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto portfolio-scroll">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-between px-12 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-300/15 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-20 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="max-w-2xl relative z-10">
            <span className="flex justify-between flex-col">


              <h1 className="text-6xl font-bold text-foreground mb-6 text-balance">Joshua Gashawbeza</h1>
              
              <h1 className="text-xl font-bold text-foreground mb-6 text-balance">Web Developer</h1>

            </span>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              I craft digital experiences that blend beautiful design with powerful functionality. Passionate about
              creating solutions that make a difference.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Get In Touch
            </Button>
          </div>

          <div className="absolute right-12 top-1/2 -translate-y-1/2">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-emerald-200/30 rounded-full blur-3xl smokey-float"></div>
              <div
                className="absolute inset-4 bg-gradient-to-tl from-emerald-300/20 to-gray-300/30 rounded-full blur-2xl smokey-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute inset-8 bg-gradient-to-r from-gray-400/30 to-emerald-400/20 rounded-full blur-xl smokey-float"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  With over 3 years of experience in web development, I specialize in creating seamless user experiences
                  and robust backend systems. My passion lies in solving complex problems through, and most importantly going through experiences that help me grow as a developer.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, helping my friends and young kids around me learn how to code, and getting better at my ultimate dream job in machine learning.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Neon", "Prisma" , "NextJs", "Tailwind CSS", "Tanstack query"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={timelineRef} id="experience" className="min-h-[200vh] px-12 py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-40 right-1/3 w-80 h-80 bg-emerald-300/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-1/2 -left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-600/8 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "5s" }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto sticky top-20 z-10">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Experience & Education</h2>

            {/* Vertical Timeline Line */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/30 via-emerald-400/50 to-emerald-500/30"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 transition-all duration-700 ${
                      index === currentTimelineIndex
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-40 transform translate-x-4"
                    }`}
                  >
                    {/* Timeline Dot with Date */}
                    <div className="flex flex-col items-center relative z-10">
                      <div
                        className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                          index === currentTimelineIndex
                            ? item.type === "work"
                              ? "bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/50 scale-125"
                              : "bg-gray-600 border-gray-500 shadow-lg shadow-gray-500/50 scale-125"
                            : "bg-gray-300 border-gray-200 dark:bg-gray-600 dark:border-gray-500"
                        }`}
                      ></div>
                      <div
                        className={`mt-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 whitespace-nowrap ${
                          index === currentTimelineIndex
                            ? "bg-emerald-500/20 text-emerald-600 shadow-lg shadow-emerald-500/20"
                            : "bg-gray-100/50 text-gray-500 dark:bg-gray-800/50 dark:text-gray-400"
                        }`}
                      >
                        {item.period}
                      </div>
                    </div>

                    <div className="flex-1 p-6 bg-white/3 dark:bg-gray-900/5 backdrop-blur-2xl border border-white/5 dark:border-gray-700/10 rounded-2xl shadow-xl shadow-emerald-500/3 timeline-card-glass relative overflow-hidden max-w-md">
                      {/* Frosted glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-emerald-400/2 rounded-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/3 via-transparent to-white/5 rounded-2xl"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.type === "work"
                                ? "bg-emerald-500 shadow-lg shadow-emerald-500/50"
                                : "bg-gray-500 shadow-lg shadow-gray-500/50"
                            }`}
                          ></div>
                          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4 text-sm">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-pretty leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-12 flex items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground font-medium mr-4">
                  {currentTimelineIndex + 1} of {timelineItems.length}
                </span>
                {timelineItems.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentTimelineIndex
                        ? "bg-emerald-500 shadow-lg shadow-emerald-500/50 scale-150"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12">Featured Projects</h2>

            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Website Builder",
                  description:
                    "Full-stack platform to help agencies reach out, organize, to create websites for customer via drag and drop components and even allows for you to add custom components.",
                  tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Prisma", "TypeScript", "Nextjs"],
                  image: "/sitecraft-image.png",
                  github: "https://github.com/Joshua-hpOmen/site-craft",
                  live: "https://sitecraftprod.vercel.app/"
                },
                {
                  title: "Webscrapping Automation Tool",
                  description:
                    "The solution to tedius tasks that know one wants to do, this webscrapping tool uses a user friendly ui and drag and drop to allow anyone to automate tasks via webscrapping and the help of Ai",
                  tech: ["React", "Node.js", "PostgreSQL", "Stripe", "ReactFlow", "Tanstackquery", "Prisma", "TypeScript", "Nextjs"],
                  image: "/flowcraft-image.png",
                  github: "https://github.com/Joshua-hpOmen/flow-craft",
                  live: "https://flow--craft.vercel.app/"

                },
                {
                  title: "Chatbot Platform",
                  description:
                    "This platform is for companies who dont have the funds to have employees contantly online to help with customer service. It integratesa an Ai chatbot into anyones application to have seemless customer interaction and service",
                  tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Nextjs", "Tanstackquery", "Prisma", "TypeScript", "Convex"],
                  image: "/agentcraft-image.png",
                  github: "https://github.com/Joshua-hpOmen/agent-craft",
                  live: "https://agent-craft-suite.vercel.app/"

                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-white/3 dark:bg-gray-900/5 backdrop-blur-2xl border border-white/5 dark:border-gray-700/10 rounded-2xl shadow-xl shadow-emerald-500/3 timeline-card-glass relative hover:shadow-emerald-500/8 transition-all duration-500 flex flex-col max-w-2xl mx-auto"
                >
                  {/* Frosted glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-emerald-400/2 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/3 via-transparent to-white/5 rounded-2xl"></div>

                  <div className="relative z-10">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-t-2xl"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-pretty leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, indx) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium backdrop-blur-sm border border-emerald-500/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link
                          href={project.github}
                          className={ cn( buttonVariants({variant: "outline"}),"border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/8 bg-emerald-500/3 backdrop-blur-sm text-xs", )}
                          target="_blank"
                        >
                          <Github className="w-3 h-3 mr-2" />
                          Code
                        </Link>
                        {
                          index !== 2 ? <Link
                            href={project.live}
                            className={ cn( buttonVariants({variant: "outline"}),"border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/8 bg-emerald-500/3 backdrop-blur-sm text-xs",   )}
                            target="_blank"
                          >
                            <ExternalLink className="w-3 h-3 mr-2" />
                            Live Demo
                          </Link> : <Dialog>

                              <DialogTrigger asChild>
                                  <Button
                                    className={ cn( buttonVariants({variant: "outline"}),"border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/8 bg-emerald-500/3 backdrop-blur-sm text-xs",   )}
                                  >

                                    <ExternalLink className="w-3 h-3 mr-2" />
                                    Live Demo

                                  </Button>
                              </DialogTrigger>

                              <DialogContent>

                                <div className="flex gap-10 items-center justify-center">

                                 <div className="flex flex-col items-center gap-3">
                                    <h2 className="text-xl font-bold">Use case link</h2>
                                    <Link
                                      href={'https://anime-watchlist-xi.vercel.app/'}
                                      className={ cn( buttonVariants({variant: "outline"}),"border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/8 bg-emerald-500/3 backdrop-blur-sm text-xs",   )}
                                      target="_blank"
                                    >
                                      <ExternalLink className="w-3 h-3 mr-2" />
                                      Live Demo
                                    </Link> 
                                  </div>
                                  
                                  <div className="flex flex-col items-center gap-3">
                                    <h2 className="text-xl font-bold">Dashboard Link</h2>
                                    <Link
                                      href={project.live}
                                      className={ cn( buttonVariants({variant: "outline"}),"border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/8 bg-emerald-500/3 backdrop-blur-sm text-xs",   )}
                                      target="_blank"
                                    >
                                      <ExternalLink className="w-3 h-3 mr-2" />
                                      Live Demo
                                    </Link> 
                                  </div>

                                </div>

                              </DialogContent>

                          </Dialog>
                        
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center px-12 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-bold text-foreground mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>

                <div className="space-y-4 flex items-center gap-2 justify-between">

                  <div className="flex items-center gap-x-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span className="text-foreground">joeljoshua335@gmail.com</span>
                  </div>
                  
                    <Link
                      href='https://github.com/Joshua-hpOmen'
                      className={ cn(buttonVariants({variant: "outline"}), "border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"  )}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                </div>

              </div>

              <Card className="p-6 bg-card border-border">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="bg-input border-border focus:border-emerald-500" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-input border-border focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <Input placeholder="Subject" className="bg-input border-border focus:border-emerald-500" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-input border-border resize-none focus:border-emerald-500"
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
