import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { FaPlay } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Customizeds.jpg",
    title: "Customized For You",
    description: "Easy and simple to understand tailor-made solutions for you",
  },
  {
    id: 2,
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Technically-icon.jpg",
    title: "Technically Driven",
    description: "User oriented digital transaction anytime anywhere",
  },
  {
    id: 3,
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Transparents.jpg",
    title: "Transparent And Client Centric",
    description: "Track where and how your money is invested at all times",
  },
  {
    id: 4,
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Data-Driven-icon.jpg",
    title: "Data-Driven",
    description: "Powered by return, guided by data",
  },
];

const articles = [
  {
    id: 1,
    type: "ARTICLE",
    meta: "CIO'S DESK · 03 MARCH 2026",
    title: "Understanding the Iran–Israel–U.S. Conflict",
    desc: "The unfolding geopolitical tensions and their impact on markets.",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=900&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    type: "ARTICLE",
    meta: "",
    title: "Union Budget 2026–27 Decoded",
    date: "03 February 2026",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=75&auto=format&fit=crop",
  },
  {
    id: 3,
    type: "ARTICLE · CIO'S DESK",
    meta: "",
    title: "Where does gold go from here?",
    date: "20 January 2026",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=75&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "ARTICLE · CIO'S DESK",
    meta: "",
    title: "The GIFT City Advantage",
    date: "20 January 2026",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=75&auto=format&fit=crop",
  },
  {
    id: 5,
    type: "ARTICLE · CIO'S DESK",
    meta: "",
    title: "Silver: Protecting Gains, Avoiding FOMO",
    date: "20 January 2026",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=75&auto=format&fit=crop",
  },
];

const awardsData = [
  {
    year: "2026",
    title: "Tanish Gupta — Forbes 50 over 50",
    brand: "FORBES GLOBAL",
    badge: "🏆",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Featured among high-impact financial leaders",
      "Recognised for wealth strategy excellence",
      "Strengthened premium advisory ecosystem",
      "Expanded trust-led wealth management outreach",
    ],
  },
  {
    year: "2025",
    title: "ET Best Wealth Management Firms",
    brand: "BUSINESS HONOURS",
    badge: "🥇",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Introduced smarter reporting systems",
      "Improved portfolio review experience",
      "Expanded advisory operations",
      "Strengthened investor engagement structure",
    ],
  },
  {
    year: "2024",
    title: "CNBCTV18 Wealth Excellence Award",
    brand: "INDUSTRY RECOGNITION",
    badge: "💎",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Built client-first service workflows",
      "Improved financial transparency model",
      "Strengthened long-term planning approach",
      "Scaled quality review and onboarding systems",
    ],
  },
  {
    year: "2023",
    title: "Business Standard Elite Partner",
    brand: "ADVISORY AWARDS",
    badge: "🏆",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Refined advisory operations",
      "Improved investment planning workflows",
      "Strengthened client retention",
      "Expanded market reach with premium strategy",
    ],
  },
  {
    year: "2022",
    title: "Mint Best Wealth Advisory Firm",
    brand: "MINT",
    badge: "🥇",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Won Mint Best Wealth Advisory recognition",
      "Scaled relationship-based planning model",
      "Improved high-value client servicing",
      "Built stronger premium investment ecosystem",
    ],
  },
  {
    year: "2021",
    title: "Forbes Best Financial Advisors",
    brand: "FINANCE CIRCLE",
    badge: "🏅",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Entered new advisory growth phase",
      "Expanded client success structure",
      "Improved consistency in planning",
      "Built foundation for future scale",
    ],
  },
  {
    year: "2020",
    title: "Outlook Money Best Wealth Manager",
    brand: "BUSINESS TIMES",
    badge: "⭐",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Improved investor communication systems",
      "Built stronger advisory structure",
      "Enhanced trust-led service delivery",
      "Positioned brand for growth",
    ],
  },
  {
    year: "2019",
    title: "ET Wealth Investment Excellence",
    brand: "FOUNDATION YEAR",
    badge: "🎗️",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
    works: [
      "Built core advisory framework",
      "Started premium relationship-led model",
      "Created scalable service process",
      "Established trust foundations in market",
    ],
  },
];

