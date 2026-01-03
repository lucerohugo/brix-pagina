"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Settings, Wrench, GraduationCap, Database, Rocket } from "lucide-react"
import Image from "next/image"

const stages = [
  { icon: FileText, title: "Relevamiento", description: "Análisis de necesidades" },
  { icon: Settings, title: "Customización", description: "Adaptación al negocio" },
  { icon: Wrench, title: "Instalación", description: "Puesta en servidor" },
  { icon: GraduationCap, title: "Capacitación", description: "Entrenamiento del equipo" },
  { icon: Database, title: "Migración", description: "Transferencia de datos" },
  { icon: Rocket, title: "Puesta en marcha", description: "Inicio de operaciones" },
]

export function Consulting() {
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
      { threshold: 0.15 },
    )

    const elements = document.querySelectorAll(".consulting-item")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="consultoria" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.08),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="consulting-item opacity-0 translate-y-10 transition-all duration-700 max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm text-red-400 tracking-wider uppercase px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 inline-block mb-4 font-sans">
            Consultoría IT
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance text-white">
            Soluciones que se adaptan a <span className="text-red-500">tu negocio</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          <div className="consulting-item opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-red-500/20 shadow-xl shadow-red-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent z-10" />
              <Image
                src="/it-consulting-professionals-analyzing-business-dat.jpg"
                alt="Consultoría"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="consulting-item opacity-0 translate-y-10 transition-all duration-700 delay-200 space-y-4 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white">Experiencia y conocimiento</h3>
            <p className="text-white/60 leading-relaxed">
              Soluciones de gestión empresarial que se adaptan a tu funcionamiento con{" "}
              <span className="text-red-500 font-semibold">estándares de calidad</span> profesionales.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2 text-white">
              Nuestra <span className="text-red-500">metodología</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <Card
                  key={index}
                  className={`consulting-item opacity-0 translate-y-10 group relative bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
                  style={{ transitionDelay: `${index * 50 + 300}ms` }}
                >
                  <CardContent className="relative z-10 p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-5 w-5 text-red-500" />
                      </div>
                      <span className="text-3xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{stage.title}</h4>
                    <p className="text-sm text-gray-600">{stage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
