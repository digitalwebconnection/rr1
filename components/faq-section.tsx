import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "When is possession for these luxury apartments in South Bopal?",
    answer: " Possession expected by December 2026 with timely construction updates.",
  },
  {
    question: "Are home loans available for premium apartments in Ahmedabad?",
    answer: "Yes, leading banks offer home loan support for buyers.",
  },
  {
    question: "What are the sizes for 4 & 5 BHK units?",
    answer:
      " 4 BHK – 3545+ sq.ft | 5 BHK – 5185+ sq.ft.",
  },
  

]

export function FAQSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Get answers to common questions about rrealtorStudio
          </p>
        </div>

        <div className="max-w-4xl mx-auto ">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