const statsData = [
  { end: 100, suffix: "+", label: "CR TOTAL AUM" },
  { end: 1000, suffix: "+", label: "UNIQUE CLIENTS" },
  { end: 25, suffix: "+", label: "CITIES SERVED" },
];

const galleryImages = [
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-8.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-7.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-6.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-5.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-3.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-2.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-1.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-01-at-12.36.49-PM.jpeg",
];

const duplicatedGalleryImages = [...galleryImages, ...galleryImages];


const coreValuesData = [
  {
    id: 1,
    letter: "R",
    title: "RELATIONSHIP",
    description:
      "We build lasting partnerships grounded in trust, transparency, and a genuine commitment to long-term success.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    letter: "I",
    title: "INTEGRITY",
    description:
      "Every recommendation is unbiased and fully aligned with the client's interest. Complete transparency, always.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    letter: "S",
    title: "SIMPLICITY",
    description:
      "We distil the complex world of finance into clear, actionable insights. Clarity over complexity, always.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    letter: "K",
    title: "KNOWLEDGE",
    description:
      "Deep expertise across asset classes, geographies, and generations drives our advice and research.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80&auto=format&fit=crop",
  },
];



const responsibleInvestingData = {
  label: "RESPONSIBLE INVESTING",
  heading: `Our
responsible
vision for a
better &
brighter
future`,
  description:
    "As capital allocators, we recognize the impact of our investment advice on the world around us. We are committed to enabling our clients to allocate their capital in a manner that fully optimises opportunities and minimizes risks to environmental, social, and governance (ESG) factors.",
  buttonText: "EXPLORE ESG",
  image:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop",
};



const testimonialsData = [
  {
    id: 1,
    name: "Jitender Singh",
    role: "Inspector , Delhi Police",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Jitender-Singh.jpg",
    quote:
      "One stop solution for all my family's financial needs . I am really happy with their service and would recommend them",
  },
  {
    id: 2,
    name: "CA Amit Aggarwal",
    role: "Chartered Accountant",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Amit-Aggarwal.jpg",
    quote:
      "It's nice to have one place to come to, without being too large or institutional. I feel like you know the whole picture under one roof .It's Peace of mind with EPM Wealth.",
  },
  {
    id: 3,
    name: "Garvita Sadhwani",
    role: "Actress/Influencer",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Garvita-Sadhwani.jpg",
    quote:
      "For me, investing was a dream, but also a phobia. EPM Wealth team is very co-operative and has done an excellent job of transforming my investment mindset.",
  },
  {
    id: 4,
    name: "Jaideep Dudani",
    role: "Apple Products Distributor , North India",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Jaideep-Dudani.jpg",
    quote:
      "It's been a pleasure to deal with EPM team. Financial knowledge, attention to detail and communication are amazing. I've recommended EPM Wealth to family members who are now also happy clients.",
  },
  {
    id: 5,
    name: "Shantanu Gupta",
    role: "Managing Director of Roots Group of Institutes",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Shantanu-Gupta.jpg",
    quote:
    " I am grateful to have EPM WEALTH as my financial advisor . Their services have always been exceptional in every way",
  },
  {
    id: 6,
    name: "Himanshu Verma ",
    role: "Venture Capitalist",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Himanshu-Verma.jpg",
    quote:
      "It is such a relief to have someone you can trust completely looking after your portfolio. Their advice has always been beneficial to us and we would definitely recommend them to everyone.",
  },
  {
    id: 7,
    name: "Aksh Chaudhary",
    role: "Ace fitness trainer",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Himanshu-Verma.jpg",
    quote:
      "My financial education was O when I first met the EPM Wealth team. They have been very helpful in educating me and managing my finances.",
  },
];





