import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Consulting } from "@/components/consulting"
import { Clients } from "@/components/clients"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Products />
      <Consulting />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}
