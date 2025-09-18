import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, CreditCard } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Floor Plans & Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the perfect home to fit your family's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-primary">Popular</Badge>
            <CardHeader>
              <CardTitle className="text-2xl">2 BHK Apartments</CardTitle>
              <div className="text-3xl font-bold text-primary">From ₹49.9 Lakhs*</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Spacious living and dining area</li>
                <li>• 2 well-ventilated bedrooms</li>
                <li>• Modern kitchen with utility</li>
                <li>• 2 bathrooms with premium fixtures</li>
                <li>• Balcony with garden view</li>
              </ul>
              <Button className="w-full bg-[#664632]">View Floor Plan</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-accent">Premium</Badge>
            <CardHeader>
              <CardTitle className="text-2xl">3 BHK Apartments</CardTitle>
              <div className="text-3xl font-bold text-primary">Price on Request</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Large living and dining space</li>
                <li>• 3 comfortable bedrooms with wardrobes</li>
                <li>• Modular kitchen with breakfast counter</li>
                <li>• 3 bathrooms including master ensuite</li>
                <li>• Multiple balconies</li>
              </ul>
              <Button className="w-full bg-[#664632]">Get Quote</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8 mb-8">
          <div className="text-center mb-6">
            <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Easy Financing Options</h3>
            <p className="text-muted-foreground">Easy EMI & Home Loan Options Available with leading banks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">80%</div>
              <div className="text-sm text-muted-foreground">Loan Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">7.5%*</div>
              <div className="text-sm text-muted-foreground">Interest Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">30 Years</div>
              <div className="text-sm text-muted-foreground">Loan Tenure</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4 bg-[#664632]">
            <Download className="h-4 w-4 mr-2" />
            Download Floor Plans & Price Sheet
          </Button>
          <Button variant="outline" size="lg">
            Calculate EMI
          </Button>
        </div>
      </div>
    </section>
  )
}
