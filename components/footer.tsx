import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, MapPinIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-tutor-black text-white border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-1/3">
          <div className="relative h-20 w-48">
            <Image src="/tutor-logo-transparent.png" alt="Tutor Beauty & Spa" fill className="object-contain" />
          </div>
          <p className="text-sm text-gray-300 max-w-md">
            Premium beauty services in a relaxing environment. Visit us at Tutor Beauty Salon and Spa for all your
            beauty needs.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61576014992132"
              className="text-gray-400 hover:text-tutor-gold"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-tutor-gold"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://maps.app.goo.gl/6HKPD8nVo3S8C5DQ8" className="text-gray-400 hover:text-tutor-gold">
              <span className="sr-only">Google Maps</span>
              <MapPinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 lg:w-2/3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-tutor-gold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-300 hover:text-tutor-gold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-gray-300 hover:text-tutor-gold">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-gray-300 hover:text-tutor-gold">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-300 hover:text-tutor-gold">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-tutor-gold">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-tutor-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">BOYLES ST., Purok 5, Poblacion, Ubay, Bohol</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-tutor-gold mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-300">0947 864 6339</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-tutor-gold mr-2 flex-shrink-0" />
                  <a href="mailto:info@tutorbeauty.com" className="text-sm text-gray-300 hover:text-tutor-gold">
                    info@tutorbeauty.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-tutor-gold">Hours</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-300">
                  <span className="font-medium">Monday - Sunday:</span>
                  <br />
                  9:00 AM – 7:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6 border-t border-gray-800 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-center md:text-left text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Tutor Beauty Salon and Spa. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right text-xs text-gray-400">
          <Link href="/privacy-policy" className="hover:text-tutor-gold">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms-of-service" className="hover:text-tutor-gold">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
