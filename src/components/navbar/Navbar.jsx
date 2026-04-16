import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

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
          {/* <Link
            to="/"
            onClick={closeMenu}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link> */}

          <Link
            to="/about"
            onClick={closeMenu}
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>

          <Link
            to="/solutions"
            onClick={closeMenu}
            className={location.pathname === "/solutions" ? "active" : ""}
          >
            Solutions
          </Link>

          <Link
            to="/financial-literacy"
            onClick={closeMenu}
            className={location.pathname === "/financial-literacy" ? "active" : ""}
          >
            Financial Literacy
          </Link>

          <Link
            to="/entrepreneurial-initiative"
            onClick={closeMenu}
            className={
              location.pathname === "/entrepreneurial-initiative" ? "active" : ""
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
      </nav>

      <div
        className={`mobile-nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Navbar;