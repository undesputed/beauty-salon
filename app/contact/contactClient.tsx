"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactClient() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")
    setShowSuccess(false)
    setShowError(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setShowSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError("Failed to send message. Please try again.")
      setShowError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setShowSuccess(false)
    setShowError(false)
  }

  return (
    <>
      <section className="bg-tutor-black text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out for appointments, inquiries, or feedback."
            centered
            className="text-white"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-tutor-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="mt-2 text-gray-600">
                      BOYLES ST., Purok 5, Poblacion
                      <br />
                      Ubay, Bohol
                      <br />
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-tutor-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="mt-2 text-gray-600">
                      <a href="tel:+639478646339" className="hover:text-tutor-gold">
                        0947 864 6339
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-tutor-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="mt-2 text-gray-600">
                      <a href="mailto:info@tutorbeauty.com" className="hover:text-tutor-gold">
                        info@tutorbeauty.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-tutor-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Hours</h4>
                    <p className="mt-2 text-gray-600">Monday - Sunday: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAxJzE1LjAiTiAxMjTCsDAwJzQ1LjAiRQ!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tutor Beauty Salon and Spa Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" name="firstName" value={formData.firstName} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" name="lastName" value={formData.lastName} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" name="subject" value={formData.subject} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" rows={5} name="message" value={formData.message} onChange={handleChange} />
                    </div>

                    <Button type="submit" className="w-full bg-tutor-gold text-tutor-black hover:bg-yellow-400" disabled={isLoading}>
                      Send Message
                    </Button>

                    {showSuccess && (
                      <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                        Message sent successfully! We'll get back to you soon.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Book an Appointment</CardTitle>
                  <CardDescription>Prefer to book directly? Call us or use our online booking system.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button asChild className="w-full bg-tutor-gold text-tutor-black hover:bg-yellow-400">
                    <a href="tel:+639478646339">Call to Book: 0947 864 6339</a>
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Or visit us in person at our salon in Ubay, Bohol.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
