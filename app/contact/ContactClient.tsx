"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_CARDS = [
  {
    title: "Call / WhatsApp",
    subtitle: "Fast response & same-day site visits",
    value: "+971 54 586 7774",
    href: "https://wa.me/971545867774",
    linkLabel: "Open WhatsApp →",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    accent: "#25d366",
  },
  {
    title: "Email Us",
    subtitle: "Quotations, AMC & documentation",
    value: "arafapestaj@gmail.com",
    href: "mailto:arafapestaj@gmail.com",
    linkLabel: "Send an Email →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#4a7c40",
  },
  {
    title: "Service Area",
    subtitle: "Municipality Approved",
    value: "Ajman · Sharjah · UAQ · Dubai",
    href: null,
    linkLabel: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    accent: "#7ec96a",
  },
];

const SERVICE_OPTIONS = [
  "General Pest Control",
  "Termite Control",
  "Rodent Control",
  "Bed Bug Treatment",
  "Commercial / AMC",
  "Other",
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Arafa Pest Control,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\n${formData.message}`
    );
    window.open(`https://wa.me/971545867774?text=${text}`, "_blank");
    setSubmitted(true);
  };

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

        .contact-hero-bg {
          background:
            radial-gradient(ellipse 60% 70% at 85% 40%, rgba(74,124,64,0.14) 0%, transparent 65%),
            radial-gradient(ellipse 50% 60% at 5% 85%, rgba(30,58,26,0.10) 0%, transparent 55%),
            var(--forest);
        }

        .contact-card {
          border: 1px solid rgba(0,0,0,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(30,58,26,0.10);
          border-color: rgba(74,124,64,0.22);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid rgba(0,0,0,0.10);
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: var(--text);
          background: white;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-color: var(--sage);
          box-shadow: 0 0 0 3px rgba(74,124,64,0.10);
        }
        .form-input::placeholder { color: #aab5a6; }

        select.form-input { appearance: none; cursor: pointer; }

        .submit-btn {
          background: linear-gradient(135deg, #25d366 0%, #128c4c 100%);
          box-shadow: 0 4px 18px rgba(37,211,102,0.30);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: none;
          cursor: pointer;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(37,211,102,0.40);
        }

        .card-link {
          color: var(--sage);
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .card-link:hover { color: var(--forest); }

        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--text)", paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section
          className="contact-hero-bg"
          style={{ padding: "5rem 2rem 4rem" }}
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
                We're Here to Help
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                fontWeight: 900, lineHeight: 1.1,
                color: "white", margin: "0 0 1.25rem",
                maxWidth: 620,
              }}
            >
              Get in{" "}
              <em style={{ color: "var(--lime)", fontStyle: "italic" }}>Touch</em>{" "}
              With Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: "1.05rem", lineHeight: 1.75,
                maxWidth: 500, margin: 0,
              }}
            >
              Fast inspections, free quotations, and municipality-approved pest
              management. Available 24/7 for emergencies across the UAE.
            </motion.p>
          </div>
        </section>

        {/* ── CONTACT CARDS ── */}
        <section style={{ background: "var(--warm-white)", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              className="cards-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            >
              {CONTACT_CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  className="contact-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: "white", borderRadius: 16,
                    padding: "2rem",
                  }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: `${card.accent}18`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: card.accent, marginBottom: "1.25rem",
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem", fontWeight: 700,
                    color: "var(--forest)", margin: "0 0 0.35rem",
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    color: "var(--text-muted)", fontSize: "0.82rem",
                    margin: "0 0 0.85rem", lineHeight: 1.5,
                  }}>
                    {card.subtitle}
                  </p>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem", fontWeight: 700,
                    color: "var(--forest)", margin: "0 0 0.75rem",
                  }}>
                    {card.value}
                  </p>
                  {card.href && (
                    <a href={card.href} className="card-link">
                      {card.linkLabel}
                    </a>
                  )}
                  {!card.href && (
                    <span style={{
                      display: "inline-block",
                      background: "rgba(126,201,106,0.12)",
                      border: "1px solid rgba(126,201,106,0.25)",
                      color: "var(--sage)", fontSize: "0.7rem",
                      fontWeight: 500, letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.65rem", borderRadius: 999,
                    }}>
                      Municipality Approved
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM + INFO ── */}
        <section style={{ padding: "2rem 2rem 6rem", background: "var(--warm-white)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              className="contact-layout"
              style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "start" }}
            >
              {/* Left — info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{
                  color: "var(--sage)", fontSize: "0.72rem",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  fontWeight: 500, marginBottom: "0.7rem",
                }}>
                  Why Choose Us
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 700, color: "var(--forest)",
                  margin: "0 0 1.25rem", lineHeight: 1.2,
                }}>
                  Fast, Reliable &{" "}
                  <em style={{ fontStyle: "italic", color: "var(--sage)" }}>Approved</em>
                </h2>
                <p style={{
                  color: "var(--text-muted)", fontSize: "0.95rem",
                  lineHeight: 1.85, marginBottom: "2rem",
                }}>
                  We respond within 2 hours and offer same-day inspections
                  across Ajman, Sharjah, UAQ, and Dubai. All treatments are
                  municipality-approved with full service documentation.
                </p>

                {[
                  { label: "Response Time", value: "Within 2 hours" },
                  { label: "Coverage", value: "All 7 Emirates" },
                  { label: "Certifications", value: "Municipality Approved" },
                  { label: "Emergency Line", value: "24 / 7 Available" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.85rem 0",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>{item.label}</span>
                    <span style={{
                      fontWeight: 500, fontSize: "0.88rem",
                      color: "var(--forest)",
                    }}>{item.value}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "white", borderRadius: 20,
                  padding: "2.5rem",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.05)",
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: "50%",
                      background: "rgba(37,211,102,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 1.25rem",
                      color: "#25d366",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem", fontWeight: 700,
                      color: "var(--forest)", margin: "0 0 0.6rem",
                    }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                      WhatsApp has opened with your details. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        marginTop: "1.5rem",
                        background: "none", border: "1.5px solid rgba(74,124,64,0.3)",
                        borderRadius: 999, padding: "0.6rem 1.5rem",
                        color: "var(--sage)", fontSize: "0.85rem", fontWeight: 500,
                        cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <p style={{
                      fontSize: "0.72rem", fontWeight: 500,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--sage)", margin: "0 0 0.5rem",
                    }}>
                      Quick Enquiry
                    </p>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem", fontWeight: 700,
                      color: "var(--forest)", margin: "0 0 1.75rem",
                    }}>
                      Request a Free Quote
                    </h3>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                            Full Name
                          </label>
                          <input
                            className="form-input"
                            type="text"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                            Phone Number
                          </label>
                          <input
                            className="form-input"
                            type="tel"
                            placeholder="+971 ..."
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                          Email Address
                        </label>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                          Service Required
                        </label>
                        <div style={{ position: "relative" }}>
                          <select
                            className="form-input"
                            required
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          >
                            <option value="" disabled>Select a service...</option>
                            {SERVICE_OPTIONS.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <svg
                            viewBox="0 0 24 24" fill="none" width="16" height="16"
                            style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)" }}
                          >
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                          Message <span style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</span>
                        </label>
                        <textarea
                          className="form-input"
                          rows={4}
                          placeholder="Describe your pest problem or property type..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          style={{ resize: "vertical" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="submit-btn"
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                          color: "white", padding: "0.95rem",
                          borderRadius: 999, fontSize: "0.95rem", fontWeight: 500,
                          fontFamily: "'DM Sans', sans-serif",
                          marginTop: "0.25rem",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Send via WhatsApp
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