/* Count Up Hook */
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [startAnim, setStartAnim] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnim) return;

    let start = 0;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [startAnim, end, duration]);

  return [count, ref];
};

const Home = () => {
  const [years, ref1] = useCountUp(30);
  const [clients, ref2] = useCountUp(1000);
  const [cities, ref3] = useCountUp(2);
  const [aum, ref4] = useCountUp(150);

  const featuredArticle = articles.find((item) => item.featured);
  const bottomArticles = articles.filter((item) => !item.featured);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [activeYear, setActiveYear] = useState("2022");
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
const currentTestimonial = testimonialsData[activeTestimonial];

  const activeData =
    awardsData.find((item) => item.year === activeYear) || awardsData[0];

  useEffect(() => {
    const section = statsRef.current;
    if (!section || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);

          statsData.forEach((stat, index) => {
            let start = 0;
            const duration = 1800;
            const incrementTime = 20;
            const totalSteps = duration / incrementTime;
            const increment = stat.end / totalSteps;

            const counter = setInterval(() => {
              start += increment;

              setCounts((prev) => {
                const updated = [...prev];
                updated[index] =
                  start >= stat.end ? stat.end : Math.floor(start);
                return updated;
              });

              if (start >= stat.end) {
                clearInterval(counter);
              }
            }, incrementTime);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);


  useEffect(() => {
  const interval = setInterval(() => {
    setActiveTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter email address");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          user_email: email,
          to_name: "Ravindra",
          message: `New vault subscription received from: ${email}`,
        },
        "YOUR_PUBLIC_KEY",
      );

      setMessage("Subscription successful");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-social-bar">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hero-social-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="hero-social-icon"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hero-social-icon"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hero-social-icon"
          >
            <FaFacebookF />
          </a>
        </div>

        <div className="hero-bg">
          <img
            src="https://i.pinimg.com/736x/8c/73/f8/8c73f8cdcbd1d3986b08c5db087a97b0.jpg"
            alt="background"
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-top-line">
            <span className="line"></span>
            <p>BRIDGING THE GAP BETWEEN YOUR REALITY & YOUR PURPOSE</p>
            <span className="line"></span>
          </div>

          <div className="hero-main-box">
            <div className="hero-video-area">
              <video className="hero-video" autoPlay muted loop playsInline>
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>

              <div className="hero-video-dark"></div>

              <div className="hero-center-content">
                <button className="play-btn">
                  <FaPlay />
                </button>
                <p>WATCH OUR STORY</p>
              </div>
            </div>

            <div className="hero-bottom-content">
              <div className="hero-info-card">
                <span className="hero-label">OUR PURPOSE</span>
                <h2>Helping you create an enduring legacy</h2>
                <p>
                  Wealth Advisory is beyond just building a portfolio. By
                  serving some of India’s most prominent business families since
                  2011, we have learnt the importance of taking a holistic,
                  global yet personalised approach to meeting our clients’
                  wealth management needs.
                </p>
                <a href="#services" className="hero-link">
                  EXPLORE WEALTH SERVICES <span>→</span>
                </a>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-info-card">
                <span className="hero-label">OUR REACH</span>
                <h2>
                  ₹100 Cr+ <br />
                  Assets Under Management
                </h2>
                <p>
                  Trusted by over 1000 clients across 25+ cities, our
                  disciplined investment philosophy and personalised advisory
                  have consistently delivered superior risk-adjusted returns
                  across market cycles since 2011.
                </p>
                <a href="#assets" className="hero-link">
                  EXPLORE ASSET MANAGEMENT <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item" ref={ref1}>
            <h2>{years}+</h2>
            <p>Combined Team Experience</p>
          </div>

          <div className="stat-item" ref={ref2}>
            <h2>{clients}+</h2>
            <p>UNIQUE CLIENTS Served</p>
          </div>

          <div className="stat-item" ref={ref3}>
            <h2>{cities}</h2>
            <p>Strategic Global Locations</p>
          </div>

          <div className="stat-item" ref={ref4}>
            <h2>₹{aum} Cr</h2>
            <p>AUM</p>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="solutions-container">
          <div className="solutions-left">
            <span className="solutions-label">SOLUTIONS</span>
            <h2>
              Helping you create an
              <br />
              enduring legacy
            </h2>
            <a href="#contact" className="solutions-link">
              START THE CONVERSATION <span>→</span>
            </a>
          </div>

          <div className="solutions-right">
            <p>
              Wealth Advisory is beyond just building a portfolio. By serving
              some of India's most prominent business families since 2011, we
              have learnt the importance of taking a holistic, global yet
              personalised approach to meeting our clients' wealth management
              needs.
            </p>

            <p>
              Combining our in-depth knowledge and innovative technology, we
              create a plan tailored to your complex needs. Your financial
              consultant — backed by an experienced team — can help you navigate
              every important decision.
            </p>
          </div>
        </div>
      </section>

      <section className="decision-section">
        <div className="decision-container">
          <h2 className="decision-heading">
            Financial Decisions Made Simpler For Every Indian
          </h2>

          <div className="decision-grid">
            {features.map((item) => (
              <div className="decision-card" key={item.id}>
                <div className="decision-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="decision-image"
                  />
                </div>

                <div className="decision-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vault-section">
        <div className="vault-container">
          <div className="vault-top-grid">
            <div className="vault-left-panel">
              <span className="vault-label">VAULT</span>

              <h2 className="vault-heading">
                Your access to
                <br />
                rich insights
              </h2>

              <p className="vault-description">
                From experienced partners at the forefront of today&apos;s
                financial trends and beyond. Trusted by the top 0.01% of the
                country.
              </p>

              <a href="#contact" className="vault-link">
                Explore Vault <span>→</span>
              </a>

              <div className="vault-signup-box">
                <h3>Sign up for priority access</h3>
                <p>Get our insights delivered straight to your inbox.</p>

                <form className="vault-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" disabled={loading}>
                    {loading ? "SENDING..." : "SUBSCRIBE →"}
                  </button>
                </form>

                {message && <p className="vault-form-message">{message}</p>}
              </div>
            </div>

            <div className="vault-featured-card">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="vault-featured-image"
              />

              <div className="vault-featured-overlay"></div>

              <div className="vault-featured-content">
                <span>
                  {featuredArticle.type} · {featuredArticle.meta}
                </span>
                <h3>{featuredArticle.title}</h3>
                <p>{featuredArticle.desc}</p>
              </div>
            </div>
          </div>

          <div className="vault-bottom-grid">
            {bottomArticles.map((item, index) => (
              <article
                className={`vault-article-card ${index === 0 ? "first-vault-card" : ""}`}
                key={item.id}
              >
                <div className="vault-article-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`vault-article-image ${index === 0 ? "fit-image" : ""}`}
                  />
                </div>

                <div className="vault-article-content">
                  <span className="vault-article-type">{item.type}</span>
                  <h4>{item.title}</h4>
                  <p>{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="awards-showcase-section">
        <div className="awards-showcase-container">
          <div className="awards-showcase-top">
            <span className="awards-mini-label">AWARDS</span>

            <h2 className="awards-main-heading">
              Journey driven by
              <br />
              Results
            </h2>

            <p className="awards-main-description">{activeData.subtitle}</p>

            <div className="awards-highlight-card">
              <span className="awards-highlight-year">{activeData.year}</span>
              <h3>{activeData.title}</h3>
              <div className="awards-badge-icon">{activeData.badge}</div>
              <span className="awards-brand">{activeData.brand}</span>
            </div>

            <div className="awards-timeline">
              {awardsData.map((item) => (
                <button
                  key={item.year}
                  className={`awards-year-btn ${
                    activeYear === item.year ? "active" : ""
                  }`}
                  onClick={() => setActiveYear(item.year)}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          <div className="awards-year-work-section">
            <div className="awards-detail-card">
              <span className="awards-card-label">YEAR HIGHLIGHTS</span>
              <h4>What we achieved in {activeData.year}</h4>

              <div className="awards-work-grid">
                {activeData.works.map((work, index) => (
                  <div className="awards-work-box" key={index}>
                    <span>0{index + 1}</span>
                    <p>{work}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="awards-gallery-section">
              <div className="awards-gallery-head">
                <span></span>
                {/* <h4>Moments of Recognition</h4> */}
              </div>

              <div className="awards-gallery-marquee">
                <div className="awards-horizontal-scroll-track">
                  {duplicatedGalleryImages.map((img, index) => (
                    <div className="awards-gallery-card" key={index}>
                      <img src={img} alt={`Award gallery ${index + 1}`} />
                      <div className="awards-gallery-card-overlay">
                        <span>AWARDS</span>
                        <p>Moments of Recognition</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="awards-stats-grid" ref={statsRef}>
              {statsData.map((stat, index) => (
                <div className="awards-stat-box" key={index}>
                  <h5>
                    {counts[index]}
                    {stat.suffix}
                  </h5>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
<section className="core-values-section">
  <div className="core-values-container">
    <div className="core-values-top">
      <div className="core-values-top-left">
        <span className="core-values-label">CORE VALUES</span>
        <h2 className="core-values-heading">We believe in RISK</h2>
      </div>

      <div className="core-values-top-right">
        <p>
          Our four core values form the foundation of every client relationship
          and every investment decision we make.
        </p>
      </div>
    </div>

    <div className="core-values-grid">
      {coreValuesData.map((item, index) => (
        <div
          className={`core-value-card core-value-card-${index + 1}`}
          key={item.id}
        >
          <div className="core-value-image-wrap">
            <img src={item.image} alt={item.title} className="core-value-image" />
            <div className="core-value-image-overlay"></div>
            <span className="core-value-letter">{item.letter}</span>
          </div>

          <div className="core-value-content">
            <span className="core-value-title">{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="responsible-section">
  <div className="responsible-bg-wrap">
    <img
      src={responsibleInvestingData.image}
      alt="Responsible investing background"
      className="responsible-bg-image"
    />

    <div className="responsible-bg-overlay"></div>
    <div className="responsible-side-glow"></div>
  </div>

  <div className="responsible-container">
    <div className="responsible-content-card">
      <span className="responsible-label">
        {responsibleInvestingData.label}
      </span>

      <h2 className="responsible-heading">
        {responsibleInvestingData.heading}
      </h2>

      <p className="responsible-description">
        {responsibleInvestingData.description}
      </p>

      <a href="#contact" className="responsible-link">
        {responsibleInvestingData.buttonText} <span>→</span>
      </a>
    </div>
  </div>
</section>

<section className="testimonials-luxury-section">
  <div className="testimonials-luxury-container">
    <div className="testimonials-luxury-header">
      <span className="testimonials-mini-label">CLIENT TESTIMONIALS</span>
      <h2>PEOPLE ARE TALKING</h2>
    </div>

    <div className="testimonials-luxury-card">
      <div className="testimonials-quote-wrap">
        <span className="testimonials-quote-mark">“</span>

        <p className="testimonials-main-quote">
          {currentTestimonial.quote}
        </p>
      </div>

      <div className="testimonials-client-row">
        <div className="testimonials-client-image-wrap">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="testimonials-client-image"
          />
          <span className="testimonials-image-accent">✦</span>
        </div>

        <div className="testimonials-client-info">
          <h3>{currentTestimonial.name}</h3>
          <p>{currentTestimonial.role}</p>
        </div>
      </div>

      <div className="testimonials-dots-row">
        {testimonialsData.map((item, index) => (
          <button
            key={item.id}
            className={`testimonials-dot ${
              activeTestimonial === index ? "active" : ""
            }`}
            onClick={() => setActiveTestimonial(index)}
            aria-label={`Show testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;
