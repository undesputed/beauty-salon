import type { Metadata } from "next"
import { SectionHeading } from "@/components/ui/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Tutor Beauty Salon and Spa services, appointments, and policies.",
}

// Sample FAQ data
const faqItems = [
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, we recommend booking appointments in advance to ensure availability, especially for services like hair treatments and microblading. However, we do accept walk-ins based on availability. You can book by calling us at 0947 864 6339 or visiting our salon.",
  },
  {
    question: "How early should I arrive for my appointment?",
    answer:
      "We recommend arriving 10-15 minutes before your scheduled appointment time. This allows you to check in, relax, and discuss your service with your stylist or technician before beginning.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We appreciate at least 24 hours' notice for cancellations. This allows us to offer the time slot to other clients. Repeated late cancellations or no-shows may require a deposit for future bookings.",
  },
  {
    question: "Do you offer gift certificates?",
    answer:
      "Yes, we offer gift certificates for all our services. They make perfect gifts for birthdays, anniversaries, or any special occasion. You can purchase them in-person at our salon.",
  },
  {
    question: "How long does a microblading session take?",
    answer:
      "A typical microblading session takes about 2-3 hours. This includes the consultation, numbing time, the actual procedure, and aftercare instructions. A touch-up session, usually scheduled 4-6 weeks after the initial procedure, takes approximately 1-2 hours.",
  },
  {
    question: "How long do hair treatments like rebonding last?",
    answer:
      "The longevity of hair treatments depends on your hair type, maintenance routine, and the specific treatment. Generally, rebonding can last 6-12 months with proper care. Our stylists will provide specific aftercare instructions to maximize the lifespan of your treatment.",
  },
  {
    question: "Do you use quality products for your services?",
    answer:
      "We use premium, professional-grade products for all our services. Our team carefully selects products that deliver excellent results while being gentle on your hair, skin, and nails.",
  },
  {
    question: "Can I bring my children to my appointment?",
    answer:
      "While we love children, we recommend arranging childcare during your appointment if possible. This allows you to fully relax and enjoy your service, and helps maintain a peaceful environment for all clients.",
  },
  {
    question: "Do you offer any loyalty programs or discounts?",
    answer:
      "Yes, we have seasonal promotions and package deals for our regular clients. Follow us on social media or inquire at the salon for current offers and loyalty benefits.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, major credit cards, and mobile payment methods like GCash. Payment is expected at the time of service.",
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="bg-tutor-black text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services, appointments, and policies."
            centered
            className="text-white"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Don't see your question here? Feel free to contact us directly.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+639478646339" className="text-tutor-gold hover:text-yellow-600 font-medium">
                Call: 0947 864 6339
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a href="mailto:info@tutorbeauty.com" className="text-tutor-gold hover:text-yellow-600 font-medium">
                Email: info@tutorbeauty.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
