import React, { useEffect, useRef } from "react";
import "./SeminarWebinar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChalkboardTeacher,
  FaBuilding,
  FaLightbulb,
  FaLaptop,
  FaLock,
  FaHandsHelping,
  FaPiggyBank,
  FaWallet,
  FaChartPie,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: "150", label: "SEMINARS & WEBINARS" },
  { value: "50K", label: "EMPLOYEES REACHED" },
  { value: "200", label: "CORPORATE CLIENTS" },
  { value: "15", label: "YEARS OF EXCELLENCE" },
];

const inspireCards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    title: "Corporate Seminar",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
    title: "Leadership Session",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
    title: "Interactive Webinar",
  },
];

const whyAttendData = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert-Led Sessions",
    desc: "Led by RBI-aligned investment advisors with 15+ years of hands-on experience across wealth management and employee wellness.",
  },
  {
    icon: <FaBuilding />,
    title: "Customized for Your Organisation",
    desc: "Sessions are tailored to your industry, employee demographics, and specific financial challenges for a practical and relevant approach.",
  },
  {
    icon: <FaLightbulb />,
    title: "Actionable Takeaways",
    desc: "Every session ends with clear action points, tools, and literacy templates employees can immediately apply to improve financial well-being.",
  },
  {
    icon: <FaLaptop />,
    title: "Online & Offline Formats",
    desc: "Flexible delivery options let you choose fully digital sessions or in-office workshops based on your team’s needs and schedule.",
  },
  {
    icon: <FaLock />,
    title: "Confidential & Unbiased",
    desc: "All background discussions are handled confidentially and recommendations remain genuinely product-agnostic, objective, and in your team’s best interest.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Ongoing Support",
    desc: "Post-session Q&A, resource kits, recap summaries, and access to our dedicated helpdesk ensure learning continues beyond the workshop itself.",
  },
];

const topicsData = [
  {
    icon: <FaPiggyBank />,
    title: "Financial Basics",
    desc: "Budgeting, saving habits, emergency funds, and understanding financial essentials from scratch.",
  },
  {
    icon: <FaWallet />,
    title: "Financial Advance",
    desc: "Mutual funds, goal planning, risk awareness, and building a disciplined investment strategy.",
  },
  {
    icon: <FaChartPie />,
    title: "Portfolio Building",
    desc: "Asset allocation frameworks, tax planning, rebalancing strategies, and long-term wealth creation.",
  },
  {
    icon: <FaBolt />,
    title: "Futures & Options",
    desc: "Understanding derivatives, hedging concepts, options pricing, and responsible F&O participation.",
  },
];

const testimonials = [
  {
    quote:
      "The EPM seminar completely changed how I think about my salary and savings. For the first time I have a real investment plan.",
    name: "PRIYA SHARMA",
    role: "Senior Manager, Infosys",
  },
  {
    quote:
      "Booking a corporate session for our 200-person team was seamless. The content was perfectly pitched and every single employee engaged with it.",
    name: "RAHUL MEHTA",
    role: "HR Director, HDFC Bank",
  },
  {
    quote:
      "I attended the Futures & Options webinar and it is the clearest explanation of derivatives I have ever received. Highly recommended.",
    name: "ARJUN KAPOOR",
    role: "CXO, Independent Investor",
  },
];

