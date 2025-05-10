import type { Metadata } from "next"
import { SectionHeading } from "@/components/ui/section-heading"
import { TeamCard } from "@/components/ui/team-card"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the talented professionals behind Tutor Beauty Salon and Spa in Ubay, Bohol.",
}

export default function TeamPage() {
  return (
    <>
      <section className="bg-tutor-black text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented professionals behind Tutor Beauty Salon and Spa."
            centered
            className="text-white"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              imageSrc="/female-hair-stylist-portrait.png"
              imageAlt="Hair Stylist"
              role="Senior Hair Stylist"
              caption="Specializing in color transformations and precision cuts."
            />
            <TeamCard
              imageSrc="/professional-nail-technician.png"
              imageAlt="Nail Technician"
              role="Nail Artist"
              caption="Creating stunning nail designs and perfect manicures."
            />
            <TeamCard
              imageSrc="/brow-artist-portrait.png"
              imageAlt="Brow Artist"
              role="Brow Specialist"
              caption="Expert in microblading and brow shaping techniques."
            />
            <TeamCard
              imageSrc="/professional-esthetician-female.png"
              imageAlt="Esthetician"
              role="Esthetician"
              caption="Providing rejuvenating facial treatments for all skin types."
            />
            <TeamCard
              imageSrc="/placeholder.svg?height=600&width=600&query=professional%20massage%20therapist%20female%20portrait"
              imageAlt="Massage Therapist"
              role="Massage Therapist"
              caption="Skilled in various massage techniques for ultimate relaxation."
            />
            <TeamCard
              imageSrc="/placeholder.svg?height=600&width=600&query=professional%20salon%20receptionist%20female%20portrait"
              imageAlt="Receptionist"
              role="Salon Coordinator"
              caption="Ensuring a smooth and pleasant experience for all clients."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Behind the Glow"
            subtitle="Our team is passionate about beauty and dedicated to providing exceptional service."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              At Tutor Beauty Salon and Spa, our team is the heart of our business. Each member brings unique skills,
              creativity, and passion to their craft, ensuring that every client receives personalized attention and
              exceptional results.
            </p>
            <p>
              Our professionals regularly attend training sessions and workshops to stay updated with the latest
              techniques and trends in the beauty industry. This commitment to continuous learning allows us to offer
              innovative services while maintaining the highest standards of quality and safety.
            </p>
            <p>
              Beyond their technical expertise, our team members are chosen for their friendly demeanor and ability to
              make clients feel comfortable and valued. We believe that a great beauty experience goes beyond the
              service itself—it's about creating a welcoming environment where clients can relax and enjoy their time
              with us.
            </p>
            <p>
              Whether you're visiting for a quick touch-up or a complete makeover, you can trust our dedicated team to
              listen to your needs and deliver results that exceed your expectations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
