import React, { useEffect, useState } from "react";
import "./About.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import originImg from "../../assets/about/origin.jpeg";
import MissionVision from "../missvission/MissionVision";

const teamMembers = [
  {
    id: 1,
    name: "DILEEP HARI",
    role: "Managing Director",
    image: "https://new-epm-rk.vercel.app/Dileep-hari.jpg",
    stats: [
      { label: "YEARS IN INDUSTRY", value: "30+" },
      { label: "YEARS IN WM", value: "23+" },
      { label: "CREATIVITY", value: "20" },
      { label: "TEA MAKING SKILLS", value: "50" },
      { label: "TRAININGS GIVEN", value: "100+" },
      { label: "INDUSTRY KNOWLEDGE", value: "100" },
    ],
  },
  {
    id: 2,
    name: "CFP Tanish Gupta",
    role: "Additional Director",
    image: "https://new-epm-rk.vercel.app/mr-tanish-gupta%20(1).jpeg",
    stats: [
      { label: "YEARS IN INDUSTRY", value: "7+" },
      { label: "YEARS IN WM", value: "7+" },
      { label: "CREATIVITY", value: "70" },
      { label: "TEA MAKING SKILLS", value: "80" },
      { label: "TRAININGS GIVEN", value: "150+" },
      { label: "INDUSTRY KNOWLEDGE", value: "75" },
    ],
  },
  {
    id: 3,
    name: "CA Yogesh Garg",
    role: "Equity Strategic Analyst",
    image: "https://new-epm-rk.vercel.app/yogesh-garg.jpg",
    stats: [
      { label: "YEARS IN INDUSTRY", value: "30+" },
      { label: "YEARS IN WM", value: "25+" },
      { label: "CREATIVITY", value: "20" },
      { label: "TEA MAKING SKILLS", value: "0" },
      { label: "TRAININGS GIVEN", value: "10+" },
      { label: "INDUSTRY KNOWLEDGE", value: "100" },
    ],
  },
  {
    id: 4,
    name: "Rajesh Jain",
    role: "Marketing Head",
    image: "https://new-epm-rk.vercel.app/Rajesh-Jain.jpg",
    stats: [
      { label: "YEARS IN INDUSTRY", value: "30+" },
      { label: "YEARS IN WM", value: "7+" },
      { label: "CREATIVITY", value: "90" },
      { label: "TEA MAKING SKILLS", value: "20" },
      { label: "TRAININGS GIVEN", value: "25+" },
      { label: "INDUSTRY KNOWLEDGE", value: "75" },
    ],
  },
  {
    id: 5,
    name: "CA Ajay Jain",
    role: "Equity Strategic Analyst",
    image: "https://new-epm-rk.vercel.app/Ajay-Jain.jpg",
    stats: [
      { label: "YEARS IN INDUSTRY", value: "25+" },
      { label: "YEARS IN WM", value: "25+" },
      { label: "CREATIVITY", value: "20" },
      { label: "TEA MAKING SKILLS", value: "20" },
      { label: "TRAININGS GIVEN", value: "100+" },
      { label: "INDUSTRY KNOWLEDGE", value: "100" },
    ],
  },
];

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleFlip = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <>
     <div className="about-page">
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
            <span className="about-tag-line"></span>
          </div>

          <div className="about-content">
            <h3 className="about-title">
              <span className="about-title-light">Connect</span>
              <span className="about-title-gold">With Our Core</span>
            </h3>

            <h2 className="about-subtitle">
              INSIGHT <span>·</span> INTEGRITY <span>·</span> EXCELLENCE
            </h2>

            <p className="about-description">
              EPM Wealth, your very own wealth management company began its
              journey in 2016 providing tailor-made strategies for individuals
              and corporates, making challenging decisions effortless. Every
              individual needs the understanding of instruments to channel their
              wealth and we at EPM wealth help you do so. Even with the
              progression of technology in recent times, our philosophy of
              personal connection remains intact.
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

      <section className="origin-story-section about-overlap-panel" id="our-story">
        <div className="origin-story-shell">
          <div className="origin-story-grid">
            <div className="origin-story-left">
              <div className="origin-story-top">
                <p className="origin-story-label">OUR ORIGIN STORY</p>
              </div>

              <div className="origin-story-content">
                <h2 className="origin-story-heading">
                  "Your very own wealth management company — built on one
                  promise: personalised connection never goes out of style."
                </h2>

                <p className="origin-story-text">
                  EPM Wealth began its journey in 2016 with a clear mission — to
                  provide tailor-made wealth management strategies for
                  individuals and corporates, making challenging financial
                  decisions effortless.
                </p>

                <p className="origin-story-text">
                  Every individual needs the understanding of instruments to
                  channel their wealth. We built EPM Wealth to be that guide.
                  Even with the rapid progression of technology, our philosophy
                  of deep personal connection with every client remains
                  completely intact.
                </p>

                <a href="#contact" className="origin-story-cta">
                  START YOUR JOURNEY <span>→</span>
                </a>
              </div>
            </div>

            <div className="origin-story-right">
              <div className="origin-story-image-wrap">
                <img
                  src={originImg}
                  alt="EPM Wealth origin story"
                  className="origin-story-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="epm-team-section about-overlap-panel">
        <div className="epm-team-container">
          <div className="epm-team-heading-wrap">
            <p className="epm-team-label">OUR LEADERSHIP</p>
            <h2 className="epm-team-title">
              Powered by Passion, Driven by Team Work
            </h2>
            <p className="epm-team-subtitle">
              Our leadership team brings decades of experience across wealth
              management, capital markets, and financial advisory — united by a
              shared passion for transforming every client's financial future.
            </p>
          </div>

          <div className="epm-team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`epm-team-card ${
                  activeCard === member.id ? "is-flipped" : ""
                } ${index >= 3 ? "epm-team-card-bottom" : ""}`}
                onClick={() => handleFlip(member.id)}
              >
                <div className="epm-team-card-inner">
                  <div className="epm-team-card-front">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="epm-team-image"
                    />
                    <div className="epm-team-front-overlay"></div>

                    <div className="epm-team-front-content">
                      <span className="epm-team-front-tag">EPM Wealth</span>
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>

                  <div className="epm-team-card-back">
                    <div className="epm-team-back-content">
                      <p className="epm-team-back-mini">PROFILE DETAILS</p>
                      <h3>{member.name}</h3>
                      <h4>{member.role}</h4>

                      {member.stats ? (
                        <div className="epm-team-stats-list">
                          {member.stats.map((item, i) => (
                            <div className="epm-team-stat-row" key={i}>
                              <span>{item.label}</span>
                              <strong>{item.value}</strong>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <button
                        type="button"
                        className="epm-team-flip-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFlip(member.id);
                        }}
                      >
                        {activeCard === member.id ? "Show Front" : "View Details"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="advisory-council-section about-overlap-panel">
        <div className="advisory-council-container">
          <div className="advisory-council-top">
            <div className="advisory-council-top-left">
              <p className="advisory-council-label">EXTERNAL GUIDANCE</p>
              <h2 className="advisory-council-title">Advisory Council</h2>
            </div>

            <div className="advisory-council-top-right">
              <p>
                Industry luminaries who provide strategic counsel — bringing
                decades of expertise across finance, markets, and governance to
                elevate every decision we make.
              </p>
            </div>
          </div>

          <div className="advisory-council-grid">
            {/* existing advisory cards as it is */}
          </div>
        </div>
      </section>

      <div className="about-overlap-panel">
        <MissionVision />
      </div>
    </div>
    </>
  );
};

export default About;
