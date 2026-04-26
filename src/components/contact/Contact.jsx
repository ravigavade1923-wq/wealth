import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBriefcase,
  FaLinkedinIn,
  FaYoutube,
  FaTimes,
  FaInstagram,
  FaArrowRight,
  FaShieldAlt,
  FaGem,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topicOptions = [
  "Personal Wealth Advisory",
  "Family Office Advisory",
  "HERitage — Wealth Advisory For Women",
  "Founders Circle",
  "Fund of Funds",
];

const Contact = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const shellRef = useRef(null);
  const orbOneRef = useRef(null);
  const orbTwoRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    city: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".legacy-contact-kicker",
          ".legacy-contact-heading",
          ".legacy-contact-subtext",
          ".legacy-contact-feature-strip",
          ".legacy-contact-info-card",
          ".legacy-follow-block",
          ".legacy-contact-form-shell",
        ],
        {
          opacity: 0,
          y: 40,
        }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".legacy-contact-kicker", { opacity: 1, y: 0, duration: 0.65 })
        .to(".legacy-contact-heading", { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .to(".legacy-contact-subtext", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(".legacy-contact-feature-strip", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(
          ".legacy-contact-info-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.4"
        )
        .to(".legacy-follow-block", { opacity: 1, y: 0, duration: 0.7 }, "-=0.35")
        .to(".legacy-contact-form-shell", { opacity: 1, y: 0, duration: 0.85 }, "-=0.45");

      gsap.to(orbOneRef.current, {
        x: 22,
        y: -18,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orbTwoRef.current, {
        x: -24,
        y: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".legacy-contact-info-card, .legacy-form-group, .legacy-radio-block", {
        opacity: 0,
        y: 60,
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".legacy-contact-grid",
          start: "top 78%",
        },
      });
    }, pageRef);

    const hero = heroRef.current;
    const shell = shellRef.current;

    const handleMouseMove = (e) => {
      if (!hero || !shell || window.innerWidth <= 991) return;

      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(shell, {
        rotationY: x * 6,
        rotationX: y * -4,
        x: x * 10,
        y: y * 8,
        transformPerspective: 1400,
        transformOrigin: "center center",
        duration: 0.7,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(shell, {
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    hero?.addEventListener("mousemove", handleMouseMove);
    hero?.addEventListener("mouseleave", handleLeave);

    return () => {
      hero?.removeEventListener("mousemove", handleMouseMove);
      hero?.removeEventListener("mouseleave", handleLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section className="legacy-contact-page" ref={pageRef}>
      <div className="legacy-contact-orb legacy-contact-orb-one" ref={orbOneRef}></div>
      <div className="legacy-contact-orb legacy-contact-orb-two" ref={orbTwoRef}></div>
      <div className="legacy-contact-grid-lines"></div>

      <div className="legacy-contact-container" ref={heroRef}>
        <div className="legacy-contact-grid" ref={shellRef}>
          <div className="legacy-contact-left">
            <div className="legacy-contact-kicker">CONNECT WITH EPM WEALTH</div>

            <h1 className="legacy-contact-heading">
              Your legacy begins with a conversation
            </h1>

            <p className="legacy-contact-subtext">
              Discover a more refined way to plan, preserve, and grow your wealth.
              Reach out to our team for private wealth guidance, strategic advisory,
              and long-term legacy planning.
            </p>

            <div className="legacy-contact-feature-strip">
              <div className="legacy-feature-chip">
                <FaShieldAlt />
                <span>Private Advisory</span>
              </div>
              <div className="legacy-feature-chip">
                <FaGem />
                <span>Luxury Experience</span>
              </div>
            </div>

            <div className="legacy-contact-info-list">
              <div className="legacy-contact-info-card">
                <div className="legacy-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="legacy-info-content">
                  <span>ADDRESS</span>
                  <p>
                    Wave Silver Tower, 814,
                    <br />
                    Noida Sector 18, Uttar Pradesh 201301, IN
                  </p>
                </div>
              </div>

              <div className="legacy-contact-info-card">
                <div className="legacy-icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="legacy-info-content">
                  <span>GENERAL CONTACT</span>
                  <p>
                    +91 0120-666-2012
                    <br />
                    +91 9899939333
                  </p>
                </div>
              </div>

              <div className="legacy-contact-info-card">
                <div className="legacy-icon-box">
                  <FaEnvelope />
                </div>
                <div className="legacy-info-content">
                  <span>EMAIL</span>
                  <p>
                    info@epmwealth.com
                    <br />
                    careers@epmwealth.com
                  </p>
                </div>
              </div>

              <div className="legacy-contact-info-card">
                <div className="legacy-icon-box">
                  <FaBriefcase />
                </div>
                <div className="legacy-info-content">
                  <span>CAREER</span>
                  <p>careers@epmwealth.com</p>
                </div>
              </div>
            </div>

            <div className="legacy-follow-block">
              <h3>FOLLOW US</h3>
              <div className="legacy-socials">
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" aria-label="X">
                  <FaTimes />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="legacy-contact-right">
            <div className="legacy-contact-form-shell">
              <form className="legacy-contact-form" onSubmit={handleSubmit}>
                <div className="legacy-form-group full">
                  <label>FULL NAME *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="legacy-form-row">
                  <div className="legacy-form-group">
                    <label>EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="legacy-form-group">
                    <label>CONTACT NUMBER *</label>
                    <input
                      type="text"
                      name="contactNumber"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="legacy-form-group full">
                  <label>CITY *</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="legacy-radio-block">
                  <label className="legacy-block-label">TOPIC OF ENQUIRY *</label>
                  <div className="legacy-radio-list">
                    {topicOptions.map((option, index) => (
                      <label className="legacy-radio-item" key={index}>
                        <input
                          type="radio"
                          name="topic"
                          value={option}
                          checked={formData.topic === option}
                          onChange={handleChange}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="legacy-form-group full">
                  <label>HOW CAN WE HELP YOU?</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your financial goals..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="legacy-submit-btn">
                  SUBMIT <span><FaArrowRight /></span>
                </button>

                <p className="legacy-form-note">
                  *This form does not operate as a job portal.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;