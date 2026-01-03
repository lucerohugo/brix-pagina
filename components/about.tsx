"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, Target, Award, Lightbulb } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Target,
    title: "Experiencia Comprobada",
    description: "Extensa trayectoria en desarrollo de software",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Profesionalismo en cada etapa del proceso",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Acceso a tecnologías emergentes",
  },
]

const services = [
  "Arquitectura de aplicaciones críticas",
  "Interfaces optimizadas",
  "Soluciones en Tiempo Real",
  "Gestión del conocimiento",
  "Desarrollos Web 2.0",
  "Aplicaciones móviles",
]

export function About() {
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

    const elements = document.querySelectorAll(".about-item")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.05),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="about-item opacity-0 translate-y-10 transition-all duration-700 max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm text-red-400 tracking-wider uppercase px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 font-sans">
              QUIENES SOMOS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance text-white">
            <span className="text-red-500">Transformamos</span> ideas en soluciones
          </h2>
          <p className="text-white/60 text-lg">Experiencia y tecnología al servicio de tu empresa</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          <div className="about-item opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-red-500/20 shadow-xl shadow-red-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent z-10" />
              <Image
                src="/modern-software-development-team-working.jpg"
                alt="Equipo Brixsoft"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="about-item opacity-0 translate-y-10 transition-all duration-700 delay-200 space-y-4 flex flex-col justify-center">
            <p className="text-white/80 leading-relaxed">
              Somos una empresa con amplia trayectoria y presencia en el mercado, dedicada al <span className="text-red-500 font-semibold">desarrollo y consultoría de software</span> y servicios informáticos. Ayudamos a nuestros clientes a acceder y aprovechar tecnologías emergentes, brindando soporte y asesoramiento integral en todas las áreas de Tecnología de la Información.
            </p>
            <p className="text-white/80 leading-relaxed">
              Ofrecemos soluciones tecnológicas orientadas a mejorar la productividad y asegurar la inversión en tecnología. Nos especializamos en el diseño de <span className="text-red-500 font-semibold">arquitecturas de aplicaciones de misión crítica</span>, interfaces de usuario, soluciones en tiempo real, gestión del conocimiento, desarrollos web y aplicaciones móviles.
            </p>
            <p className="text-white/80 leading-relaxed">
              Acompañamos a nuestros clientes en <span className="text-red-500 font-semibold">todo el proceso</span>: desde el relevamiento de requisitos y el análisis, hasta el diseño, desarrollo, implementación y mantenimiento de las soluciones de software.
            </p>
            <div className="border-t border-red-500/20 pt-4 mt-4">
              <h4 className="text-sm font-semibold text-white/70 mb-2">Por qué elegirnos</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Sabemos cómo asesorar y ayudar a nuestros clientes a optimizar la implantación y administración de tecnología de información en sus empresas. Desarrollamos soluciones de software "a medida" de las necesidades de cada cliente y las entregamos llave en mano, garantizando la plena satisfacción en todas las etapas del proceso.
              </p>
              <p className="text-sm text-white/50 leading-relaxed mt-2">
                Tenemos una amplia cartera de clientes, los cuales representan nuestra mejor referencia sobre la seriedad y calidad de nuestro servicio.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`about-item opacity-0 translate-y-10 group relative bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-5`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="about-item opacity-0 translate-y-10 bg-white/95 backdrop-blur-sm border-0 shadow-lg p-8 transition-all duration-700 delay-600">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Especialización</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Proceso integral: requisitos, análisis, diseño, desarrollo y mantenimiento
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
