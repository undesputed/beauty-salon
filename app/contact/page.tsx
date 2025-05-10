// app/contact/page.tsx

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Tutor Beauty Salon and Spa in Ubay, Bohol for appointments and inquiries.",
};

import ContactClient from './contactClient';

export default function ContactPage() {
  return <ContactClient />;
}