import React, { useState } from "react";
import "./WealthCreation.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const philosophyCards = [
  {
    id: "01",
    title: "Goals-First Investing",
    content:
      "Every investment is tied to a specific life goal. We never invest in isolation — each position serves a defined purpose in your overall wealth architecture.",
  },
  {
    id: "02",
    title: "Risk-Adjusted Returns",
    content:
      "We measure success not just by returns, but by the risk taken to achieve them. A higher Sharpe ratio matters more than absolute numbers.",
  },
  {
    id: "03",
    title: "True Diversification",
    content:
      "Genuine diversification across asset classes, geographies, sectors, and market caps — not just owning 20 funds that all hold the same 50 stocks.",
  },
  {
    id: "04",
    title: "Long-Term Discipline",
    content:
      "We guide clients to stay the course through market cycles. The greatest wealth destroyer is not market crashes — it’s emotional decision-making.",
  },
];

const PhilosophyCard = ({ card, isOpen, onClick }) => {
  return (
    <div
      className={`wc-philosophy-card ${isOpen ? "open" : ""}`}
      onClick={onClick}
    >
      <div className="wc-card-back-content">
        <div className="wc-card-back-top">
          <span className="wc-card-number">{card.id}</span>
          <h3>{card.title}</h3>
        </div>
        <p>{card.content}</p>
      </div>

      <div className="wc-card-front-layer">
        <div className="wc-front-glow"></div>
        <div className="wc-front-inner">
          <span className="wc-front-number">{card.id}</span>

          <div className="wc-front-text">
            <h3>{card.title}</h3>
            <p>Click to reveal the philosophy</p>
          </div>

          <div className="wc-front-icon">✦</div>
        </div>
      </div>
    </div>
  );
};

