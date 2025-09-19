import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary" ><a href="#home"><img src="https://static.wixstatic.com/media/17b30c_dbde2f463c7c4f458435f8c914c8ceda~mv2.png/v1/fill/w_980,h_291,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RRealtors_logo%20(2).png" alt="" className="w-40" /></a></div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#why-choose" className="text-sm font-medium hover:text-primary transition-colors">
            Why Choose
          </a>
          <a href="#amenities" className="text-sm font-medium hover:text-primary transition-colors">
            Amenities
          </a>
          <a href="#location" className="text-sm font-medium hover:text-primary transition-colors">
            Location
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
            Gallery
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
          <a href="tel:+917211161521">Call Now</a>  
          </Button>
          <Button size="sm">Book Site Visit</Button>
        </div>
      </div>
    </header>
  )
}
