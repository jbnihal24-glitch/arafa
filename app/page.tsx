"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    title: "General Pest Control",
    description:
      "Safe and effective treatment for homes, villas, offices, and commercial buildings.",
    image: "/images/general.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 3C9.79 3 8 4.79 8 7v1H6a1 1 0 000 2h.1A6 6 0 006 12v2a6 6 0 0012 0v-2a6 6 0 00-.1-2H18a1 1 0 000-2h-2V7c0-2.21-1.79-4-4-4z" fill="currentColor" opacity="0.9"/>
        <path d="M5 8L2 6M19 8l3-2M5 14l-3 2M19 14l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    stat: "100% Safe",
  },
  {
    title: "Termite Control",
    description:
      "Long-lasting anti-termite drilling treatment with 10 years warranty.",
    image: "/images/termite.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 2L8 6H4l2 4-2 4h4l4 4 4-4h4l-2-4 2-4h-4l-4-4z" fill="currentColor" opacity="0.85"/>
        <circle cx="12" cy="10" r="2" fill="white" opacity="0.5"/>
      </svg>
    ),
    stat: "10yr Warranty",
  },
  {
    title: "Rodent Control",
    description:
      "Professional rodent inspection, RBS monitoring, and preventive action.",
    image: "/images/rodent.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <ellipse cx="12" cy="13" rx="6" ry="5" fill="currentColor" opacity="0.85"/>
        <path d="M6 13c-2 0-4-1-4-3s2-3 4-2M18 13c2 0 4-1 4-3s-2-3-4-2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="11" r="1" fill="white"/>
        <circle cx="14" cy="11" r="1" fill="white"/>
        <path d="M12 18c0 2-1 3-1 3M12 18c0 2 1 3 1 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    stat: "RBS Certified",
  },
];

const TRUST_ITEMS = [
  { value: "15+", label: "Years Experience" },
  { value: "5K+", label: "Properties Treated" },
  { value: "100%", label: "Municipality Approved" },
  { value: "24/7", label: "Emergency Response" },
];

