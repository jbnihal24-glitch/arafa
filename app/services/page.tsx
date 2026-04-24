// app/services/page.tsx  (SERVER COMPONENT - no "use client")
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Pest Control Services in UAE | Arafa Pest Control",
  description:
    "Residential, Commercial, AMC & Termite Pest Control Services in Ajman and UAE.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}