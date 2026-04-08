import { useState } from "react";
import "./BlogSection.css";

const posts = [
  {
    id: 1,
    num: "01",
    category: "Interior Tips",
    tag: "Featured",
    date: "Mar 10, 2025",
    readTime: "5 min read",
    title: "How to Choose the Right Flooring for Every Room",
    excerpt:
      "From high-traffic living areas to moisture-prone bathrooms — a guide to flooring that balances beauty, durability, and lifestyle.",
  },
  {
    id: 2,
    num: "02",
    category: "Design Trends",
    tag: "Trending",
    date: "Feb 24, 2025",
    readTime: "4 min read",
    title: "2025 Furniture Trends Defining Modern Interiors",
    excerpt:
      "Curved silhouettes, warm earth tones, and sustainable materials are reshaping how we furnish homes this year.",
  },
  {
    id: 3,
    num: "03",
    category: "Project Spotlight",
    tag: "Case Study",
    date: "Feb 08, 2025",
    readTime: "6 min read",
    title: "Behind the Scenes: A 5-Star Hotel Furnishing Project",
    excerpt:
      "We take you inside a luxury resort project — from initial measurements to the final installation walkthrough.",
  },
  {
    id: 4,
    num: "04",
    category: "Buying Guide",
    tag: null,
    date: "Jan 20, 2025",
    readTime: "3 min read",
    title: "Veneer vs Solid Wood: Which Should You Choose?",
    excerpt:
      "Breaking down pros, cons, price points, and ideal use cases for two of the most popular furniture materials.",
  },
  {
    id: 5,
    num: "05",
    category: "Tips & Tricks",
    tag: null,
    date: "Jan 05, 2025",
    readTime: "4 min read",
    title: "10 Small Changes That Make a Big Difference in Any Room",
    excerpt:
      "Lighting, textures, and strategic placement — small upgrades that transform a space without a full renovation.",
  },
  {
    id: 6,
    num: "06",
    category: "Industry Insights",
    tag: "New",
    date: "Dec 18, 2024",
    readTime: "5 min read",
    title: "The Rise of Modular Furniture in Commercial Spaces",
    excerpt:
      "How offices, hotels, and co-working spaces are embracing modular furnishing for flexibility and cost efficiency.",
  },
];

