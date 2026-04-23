import React, { useEffect, useRef } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import {
  HiOutlineChartBar,
  HiOutlinePresentationChartLine,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import {
  PiPiggyBank,
  PiCoins,
  PiCurrencyDollar,
  PiPlant,
  PiChartPieSlice,
  PiChartBar,
  PiMedal,
  PiDeviceMobile,
  PiUsersThree,
  PiHeadset,
  PiChartLineUp,
  PiBuildings,
  PiGlobeHemisphereWest,
} from "react-icons/pi";
import { TbReceiptTax } from "react-icons/tb";
import "./EntrepreneurialInitiative.css";

const whyIndustryData = [
  {
    icon: <PiMedal />,
    title: "High-Prestige Profession",
  },
  {
    icon: <PiCoins />,
    title: "Lucrative Income Potential",
  },
  {
    icon: <PiCurrencyDollar />,
    title: "Luxury Rewards",
  },
  {
    icon: <PiChartLineUp />,
    title: "Unlimited Potential For Growth",
  },
];

const whyUsData = [
  {
    icon: <PiBuildings />,
    title: "Online Portal",
    desc: "Real-time class technology platform for learners.",
  },
  {
    icon: <PiDeviceMobile />,
    title: "Mobile Application",
    desc: "Mobile app platform for your real-time learning journey.",
  },
  {
    icon: <PiUsersThree />,
    title: "Sales Support",
    desc: "Focused field support for advising and business growth.",
  },
  {
    icon: <HiOutlinePresentationChartLine />,
    title: "Marketing Support",
    desc: "Co-branded marketing support for promotions.",
  },
  {
    icon: <HiOutlineMagnifyingGlass />,
    title: "Research & Report",
    desc: "Market updates, helpful research insights and reports.",
  },
  {
    icon: <PiChartLineUp />,
    title: "High Earnings",
    desc: "Flexible earning opportunities with scalable income.",
  },
  {
    icon: <PiHeadset />,
    title: "Back Office Support",
    desc: "Reliable backend office support for smoother operations.",
  },
  {
    icon: <PiGlobeHemisphereWest />,
    title: "Client Servicing",
    desc: "Dedicated client guidance for better engagement and retention.",
  },
];

const leftFloatingIcons = [
  { icon: <PiPiggyBank />, cls: "ei-left-1" },
  { icon: <HiOutlineChartBar />, cls: "ei-left-2" },
  { icon: <PiChartBar />, cls: "ei-left-3" },
  { icon: <PiPlant />, cls: "ei-left-4" },
  { icon: <PiCurrencyDollar />, cls: "ei-left-5" },
];

const rightFloatingIcons = [
  { icon: <PiUsersThree />, cls: "ei-right-1" },
  { icon: <HiOutlineMagnifyingGlass />, cls: "ei-right-2" },
  { icon: <PiCoins />, cls: "ei-right-3" },
  { icon: <TbReceiptTax />, cls: "ei-right-4" },
  { icon: <PiChartPieSlice />, cls: "ei-right-5" },
];

const EntrepreneurialInitiative = () => {
  const heroRef = useRef(null);
  const parallaxItemsRef = useRef([]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / centerX;
      const moveY = (y - centerY) / centerY;

      parallaxItemsRef.current.forEach((item) => {
        if (!item) return;
        const depth = Number(item.getAttribute("data-depth")) || 6;
        item.style.transform = `translate3d(${moveX * depth}px, ${moveY * depth}px, 0) rotateX(${moveY * 2.5}deg) rotateY(${moveX * -3.5}deg)`;
      });
    };

    const handleMouseLeave = () => {
      parallaxItemsRef.current.forEach((item) => {
        if (!item) return;
        item.style.transform =
          "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)";
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="ei-page">
      <div className="ei-social-bar">
        <a href="/" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="/" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="/" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="/" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>

      <section className="ei-hero" ref={heroRef}>
        <div className="ei-hero-bg-grid"></div>
        <div className="ei-hero-glow ei-hero-glow-1"></div>
        <div className="ei-hero-glow ei-hero-glow-2"></div>
        <div className="ei-hero-glass-orb ei-orb-1"></div>
        <div className="ei-hero-glass-orb ei-orb-2"></div>
        <div className="ei-hero-glass-orb ei-orb-3"></div>

        <div className="ei-floating-left">
          {leftFloatingIcons.map((item, index) => (
            <div
              key={index}
              className={`ei-floating-icon ${item.cls}`}
              ref={(el) => (parallaxItemsRef.current[index] = el)}
              data-depth={5 + index}
            >
              <span>{item.icon}</span>
            </div>
          ))}
        </div>

        <div
          className="ei-hero-content"
          ref={(el) => (parallaxItemsRef.current[20] = el)}
          data-depth="7"
        >
          <div className="ei-badge">Entrepreneurial Initiative</div>
          <h1>
            "The Secret Of Getting Ahead Is Getting Started"
          </h1>
          <p>
            Build confidence, unlock opportunity, and start your journey toward
            entrepreneurship with expert guidance, financial awareness, and a
            structured growth ecosystem.
          </p>

          
        </div>

        <div className="ei-floating-right">
          {rightFloatingIcons.map((item, index) => (
            <div
              key={index}
              className={`ei-floating-icon ${item.cls}`}
              ref={(el) => (parallaxItemsRef.current[index + 30] = el)}
              data-depth={5 + index}
            >
              <span>{item.icon}</span>
            </div>
          ))}
        </div>

        <div className="ei-scroll-indicator">
          <span></span>
        </div>
      </section>

      <div className="ei-overlap-shell">
        <section id="ei-intro" className="ei-intro-section ei-glass-panel">
          <div className="ei-section-shine"></div>

          <div className="ei-intro-highlight">
            We At EPM Wealth Believe That Entrepreneurship Is A Trait Inherent
            In Each Individual, Waiting To Be Nurtured And Guided Towards
            Success. We Recognize The Significance Of Having Diverse Streams Of
            Income, And As Such, We Strive To Offer Unparalleled Opportunities
            For Anyone Seeking To Establish Themselves In The Finance Industry.
          </div>

          <div className="ei-intro-grid">
            <div className="ei-intro-card">
              <h3>Our Purpose</h3>
              <p>
                Our platform is designed to provide the best possible guidance
                to individuals looking to embark on their entrepreneurial
                journey. With our expertise and resources, we aim to equip
                aspiring entrepreneurs with the knowledge and tools necessary to
                navigate the complexities of the industry.
              </p>
            </div>

            <div className="ei-intro-card">
              <h3>Our Commitment</h3>
              <p>
                The finance industry and empire are built by successful and
                accomplished professionals. At EPM Wealth, we are committed to
                empowering individuals to realize their full potential and
                achieve financial independence through entrepreneurship. We
                firmly believe that our platform offers the ideal foundation for
                anyone looking to make their mark in the finance industry.
              </p>
            </div>
          </div>
        </section>

        <section className="ei-why-industry-section ei-glass-panel">
          <div className="ei-section-head">
       
            <h2>Why Industry?</h2>
          </div>

          <div className="ei-industry-grid">
            {whyIndustryData.map((item, index) => (
              <div className="ei-industry-card" key={index}>
                <div className="ei-card-crystal"></div>
                <div className="ei-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="ei-whyus" className="ei-why-us-section ei-glass-panel">
          <div className="ei-section-head">

            <h2>Why Us?</h2>
          </div>

          <div className="ei-whyus-grid">
            {whyUsData.map((item, index) => (
              <div className="ei-whyus-card" key={index}>
                <div className="ei-whyus-card-shine"></div>
                <div className="ei-whyus-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="ei-cta-bottom">
            <a href="/contact" className="ei-btn ei-btn-primary">
              START YOUR JOURNEY
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EntrepreneurialInitiative;