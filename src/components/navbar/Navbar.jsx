import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [literacyOpen, setLiteracyOpen] = useState(false);

  // desktop dropdown states
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [desktopLiteracyOpen, setDesktopLiteracyOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setLiteracyOpen(false);
    setDesktopSolutionsOpen(false);
    setDesktopLiteracyOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className={`nav-left ${menuOpen ? "active" : ""}`}>
          <Link
            to="/about"
            onClick={closeMenu}
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>

          {/* DESKTOP SOLUTIONS DROPDOWN */}
          <div
            className={`nav-dropdown ${desktopSolutionsOpen ? "open" : ""}`}
            onMouseEnter={() => setDesktopSolutionsOpen(true)}
            onMouseLeave={() => setDesktopSolutionsOpen(false)}
          >
            <span
              className={`nav-dropdown-toggle ${
                location.pathname.includes("/solutions") ? "active" : ""
              }`}
            >
              Solutions <span className="desktop-arrow">▾</span>
            </span>

            <div className="nav-dropdown-menu">
              <Link to="/solutions/wealth-creation" onClick={closeMenu}>
                Wealth Creation
              </Link>
              <Link to="/solutions/wealth-protection" onClick={closeMenu}>
                Wealth Protection
              </Link>
              <Link to="/solutions/wealth-management" onClick={closeMenu}>
                Wealth Management
              </Link>
              <Link to="/solutions/portfolio-consultant" onClick={closeMenu}>
                Portfolio Consultant
              </Link>
            </div>
          </div>

          {/* DESKTOP FINANCIAL LITERACY DROPDOWN */}
          <div
            className={`nav-dropdown ${desktopLiteracyOpen ? "open" : ""}`}
            onMouseEnter={() => setDesktopLiteracyOpen(true)}
            onMouseLeave={() => setDesktopLiteracyOpen(false)}
          >
            <span
              className={`nav-dropdown-toggle ${
                location.pathname.includes("/financial-literacy") ||
                location.pathname.includes("/financialliteracy")
                  ? "active"
                  : ""
              }`}
            >
              Financial Literacy <span className="desktop-arrow">▾</span>
            </span>

            <div className="nav-dropdown-menu">
              <Link to="/financialliteracy/seminar-webinar" onClick={closeMenu}>
                Seminar & Webinar
              </Link>
            </div>
          </div>

          <Link
            to="/entrepreneurial-initiative"
            onClick={closeMenu}
            className={
              location.pathname === "/entrepreneurial-initiative"
                ? "active"
                : ""
            }
          >
            Entrepreneurial Initiative
          </Link>
        </div>

        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="https://epmwealth.com/wp-content/uploads/2023/06/logo-emp.png"
              alt="EPM Logo"
            />
          </Link>
        </div>

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <Link
            to="/login"
            onClick={closeMenu}
            className={location.pathname === "/login" ? "active" : ""}
          >
            Log-in
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MOBILE MENU PANEL */}
        <div className={`mobile-menu-panel ${menuOpen ? "active" : ""}`}>
          <Link
            to="/about"
            onClick={closeMenu}
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>

          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-title"
              onClick={() => setSolutionsOpen((prev) => !prev)}
            >
              Solutions
              <span className={`dropdown-arrow ${solutionsOpen ? "open" : ""}`}>
                ▾
              </span>
            </div>

            <div className={`mobile-submenu ${solutionsOpen ? "open" : ""}`}>
              <Link to="/solutions/wealth-creation" onClick={closeMenu}>
                Wealth Creation
              </Link>
              <Link to="/solutions/wealth-protection" onClick={closeMenu}>
                Wealth Protection
              </Link>
              <Link to="/solutions/wealth-management" onClick={closeMenu}>
                Wealth Management
              </Link>
              <Link to="/solutions/portfolio-consultant" onClick={closeMenu}>
                Portfolio Consultant
              </Link>
            </div>
          </div>

          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-title"
              onClick={() => setLiteracyOpen((prev) => !prev)}
            >
              Financial Literacy
              <span className={`dropdown-arrow ${literacyOpen ? "open" : ""}`}>
                ▾
              </span>
            </div>

            <div className={`mobile-submenu ${literacyOpen ? "open" : ""}`}>
              <Link to="/financial-literacy" onClick={closeMenu}>
                Overview
              </Link>
              <Link to="/financialliteracy/seminar-webinar" onClick={closeMenu}>
                Seminar & Webinar
              </Link>
            </div>
          </div>

          <Link
            to="/entrepreneurial-initiative"
            onClick={closeMenu}
            className={
              location.pathname === "/entrepreneurial-initiative"
                ? "active"
                : ""
            }
          >
            Entrepreneurial Initiative
          </Link>

          <div className="mobile-menu-divider"></div>

          <Link
            to="/login"
            onClick={closeMenu}
            className={location.pathname === "/login" ? "active" : ""}
          >
            Log-in
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Navbar;