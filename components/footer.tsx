export function Footer() {
  return (
    <footer className="relative border-t border-red-500/20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.08),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm hover:text-red-400 transition-colors duration-300 text-white/80">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              <span className="text-xl font-bold text-white">
                Brix <span className="text-red-500">Soft</span>
              </span>
            </div>
            <p className="hover:text-red-400 transition-colors duration-300 text-white/80d-400 transition-colors duration-300 text-white/80d:grid-cols-4 gap-3d:grid-cols-4 gap-3 text-sm tracking-normal leading-4">
              ©{new Date().getFullYear()} BrixSoftware. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center md:items-end flex-col gap-3">
            <div className="flex items-center gap-4">
              <a href="#inicio" className="text-sm hover:text-red-400 transition-colors duration-300 text-white/80 font-sans">
                Inicio
              </a>
              <span className="text-red-500 tracking-tight leading-7">•</span>
              <a href="#servicios" className="text-sm hover:text-red-400 transition-colors duration-300 text-white/80 font-sans">
                Servicios
              </a>
              <span className="text-red-500">•</span>
              <a href="#clientes" className="text-sm hover:text-red-400 transition-colors duration-300 text-white/80 font-sans">
                Clientes
              </a>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-red-400 transition-colors duration-300 font-medium text-white/60"
            >
              Desarrollado por Hugo Lucero
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
