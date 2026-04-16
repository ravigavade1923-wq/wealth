import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const statsData = [
  { id: 1, value: 150, prefix: "₹", suffix: "Cr+", label: "AUM" },
  { id: 2, value: 1000, prefix: "", suffix: "+", label: "Unique Clients" },
  { id: 3, value: 30, prefix: "", suffix: "+", label: "Cities" },
  { id: 4, value: 15, prefix: "", suffix: "+", label: "Years" },
  { id: 5, value: 8, prefix: "", suffix: "+", label: "Awards" },
];


const About = () => {

     const [counts, setCounts] = useState(statsData.map(() => 0));
  const [startAnim, setStartAnim] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
        }
      },
      { threshold: 0.35 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnim) return;

    const timers = statsData.map((item, index) => {
      let start = 0;
      const duration = 1800;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = item.value / totalSteps;

      return setInterval(() => {
        start += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start >= item.value ? item.value : Math.floor(start);
          return updated;
        });

        if (start >= item.value) {
          clearInterval(timers[index]);
        }
      }, stepTime);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [startAnim]);


  return (
    <>
    <section className="about-hero" id="about">
      <div className="about-hero-overlay"></div>
      <div className="about-grid-lines"></div>
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-social-bar">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className="about-container">
        <div className="about-top-tag">
          <span className="about-tag-line"></span>
          <p>EPM WEALTH — EST. 2016</p>
        </div>

        <div className="about-content">
          <h1 className="about-title">
            <span className="about-title-light">Connect</span>
            <span className="about-title-gold">With Our Core</span>
          </h1>

          <h2 className="about-subtitle">
            INSIGHT <span>·</span> INTEGRITY <span>·</span> EXCELLENCE
          </h2>

          <p className="about-description">
            A wealth management company powered by passion and driven by teamwork
            — built on the belief that every Indian deserves financial literacy
            and a purposeful path to prosperity.
          </p>

          <div className="about-buttons">
            <a href="#our-story" className="about-btn about-btn-primary">
              OUR STORY <span>→</span>
            </a>

            <a href="#contact" className="about-btn about-btn-secondary">
              START A CONVERSATION <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="about-stats-section" ref={statsRef}>
        <div className="about-stats-container">
          

          <div className="about-stats-grid">
            {statsData.map((item, index) => (
              <div className="about-stat-card" key={item.id}>
                <h3>
                  {item.prefix}
                  {counts[index].toLocaleString()}
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
                <span className="about-stat-glow"></span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;