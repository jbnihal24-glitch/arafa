"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "5K+", label: "Properties Treated" },
  { value: "100%", label: "Municipality Approved" },
  { value: "24/7", label: "Emergency Response" },
];

const VALUES = [
  {
    title: "Safety First",
    description:
      "All treatments use municipality-approved chemicals that are safe for families, children, and pets. We follow strict health and safety protocols on every job.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description:
      "Our certified technicians undergo regular training and hold valid municipality licenses. Each team member brings years of hands-on field experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Guaranteed Results",
    description:
      "We stand behind our work with follow-up visits and warranty-backed treatments. If pests return within the warranty period, so do we — at no extra cost.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. You receive a clear quote before any work begins, with itemized reports for every treatment — ideal for AMC and commercial clients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 10h18M7 14h2M12 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const TIMELINE = [
  { year: "2009", event: "Founded in Ajman with a small team of 3 certified technicians." },
  { year: "2013", event: "Expanded services to cover all seven emirates across the UAE." },
  { year: "2017", event: "Launched Annual Maintenance Contract (AMC) division for commercial clients." },
  { year: "2021", event: "Achieved 5,000+ properties treated milestone with zero safety incidents." },
  { year: "2024", event: "Renewed municipality approvals across Dubai, Sharjah, and Ajman." },
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

export default function AboutClient() {
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

        .about-hero-bg {
          background:
            radial-gradient(ellipse 60% 70% at 90% 30%, rgba(74,124,64,0.15) 0%, transparent 65%),
            radial-gradient(ellipse 50% 60% at 5% 90%, rgba(30,58,26,0.12) 0%, transparent 55%),
            var(--forest);
        }

        .value-card {
          border: 1px solid rgba(0,0,0,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(30,58,26,0.10);
          border-color: rgba(74,124,64,0.25);
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--lime);
          flex-shrink: 0;
          margin-top: 5px;
          box-shadow: 0 0 0 4px rgba(126,201,106,0.2);
        }

        .timeline-line {
          position: absolute;
          left: 5px;
          top: 20px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, rgba(126,201,106,0.4), transparent);
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

        .stat-divider {
          border-right: 1px solid rgba(255,255,255,0.12);
        }
        .stat-divider:last-child { border-right: none; }

        @media (max-width: 768px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-divider:nth-child(2) { border-right: none; }
          .about-split { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--text)", paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section
          className="about-hero-bg"
          style={{ padding: "5rem 2rem 0", position: "relative" }}
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
                Our Story
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
                maxWidth: 680,
              }}
            >
              UAE's Trusted{" "}
              <em style={{ color: "var(--lime)", fontStyle: "italic" }}>Pest Control</em>{" "}
              Experts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem", lineHeight: 1.75,
                maxWidth: 540, margin: "0 0 0",
              }}
            >
              Since 2009, Arafa Pest Control has protected thousands of homes and
              businesses across the UAE with safe, effective, and
              municipality-approved pest management.
            </motion.p>
          </div>

          {/* Stats bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "3.5rem" }}>
            <div
              className="stats-grid"
              style={{
                maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
                display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="stat-divider"
                  style={{ padding: "1.5rem", textAlign: "center" }}
                >
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem", fontWeight: 700,
                    color: "var(--lime)", lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    color: "rgba(255,255,255,0.45)", fontSize: "0.7rem",
                    letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.35rem",
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section style={{ padding: "6rem 2rem", background: "var(--warm-white)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              className="about-split"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
            >
              <FadeUp>
                <p style={{
                  color: "var(--sage)", fontSize: "0.72rem",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  fontWeight: 500, marginBottom: "0.8rem",
                }}>
                  Who We Are
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 700, color: "var(--forest)",
                  margin: "0 0 1.25rem", lineHeight: 1.2,
                }}>
                  Built on Trust,{" "}
                  <em style={{ fontStyle: "italic", color: "var(--sage)" }}>Backed by Results</em>
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                  Arafa Pest Control Services was founded in Ajman with a single
                  mission: deliver professional pest management that families and
                  businesses can genuinely rely on. Today, we operate across all
                  seven emirates with a team of fully licensed technicians.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.85, marginBottom: "2rem" }}>
                  Every treatment we carry out complies with UAE municipality
                  standards. We provide detailed service reports, follow-up
                  inspections, and warranty-backed solutions — whether you need
                  a one-time residential visit or a long-term AMC contract.
                </p>
                <a
                  href="https://wa.me/971545867774"
                  className="whatsapp-btn"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.6rem",
                    color: "white", textDecoration: "none",
                    padding: "0.85rem 1.75rem", borderRadius: 999,
                    fontSize: "0.92rem", fontWeight: 500,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Talk to Our Team
                </a>
              </FadeUp>

              {/* Timeline */}
              <FadeUp delay={0.15}>
                <div style={{
                  background: "white", borderRadius: 20,
                  padding: "2rem 2.25rem",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                }}>
                  <p style={{
                    fontSize: "0.72rem", fontWeight: 500,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--sage)", margin: "0 0 1.75rem",
                  }}>
                    Our Journey
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {TIMELINE.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.45 }}
                        style={{
                          display: "flex", gap: "1.25rem",
                          position: "relative",
                          paddingBottom: i < TIMELINE.length - 1 ? "1.75rem" : "0",
                        }}
                      >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                          <div className="timeline-dot" />
                          {i < TIMELINE.length - 1 && (
                            <div style={{
                              width: 2, flex: 1, marginTop: 6,
                              background: "linear-gradient(to bottom, rgba(126,201,106,0.35), rgba(126,201,106,0.08))",
                            }} />
                          )}
                        </div>
                        <div style={{ paddingBottom: i < TIMELINE.length - 1 ? "0" : "0" }}>
                          <span style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "0.85rem", fontWeight: 700,
                            color: "var(--sage)", display: "block",
                            marginBottom: "0.25rem",
                          }}>
                            {item.year}
                          </span>
                          <p style={{
                            color: "var(--text-muted)", fontSize: "0.88rem",
                            lineHeight: 1.6, margin: 0,
                          }}>
                            {item.event}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ padding: "6rem 2rem", background: "var(--cream)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                <p style={{
                  color: "var(--sage)", fontSize: "0.72rem",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  fontWeight: 500, marginBottom: "0.6rem",
                }}>
                  What We Stand For
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700, color: "var(--forest)", margin: 0,
                }}>
                  Our Core Values
                </h2>
              </div>
            </FadeUp>

            <div
              className="values-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}
            >
              {VALUES.map((v, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div
                    className="value-card"
                    style={{
                      background: "white", borderRadius: 16,
                      padding: "2rem 2.25rem",
                    }}
                  >
                    <div style={{
                      width: 52, height: 52, borderRadius: 12,
                      background: "rgba(74,124,64,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--sage)", marginBottom: "1.25rem",
                    }}>
                      {v.icon}
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem", fontWeight: 700,
                      color: "var(--forest)", margin: "0 0 0.75rem",
                    }}>
                      {v.title}
                    </h3>
                    <p style={{
                      color: "var(--text-muted)", fontSize: "0.9rem",
                      lineHeight: 1.75, margin: 0,
                    }}>
                      {v.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{
          padding: "6rem 2rem",
          background: "var(--forest)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-20%", right: "-5%",
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(126,201,106,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <FadeUp>
            <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
              <p style={{
                color: "var(--lime)", fontSize: "0.72rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                fontWeight: 500, marginBottom: "0.8rem",
              }}>
                Ready to Get Started?
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700, color: "white",
                margin: "0 0 1rem", lineHeight: 1.2,
              }}>
                Let's Protect Your{" "}
                <em style={{ color: "var(--lime)", fontStyle: "italic" }}>Property</em>
              </h2>
              <p style={{
                color: "rgba(255,255,255,0.58)", fontSize: "1rem",
                lineHeight: 1.75, maxWidth: 480, margin: "0 auto 2.5rem",
              }}>
                Reach out today for a free assessment. We'll recommend the right
                treatment plan for your home or business.
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
                  WhatsApp Us Now
                </a>
                <a
                  href="/services"
                  style={{
                    display: "inline-flex", alignItems: "center",
                    color: "white", textDecoration: "none",
                    padding: "0.9rem 1.75rem", borderRadius: 999,
                    fontSize: "0.95rem", fontWeight: 400,
                    border: "1px solid rgba(255,255,255,0.22)",
                    background: "rgba(255,255,255,0.07)",
                    transition: "background 0.2s",
                  }}
                >
                  View Our Services →
                </a>
              </div>
            </div>
          </FadeUp>
        </section>

      </div>
    </>
  );
}
