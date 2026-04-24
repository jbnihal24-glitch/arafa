import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Company Name */}
        <div className="text-xl font-bold text-green-700">
          Arafa Pest Control
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/services" className="hover:text-green-600">Services</Link>
          <Link href="/about" className="hover:text-green-600">About</Link>
          <Link href="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </nav>
    </header>
  );
}