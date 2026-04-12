import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <div className="luxury-footer-top-line"></div>

      <div className="luxury-footer-container">
        <div className="luxury-footer-grid">
          {/* Brand Column */}
          <div className="luxury-footer-brand">
            <div className="luxury-footer-logo-wrap">
              <img
                src="https://epmwealth.com/wp-content/uploads/2023/06/logo-emp.png"
                alt="EPM Wealth"
                className="luxury-footer-logo"
              />
            </div>

            <h2 className="luxury-footer-brand-title">
              <span>EPM</span> Wealth
            </h2>

            <p className="luxury-footer-tagline">INSIGHT WITH INTEGRITY</p>

            <p className="luxury-footer-description">
              AMFI &amp; BSE registered wealth management firm. Helping India's
              most prominent families bridge the gap between their reality and
              their purpose since 2011.
            </p>

            <div className="luxury-footer-badges">
              <span>AMFI 100255</span>
              <span>BSE 1197501</span>
              <span>SEBI REG.</span>
            </div>

            <div className="luxury-footer-socials">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="luxury-footer-column">
            <h3>ABOUT</h3>
            <a href="#">Overview</a>
            <a href="#">Leadership</a>
            <a href="#">Brand Story</a>
            <a href="#">ESG</a>
          </div>

          {/* Wealth Management */}
          <div className="luxury-footer-column">
            <h3>WEALTH MANAGEMENT</h3>
            <a href="#">Family Business</a>
            <a href="#">Professionals &amp; CXOs</a>
            <a href="#">Founders &amp; Entrepreneurs</a>
            <a href="#">Women Clients</a>
          </div>

          {/* Asset Management */}
          <div className="luxury-footer-column">
            <h3>ASSET MANAGEMENT</h3>
            <a href="#">Discretionary PMS</a>
            <a href="#">Fund of Funds</a>
            <a href="#">Smart Beta</a>
            <a href="#">Global Investments</a>
          </div>

          {/* Navigate */}
          <div className="luxury-footer-column">
            <h3>NAVIGATE</h3>
            <a href="#">Vault</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="tel:+9101204264717">+91 0120 426 4717</a>
            <a href="mailto:info@epmwealth.com">info@epmwealth.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;