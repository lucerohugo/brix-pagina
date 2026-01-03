"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Users, Headphones } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Software de Gestión",
    description:
      "Desarrollo de software personalizado para la administración y gestión comercial de tu empresa. Soluciones adaptadas a tus necesidades específicas.",
  },
  {
    icon: Users,
    title: "Consultoría IT",
    description:
      "Servicios de consultoría IT para la toma de decisiones estratégicas y la mejora de procesos operativos diarios en tu organización.",
  },
  {
    icon: Headphones,
    title: "Soporte Técnico",
    description:
      "Atención directa e integrada para resolver todas tus necesidades, inquietudes e inconvenientes operativos de forma eficiente.",
  },
]

export function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".service-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.08),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm text-red-400 tracking-wider uppercase px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 font-sans">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
            Soluciones que impulsan <span className="text-red-500">tu éxito</span>
          </h2>
          <p className="text-lg text-white/60 text-balance leading-relaxed">
            Ofrecemos soluciones integrales para la gestión y administración de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`service-card opacity-0 translate-y-10 group relative bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="h-7 w-7 text-red-500" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
