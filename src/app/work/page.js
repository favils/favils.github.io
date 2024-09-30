"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Work() {
  useEffect(() => {
    gsap.fromTo(
      "body",
      { scale: 0.8 },
      { scale: 1, duration: 1.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-col">
          <div className="nav-items">
            <a href="#">[in progress]</a>
          </div>
          <div className="nav-items">
            <p>software engineer</p>
          </div>
        </div>
        <div className="nav-col">
          <div className="nav-items">
            <a href="#" style={{ cursor: 'pointer' }}>work</a>
            <a href="#">contact</a>
          </div>
          <div className="nav-items">
            <a href="https://github.com/favils">github</a>
            <a href="https://www.linkedin.com/in/fatimavillena/">linkedin</a>
          </div>
          <div className="nav-items">
            <p>miami, fl</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
