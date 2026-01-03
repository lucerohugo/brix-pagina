"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "(0358) 126779",
    href: "tel:+543581267791",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@brixsoft.com",
    href: "mailto:info@brixsoft.com",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Alberdi 1356 - (5800) - Río Cuarto",
    mapsLink: "https://maps.google.com/?q=Alberdi+1356,+5800+Río+Cuarto,+Córdoba,+Argentina",
  },
]

export function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "scale-100")
            entry.target.classList.remove("opacity-0", "scale-95")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".contact-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm text-red-400 tracking-wider uppercase px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 font-sans">
              Contacto
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
            Hablemos de tu <span className="text-red-500">proyecto</span>
          </h2>
          <p className="text-lg text-balance leading-relaxed text-white/60">
            Estamos aquí para ayudarte. Comunícate con nosotros por cualquiera de estos medios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <Card
                key={index}
                className="contact-card opacity-0 scale-95 group text-center bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="h-8 w-8 text-red-500" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contact.title === "Teléfono" ? (
                    <>
                      <p className="font-medium text-gray-700">{contact.value}</p>
                      {contact.href && (
                        <a
                          href={contact.href}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg transition-all duration-300 border border-red-500/30 hover:border-red-500/50"
                        >
                          <Phone className="h-4 w-4" />
                          Llamar
                        </a>
                      )}
                    </>
                  ) : contact.title === "Email" ? (
                    <>
                      <p className="font-medium text-gray-700">{contact.value}</p>
                      {contact.href && (
                        <a
                          href={contact.href}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg transition-all duration-300 border border-red-500/30 hover:border-red-500/50"
                        >
                          <Mail className="h-4 w-4" />
                          Enviar Email
                        </a>
                      )}
                    </>
                  ) : (
                    <p className="font-medium text-gray-700">{contact.value}</p>
                  )}
                  {contact.mapsLink && (
                    <a
                      href={contact.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg transition-all duration-300 border border-red-500/30 hover:border-red-500/50"
                    >
                      <MapPin className="h-4 w-4" />
                      Encontranos
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