const WHATSAPP_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const duration = 5000;
    const tick = 50;
    let elapsed = 0;
    const progressInterval = setInterval(() => {
      elapsed += tick;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        setCurrentSlide((prev) => (prev + 1) % SERVICES.length);
        elapsed = 0;
        setProgress(0);
      }
    }, tick);
    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  const slide = SERVICES[currentSlide];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --forest: #1e3a1a;
          --forest-mid: #2d5228;
          --sage: #4a7c40;
          --lime: #7ec96a;
          --cream: #f5f2eb;
          --warm-white: #faf9f6;
          --text: #1a1f18;
          --text-muted: #5a6356;
        }

        body { background: var(--warm-white); }

        .hero-bg {
          background-image:
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(74,124,64,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 20% 80%, rgba(30,58,26,0.15) 0%, transparent 60%),
            url('/images/hero.jpg');
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          background: linear-gradient(
            135deg,
            rgba(18,30,16,0.82) 0%,
            rgba(30,58,26,0.70) 50%,
            rgba(18,30,16,0.60) 100%
          );
        }

        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .service-card {
          border: 1px solid rgba(74,124,64,0.15);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(30,58,26,0.12);
          border-color: rgba(74,124,64,0.40);
        }

        .whatsapp-btn {
          background: linear-gradient(135deg, #25d366 0%, #128c4c 100%);
          box-shadow: 0 4px 20px rgba(37,211,102,0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(37,211,102,0.45);
        }

        .outline-btn:hover {
          background: rgba(45,82,40,0.06) !important;
          border-color: rgba(45,82,40,0.45) !important;
        }

        .slide-selector-btn {
          cursor: pointer;
          transition: all 0.25s;
        }
        .slide-selector-btn:hover {
          background: rgba(74,124,64,0.05) !important;
        }

        .stat-item {
          border-right: 1px solid rgba(255,255,255,0.12);
        }
        .stat-item:last-child {
          border-right: none;
        }

        @media (max-width: 768px) {
          .slider-grid {
            grid-template-columns: 1fr !important;
          }
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stat-item:nth-child(2) {
            border-right: none;
          }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--text)", paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section
          className="hero-bg grain"
          style={{ position: "relative", minHeight: "88vh", display: "flex", flexDirection: "column" }}
        >
          <div className="hero-overlay" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

          <div style={{
            position: "absolute", bottom: 0, right: 0,
            width: "45%", height: "100%",
            background: "linear-gradient(135deg, transparent 49.5%, rgba(126,201,106,0.06) 50%)",
            zIndex: 1, pointerEvents: "none",
          }} />

          <div style={{
            position: "relative", zIndex: 2,
            flex: 1, display: "flex", alignItems: "center",
            maxWidth: 1200, margin: "0 auto", padding: "5rem 2rem 3rem",
            width: "100%",
          }}>
            <div style={{ maxWidth: 640 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(126,201,106,0.15)",
                  border: "1px solid rgba(126,201,106,0.30)",
                  borderRadius: 999, padding: "0.3rem 0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--lime)", display: "inline-block" }} />
                <span style={{ color: "var(--lime)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
                  Municipality Approved · UAE
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 900, lineHeight: 1.1,
                  color: "white", margin: "0 0 1.25rem",
                }}
              >
                Protecting Homes<br />
                <em style={{ color: "var(--lime)", fontStyle: "italic" }}>{"& Businesses"}</em>{" "}
                Across UAE
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 480 }}
              >
                Professional pest management with guaranteed results. Trusted by thousands of families and businesses since 2009.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              >
                <a
                  href="https://wa.me/971545867774"
                  className="whatsapp-btn"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.6rem",
                    color: "white", textDecoration: "none",
                    padding: "0.85rem 1.75rem", borderRadius: 999,
                    fontSize: "0.95rem", fontWeight: 500,
                  }}
                >
                  {WHATSAPP_SVG}
                  WhatsApp Us Now
                </a>
                <a
                  href="/services"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    color: "white", textDecoration: "none",
                    padding: "0.85rem 1.75rem", borderRadius: 999,
                    fontSize: "0.95rem", fontWeight: 400,
                    border: "1px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.07)",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  View Services →
                </a>
              </motion.div>
            </div>
          </div>

          {/* Trust bar */}
          <div style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div
              className="trust-grid"
              style={{
                maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
                display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {TRUST_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="stat-item"
                  style={{ padding: "1.25rem 1.5rem", textAlign: "center" }}
                >
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem", fontWeight: 700,
                    color: "var(--lime)", lineHeight: 1,
                  }}>
                    {item.value}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.3rem" }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES SLIDER ── */}
        <section style={{ padding: "6rem 2rem", background: "var(--warm-white)", overflow: "hidden" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p style={{ color: "var(--sage)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.6rem" }}>
                What We Do
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700, color: "var(--forest)", margin: 0,
              }}>
                Our Services
              </h2>
            </div>
          </FadeUp>

          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div
              className="slider-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}
            >
              <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", background: "#e8e4db" }}>
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.04 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: "absolute", inset: 0,
                      backgroundImage: `url(${s.image})`,
                      backgroundSize: "cover", backgroundPosition: "center",
                    }}
                  />
                ))}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(to top, rgba(18,30,16,0.85) 0%, transparent 100%)",
                  padding: "2rem 1.5rem 1.5rem", zIndex: 2,
                }}>
                  <motion.h3
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "white", fontSize: "1.4rem", fontWeight: 700, margin: 0,
                    }}
                  >
                    {slide.title}
                  </motion.h3>
                </div>
              </div>

              <div>
                <motion.p
                  key={currentSlide + "-desc"}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8,
                    marginBottom: "2.5rem",
                  }}
                >
                  {slide.description}
                </motion.p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {SERVICES.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className="slide-selector-btn"
                      style={{
                        cursor: "pointer",
                        textAlign: "left", padding: "0.85rem 1rem",
                        borderRadius: 10, display: "flex", alignItems: "center", gap: "1rem",
                        background: i === currentSlide ? "rgba(74,124,64,0.08)" : "transparent",
                        border: `1px solid ${i === currentSlide ? "rgba(74,124,64,0.25)" : "transparent"}`,
                        transition: "all 0.25s",
                      }}
                    >
                      <span style={{
                        color: i === currentSlide ? "var(--sage)" : "var(--text-muted)",
                        transition: "color 0.25s", flexShrink: 0,
                      }}>
                        {s.icon}
                      </span>
                      <div>
                        <div style={{
                          fontWeight: 500, fontSize: "0.95rem",
                          color: i === currentSlide ? "var(--forest)" : "var(--text-muted)",
                        }}>
                          {s.title}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--sage)", marginTop: "0.1rem", letterSpacing: "0.05em" }}>
                          {s.stat}
                        </div>
                      </div>
                      {i === currentSlide && (
                        <div style={{ marginLeft: "auto", width: 40, height: 3, background: "rgba(74,124,64,0.15)", borderRadius: 999, overflow: "hidden", flexShrink: 0 }}>
                          <motion.div style={{ height: "100%", background: "var(--sage)", width: `${progress}%` }} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section style={{ padding: "6rem 2rem", background: "var(--forest)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                <p style={{ color: "var(--lime)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.6rem" }}>
                  Our Commitment
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 700, color: "white", margin: 0,
                }}>
                  Why Choose Arafa
                </h2>
              </div>
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {SERVICES.map((service, i) => (
                <FadeUp key={i} delay={i * 0.12}>
                  <div
                    className="service-card"
                    style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "2rem" }}
                  >
                    <div style={{
                      width: 52, height: 52, borderRadius: 12,
                      background: "rgba(126,201,106,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--lime)", marginBottom: "1.25rem",
                    }}>
                      {service.icon}
                    </div>
                    <h4 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem", fontWeight: 700, color: "white",
                      margin: "0 0 0.75rem",
                    }}>
                      {service.title}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                      {service.description}
                    </p>
                    <div style={{
                      marginTop: "1.5rem", paddingTop: "1.25rem",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--lime)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em",
                    }}>
                      {service.stat} ✓
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "7rem 2rem", background: "var(--cream)", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "-40%", right: "-10%",
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,124,64,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <FadeUp>
            <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
              <p style={{ color: "var(--sage)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.8rem" }}>
                Get In Touch
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700, color: "var(--forest)",
                margin: "0 0 1rem", lineHeight: 1.15,
              }}>
                Need Fast,<br />
                <em style={{ color: "var(--sage)", fontStyle: "italic" }}>Reliable Service?</em>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Available 24/7 for emergencies. Response within 2 hours across UAE.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/971545867774"
                  className="whatsapp-btn"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.6rem",
                    color: "white", textDecoration: "none",
                    padding: "1rem 2rem", borderRadius: 999,
                    fontSize: "1rem", fontWeight: 500,
                  }}
                >
                  {WHATSAPP_SVG}
                  WhatsApp Us Now
                </a>
                <a
                  href="/contact"
                  className="outline-btn"
                  style={{
                    display: "inline-flex", alignItems: "center",
                    color: "var(--forest)", textDecoration: "none",
                    padding: "1rem 2rem", borderRadius: 999,
                    fontSize: "1rem", fontWeight: 500,
                    border: "1.5px solid rgba(45,82,40,0.25)",
                    transition: "border-color 0.2s, background 0.2s",
                    background: "transparent",
                  }}
                >
                  Request a Quote →
                </a>
              </div>
            </div>
          </FadeUp>
        </section>

      </div>
    </>
  );
}