const WealthCreation = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <>
      <section className="wc-hero-section">
        <div className="wc-hero-bg-grid"></div>
        <div className="wc-hero-glow wc-hero-glow-one"></div>
        <div className="wc-hero-glow wc-hero-glow-two"></div>

        <div className="wc-social-stick">
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
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
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

        <div className="wc-hero-container">
          <div className="wc-hero-left">
            <div className="wc-hero-kicker-wrap">
              <span className="wc-hero-kicker-line"></span>
              <p className="wc-hero-kicker">EPM WEALTH — INVESTMENT ADVISORY</p>
              <span className="wc-hero-kicker-line"></span>
            </div>

            <h1 className="wc-hero-title">
              <span>Build Your</span>
              <span>Wealth,</span>
              <span>Systematically</span>
            </h1>

            <p className="wc-hero-description">
              True wealth isn&apos;t built overnight — it&apos;s built with
              discipline, diversification, and the right guidance. Let EPM
              Wealth&apos;s  craft a wealth creation
              strategy tailored precisely to your goals.
            </p>

            <div className="wc-hero-buttons">
              <a href="#contact" className="wc-hero-btn wc-hero-btn-primary">
                START BUILDING <span>→</span>
              </a>

              <a href="#avenues" className="wc-hero-btn wc-hero-btn-secondary">
                EXPLORE AVENUES <span>⌄</span>
              </a>
            </div>
          </div>

          <div className="wc-hero-right">
            <div className="wc-growth-panel">
              <div className="wc-growth-panel-shine"></div>

              <div className="wc-panel-head">
                <p>WEALTH GROWTH PROJECTION</p>
              </div>

              <div className="wc-chart-bars">
                <div className="wc-bar-wrap">
                  <div className="wc-bar wc-bar-1"></div>
                  <span>Yr 1</span>
                </div>
                <div className="wc-bar-wrap">
                  <div className="wc-bar wc-bar-2"></div>
                  <span>Yr 3</span>
                </div>
                <div className="wc-bar-wrap">
                  <div className="wc-bar wc-bar-3"></div>
                  <span>Yr 5</span>
                </div>
                <div className="wc-bar-wrap">
                  <div className="wc-bar wc-bar-4"></div>
                  <span>Yr 7</span>
                </div>
                <div className="wc-bar-wrap">
                  <div className="wc-bar wc-bar-5"></div>
                  <span>Yr 10</span>
                </div>
                <div className="wc-bar-wrap">
                  <div className="wc-bar wc-bar-6"></div>
                  <span>Yr 15</span>
                </div>
              </div>

              <div className="wc-chart-legend">
                <span>
                  <i className="mod"></i>Moderate
                </span>
                <span>
                  <i className="bal"></i>Balanced
                </span>
                <span>
                  <i className="gro"></i>Growth
                </span>
              </div>

              <div className="wc-growth-stats">
                <div className="wc-growth-stat">
                  <h3>10</h3>
                  <p>STARTING SIP</p>
                </div>
                <div className="wc-growth-stat">
                  <h3>12</h3>
                  <p>EXPECTED CAGR</p>
                </div>
                <div className="wc-growth-stat">
                  <h3>3.9</h3>
                  <p>15-YEAR CORPUS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wc-bottom-strip">
          <div className="wc-bottom-card">
            <h3>₹100Cr+</h3>
            <p>ASSETS UNDER ADVISORY</p>
          </div>
          <div className="wc-bottom-card">
            <h3>1000+</h3>
            <p>UNIQUE CLIENTS</p>
          </div>
        </div>
      </section>

      <section className="wc-avenues-section" id="avenues">
        <div className="wc-avenues-container">
          <div className="wc-avenues-top">
            <div className="wc-avenues-top-left">
              <p className="wc-avenues-label">WHERE WE INVEST</p>
              <h2 className="wc-avenues-title">
                Investment avenues
                <span>curated for your goals</span>
              </h2>
            </div>

            <div className="wc-avenues-top-right">
              <p>
                We build diversified portfolios across multiple asset classes —
                each selected for its risk-adjusted return potential and fit
                within your overall wealth strategy.
              </p>
            </div>
          </div>

          <div className="wc-avenues-grid">
            <article className="wc-avenue-card wc-avenue-gold">
              <div className="wc-avenue-shine"></div>
              <div className="wc-avenue-icon">📈</div>
              <h3>Equity &amp; Direct Stocks</h3>
              <p>
                Long-term wealth creation through a carefully curated equity
                portfolio. We identify high-conviction stocks and equity mutual
                funds aligned with your risk tolerance and investment horizon.
              </p>

              <div className="wc-avenue-tags">
                <span>HIGH GROWTH</span>
                <span>LONG-TERM</span>
              </div>

              <div className="wc-avenue-meta">
                <div>
                  <small>TYPICAL HORIZON</small>
                  <strong>5–10+ years</strong>
                </div>
                <div>
                  <small>RISK LEVEL</small>
                  <strong>Moderate-High</strong>
                </div>
              </div>
            </article>

            <article className="wc-avenue-card wc-avenue-navy">
              <div className="wc-avenue-shine"></div>
              <div className="wc-avenue-icon">🏦</div>
              <h3>Mutual Funds &amp; SIPs</h3>
              <p>
                Systematic investment through diversified mutual fund
                portfolios. We select top-quartile fund managers across equity,
                debt, hybrid, and sectoral categories for optimised returns.
              </p>

              <div className="wc-avenue-tags">
                <span>DIVERSIFIED</span>
                <span>TAX-EFFICIENT</span>
              </div>

              <div className="wc-avenue-meta">
                <div>
                  <small>MIN. INVESTMENT</small>
                  <strong>₹500/month</strong>
                </div>
                <div>
                  <small>RISK LEVEL</small>
                  <strong>Low to High</strong>
                </div>
              </div>
            </article>

            <article className="wc-avenue-card wc-avenue-green">
              <div className="wc-avenue-shine"></div>
              <div className="wc-avenue-icon">🌐</div>
              <h3>International Investments</h3>
              <p>
                Access global markets and hedge against rupee depreciation
                through international mutual funds, ETFs, and direct overseas
                portfolios managed by world-class investment managers.
              </p>

              <div className="wc-avenue-tags">
                <span>GLOBAL EXPOSURE</span>
                <span>CURRENCY HEDGE</span>
              </div>

              <div className="wc-avenue-meta">
                <div>
                  <small>MIN. INVESTMENT</small>
                  <strong>₹5 Lakhs</strong>
                </div>
                <div>
                  <small>RISK LEVEL</small>
                  <strong>Moderate-High</strong>
                </div>
              </div>
            </article>

            <article className="wc-avenue-card wc-avenue-amber">
              <div className="wc-avenue-shine"></div>
              <div className="wc-avenue-icon">🪙</div>
              <h3>Alternate Assets &amp; AIFs</h3>
              <p>
                For sophisticated investors seeking higher returns and portfolio
                diversification — including Private Equity, Venture Capital,
                Real Estate Funds, and EPM’s own Fund of Funds.
              </p>

              <div className="wc-avenue-tags">
                <span>PREMIUM</span>
                <span>ILLIQUID PREMIUM</span>
              </div>

              <div className="wc-avenue-meta">
                <div>
                  <small>MIN. INVESTMENT</small>
                  <strong>₹1 Crore</strong>
                </div>
                <div>
                  <small>RISK LEVEL</small>
                  <strong>High</strong>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wc-philosophy-section">
        <div className="wc-philosophy-container">
          <div className="wc-philosophy-layout">
            <div className="wc-philosophy-left">
              <div className="wc-philosophy-header">
                <span className="wc-philosophy-label">OUR INVESTMENT DNA</span>

                <h2>
                  The philosophy behind <br />
                  <span>every decision</span>
                </h2>

                <p>
                  We don’t chase headlines or market fads. Every investment
                  recommendation is grounded in our core investment philosophy —
                  built over 15+ years of managing India’s most prominent
                  wealth.
                </p>
              </div>

              <div className="wc-philosophy-cards">
                {philosophyCards.map((card) => (
                  <PhilosophyCard
                    key={card.id}
                    card={card}
                    isOpen={openCard === card.id}
                    onClick={() => handleCardClick(card.id)}
                  />
                ))}
              </div>
            </div>

            <div className="wc-philosophy-right">
              <div className="wc-philosophy-image-wrap">
                <div className="wc-philosophy-orb wc-philosophy-orb-one"></div>
                <div className="wc-philosophy-orb wc-philosophy-orb-two"></div>
                <div className="wc-philosophy-image-shine"></div>

                <img
                  src="https://i.pinimg.com/736x/52/ad/c4/52adc455f6304b7b089eda4b511d789c.jpg"
                  alt="Investment philosophy"
                  className="wc-philosophy-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WealthCreation;
