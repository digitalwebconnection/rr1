import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-[#664632] text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">🏡 Ready to Upgrade Your Lifestyle?</h2>
          <p className="text-xl mb-8 text-balance opacity-90">
            Book your site visit today & step into a spacious future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Enquire Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call: +91-XXXXXXXXXX
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-primary-foreground/50 border-primary-foreground/70">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm opacity-90">+91-XXXXXXXXXX</p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/50 border-primary-foreground/70">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm opacity-90">info@apricus2.com</p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/50 border-primary-foreground/70">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm opacity-90">Sales Office, Ahmedabad</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
