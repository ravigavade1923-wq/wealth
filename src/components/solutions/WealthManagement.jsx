import React from "react";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Landmark,
  Target,
  BadgeDollarSign,
  CheckCircle2,
  Sparkles,
  CircleDollarSign,
  Gem,
  BriefcaseBusiness,
} from "lucide-react";
import "./WealthManagement.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

// import legacyImg from "../../assets/solution/legacy.jpeg"

const pillarData = [
  {
    id: "01",
    title: "Crafting Legacy",
    subtitle: "Estate Planning",
    icon: <ShieldCheck size={20} />,
    // image: "legacyImg" ,
    points: [
      "Will drafting and structured wealth transfer support",
      "Trust and family continuity strategy",
      "Nomination and inheritance readiness",
    ],
  },
  {
    id: "02",
    title: "Effortless, Smart, Stress-Free",
    subtitle: "Tax Planning",
    icon: <BadgeDollarSign size={20} />,
    points: [
      "Income-tax aware wealth structuring",
      "Capital gains and exemption planning",
      "Tax-efficient investment positioning",
    ],
  },
  {
    id: "03",
    title: "Supercharge Your Path",
    subtitle: "Goal Planning",
    icon: <Target size={20} />,
    points: [
      "Children's education and future planning",
      "Retirement corpus building",
      "Home purchase and milestone mapping",
    ],
  },
];

const WealthManagement = () => {
  return (
    <main className="wm-page">
      <section className="wm-hero-section">
        <div className="wm-hero-bg"></div>
        <div className="wm-hero-overlay"></div>

        <div className="wm-hero-grid">
          <div className="wm-hero-left">
            <div className="wm-eyebrow-wrap">
              <span className="wm-eyebrow-line"></span>
              <span className="wm-eyebrow">
                EPM Wealth — Advisory Solutions
              </span>
               <span className="wm-eyebrow-line"></span>
            </div>

            <h1 className="wm-hero-title">
              One Stop Solution
              <span>for Wealth, Legacy & Life Goals</span>
            </h1>

            <p className="wm-hero-text">
             While protecting and creating wealth, there are a few things you might worry about. But worry not, for we have your back — with Estate Planning, Tax Planning, and Goal Planning under one roof.
            </p>

            <div className="wm-hero-actions">
              <a href="#contact" className="wm-btn wm-btn-primary">
                Let&apos;s Talk <ArrowRight size={18} />
              </a>

              <a href="#wellness-pillars" className="wm-btn wm-btn-secondary">
                Explore Services <ChevronDown size={18} />
              </a>
            </div>
          </div>

          <div className="wm-hero-right">
            <div className="wm-visual-shell">
              <div className="wm-orbit wm-orbit-one"></div>
              <div className="wm-orbit wm-orbit-two"></div>
              <div className="wm-orbit wm-orbit-three"></div>

              <div className="wm-core-sphere">
                <div className="wm-core-glow"></div>
                <div className="wm-core-content">
                  
                  <h2>360°</h2>
                  <h3> Financial Confidence</h3>
                  <p>
                    A refined framework that helps you grow wealth, reduce
                    stress, and prepare for the future with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wm-social-bar">
          <a href="/" aria-label="Instagram">
            <FaInstagram/>
          </a>
          <a href="/" aria-label="YouTube">
          <FaYoutube/>
          </a>
          <a href="/" aria-label="LinkedIn">
            <FaLinkedin/>
          </a>
          <a href="/" aria-label="Facebook">
            <FaFacebook/>
          </a>
        </div>
      </section>

      <section className="wm-pillars-section" id="wellness-pillars">
        <div className="wm-pillars-top">
          <div className="wm-pillars-heading-box">
            <span className="wm-section-tag">Out Advisory Solution</span>
           
          </div>

          <div className="wm-pillars-intro">
            Beyond wealth creation, true confidence comes from covering every
            major life decision with structure — so your money can support your
            vision today, tomorrow, and across generations.
          </div>
        </div>

        <div className="wm-pillars-list">
          {pillarData.map((item, index) => (
            <article className="wm-pillar-row" key={item.id}>
              <div className="wm-pillar-visual">
                <div
                  className={`wm-pillar-image-card wm-pillar-image-${index + 1}`}
                >
                  <div className="wm-image-overlay"></div>
                  <div className="wm-image-badge">
                    <span>{item.icon}</span>
                  </div>
                  <div className="wm-image-number">{item.id}</div>
                </div>
              </div>

              <div className="wm-pillar-content">
                <span className="wm-pillar-subtitle">{item.subtitle}</span>
                <h3>{item.title}</h3>
                 <span className="wm-line"></span>
                <p>
                  We design each advisory layer to remove uncertainty, simplify
                  important decisions, and create a more durable financial
                  foundation for your family and future.
                </p>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="wm-pillar-link">
                  Start {item.subtitle} <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
        <section className="wp-protection-cta-section">
        <div className="wp-protection-cta-bg">
          <span className="wp-cta-crystal wp-cta-crystal-1"></span>
          <span className="wp-cta-crystal wp-cta-crystal-2"></span>
          <span className="wp-cta-crystal wp-cta-crystal-3"></span>

          <div className="wp-cta-floating-card wp-cta-card-1"></div>
          <div className="wp-cta-floating-card wp-cta-card-2"></div>
          <div className="wp-cta-floating-card wp-cta-card-3"></div>
          <div className="wp-cta-floating-card wp-cta-card-4"></div>
        </div>

        <div className="wp-protection-cta-wrap">
          <h2 className="wp-protection-cta-title">
          One firm for everything that matters
          </h2>

          <p className="wp-protection-cta-text">
            Estate. Tax. Goals. Wealth. Protection. — All under one roof, guided by advisors who put your interests first.
          </p>

          <a href="#contact" className="wp-protection-cta-btn">
            <span>LET'S TALK</span>
            <span className="wp-protection-cta-arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default WealthManagement;
