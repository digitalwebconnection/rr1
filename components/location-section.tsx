import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, School, ShoppingBag, Hospital, Building } from "lucide-react"

const locationFeatures = [
  { icon: Clock, title: "10 min", description: "SG Highway & SP Ring Road" },
  { icon: School, title: "Nearby Schools", description: "Top CBSE & IB institutions" },
  { icon: ShoppingBag, title: "Shopping & Dining", description: "Malls, multiplexes & restaurants" },
  { icon: Hospital, title: "Healthcare", description: "Multi-specialty hospitals within 15 min" },
  { icon: Building, title: "IT & Business Hubs", description: "Seamless commute for professionals" },
]

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Location Advantages</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance">
            Situated in Ahmedabad's thriving zone, rrealtor Studio connects you to everything that matters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {locationFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <feature.icon className="h-10 w-10  text-accent mx-auto mb-4" />
                <h3 className="font-bold text-[#664632] mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Strategic Location Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Direct connectivity to major business districts</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Proximity to educational institutions and healthcare</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Easy access to entertainment and shopping centers</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p>Interactive Location Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 ">
          <Button size="lg" className="bg-[#664632]">Get Directions</Button>
        </div>
      </div>
    </section>
  )
}
