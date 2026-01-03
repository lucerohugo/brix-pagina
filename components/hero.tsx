"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number }[] = []
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(239, 68, 68, 0.15)"
      ctx.strokeStyle = "rgba(239, 68, 68, 0.1)"
      ctx.lineWidth = 0.5

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx.fill()

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 150) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-xs font-light tracking-widest uppercase text-red-400/80">
                Soluciones Empresariales
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter text-balance leading-[1.1] text-white">
              Software y consultoría
              <br />
              <span className="font-normal">para tu empresa</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-white/60 max-w-2xl leading-relaxed">
              Ofrecemos la mejor solución para administración y gestión comercial.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
              >
                Comenzar proyecto
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center px-6 py-3 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                Conocer más
              </a>
            </div>
          </div>

          <div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-red-500/40 to-transparent animate-float" />
          </div>
        </div>
      </div>
    </section>
  )
}
