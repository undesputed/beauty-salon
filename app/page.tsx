import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Scissors, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ServiceCard } from "@/components/ui/service-card"

export const metadata: Metadata = {
  title: "Tutor Beauty Salon and Spa | Ubay, Bohol",
  description: "Premium beauty services including hair, nails, and brows at Tutor Beauty Salon and Spa in Ubay, Bohol.",
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-tutor-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-beauty-salon-pattern.png')] opacity-10 bg-center bg-no-repeat bg-cover"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Discover Your</span>
              <span className="block text-tutor-gold">Natural Beauty</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-300">
              At Tutor Beauty Salon and Spa, we believe in enhancing your natural beauty. Our expert team provides
              premium services in a relaxing environment.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-tutor-gold text-tutor-black hover:bg-yellow-400">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-tutor-black border-white bg-white hover:bg-gray-200"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] w-full sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48e26109-05fe-4708-a57d-ab658ac3848d-fCKGUZPKn1nj5rhi42qhHO3G7aQbR9.jpeg"
                alt="Tutor Beauty Salon Interior"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="About Tutor Beauty"
            subtitle="A sanctuary of beauty and relaxation in the heart of Ubay, Bohol."
            centered
          />

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ea7f03b5-6a4a-4131-b4fa-07c41d331949-YpKGbvakdSHpLnhrWpYb4HbjGoDreN.jpeg"
                  alt="Tutor Beauty Salon Interior"
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden sm:block">
                <p className="text-sm italic text-gray-600">
                  "Our mission is to make every client feel beautiful, confident, and refreshed."
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Beauty Journey Starts Here</h3>
              <p className="text-gray-600 mb-6">
                Tutor Beauty Salon and Spa was founded with a simple vision: to create a space where clients can relax,
                rejuvenate, and enhance their natural beauty. Located in Ubay, Bohol, our salon combines skilled
                professionals with premium products to deliver exceptional results.
              </p>
              <p className="text-gray-600 mb-8">
                Our cozy interior is designed to provide a comfortable and luxurious experience. From the moment you
                step in, you'll be greeted by our friendly staff and soothing ambiance that will make your beauty
                journey truly special.
              </p>
              <Button asChild variant="outline" className="self-start group">
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Salon"
            subtitle="Take a peek inside our beautiful space designed for your comfort and relaxation."
            centered
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bb2b73bc-584d-4c93-bd34-adb516aecdfe-oQSag3lHHAeA5RBQk8tu0DgEmkN6NU.jpeg"
                alt="Nail Polish Collection"
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48e26109-05fe-4708-a57d-ab658ac3848d-fCKGUZPKn1nj5rhi42qhHO3G7aQbR9.jpeg"
                alt="Salon Waiting Area"
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/993b89a0-1fef-40c9-b64c-60315f878384-eAYnjrEZSVJtl6H7RMEtNH0Efq7VW2.jpeg"
                alt="Styling Station"
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54d943aa-a4aa-4fb3-93df-d1a8125891fc-GPt8x68u41UMv9ORcVTBqd3kWlyMgd.jpeg"
                alt="Reception Area"
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ea7f03b5-6a4a-4131-b4fa-07c41d331949-YpKGbvakdSHpLnhrWpYb4HbjGoDreN.jpeg"
                alt="Nail Station"
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bb2b73bc-584d-4c93-bd34-adb516aecdfe-oQSag3lHHAeA5RBQk8tu0DgEmkN6NU.jpeg"
                alt="Nail Polish Display"
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Discover our range of premium beauty services tailored to enhance your natural beauty."
            centered
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Brows & Face"
              description="Microblading, Ombre Brows, and facial treatments to enhance your features."
              imageSrc="/eyebrow-microblading.png"
              imageAlt="Brows and Face Services"
              href="/services#brows"
            />
            <ServiceCard
              title="Hair"
              description="Rebonding, treatments, color, and styling services for all hair types."
              imageSrc="/hair-styling-salon.png"
              imageAlt="Hair Services"
              href="/services#hair"
            />
            <ServiceCard
              title="Nails"
              description="Manicures, pedicures, and nail art to complete your look."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bb2b73bc-584d-4c93-bd34-adb516aecdfe-oQSag3lHHAeA5RBQk8tu0DgEmkN6NU.jpeg"
              imageAlt="Nail Services"
              href="/services#nails"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-tutor-gold text-tutor-black hover:bg-yellow-400">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-tutor-black text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Experience the Tutor Beauty difference with our commitment to excellence."
            centered
            className="text-white"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Scissors className="h-8 w-8 text-tutor-gold" />,
                title: "Expert Stylists",
                description: "Our team of professionals is trained in the latest techniques and trends.",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-tutor-gold" />,
                title: "Premium Products",
                description: "We use only high-quality products that are gentle on your skin and hair.",
              },
              {
                icon: <Star className="h-8 w-8 text-tutor-gold" />,
                title: "Relaxing Environment",
                description: "Our salon is designed to provide a peaceful and comfortable experience.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8 shadow-sm">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-tutor-black rounded-2xl px-6 py-16 sm:p-16 lg:flex lg:items-center lg:gap-x-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to experience the Tutor Beauty difference?
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Book your appointment today and let our expert team take care of all your beauty needs.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/3 lg:flex-shrink-0 lg:flex lg:justify-end">
              <Button asChild size="lg" className="w-full lg:w-auto bg-tutor-gold text-tutor-black hover:bg-yellow-400">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
