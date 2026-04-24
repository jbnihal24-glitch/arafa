"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          transition: "box-shadow 0.3s ease, background 0.3s ease",
          background: "#fafaf7",
          boxShadow: scrolled
            ? "0 2px 20px rgba(0,0,0,0.10)"
            : "0 1px 0 rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
            }}
          >
            {/* Bug icon mark */}
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3d6b35 0%, #5a9e4e 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(61,107,53,0.30)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C9.79 3 8 4.79 8 7v1H6a1 1 0 000 2h.1A6 6 0 006 12v2a6 6 0 0012 0v-2a6 6 0 00-.1-2H18a1 1 0 000-2h-2V7c0-2.21-1.79-4-4-4z"
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="10" cy="10" r="1" fill="white" />
                <circle cx="14" cy="10" r="1" fill="white" />
                <path d="M5 8L2 6M19 8l3-2M5 14l-3 2M19 14l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>

            <span
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#1c2b1a",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Arafa
              <span
                style={{
                  display: "block",
                  fontFamily: "'Georgia', serif",
                  fontWeight: 400,
                  fontSize: "0.65rem",
                  color: "#5a9e4e",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Pest Control
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  position: "relative",
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.92rem",
                  color: "#2c3e28",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  padding: "4px 0",
                }}
                className="nav-link"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              style={{
                background: "linear-gradient(135deg, #3d6b35 0%, #5a9e4e 100%)",
                color: "white",
                padding: "0.5rem 1.25rem",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontFamily: "'Georgia', serif",
                textDecoration: "none",
                letterSpacing: "0.03em",
                boxShadow: "0 2px 10px rgba(61,107,53,0.25)",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              className="cta-btn"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem",
              flexDirection: "column",
              gap: "5px",
            }}
            className="hamburger"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#2c3e28",
                  borderRadius: 2,
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "translateY(7px) rotate(45deg)"
                        : i === 2
                        ? "translateY(-7px) rotate(-45deg)"
                        : "scaleX(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? 300 : 0,
            transition: "max-height 0.35s ease",
            background: "#fafaf7",
            borderTop: menuOpen ? "1px solid rgba(0,0,0,0.06)" : "none",
          }}
          className="mobile-menu"
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem 1.5rem 1.25rem",
              gap: "0.1rem",
            }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1rem",
                  color: "#2c3e28",
                  textDecoration: "none",
                  padding: "0.6rem 0",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                  letterSpacing: "0.02em",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "0.75rem",
                background: "linear-gradient(135deg, #3d6b35 0%, #5a9e4e 100%)",
                color: "white",
                padding: "0.65rem 1.25rem",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontFamily: "'Georgia', serif",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #5a9e4e;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #3d6b35; }
        .cta-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { display: block; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none; }
        }
      `}</style>
    </>
  );
}