const ArrowIcon = ({ size = 14 }) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    style={{ width: size, height: size, flexShrink: 0 }}
  >
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Unique SVG pattern per card */
const CardPattern = ({ index }) => {
  const patterns = [
    /* 01 — grid dots */
    <svg key="p1" viewBox="0 0 300 160" fill="none" className="blog-img-svg">
      {[40, 80, 120, 160, 200, 240].map(x =>
        [30, 60, 90, 120].map(y => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#c29e64" opacity="0.18" />
        ))
      )}
      <rect x="60" y="40" width="80" height="50" rx="6" stroke="#c29e64" strokeWidth="0.6" strokeDasharray="4 3" opacity="0.2" />
      <rect x="160" y="55" width="100" height="35" rx="5" stroke="#c29e64" strokeWidth="0.5" opacity="0.12" />
      <path d="M60 110 Q120 80 180 100 Q240 120 280 90" stroke="#c29e64" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.2" fill="none" />
    </svg>,
    /* 02 — diagonal lines */
    <svg key="p2" viewBox="0 0 300 160" fill="none" className="blog-img-svg">
      {[...Array(12)].map((_, i) => (
        <line key={i} x1={-20 + i * 30} y1="0" x2={i * 30 + 40} y2="160" stroke="#c29e64" strokeWidth="0.5" opacity="0.12" />
      ))}
      <circle cx="150" cy="80" r="40" stroke="#c29e64" strokeWidth="0.6" strokeDasharray="6 4" opacity="0.2" />
      <circle cx="150" cy="80" r="22" stroke="#c29e64" strokeWidth="0.5" opacity="0.14" />
    </svg>,
    /* 03 — concentric arcs */
    <svg key="p3" viewBox="0 0 300 160" fill="none" className="blog-img-svg">
      {[30, 60, 90, 120, 150].map(r => (
        <path key={r} d={`M ${150 - r} 160 A ${r} ${r} 0 0 1 ${150 + r} 160`} stroke="#c29e64" strokeWidth="0.6" opacity={0.22 - r * 0.001} fill="none" />
      ))}
      <rect x="90" y="30" width="120" height="70" rx="8" stroke="#c29e64" strokeWidth="0.5" strokeDasharray="5 3" opacity="0.15" />
    </svg>,
    /* 04 — cross hatch */
    <svg key="p4" viewBox="0 0 300 160" fill="none" className="blog-img-svg">
      {[...Array(10)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={16 * i} x2="300" y2={16 * i} stroke="#c29e64" strokeWidth="0.4" opacity="0.1" />
      ))}
      {[...Array(16)].map((_, i) => (
        <line key={`v${i}`} x1={20 * i} y1="0" x2={20 * i} y2="160" stroke="#c29e64" strokeWidth="0.4" opacity="0.1" />
      ))}
      <rect x="80" y="35" width="140" height="90" rx="10" fill="none" stroke="#c29e64" strokeWidth="0.8" opacity="0.22" />
      <path d="M140 80 L150 65 L160 80 L150 95 Z" fill="#c29e64" opacity="0.12" />
    </svg>,
    /* 05 — scattered circles */
    <svg key="p5" viewBox="0 0 300 160" fill="none" className="blog-img-svg">
      <circle cx="80"  cy="50"  r="30" stroke="#c29e64" strokeWidth="0.6" strokeDasharray="4 3" opacity="0.18" />
      <circle cx="180" cy="100" r="50" stroke="#c29e64" strokeWidth="0.5" strokeDasharray="5 4" opacity="0.14" />
      <circle cx="250" cy="40"  r="20" stroke="#c29e64" strokeWidth="0.6" opacity="0.2" />
      <line x1="30" y1="130" x2="270" y2="130" stroke="#c29e64" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.15" />
    </svg>,
    /* 06 — diamond grid */
    <svg key="p6" viewBox="0 0 300 160" fill="none" className="blog-img-svg">
      {[50, 100, 150, 200, 250].map(cx =>
        [40, 80, 120].map(cy => (
          <path key={`${cx}-${cy}`} d={`M ${cx} ${cy - 14} L ${cx + 14} ${cy} L ${cx} ${cy + 14} L ${cx - 14} ${cy} Z`}
            stroke="#c29e64" strokeWidth="0.5" opacity="0.16" fill="none" />
        ))
      )}
      <path d="M 150 25 L 164 39 L 150 53 L 136 39 Z" fill="#c29e64" opacity="0.1" />
    </svg>,
  ];
  return patterns[index % patterns.length];
};

export default function BlogSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="blog-root">
      <div className="blog-container">

        {/* ── HEADER ── */}
        <div className="blog-header">
          <div className="blog-header-left">
            <span className="blog-eyebrow">
              <span className="blog-eyebrow-bar" />
              From Our Desk
            </span>
            <h2 className="blog-heading">
              Ideas, Insights &
              <em> Inspirations </em>
            </h2>
          </div>

          <div className="blog-header-right">
            <p className="blog-sub">
              Expert tips, design trends, and real project stories from the world of premium interior furnishing.
            </p>
            <a href="/blogs" className="blog-all-btn">
              View All Articles
              <span className="blog-btn-icon"><ArrowIcon /></span>
            </a>
          </div>
        </div>

        {/* ── CARDS GRID — 3 columns ── */}
        <div className="blog-grid">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`blog-card${hovered === post.id ? " blog-card--hovered" : ""}`}
              onMouseEnter={() => setHovered(post.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Dark header with pattern */}
              <div className="blog-card-top">
                <CardPattern index={i} />

                {/* Big ghost number */}
                <span className="blog-card-ghost-num">{post.num}</span>

                {/* Category pill */}
                <span className="blog-card-pill">{post.category}</span>

                {/* Tag badge */}
                {post.tag && (
                  <span className="blog-card-tag">{post.tag}</span>
                )}

                {/* Read time chip — bottom right */}
                <span className="blog-card-time">{post.readTime}</span>
              </div>

              {/* White body */}
              <div className="blog-card-body">
                <p className="blog-card-date">{post.date}</p>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                <div className="blog-card-footer">
                  <button className="blog-read-btn">
                    Read Article
                    <span className="blog-btn-icon"><ArrowIcon /></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className="blog-strip">
          <div className="blog-strip-left">
            <span className="blog-strip-dot" />
            <span>New articles every week — covering trends, tips &amp; real projects</span>
          </div>
          <button className="blog-subscribe-btn">
            Subscribe for Updates
            <span className="blog-btn-icon"><ArrowIcon /></span>
          </button>
        </div>

      </div>
    </section>
  );
}