import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What legal services do you offer?",
    answer: "We specialize in land law, succession matters, commercial disputes, cybercrime, and family law. Visit our Services page for a comprehensive list.",
  },
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation by calling us at +254792932136, emailing us at wanjirukanyilawa@gmail.com, or by filling out the contact form on our Contact page.",
  },
  {
    question: "Do you offer pro bono services?",
    answer: "Yes, we are committed to making justice accessible. We offer pro bono services and community programs. Please contact us for more details.",
  },
  {
    question: "Where are your offices located?",
    answer: "Our offices are located at Mustard Seed Complex, ACK St. Peters Church Uthiru, Unit G.05, Ground Floor, Nairobi.",
  },
  {
    question: "What are your operating hours?",
    answer: "We are open Monday to Friday, from 9:00 AM to 5:00 PM.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 font-serif">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
