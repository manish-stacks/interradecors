// OurClients.jsx
import React, { useEffect, useRef, useState } from "react";
import "./OurClients.css";

import Client01 from "../../assets/products-cat/carpets.webp"
import Client02 from "../../assets/products-cat/wooden-flooring.webp"
import Client03 from "../../assets/products-cat/wall-to-wall-carpet.webp"


const images = [
  { src: Client01, alt: "Carpets" },
  {
    src: Client02,
    alt: "Wooden Flooring",
  },
  {
    src: Client03,
    alt: "Wall to Wall Carpet",
  },
];

const clients = [
  {
    title: "Interior Designers",
    desc: "High-quality furnishings to bring creative visions to life.",
  },
  {
    title: "Architects",
    desc: "Tailored solutions that complement architectural designs.",
  },
  { title: "Hotels", desc: "Customized décor to enhance guest experiences." },
  {
    title: "Corporates",
    desc: "Stylish, functional office solutions for productivity and comfort.",
  },
  {
    title: "Builders",
    desc: "Reliable materials for residential and commercial projects.",
  },
  {
    title: "Homeowners",
    desc: "Personalized products and expert support for beautiful spaces.",
    highlight: true,
  },
];

const OurClients = () => {
  const [activeImg, setActiveImg] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  // Change image based on scroll position inside the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top; // how much we've scrolled past the top
      const progress = scrolled / sectionHeight;

      if (progress < 0.33) setActiveImg(0);
      else if (progress < 0.66) setActiveImg(1);
      else setActiveImg(2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto cycle when in view (if not scrolling)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(() => {
            setActiveImg((prev) => (prev + 1) % images.length);
          }, 2500);
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="our-clients-section" ref={sectionRef}>
      {/* ── LEFT: Image Slider ── */}
      <div className="clients-images">
        <div className="img-slider">
          {images.map((img, i) => (
            <div key={i} className={`slide ${i === activeImg ? "active" : ""}`}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}

          {/* Dot indicators */}
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activeImg ? "active" : ""}`}
                onClick={() => {
                  setActiveImg(i);
                  clearInterval(intervalRef.current);
                }}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="clients-content">
        <h2 className="clients-title">Our Clients</h2>

        <div className="clients-grid">
          {clients.map((client) => (
            <div
              key={client.title}
              className={`client-item${client.highlight ? " highlighted" : ""}`}
            >
              <h3>{client.title}</h3>
              <p>{client.desc}</p>
            </div>
          ))}
        </div>

        <div className="clients-divider" />

        <div className="clients-bottom">
          <p>
            We're committed to exceptional quality and service for every
            project, big or small.
          </p>
          <p>
            We don't just enhance spaces, we create timeless, sophisticated, and
            functional environments tailored to every client's needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
