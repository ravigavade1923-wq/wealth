import React, { useEffect, useRef, useState } from "react";
import "./PortfolioConsultant.css";

const statsData = [
  { value: 100, suffix: "Cr+", label: "AUM MANAGED", prefix: "₹" },
  { value: 1000, suffix: "+", label: "PORTFOLIOS REVIEWED", prefix: "" },
  { value: 15, suffix: "+", label: "YEARS EXPERIENCE", prefix: "" },
];

const progressData = [
  { label: "Equity Funds", value: 45, colorClass: "gold" },
  { label: "Debt & Bonds", value: 25, colorClass: "blue" },
  { label: "International", value: 15, colorClass: "green" },
  { label: "Gold & Commodities", value: 10, colorClass: "softgold" },
  { label: "Cash & Liquid", value: 5, colorClass: "silver" },
];
const consultationFlowData = [
  {
    id: "1",
    title: "Discovery & Data Collection",
    text: "Share your existing portfolio holdings, risk appetite, financial goals, and time horizons with our advisor via a structured intake form.",
    short: "Click On Me For More...",
  },
  {
    id: "2",
    title: "Deep Analysis",
    text: "Our advisory team conducts a thorough quantitative and qualitative analysis of your portfolio using institutional-grade tools.",
    short: "Click On Me For More...",
  },
  {
    id: "3",
    title: "Report Preparation",
    text: "We compile a comprehensive written report with findings, benchmarks, risk assessment, and a prioritised action plan.",
    short: "Click On Me For More...",
  },
  {
    id: "4",
    title: "Advisory Call",
    text: "A 60-minute 1-on-1 call to walk through the report, answer your questions, and agree on an implementation plan.",
    short: "Click On Me For More...",
  },
  {
    id: "5",
    title: "Follow-up & Monitoring",
    text: "Ongoing support as you implement recommendations, with check-ins at key milestones and quarterly portfolio updates.",
    short: "Click On Me For More...",
  },
];

const advisoryScopeData = [
  {
    number: "01",
    icon: "🔎",
    title: "Portfolio Health Check",
    description:
      "A full diagnostic of your existing investments — identifying hidden risks, overlaps, underperformers, and missed opportunities across all asset classes.",
  },
  {
    number: "02",
    icon: "⚖️",
    title: "Asset Allocation Review",
    description:
      "We evaluate whether your current allocation matches your risk tolerance, time horizon, and financial goals — and prescribe a rebalancing roadmap if needed.",
  },
  {
    number: "03",
    icon: "📊",
    title: "Risk-Return Analysis",
    description:
      "Beyond returns alone — we assess volatility-adjusted performance using Sharpe ratio, Sortino ratio, and drawdown analysis to tell the full story.",
  },
  {
    number: "04",
    icon: "🌐",
    title: "Diversification Audit",
    description:
      "Identify dangerous concentration risk — across sectors, geographies, asset classes, and individual securities — and build a truly diversified portfolio.",
  },
  {
    number: "05",
    icon: "🔄",
    title: "Rebalancing Strategy",
    description:
      "A clear, actionable rebalancing plan with specific buy/sell recommendations, tax-efficient execution sequencing, and optimal timing guidance.",
  },
  {
    number: "06",
    icon: "🏆",
    title: "Ongoing Advisory",
    description:
      "Continuous portfolio monitoring with quarterly reviews, market event alerts, and proactive recommendations — so you're always ahead of the curve.",
  },
];

const useCountUp = (end, duration = 1800) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let frame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setCount(current);

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return count;
};

