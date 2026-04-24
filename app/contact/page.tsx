// app/contact/page.tsx  (SERVER COMPONENT - no "use client")
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Arafa Pest Control | Ajman & UAE",
  description:
    "Contact Arafa Pest Control Services for residential, commercial, AMC, and termite pest control in UAE.",
};

export default function ContactPage() {
  return <ContactClient />;
}