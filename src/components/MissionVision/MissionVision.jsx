import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <div className="mv">
      <div className="mv-left">
        <div>
          <div className="label">01 — Identity</div>
          <div className="divider"></div>
          <h2>
            OUR
            <br />
            VISION
          </h2>
          <p>
            At Interra Decors, we aspire to be India's premier destination for
            premium furnishings, décor, and interior solutions — setting new
            standards in quality, style, and sustainability. We create homes
            that embody sophistication and timeless beauty.
          </p>
        </div>
        <div className="mv-icon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <ellipse
              cx="13"
              cy="13"
              rx="12"
              ry="8"
              stroke="#c8a84b"
              strokeWidth="1.8"
            />
            <circle
              cx="13"
              cy="13"
              r="4.5"
              stroke="#c8a84b"
              strokeWidth="1.8"
            />
            <circle cx="13" cy="13" r="1.8" fill="#c8a84b" />
          </svg>
        </div>
      </div>

      <div className="mv-right">
        <div>
          <div className="label">02 — Purpose</div>
          <div className="divider"></div>
          <h2>
            OUR
            <br />
            MISSION
          </h2>
          <p>
            Our mission is to make premium home decor accessible by delivering
            exceptional furnishings and interior solutions that balance elegance
            with functionality — driven by innovative design, meticulous
            craftsmanship, and sustainable materials.
          </p>
        </div>
        <div className="mv-icon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="11" stroke="#1a1a1a" strokeWidth="1.8" />
            <circle
              cx="13"
              cy="13"
              r="6.5"
              stroke="#1a1a1a"
              strokeWidth="1.8"
            />
            <circle
              cx="13"
              cy="13"
              r="2.5"
              stroke="#1a1a1a"
              strokeWidth="1.8"
            />
            <line
              x1="18"
              y1="7"
              x2="13"
              y2="12"
              stroke="#1a1a1a"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <polygon points="20,4 21,9 16,8" fill="#1a1a1a" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