const AnimatedNumber = ({ value, prefix = "", suffix = "" }) => {
  const count = useCountUp(value, 2000);
  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const PortfolioConsultant = () => {
  const cardRef = useRef(null);
  const [cardStyle, setCardStyle] = useState({});
  const [visibleBars, setVisibleBars] = useState(progressData.map(() => 0));

  const [activeProcessCard, setActiveProcessCard] = useState(null);

  const toggleProcessCard = (index) => {
    setActiveProcessCard(activeProcessCard === index ? null : index);
  };

  const [openCard, setOpenCard] = useState(null);

  const handleToggle = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleBars(progressData.map((item) => item.value));
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    setCardStyle({
      transform: `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.015)`,
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({
      transform:
        "perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
    });
  };

  return (
    <>
      <section className="pc-hero-section">
        <div className="pc-hero-overlay"></div>
        <div className="pc-grid-lines"></div>
        <div className="pc-blur-orb pc-orb-1"></div>
        <div className="pc-blur-orb pc-orb-2"></div>

        <div className="pc-hero-container">
          <div className="pc-hero-left">
            <div className="pc-top-tag">
              <span className="pc-tag-line"></span>
              <span>EPM WEALTH — PORTFOLIO ADVISORY</span>
            </div>

            <h1 className="pc-hero-title">
              Expert Portfolio
              <br />
              Consultation
            </h1>

            <p className="pc-hero-text">
              Your portfolio deserves more than generic advice. Get a
              personalised, in-depth review from SEBI-registered advisors who
              put your returns and your peace of mind first.
            </p>

            <div className="pc-stats-row">
              {statsData.map((item, index) => (
                <div className="pc-stat-box" key={index}>
                  <h3 className="pc-stat-value">
                    <AnimatedNumber
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </h3>
                  <p className="pc-stat-label">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="pc-hero-actions">
              <button className="pc-btn pc-btn-primary">
                BOOK CONSULTATION →
              </button>
              <button className="pc-btn pc-btn-secondary">
                SEE WHAT WE DO
              </button>
            </div>
          </div>

          <div className="pc-hero-right">
            <div
              className="pc-allocation-card"
              ref={cardRef}
              style={cardStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="pc-card-shine"></div>

              <h4 className="pc-card-title">SAMPLE PORTFOLIO ALLOCATION</h4>

              <div className="pc-bars-wrap">
                {progressData.map((item, index) => (
                  <div className="pc-bar-item" key={index}>
                    <div className="pc-bar-top">
                      <span>{item.label}</span>
                      <span>{visibleBars[index]}%</span>
                    </div>

                    <div className="pc-bar-track">
                      <div
                        className={`pc-bar-fill ${item.colorClass}`}
                        style={{ width: `${visibleBars[index]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pc-card-divider"></div>

              <div className="pc-card-bottom">
                <div className="pc-card-metric">
                  <span className="pc-mini-label">3-YEAR CAGR</span>
                  <h3>14.8%</h3>
                  <div className="pc-benchmark-chip">↑ vs 11.2% benchmark</div>
                </div>

                <div className="pc-card-metric">
                  <span className="pc-mini-label">RISK GRADE</span>
                  <h3>Moderate</h3>
                  <p>Sharpe: 1.42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
   CONSULTATION PROCESS SECTION
========================= */}
      <section className="consult-flow-section">
        <div className="consult-flow-container">
          <div className="consult-flow-label">OUR PROCESS</div>

          <h2 className="consult-flow-heading">How a consultation works</h2>

          <div className="consult-flow-list">
            {consultationFlowData.map((item, index) => (
              <div
                key={item.id}
                className={`consult-flow-row ${index % 2 === 0 ? "row-left" : "row-right"}`}
              >
                <div className="consult-flow-card-wrap">
                  <div
                    className={`consult-flow-card ${openCard === index ? "open" : ""}`}
                    onClick={() => handleToggle(index)}
                  >
                    {/* back content */}
                    <div className="consult-flow-card-back">
                      <div className="consult-flow-card-back-top">
                        <span className="consult-flow-card-number">
                          {item.id}
                        </span>
                        <h3>{item.title}</h3>
                      </div>

                      <p>{item.text}</p>
                    </div>

                    {/* front layer */}
                    <div className="consult-flow-card-front">
                      <span className="consult-flow-front-glow"></span>

                      <div className="consult-flow-front-inner">
                        <span className="consult-flow-front-number">
                          {item.id}
                        </span>

                        <div className="consult-flow-front-text">
                          <h3>{item.title}</h3>
                          <p>{item.short}</p>
                        </div>

                        <span className="consult-flow-front-icon">↘</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="consult-flow-node-wrap">
                  <div className="consult-flow-node-line"></div>
                  <div className="consult-flow-node">{item.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =========================
          SECTION 2 - WHAT WE DO
      ========================= */}
      <section className="advisory-services-block">
        <div className="advisory-services-shell">
          <div className="advisory-services-label">WHAT WE DO</div>

          <h2 className="advisory-services-title">
            A complete, unbiased view
            <br />
            of your portfolio&apos;s health
          </h2>

          <div className="advisory-chain-grid">
            {advisoryScopeData.map((item, index) => (
              <div
                className={`advisory-chain-card advisory-chain-${index + 1}`}
                key={index}
              >
                {/* chain line */}
                <div className="advisory-chain-link"></div>

                <article className="advisory-chain-inner">
                  <div className="advisory-service-number">{item.number}</div>

                  <div className="advisory-service-iconbox">
                    <span>{item.icon}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioConsultant;
