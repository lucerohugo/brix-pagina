"use client"

import { useEffect, useRef, useState } from "react"

const clientCategories = [
  {
    title: "Medios de Comunicación",
    clients: ["Puntal SRL - LV16 Radio Río Cuarto (Río Cuarto)", "Puntal SRL - FM Ranquel Stereo (Río Cuarto)", "Ranquel Radiodifusión SRL - LV15 Radio Villa Mercedes (Villa Mercedes)"],
  },
  {
    title: "Estaciones de Servicio",
    clients: ["Esso Servicentro Río Cuarto (Río Cuarto)", "Esso Golf S.A. (Río Cuarto)", "YPF Jorge Lizzi (Achiras - Cba)", "Esso El Trébol 1 (Villa Mercedes)", "Esso El Trébol 2 (Villa Mercedes)", "YPF Fraga (Fraga – San Luis)"],
  },
  {
    title: "Automotriz y Lubricantes",
    clients: ["Lubricentro Filippetti (Río Cuarto)", "Lubrimania Lubricentro (San Luis)", "Gomer Neumáticos y Servicios (Villa Mercedes)", "Mizrahi Motos (Villa Mercedes)", "Grosso Automotores (Villa Mercedes)"],
  },
  {
    title: "Cooperativas",
    clients: ["Cooperativa Eléctrica y de Servicios Públicos Chucul (Chucul - Cba)", "Cotreco S.A. (Ingeniería Ambiental Río Cuarto, Villa María, Villa Carlos Paz y Cba)"],
  },
  {
    title: "Distribución y Logística",
    clients: ["Jumala SA (Rio Cuarto)", "Giberal SA - Quilmes (Villa Mercedes)", "Rodolfo Manzano SA (Río Cuarto)", "FyC Gruppo SA (Río Cuarto)", "LyH Distribuciones (Villa Mercedes)", "Frigorífico Chesi (Río Cuarto)", "Pompagua Latinoamericana SA (Villa Mercedes – S. Luis)", "Giberaldo SA (Villa Dolores)", "Distrimerlo (Merlo – San Luis)", "Distribuidora Centro (Río Cuarto)", "Customer SA (Río Cuarto)", "Impersur Distribuidora (Río Cuarto)", "Gramulla SA (Villa Mercedes)", "Distribuidora Nicolletti (Merlo – San Luis)", "Fyc Gruppo Suc. Sierras (Villa Dolores – Merlo)", "Berco Panificación (Rio Cuarto - Berrotaran)", "Moran Copetin (Rio Cuarto)", "Frimer Distribuciones S.A. (San Luis)"],
  },
  {
    title: "Servicios Profesionales",
    clients: ["Estudio Contable Impositivo Rossi & Asociados (Río Cuarto)", "Estudio Económico Financiero Fernández & Asoc (Río Cuarto)", "Estudio Contable Impositivo Dalio & Asoc (Río Cuarto)", "Estudio Contable Impositivo Bergeretti (Villa Mercedes)", "Centro Odontológico Dres Oclive y Mario Cerioni (Río Cuarto)"],
  },
  {
    title: "Servicios Religiosos e Instituciones",
    clients: ["Obispado Villa de la Concepción de Río Cuarto (Río Cuarto)", "Seminario Mayor Jesús Buen Pastor de Río Cuarto (Río Cuarto)", "Contact Center & Recovery (Rosario)"],
  },
  {
    title: "Retail y Comercio",
    clients: ["Vestimentt SA - Lacoste (Río Cuarto)", "Calzados Gaby (Río Cuarto – Villa Mercedes)", "Mixtura (Villa Mercedes)", "Oriola (Río Cuarto)", "FameCrew (Río Cuarto)"],
  },
  {
    title: "Construcción e Inmobiliarias",
    clients: ["CIS SA Empresa Constructora (Rio Cuarto)", "Hugo Minod Empresa Constructora (Río Cuarto)", "Corteggiano & Corteggiano (Río Cuarto)", "Jorge Márquez Construcciones (Río Cuarto)", "Dirección Sur S.A. (Río Cuarto)", "Cuzco Chico SA (Río Cuarto)", "Crecer Mas Desarrolladora (Rio Cuarto)", "Barceloneta SA (Río Cuarto)", "Fideicomiso Altos de Belgrano (Río Cuarto)", "Los Caciques Barrio Privado (Río Cuarto)", "Fideicomiso Sierra Lago (Río Cuarto)", "Soles del Oeste Barrio Privado (Río Cuarto)", "Carlos Pomposiello Administraciones (Villa Mercedes)", "Arcon Construcción y Diseño (Berrotaran)", "Masoero y Carmine SRL (Rio Cuarto)", "Solener SA (Buenos Aires)"],
  },
  {
    title: "Servicios Especializados",
    clients: ["Metalúrgica Tsuji (Río Cuarto)", "LH Vidrios y Aberturas (Rio Cuarto)", "Fotocita Laboratorio Fotográfico (Río Cuarto)", "TI Servicios (Córdoba)"],
  },
  {
    title: "Agropecuario",
    clients: ["El Ají SA (Río Cuarto)", "Garco Agro SA (Río Cuarto)", "Milles Hnos SH (Río Cuarto)", "Pool de Dos Granos SRL (Río Cuarto)", "Agroganadera Berrotaran (Berrotaran)", "Agroservice El Trébol (Villa Mercedes)"],
  },
  {
    title: "Transporte y Logística",
    clients: ["Surpatric SA (Río Cuarto)", "Transportes Panella (Río Cuarto)", "Transportes Murray (Río Cuarto)"],
  },
]

export function Clients() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

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

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="clientes"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#121212]"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm text-red-400 tracking-wider uppercase px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 inline-block mb-4 font-sans">
            Clientes
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-white">
            Empresas que confían en <span className="text-red-500">BrixSoftware</span>
          </h2>
          <p className="text-lg text-white/60">Algunas empresas que utilizan nuestro sistema para su gestión de negocios.</p>
        </div>

        <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100 grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {[
            { number: "+75", label: "Clientes" },
            { number: "12", label: "Sectores" },
            { number: "15+", label: "Años" },
            { number: "100%", label: "Satisfacción" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-red-500 mb-1 font-mono">{stat.number}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-200 space-y-3 max-w-5xl mx-auto">
          {clientCategories.map((category, index) => (
            <div key={index} className="group">
              <button
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                className="w-full text-left p-5 rounded-xl bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-red-500 font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-mono">{category.clients.length}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center transition-transform duration-300 ${
                        activeCategory === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCategory === index ? "max-h-[1000px] mt-4" : "max-h-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-4 border-t border-gray-200">
                    {category.clients.map((client, clientIndex) => (
                      <div
                        key={clientIndex}
                        className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:bg-gray-100"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                          <p className="text-sm text-gray-800">{client}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
