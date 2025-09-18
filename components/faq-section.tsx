import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is the project RERA approved?",
    answer: "Yes, rrealtor Studio is fully RERA-approved for complete peace of mind and transparency.",
  },
  {
    question: "What is the starting price?",
    answer: "2 BHK apartments start at ₹49.9 Lakhs* (Terms & Conditions apply). 3 BHK pricing is available on request.",
  },
  {
    question: "Are there easy EMI options?",
    answer:
      "Yes, we have tie-ups with leading banks to ensure hassle-free financing with competitive interest rates and flexible tenure options.",
  },
  {
    question: "What is the possession timeline?",
    answer:
      "The project is under construction with expected possession by December 2025. Regular updates are provided to all buyers.",
  },
  {
    question: "What amenities are included?",
    answer:
      "rrealtor Studio offers 25+ premium amenities including swimming pool, gym, clubhouse, landscaped gardens, children's play area, and 24x7 security.",
  },
  {
    question: "Is parking included?",
    answer:
      "Yes, each apartment comes with dedicated parking space. Additional parking slots are available for purchase.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Get answers to common questions about rrealtor Studio
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
