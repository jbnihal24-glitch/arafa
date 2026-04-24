"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    id: "residential",
    label: "Residential",
    title: "Residential Pest Control",
    description:
      "Safe and effective pest control treatments designed for apartments, villas, and residential buildings. Our methods are family-safe and comply with municipality regulations.",
    items: [
      "General Pest Control",
      "Cockroach & Ant Control",
      "Bed Bug Treatment",
      "Mosquito & Fly Control",
      "Rodent Control",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    number: "01",
  },
  {
    id: "commercial",
    label: "Commercial",
    title: "Commercial & Industrial",
    description:
      "Specialized pest management solutions for offices, warehouses, restaurants, retail shops, and industrial facilities. We follow strict documentation and inspection protocols.",
    items: [
      "Office & Corporate Buildings",
      "Retail Shops & Malls",
      "Restaurants & Food Facilities",
      "Warehouses & Factories",
      "Municipality Compliance Reports",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <rect x="2" y="7" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12v3M8 12v3M16 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "02",
  },
  {
    id: "termite",
    label: "Termite",
    title: "Termite Control",
    description:
      "Professional post-construction termite treatment using drilling and chemical injection methods. Suitable for villas, buildings, and commercial properties.",
    items: [
      "Door Frames & Wooden Structures",
      "Bathroom & Kitchen Areas",
      "Warranty-Based Treatment Options",
      "Detailed Service Reports",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path d="M12 2L8 6H4l2 4-2 4h4l4 4 4-4h4l-2-4 2-4h-4l-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    number: "03",
    badge: "10yr Warranty",
  },
  {
    id: "amc",
    label: "AMC",
    title: "Annual Maintenance Contracts",
    description:
      "Long-term pest control contracts tailored for property management companies, real estate developers, and facilities management teams.",
    items: [
      "Monthly / Quarterly / Customized Visits",
      "Rat Bait Station (RBS) Monitoring",
      "Scheduled Inspections & Reports",
      "Priority Service Support",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 13h3M8 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "04",
    badge: "Best Value",
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesClient() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --forest: #1e3a1a;
          --sage: #4a7c40;
          --lime: #7ec96a;
          --cream: #f5f2eb;
          --warm-white: #faf9f6;
          --text: #1a1f18;
          --text-muted: #5a6356;
        }

        .services-hero-bg {
          background:
            radial-gradient(ellipse 70% 60% at 80% 50%, rgba(74,124,64,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 50% 70% at 10% 80%, rgba(30,58,26,0.08) 0%, transparent 60%),
            var(--forest);
        }

        .service-row {
          border-bottom: 1px solid rgba(0,0,0,0.07);
          transition: background 0.3s ease;
        }
        .service-row:last-child { border-bottom: none; }
        .service-row:hover { background: rgba(74,124,64,0.03); }

        .service-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 0;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .service-item::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--lime);
          flex-shrink: 0;
          opacity: 0.8;
        }

        .badge {
          display: inline-block;
          background: rgba(126,201,106,0.15);
          border: 1px solid rgba(126,201,106,0.3);
          color: var(--sage);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
        }

        .cta-section {
          background: var(--forest);
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -10%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(126,201,106,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .whatsapp-btn {
          background: linear-gradient(135deg, #25d366 0%, #128c4c 100%);
          box-shadow: 0 4px 20px rgba(37,211,102,0.30);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,211,102,0.40);
        }

        .email-btn {
          transition: background 0.2s, border-color 0.2s;
        }
        .email-btn:hover {
          background: rgba(255,255,255,0.12) !important;
        }

        .nav-pill {
          transition: background 0.2s, color 0.2s;
        }
        .nav-pill:hover {
          background: rgba(255,255,255,0.15) !important;
          color: white !important;
        }

        @media (max-width: 700px) {
          .service-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--text)", paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section
          className="services-hero-bg"
          style={{ padding: "5rem 2rem 4rem", position: "relative" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "1rem" }}
            >
              <span style={{
                color: "var(--lime)", fontSize: "0.72rem",
                letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500,
              }}>
                Municipality Approved · UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 900, lineHeight: 1.1,
                color: "white", margin: "0 0 1.25rem",
                maxWidth: 700,
              }}
            >
              Our Pest Control{" "}
              <em style={{ color: "var(--lime)", fontStyle: "italic" }}>Services</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem", lineHeight: 1.7,
                maxWidth: 560, margin: "0 0 2.5rem",
              }}
            >
              Municipality-approved pest management solutions for residential,
              commercial, and industrial properties across the UAE.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}
            >
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="nav-pill"
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: 999,
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.08)",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES LIST ── */}
        <section style={{ background: "var(--warm-white)", padding: "0 2rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {SERVICES.map((service, i) => (
              <FadeUp key={service.id} delay={i * 0.05}>
                <div
                  id={service.id}
                  className="service-row"
                  style={{ padding: "4rem 0" }}
                >
                  <div
                    className="service-grid"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}
                  >
                    {/* Left */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                        <span style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "0.8rem", fontWeight: 700,
                          color: "rgba(74,124,64,0.4)",
                          letterSpacing: "0.1em",
                        }}>
                          {service.number}
                        </span>
                        <div style={{
                          width: 52, height: 52, borderRadius: 12,
                          background: "rgba(74,124,64,0.08)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "var(--sage)",
                        }}>
                          {service.icon}
                        </div>
                        {service.badge && (
                          <span className="badge">{service.badge}</span>
                        )}
                      </div>

                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        fontWeight: 700, color: "var(--forest)",
                        margin: "0 0 1rem", lineHeight: 1.2,
                      }}>
                        {service.title}
                      </h2>

                      <p style={{
                        color: "var(--text-muted)", fontSize: "0.95rem",
                        lineHeight: 1.8, margin: 0, maxWidth: 420,
                      }}>
                        {service.description}
                      </p>
                    </div>

                    {/* Right */}
                    <div style={{
                      background: "white",
                      borderRadius: 16,
                      padding: "1.75rem 2rem",
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                    }}>
                      <p style={{
                        fontSize: "0.72rem", fontWeight: 500,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "var(--sage)", margin: "0 0 1rem",
                      }}>
                        What's Included
                      </p>
                      <div>
                        {service.items.map((item, j) => (
                          <motion.div
                            key={j}
                            className="service-item"
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.07, duration: 0.4 }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>

                      <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                        <a
                          href="https://wa.me/971545867774"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            color: "var(--sage)", fontSize: "0.85rem", fontWeight: 500,
                            textDecoration: "none",
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Enquire about this service →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section" style={{ padding: "6rem 2rem" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <FadeUp>
              <p style={{
                color: "var(--lime)", fontSize: "0.72rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                fontWeight: 500, marginBottom: "0.8rem",
              }}>
                Get In Touch
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700, color: "white",
                margin: "0 0 1rem", lineHeight: 1.2,
              }}>
                Looking for AMC or{" "}
                <em style={{ color: "var(--lime)", fontStyle: "italic" }}>Commercial</em>{" "}
                Pest Control?
              </h2>
              <p style={{
                color: "rgba(255,255,255,0.60)",
                fontSize: "1rem", lineHeight: 1.75,
                maxWidth: 560, margin: "0 auto 2.5rem",
              }}>
                For property management companies, real estate developers, and
                facilities teams — customized AMC, termite, and large-scale pest
                control with full municipality documentation.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/971545867774"
                  className="whatsapp-btn"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.6rem",
                    color: "white", textDecoration: "none",
                    padding: "0.9rem 1.75rem", borderRadius: 999,
                    fontSize: "0.95rem", fontWeight: 500,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Commercial Team
                </a>
                <a
                  href="mailto:arafapestaj@gmail.com"
                  className="email-btn"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.6rem",
                    color: "white", textDecoration: "none",
                    padding: "0.9rem 1.75rem", borderRadius: 999,
                    fontSize: "0.95rem", fontWeight: 400,
                    border: "1px solid rgba(255,255,255,0.22)",
                    background: "rgba(255,255,255,0.07)",
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                  Email for Proposal
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </>
  );
}