const SeminarWebinar = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const crystalOneRef = useRef(null);
  const crystalTwoRef = useRef(null);
  const crystalThreeRef = useRef(null);

  useEffect(() => {

const whyCards = document.querySelectorAll(".sw-why-card");

whyCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotationY: x * 10,
      rotationX: y * -10,
      transformPerspective: 1000,
      duration: 0.35,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.55,
      ease: "power3.out",
    });
  });
});


    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".sw-hero-kicker",
          ".sw-hero-title",
          ".sw-hero-desc",
          ".sw-hero-actions",
          ".sw-stats-bar",
        ],
        {
          opacity: 0,
          y: 40,
        },
      );

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".sw-hero-kicker", { opacity: 1, y: 0, duration: 0.7 })
        .to(".sw-hero-title", { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
        .to(".sw-hero-desc", { opacity: 1, y: 0, duration: 0.8 }, "-=0.45")
        .to(".sw-hero-actions", { opacity: 1, y: 0, duration: 0.8 }, "-=0.45")
        .to(".sw-stats-bar", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");

      gsap.to(heroBgRef.current, {
        scale: 1.14,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(heroContentRef.current, {
        yPercent: -12,
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".sw-reveal").forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 70, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
            delay: index * 0.03,
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
            },
          },
        );
      });

      gsap.utils.toArray(".sw-tilt-card").forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 3 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.to(crystalOneRef.current, {
        x: 30,
        y: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(crystalTwoRef.current, {
        x: -26,
        y: 26,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(crystalThreeRef.current, {
        x: 18,
        y: -14,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    const hero = heroRef.current;
    const handleMouseMove = (e) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(heroContentRef.current, {
        rotationY: x * 8,
        rotationX: y * -6,
        x: x * 16,
        y: y * 12,
        transformPerspective: 1200,
        transformOrigin: "center center",
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.to(heroBgRef.current, {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: "power3.out",
      });
    };

    const resetMouse = () => {
      gsap.to(heroContentRef.current, {
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(heroBgRef.current, {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    hero?.addEventListener("mousemove", handleMouseMove);
    hero?.addEventListener("mouseleave", resetMouse);

    return () => {
      hero?.removeEventListener("mousemove", handleMouseMove);
      hero?.removeEventListener("mouseleave", resetMouse);
      ctx.revert();
    };
  }, []);

  return (
    <div className="sw-page" ref={pageRef}>
      <section className="sw-hero" ref={heroRef}>
        <div className="sw-hero-bg" ref={heroBgRef}>
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1800&auto=format&fit=crop"
            alt="Seminar audience"
          />
          <div className="sw-hero-overlay" />
          <div className="sw-grid" />
        </div>

        <div className="sw-crystal sw-crystal-one" ref={crystalOneRef}></div>
        <div className="sw-crystal sw-crystal-two" ref={crystalTwoRef}></div>
        <div
          className="sw-crystal sw-crystal-three"
          ref={crystalThreeRef}
        ></div>

        <div className="sw-hero-shell" ref={heroContentRef}>
          <div className="sw-hero-kicker">FINANCIAL LITERACY & EMPOWERMENT</div>
          <h1 className="sw-hero-title">Seminar & Webinar</h1>
          <p className="sw-hero-desc">
            We at EPM Wealth have conducted 150+ corporate seminars & webinars
            with the aim to ensure financial wellness. Let us help your
            employees build a better financial future.
          </p>

          <div className="sw-hero-actions">
            <a href="#book-session" className="sw-btn sw-btn-primary">
              BOOK A FREE SESSION <FaArrowRight />
            </a>
            <a href="#why-attend" className="sw-btn sw-btn-glass">
              EXPLORE MORE
            </a>
          </div>
        </div>
      </section>

      <section className="sw-stats-bar">
        <div className="sw-stats-inner">
          {statsData.map((item, index) => (
            <div className="sw-stat" key={index}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sw-intro sw-reveal">
        <div className="sw-section-head">
          <span>KNOWLEDGE IS POWER</span>
        </div>

        <div className="sw-intro-grid">
          <div className="sw-intro-left">
            <h2>Helping your employees build a better financial future</h2>
            <a href="#book-session" className="sw-text-link">
              BOOK A FREE SEMINAR →
            </a>
          </div>

          <div className="sw-intro-right">
            <p>
              We at EPM Wealth help your employees through our seminars to build
              a better financial future. Book a free seminar for your
              organisation now.
            </p>
            <p>
              Our expert-led sessions cover everything from financial basics to
              advanced portfolio management, tailored to your team’s needs. With
              an engaging, accessible approach, we ensure that every participant
              leaves with actionable knowledge and greater financial confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="sw-inspire sw-reveal">
        <div className="sw-inspire-top">
          <div>
            <span className="sw-mini-label">OUR IMPACT</span>
            <h2>Seminars that inspire action</h2>
          </div>
          <p>
            A glimpse into our expert-led knowledge sharing sessions —
            empowering employees with the financial wisdom they need to thrive.
          </p>
        </div>

        <div className="sw-gallery-grid">
          {inspireCards.map((item) => (
            <div className="sw-gallery-card sw-tilt-card" key={item.id}>
              <div className="sw-gallery-shine"></div>
              <img src={item.image} alt={item.title} />
              <div className="sw-gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="sw-center-btn">
          <a href="#book-session" className="sw-btn sw-btn-dark">
            BOOK A FREE SESSION <FaArrowRight />
          </a>
        </div>
      </section>

      <section className="sw-why sw-reveal" id="why-attend">
        <div className="sw-section-head sw-center-head">
          <span className="sw-why-kicker">WHY CHOOSE EPM</span>
          
        
        </div>

        <div className="sw-why-grid">
          {whyAttendData.map((item, index) => (
            <div
              className={`sw-why-card sw-tilt-card sw-why-card-${index + 1}`}
              key={index}
            >
              <div className="sw-why-card-glow"></div>
              <div className="sw-why-card-shine"></div>

              <div className="sw-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sw-topics sw-reveal">
        <div className="sw-section-head sw-center-head sw-light-head">
          <span>WHAT WE COVER</span>
          <h2>Topics across our programmes</h2>
          <p>
            Comprehensive financial education covering every stage of the wealth
            journey.
          </p>
        </div>

        <div className="sw-topics-grid">
          {topicsData.map((item, index) => (
            <div className="sw-topic-card sw-tilt-card" key={index}>
              <div className="sw-topic-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sw-testimonials sw-reveal">
        <div className="sw-section-head sw-center-head">
          <span>WHAT PARTICIPANTS SAY</span>
          <h2>Voices from our community</h2>
        </div>

        <div className="sw-testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="sw-testimonial-card sw-tilt-card" key={index}>
              <div className="sw-quote-mark">“</div>
              <p>{item.quote}</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
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
           Book a free seminar for your organisation
          </h2>

          <p className="wp-protection-cta-text">
           Empower your employees with the financial knowledge they deserve. Zero cost, maximum impact.
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

export default SeminarWebinar;
