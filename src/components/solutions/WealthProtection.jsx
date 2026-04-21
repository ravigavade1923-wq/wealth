import React, { useEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowRight,
  FaChevronDown,
  FaShieldAlt,
  FaHeartbeat,
  FaHome,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WealthProtection.css";

gsap.registerPlugin(ScrollTrigger);

const protectionCards = [
  {
    id: 1,
    title: "Protect Your Future",
    label: "Term Plan",
    text: "Protect the life you've built, and the future you've imagined.",
    icon: <FaShieldAlt />,
    cls: "wp-info-card wp-card-top-left",
  },
  {
    id: 2,
    title: "Legacy",
    label: "Home Insurance",
    text: "Secure your legacy, pass on your dreams with structured protection.",
    icon: <FaHome />,
    cls: "wp-info-card wp-card-top-right",
  },
  {
    id: 3,
    title: "Peace of Mind",
    label: "Mediclaim",
    text: "Stay stress-free in uncertainty with smart health coverage.",
    icon: <FaHeartbeat />,
    cls: "wp-info-card wp-card-bottom-left",
  },
  {
    id: 4,
    title: "Safeguard Future Expenses",
    label: "Life Insurance",
    text: "Shield unexpected financial burdens and preserve continuity.",
    icon: <FaHandHoldingUsd />,
    cls: "wp-info-card wp-card-bottom-right",
  },
];

const protectionProducts = [
  {
    id: 1,
    icon: "🛡️",
    title: "Term Plan",
    text: "The most cost-effective way to provide a financial safety net for your family. A high sum assured at a low premium ensures your loved ones are never left vulnerable.",
    badge: "Life Cover",
    accent: "gold",
  },
  {
    id: 2,
    icon: "🏠",
    title: "Home Insurance",
    text: "Your home is your biggest asset. Protect it against natural disasters, theft, fire, and structural damage with comprehensive home insurance.",
    badge: "Asset Cover",
    accent: "teal",
  },
  {
    id: 3,
    icon: "❤️",
    title: "Life Insurance",
    text: "More than a death benefit — life insurance plans that build corpus, provide tax benefits, and serve as a long-term wealth creation instrument alongside protection.",
    badge: "Wealth + Cover",
    accent: "gold",
  },
  {
    id: 4,
    icon: "⚕️",
    title: "Mediclaim",
    text: "Healthcare costs are skyrocketing. A robust mediclaim policy shields your savings from medical emergencies with cashless hospitalisation and comprehensive coverage.",
    badge: "Health Cover",
    accent: "rose",
  },
];

const WealthProtection = () => {
  const [count, setCount] = useState(0);
  const reasonsRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = 80;
    const duration = 2000;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".wp-insight-top-left, .wp-insight-top-right", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wp-insight-section",
          start: "top 82%",
        },
      });

      gsap.from(".wp-insight-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wp-insight-grid",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".wp-products-top-left, .wp-products-top-right", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wp-products-section",
          start: "top 82%",
        },
      });

      gsap.from(".wp-product-card", {
        y: 60,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wp-products-grid",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="wp-page">
      <section className="wp-hero-section">
        <div className="wp-hero-bg"></div>
        <div className="wp-hero-noise"></div>
        <div className="wp-hero-glow wp-glow-one"></div>
        <div className="wp-hero-glow wp-glow-two"></div>

        <div className="wp-social-stick">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        <div className="wp-hero-container">
          <div className="wp-hero-left">
            <div className="wp-kicker-wrap">
              <span className="wp-kicker-line"></span>
              <span className="wp-kicker">
                EPM WEALTH — INSURANCE & PROTECTION
              </span>
            </div>

            <h1 className="wp-hero-title">
              <span>Secure Your</span>
              <span>Tomorrow,</span>
              <span>Today</span>
            </h1>

            <p className="wp-hero-description">
              Protect the lifes on assets you've built and the future you've
              imagined. With expert guidance and a tailored approach, we help
              you find the right protection solution designed around your
              lifestyle, goals, and long-term family security.
            </p>

            <div className="wp-hero-buttons">
              <a href="#contact" className="wp-hero-btn wp-btn-primary">
                <span>Start Your Journey</span>
                <FaArrowRight />
              </a>

              <a href="#coverage" className="wp-hero-btn wp-btn-secondary">
                <span>Explore Coverage</span>
                <FaChevronDown />
              </a>
            </div>

            <div className="wp-hero-bottom-stat">
              <div className="wp-bottom-stat-card">
                <h3 className="wp-count">{count}%</h3>
                <p>Indians Underinsured</p>
              </div>
            </div>
          </div>

          <div className="wp-hero-right">
            <div className="wp-protection-model">
              <div className="wp-model-glow"></div>

              {protectionCards.map((item) => (
                <article key={item.id} className={item.cls}>
                  <div className="wp-info-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <h4>{item.label}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wp-insight-section">
        <div className="wp-insight-bg wp-insight-bg-1"></div>
        <div className="wp-insight-bg wp-insight-bg-2"></div>

        <div className="wp-insight-wrap">
          <div className="wp-insight-top">
            <div className="wp-insight-top-left">
              <span className="wp-insight-kicker">Why Protection Matters</span>
              <h2 className="wp-insight-title">
                A stronger protection layer
                <br />
                for every stage of life
              </h2>
            </div>

            <div className="wp-insight-top-right">
              <p>
                Protection planning is not just about insurance — it is about
                preserving your lifestyle, shielding your family, and ensuring
                your wealth strategy remains resilient through uncertainty.
              </p>
            </div>
          </div>

          <div className="wp-insight-grid">
            <article className="wp-insight-card">
              <span className="wp-insight-shine"></span>
              <div className="wp-insight-orb"></div>
              <span className="wp-insight-no">01</span>
              <h3>Rising Healthcare Costs</h3>
              <p>
                Medical inflation continues to outpace general inflation, making
                health coverage a critical layer of wealth preservation.
              </p>
            </article>

            <article className="wp-insight-card">
              <span className="wp-insight-shine"></span>
              <div className="wp-insight-orb"></div>
              <span className="wp-insight-no">02</span>
              <h3>Income Protection</h3>
              <p>
                Your earning ability powers every long-term goal. Smart
                protection ensures your family remains financially secure if
                life changes unexpectedly.
              </p>
            </article>

            <article className="wp-insight-card">
              <span className="wp-insight-shine"></span>
              <div className="wp-insight-orb"></div>
              <span className="wp-insight-no">03</span>
              <h3>Legacy Continuity</h3>
              <p>
                A structured protection plan helps pass wealth efficiently while
                keeping your family’s long-term aspirations intact.
              </p>
            </article>

            <article className="wp-insight-card">
              <span className="wp-insight-shine"></span>
              <div className="wp-insight-orb"></div>
              <span className="wp-insight-no">04</span>
              <h3>Tax Efficiency</h3>
              <p>
                Well-chosen insurance instruments can also support tax planning,
                helping protection work alongside broader financial goals.
              </p>
            </article>

            <article className="wp-insight-card">
              <span className="wp-insight-shine"></span>
              <div className="wp-insight-orb"></div>
              <span className="wp-insight-no">05</span>
              <h3>Unbiased Guidance</h3>
              <p>
                Independent advice ensures the product recommendation is aligned
                to your needs, not driven by commissions or generic sales
                targets.
              </p>
            </article>

            <article className="wp-insight-card">
              <span className="wp-insight-shine"></span>
              <div className="wp-insight-orb"></div>
              <span className="wp-insight-no">06</span>
              <h3>Portfolio Integration</h3>
              <p>
                Protection should not sit separately from investments — it
                should integrate naturally into your overall wealth
                architecture.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="wp-products-section" id="coverage">
        <div className="wp-products-wrap">
          <div className="wp-products-top">
            <div className="wp-products-top-left">
              <span className="wp-products-kicker">Our Products</span>
              <h2 className="wp-products-title">
                Protection solutions
                <br />
                built for you
              </h2>
            </div>

            <div className="wp-products-top-right">
              <p>
                Comprehensive insurance coverage across every aspect of your
                life — from health to home to legacy planning.
              </p>
            </div>
          </div>

          <div className="wp-products-grid">
            {protectionProducts.map((item) => (
              <article
                key={item.id}
                className={`wp-product-card wp-product-${item.accent}`}
              >
                <div className="wp-product-card-inner">
                  <div className="wp-product-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="wp-product-badge">{item.badge}</span>
                </div>
              </article>
            ))}
          </div>
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
            Don’t leave your future to chance
          </h2>

          <p className="wp-protection-cta-text">
            Connect with an EPM Wealth advisor today for a free, no-obligation
            protection review tailored to your needs.
          </p>

          <a href="#contact" className="wp-protection-cta-btn">
            <span>Start Your Journey</span>
            <span className="wp-protection-cta-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WealthProtection;
