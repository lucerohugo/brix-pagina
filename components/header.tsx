"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      //className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-black/20 backdrop-blur-lg${       //me gusta mas quizas
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-black/20 backdrop-blur-lg mx-4 mt-3 rounded-xl ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm shadow-black/10"
          : "bg-black/20 backdrop-blur-lg"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#inicio" className="group flex-shrink-0">
            <span className="text-lg sm:text-xl font-light tracking-tight text-white group-hover:text-red-400 transition-colors duration-500">
              Brix<span className="font-medium text-red-500">Soft</span>
            </span>
          </a>

          <div className="hidden lg:group hidden lg:inline-flex items-center font-light text-white hover:text-red-400 transition-colors duration-500 text-sm gap-6 lg:gap-8 font-sans">
            {["Inicio", "Servicios", "Nosotros", "Productos", "Consultoría", "Clientes", "Contacto"].map((item, i) => (
              <a
                key={item}
                href={`#${item
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}`}
                className="group inline-flex items-center text-white hover:text-red-400 transition-colors duration-500 text-sm font-light leading-7 tracking-normal gap-2"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          <button
            className="lg:hidden p-2 text-white hover:text-red-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 sm:py-8 border-t border-red-500/10 bg-background/50 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col gap-4 sm:gap-6">
              {["Inicio", "Servicios", "Nosotros", "Productos", "Consultoría", "Clientes", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm sm:text-base font-light text-white/80 hover:text-red-400 hover:bg-red-500/10 px-4 sm:px-6 py-2 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
