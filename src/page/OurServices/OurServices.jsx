import React from "react";
import {
  Ruler,
  Palette,
  PackageOpen,
  Wrench,
  HeartHandshake,
  ArrowUpRight,
  Layers,
  Phone,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./OurServicesSection.css";

/* ── DATA ── */
const services = [
  {
    icon: <Ruler size={20} />,
    title: "Site Measurement",
    desc: "Accurate on-site measurements to ensure a perfect fit and flawless installation for every space.",
  },
  {
    icon: <Palette size={20} />,
    title: "Customization as per Design",
    desc: "Tailor-made furnishing solutions designed to match your space, style, and specific requirements.",
  },
  {
    icon: <PackageOpen size={20} />,
    title: "Bulk Project Supply",
    desc: "Reliable and efficient supply for large-scale residential, commercial, and hospitality projects.",
  },
  {
    icon: <Wrench size={20} />,
    title: "Installation Support",
    desc: "Professional installation services to ensure a smooth and perfect finish.",
  },
  {
    icon: <HeartHandshake size={20} />,
    title: "After-Sales Service",
    desc: "Dedicated support and assistance even after project completion for long-term satisfaction.",
  },
];

/* ── COMPONENT ── */
const OurServices = () => {
  return (
    <>
      <Breadcrumb />

      <section className="oss max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── INTRO ── */}
        <div className="oss__intro">

          {/* Left vertical bar */}
          <div className="oss__intro-bar" />

          {/* Title block */}
          <div className="oss__intro-body">
            <span className="oss__label">What We Offer</span>
            <h2 className="oss__title">
              Complete<br />
              <span className="oss__title-stroke">Furnishing</span><br />
              <span className="oss__title-accent">Services</span>
            </h2>
          </div>

          {/* Right desc + stats */}
          <div className="oss__intro-right">
            <p className="oss__desc">
              We provide end-to-end furnishing services with a professional
              and hassle-free approach, ensuring every project is executed
              with precision, quality, and timely delivery.
            </p>

            <div className="oss__stats">
              <div className="oss__stat">
                <div className="oss__stat-n">5<sup>+</sup></div>
                <div className="oss__stat-l">Core Services</div>
              </div>
              <div className="oss__stat">
                <div className="oss__stat-n">500<sup>+</sup></div>
                <div className="oss__stat-l">Projects Done</div>
              </div>
              <div className="oss__stat">
                <div className="oss__stat-n">10<sup>+</sup></div>
                <div className="oss__stat-l">Years Exp.</div>
              </div>
            </div>
          </div>

        </div>

        {/* ── SERVICE LIST ── */}
        <div className="oss__list">
          {services.map((svc, i) => (
            <div className="oss__item" key={i}>

              {/* Index */}
              <span className="oss__item-index">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Body */}
              <div className="oss__item-body">
                <div className="oss__item-top">
                  <div className="oss__item-icon">{svc.icon}</div>
                  <h3 className="oss__item-title">{svc.title}</h3>
                </div>
                <p className="oss__item-desc">{svc.desc}</p>
              </div>

              {/* Arrow */}
              <div className="oss__item-arrow">
                <ArrowUpRight size={18} />
              </div>

            </div>
          ))}
        </div>

        {/* ── BOTTOM BAND ── */}
        <div className="oss__band mb-12">

          {/* Ghost text */}
          <div className="oss__band-ghost" aria-hidden="true">
            Everything
          </div>

          {/* Left */}
          <div className="oss__band-left">
            <div className="oss__band-icon">
              <Layers size={22} />
            </div>
            <div className="oss__band-tagline">
              From Selection to <em>Installation</em> —<br />
              We Manage Everything.
            </div>
          </div>

          {/* Right */}
          <div className="oss__band-right">
            <span className="oss__band-pill">End-to-End</span>
            <span className="oss__band-pill">On-Time Delivery</span>
            <a href="#contact" className="oss__band-btn">
              <Phone size={12} /> Get in Touch
            </a>
          </div>

        </div>

      </section>
    </>
  );
};

export default OurServices;