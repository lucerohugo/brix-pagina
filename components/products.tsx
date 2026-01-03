"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"

const features = [
  "Ventas y Compras",
  "Producción",
  "Facturación Electrónica",
  "Stock e Inventario",
  "Clientes y Proveedores",
  "Administración Bancaria",
  "Finanzas y Contabilidad",
  "Recursos Humanos",
]

const industries = [
  "Distribución Mayorista y Minorista",
  "Estaciones de Servicios",
  "Producción y Distribución",
  "Facturación Electrónica",
  "Cooperativas",
  "Estudios Contables",
  "Transporte y Logística",
  "Construcción",
  "Indumentaria",
  "Propiedades",
  "Automotores",
  "Agropecuarias",
  "Administración y desarrollo inmobiliario",
  "Empresas de actividad comercial diversa",
]

export function Products() {
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

    const elements = document.querySelectorAll(".product-item")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="productos" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.08),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <div className="product-item opacity-0 translate-y-10 transition-all duration-700 max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
            <span className="text-sm text-red-400 font-sans">PRODUCTO PREMIUM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">
            <span className="text-red-500">BrixSoft ERP</span>
          </h2>
          <p className="text-lg text-white/60">Sistema integral de gestión empresarial</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          <div className="product-item opacity-0 translate-y-10 transition-all duration-700 delay-100 space-y-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-red-500">SISTEMA PREMIUM</span>
            </div>

            <h3 className="text-3xl font-bold text-white">Solución integral con base de datos única</h3>

            <p className="text-white/60 leading-relaxed">
              ERP completo que abarca la gestión total de tu organización con módulos integrados para todos los procesos
              empresariales.
            </p>

            {/*
            <div className="flex gap-3 pt-2">
              <Button className="bg-red-600 text-white hover:bg-red-700">Solicitar Demo</Button>
              <Button variant="outline" className="border-red-500/30 text-white hover:bg-red-500/10 bg-transparent">
                Más Info
              </Button>
            </div>
            */}
          </div>

          <div className="product-item opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-red-500/20 shadow-xl shadow-red-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent z-10" />
              <Image
                src="/images/logo-genexuscom-share-link-image.jpg"
                alt="ERP Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="product-item opacity-0 translate-y-10 bg-white/95 backdrop-blur-sm border-0 shadow-lg overflow-hidden transition-all duration-700 delay-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Módulos Principales</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all duration-300 group"
                  >
                    <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="product-item opacity-0 translate-y-10 bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-700 delay-400">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Sectores que Atendemos</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-medium text-gray-800">{industry}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
