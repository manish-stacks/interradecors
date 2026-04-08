import { useState } from "react";
import "./WhyTrust.css";

const reasons = [
  {
    id: "01",
    title: "Premium Quality Products",
    desc: "Only the finest materials and finishes, curated for lasting elegance.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4L21.5 13H31L23.5 18.5L26.5 28L18 22.5L9.5 28L12.5 18.5L5 13H14.5L18 4Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Wide Range Under One Roof",
    desc: "Every furnishing need met in one place — flooring to furniture.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 14L18 5L31 14V30H22V22H14V30H5V14Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="14" y="22" width="8" height="8" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Strong Vendor Network",
    desc: "Backed by trusted suppliers ensuring consistent quality and supply.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6"  cy="10" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="30" cy="10" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="6"  cy="26" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="30" cy="26" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="9"  y1="11" x2="14" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="27" y1="11" x2="22" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="9"  y1="25" x2="14" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="27" y1="25" x2="22" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Competitive Pricing",
    desc: "Premium quality delivered at prices that make business sense.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 8v2M18 26v2M13 13.5c0-1.9 2.2-3 5-3s5 1.1 5 3-2.2 3-5 3-5 1.1-5 3 2.2 3 5 3 5-1.1 5-3"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Professional Team Support",
    desc: "Expert guidance from selection through to final installation.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="11" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 28c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 20c4.4 0 8 3 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Timely Delivery",
    desc: "On-schedule execution so your projects never face delays.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 14v6l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 5h10M18 5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const clients = [
  {
    label: "Premium Residential",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18L20 7L33 18V34H25V26H15V34H7V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Interior Designers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30L16 24L28 12L34 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="34" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 30L13 28.5L11.5 27L10 30Z" fill="currentColor"/>
        <path d="M20 22L24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="7" y="27" width="9" height="4" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      </svg>
    ),
  },
  {
    label: "Architects",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="7" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="7"  y1="15" x2="33" y2="15" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="15" y1="7"  x2="15" y2="33" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M20 20 L27 27" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    label: "Hotels & Resorts",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 18h24" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M20 10V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="6" r="1.5" fill="currentColor" opacity="0.5"/>
        <rect x="13" y="22" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="22" y="22" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="8" y1="34" x2="32" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Corporate Offices",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="13" x2="30" y2="13" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="10" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="10" y1="27" x2="30" y2="27" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="16" y="29" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="6"  y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Builders & Developers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 34V18l10-10 10 10v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M24 34V26h-8v8" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M28 18h6v16h-6" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="6" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+",  label: "Years of Experience" },
  { value: "98%",  label: "Repeat Client Rate" },
  { value: "200+", label: "Vendor Partners" },
];

export default function WhyTrust() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="wt-root">
      <div className="wt-bg-lines" aria-hidden="true">
        <div className="wt-line wt-line-1" />
        <div className="wt-line wt-line-2" />
        <div className="wt-line wt-line-3" />
      </div>

      <div className="wt-container">

        {/* ── WHY CHOOSE US ── */}
        <div className="wt-top">

          {/* Left: heading */}
          <div className="wt-top-left">
            <span className="wt-eyebrow">Why Choose Us</span>
            <h2 className="wt-heading">
              Why <em>Interra</em><br />Decors
            </h2>
            <p className="wt-sub">
              We combine craftsmanship, expertise, and a deep commitment to excellence — delivering spaces that speak for themselves.
            </p>
            <div className="wt-accent-bar" />
          </div>

          {/* Right: 3+3 grid */}
          <div className="wt-reasons-grid">
            {reasons.map((r) => (
              <div
                key={r.id}
                className={`wt-reason${hovered === r.id ? " active" : ""}`}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="wt-reason-icon">{r.icon}</div>
                <div className="wt-reason-body">
                  <h3 className="wt-reason-title">{r.title}</h3>
                  <p className="wt-reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── DIVIDER ── */}
        <div className="wt-divider">
          <div className="wt-divider-line" />
          <span className="wt-divider-badge">Trusted Since Day One</span>
          <div className="wt-divider-line" />
        </div>

        {/* ── TRUST & CLIENT BASE ── */}
        <div className="wt-bottom">
          <div className="wt-trust-header">
            <span className="wt-eyebrow wt-eyebrow-center">Our Client Base</span>
            <h2 className="wt-heading wt-heading-center">
              Trusted by <em>Professionals.</em><br />
              Preferred by <em>Homeowners.</em>
            </h2>
            <p className="wt-trust-sub">
              We proudly serve a diverse range of clients — built on strong networks, repeat business, and referral-based trust.
            </p>
          </div>

          <div className="wt-stats">
            {stats.map((s) => (
              <div className="wt-stat" key={s.label}>
                <span className="wt-stat-value">{s.value}</span>
                <span className="wt-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="wt-clients">
            {clients.map((c) => (
              <div className="wt-client-card" key={c.label}>
                <div className="wt-client-icon">{c.icon}</div>
                <span className="wt-client-label">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="wt-trust-note">
            <div className="wt-trust-note-dot" />
            <p>Strong network · Repeat clients · Referral-based business</p>
          </div>
        </div>

      </div>
    </section>
  );
}