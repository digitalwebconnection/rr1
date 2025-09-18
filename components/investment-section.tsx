import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Shield, Award } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Move to Spacious Living",
    description: "From cramped flats to spacious, well-ventilated homes with modern amenities",
  },
  {
    icon: Shield,
    title: "Safe Gated Community",
    description: "CCTV surveillance & access control for complete peace of mind",
  },
  {
    icon: TrendingUp,
    title: "Strong Investment Potential",
    description: "High rental demand & appreciation potential in growing corridor",
  },
  {
    icon: Award,
    title: "Trusted Builder",
    description: "Proven track record with transparent documentation and timely delivery",
  },
]

export function InvestmentSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Invest in rrealtor Studio?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            More than just a home - it's a smart investment in your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <benefit.icon className="h-8 w-8 text-accent mb-3" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
