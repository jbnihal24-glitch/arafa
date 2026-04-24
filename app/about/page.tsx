// app/about/page.tsx  (SERVER COMPONENT - no "use client")
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | Arafa Pest Control UAE",
  description:
    "Learn about Arafa Pest Control Services — municipality-approved pest management experts serving UAE since 2009.",
};

export default function AboutPage() {
  return <AboutClient />;
}