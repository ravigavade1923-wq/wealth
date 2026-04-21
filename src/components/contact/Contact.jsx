import React, { useState } from "react";
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
  FaPlus,
} from "react-icons/fa";



const topicOptions = [
  "Personal Wealth Advisory",
  "Family Office Advisory ",
  "HERitage — Wealth Advisory For Women ",
  "Founders Circle",
  "Fund of Funds ",
];

const discoverOptions = [
  "News Publication",
  "Search Engine",
  "UHNW Event Calendar 2026",
  "Recommended by friend or colleague",
  "Social Media",
  "YouTube",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    city: "",
    topic: "",
    discover: "",
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

  return (
    <section className="legacy-contact-page">
      <div className="legacy-contact-container">
        <div className="legacy-contact-grid">
          {/* Left */}
          <div className="legacy-contact-left">
            <h1 className="legacy-contact-heading">Your legacy awaits here</h1>

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
                    +91 0120 426 4717
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

          {/* Right */}
          <div className="legacy-contact-right">
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

              <div className="legacy-form-row">
                <div className="legacy-form-group">
                  <label>COMPANY / FAMILY NAME *</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company or family name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className="legacy-form-group">
                  <label>CITY *</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
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

              <div className="legacy-radio-block">
                <label className="legacy-block-label">
                  HOW DID YOU DISCOVER EPM WEALTH?
                </label>
                <div className="legacy-radio-list">
                  {discoverOptions.map((option, index) => (
                    <label className="legacy-radio-item" key={index}>
                      <input
                        type="radio"
                        name="discover"
                        value={option}
                        checked={formData.discover === option}
                        onChange={handleChange}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="legacy-form-group full">
                <label>HOW CAN WE HELP YOU ?</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your financial goals..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="legacy-submit-btn">
                SUBMIT <span>→</span>
              </button>

              <p className="legacy-form-note">
                *This form does not operate as a job portal.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;