import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When is possession for these luxury apartments in South Bopal?",
    answer:
      "Possession expected by December 2026 with timely construction updates.",
  },
  {
    question: "Are home loans available for premium apartments in Ahmedabad?",
    answer: "Yes, leading banks offer home loan support for buyers.",
  },
  {
    question: "What are the sizes for 4 & 5 BHK units?",
    answer: "4 BHK – 3545+ sq.ft | 5 BHK – 5185+ sq.ft.",
  },
];

export function FAQSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Get answers to common questions about rrealtorStudio
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4  ">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 sm:px-6 py-3"
              >
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
