import type { Metadata } from "next"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our range of beauty services including brows, hair, and nails at Tutor Beauty Salon and Spa.",
}

interface ServiceItemProps {
  name: string
  description?: string
  price?: string
}

function ServiceItem({ name, description, price }: ServiceItemProps) {
  return (
    <div className="flex justify-between py-4 border-b border-gray-100 last:border-0">
      <div>
        <h4 className="font-medium text-gray-900">{name}</h4>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
      {price && (
        <div className="text-right">
          <span className="font-medium text-tutor-gold">{price}</span>
        </div>
      )}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-tutor-black text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Discover our comprehensive range of beauty services designed to enhance your natural beauty."
            centered
            className="text-white"
          />
        </div>
      </section>

      {/* Brows & Face Services */}
      <section id="brows" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Brows & Face"
            subtitle="Enhance your facial features with our premium brow and face services."
          />

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Brow Services</CardTitle>
              <CardDescription>Perfect your brows with our expert techniques</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceItem
                name="Microblading / Nano Shading"
                description="Semi-permanent technique for natural-looking brows"
              />
              <ServiceItem name="Ombre Brows" description="Powder effect for a soft, defined look" />
              <ServiceItem
                name="Combination Brows"
                description="Combines microblading and shading techniques for a fuller look"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Face & Eye Services</CardTitle>
              <CardDescription>Enhance your features with our specialized treatments</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceItem name="Lip Pigmentation / Lip Shading" description="Enhance your lip color and definition" />
              <ServiceItem name="Classic Eyeliner" description="Semi-permanent eyeliner for defined eyes" />
              <ServiceItem
                name="Korean BB Glow with Blush"
                description="Achieve a natural, glowing complexion with semi-permanent foundation"
              />
              <ServiceItem name="Eyelash Extensions" description="Add length and volume to your natural lashes" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hair Services */}
      <section id="hair" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Hair Services" subtitle="Transform your locks with our professional hair services." />

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Hair Treatments</CardTitle>
              <CardDescription>Restore and enhance your hair's natural beauty</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceItem name="Rebond" description="Straightens hair for a sleek look" />
              <ServiceItem
                name="Hair Treatment / Brazilian"
                description="Smooths and conditions hair for a frizz-free finish"
              />
              <ServiceItem name="Brazilian Botox" description="Deep conditioning treatment for smoother hair" />
              <ServiceItem name="Hot Oil" description="Moisturizes dry and brittle hair" />
              <ServiceItem name="Hair Spa" description="Nourishes and rejuvenates damaged hair" />
              <ServiceItem name="Hair Reborn" description="Complete hair restoration treatment" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hair Styling & Coloring</CardTitle>
              <CardDescription>Create your perfect look with our styling services</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceItem name="Haircut" description="Precision cutting for all hair types" />
              <ServiceItem name="Hair Color" description="Professional color application" />
              <ServiceItem name="Highlights" description="Add dimension with partial or full highlights" />
              <ServiceItem name="Valayage" description="Gradient coloring technique for a natural sun-kissed look" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nail Services */}
      <section id="nails" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Nail Services" subtitle="Complete your look with our professional nail services." />

          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Nail Care</CardTitle>
              <CardDescription>Pamper your hands and feet with our nail services</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceItem name="Manicure" description="Nail shaping, cuticle care, and polish" />
              <ServiceItem name="Pedicure" description="Foot care, nail shaping, and polish" />
              <ServiceItem name="Foot Spa" description="Relaxing treatment to rejuvenate tired feet" />
              <ServiceItem name="Nail Art" description="Custom designs and embellishments" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nail Packages</CardTitle>
              <CardDescription>Enjoy our special package deals</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceItem name="Mani + Pedi + Foot Spa" description="Complete hand and foot care package" />
              <ServiceItem
                name="Mani + Pedi + Foot Spa with Gel"
                description="Complete package with long-lasting gel polish"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tutor-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to book your appointment?</h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Contact us today to schedule your visit or inquire about any of our services.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Button asChild size="lg" className="bg-tutor-gold text-tutor-black hover:bg-yellow-400">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-gray-800">
              <Link href="tel:+639478646339">Call Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
