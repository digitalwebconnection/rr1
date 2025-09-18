import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Waves, Dumbbell, Gamepad2, Theater, TreePine, Car, Baby } from "lucide-react"

const amenities = [
  { icon: Waves, title: "Swimming Pool & Kids' Pool", description: "Refreshing aquatic facilities for all ages" },
  { icon: Dumbbell, title: "Modern Gym & Yoga Lawn", description: "Complete fitness and wellness facilities" },
  { icon: Gamepad2, title: "Indoor Games & Multipurpose Hall", description: "Entertainment and community spaces" },
  { icon: Theater, title: "Amphitheatre & Clubhouse", description: "Cultural events and social gatherings" },
  { icon: TreePine, title: "Jogging Track & Cycling Path", description: "Outdoor fitness and recreation trails" },
  { icon: Baby, title: "Children's Play Area & Toddler Zone", description: "Safe and fun spaces for kids" },
  {
    icon: TreePine,
    title: "Landscaped Gardens & Senior Sit-outs",
    description: "Peaceful green spaces for relaxation",
  },
  { icon: Car, title: "Ample Parking & 24x7 Security", description: "Convenient parking with round-the-clock safety" },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Amenities That Redefine Lifestyle</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            At rrealtor Studio, every amenity is designed to add joy to your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <amenity.icon className="h-12 w-12 text-[#664632] mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm">{amenity.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center ">
          <Button variant="outline" className="hover:bg-[#664632]"  size="lg">
            View Complete Amenities List
          </Button>
        </div>
      </div>
    </section>
  )
}
