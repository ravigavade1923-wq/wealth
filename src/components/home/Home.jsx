import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import {
  FaCreditCard,
  FaChartLine,
  FaCarSide,
  FaHeart,
  FaHome,
  FaUserMd,
  FaGraduationCap,
  FaShieldAlt,
  FaUmbrella,
  FaHandshake,
  FaTachometerAlt,
  FaPlane,
} from "react-icons/fa";

import { GiBigDiamondRing } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";

import { Link } from "react-router-dom";

import featuresImg from "../../assets/feature/features.png";
import featureImg from "../../assets/feature/feature.png";
import featuressImg from "../../assets/feature/featuress.png";

import articleImg from "../../assets/home/article.jpeg";

import heroVaultImg from "../../assets/home/epm-vault-hero.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    bgImage: featuresImg,
    title: "Customized For You",
    description: "Easy and simple to understand tailor-made solutions for you",
    meta: "PERSONALISED SOLUTIONS",
  },
  {
    id: 2,
    bgImage:
      "https://i.pinimg.com/1200x/cf/d6/4c/cfd64ce861ac53a14454d78e2fb887f7.jpg",
    title: "Technically Driven",
    description: "User oriented digital transaction anytime anywhere",
    meta: "DIGITAL TRANSACTIONS",
  },
  {
    id: 3,
    bgImage: featuressImg,
    title: "Transparent And Client Centric",
    description: "Track where and how your money is invested at all times",
    meta: "CLIENT-FIRST APPROACH",
  },
  {
    id: 4,
    bgImage: featureImg,
    title: "Data-Driven",
    description: "Powered by return, guided by data",
    meta: "SMART ANALYTICS",
  },
];

const articles = [
  {
    id: 1,
    type: "ARTICLE",
    meta: "CIO'S DESK · 03 MARCH 2026",
    title: "Exclusive insights for enduring wealth",
    desc: "At EPM Wealth, we deliver refined strategies and deep market intelligence tailored for individuals who seek more than just returns — they seek legacy.",
    image: articleImg,
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
    year: "2016",
    title: "Moneycontrol Emerging Wealth Award",
    brand: "MONEYCONTROL",
    badge: "🏅",
    subtitle:
      "Our journey began with a strong advisory foundation built on trust, consistency, and personalized wealth planning.",
  },
  {
    year: "2017",
    title: "Business Today Advisory Excellence",
    brand: "BUSINESS TODAY",
    badge: "🥇",
    subtitle:
      "We strengthened our advisory framework and began scaling a more disciplined and refined client experience.",
  },
  {
    year: "2018",
    title: "Bloomberg Wealth Strategy Recognition",
    brand: "BLOOMBERG",
    badge: "🏆",
    subtitle:
      "This phase reflected our growing focus on structured wealth strategies and high-quality investment planning.",
  },
  {
    year: "2019",
    title: "ET Wealth Investment Excellence",
    brand: "ECONOMIC TIMES",
    badge: "🎗️",
    subtitle:
      "A landmark year where our investment planning philosophy gained stronger recognition and credibility.",
  },
  {
    year: "2020",
    title: "Financial Express Wealth Leadership Honour",
    brand: "FINANCIAL EXPRESS",
    badge: "⭐",
    subtitle:
      "We adapted with resilience and strengthened our leadership in wealth management through stability and service quality.",
  },
  {
    year: "2021",
    title: "Outlook Money Best Wealth Manager",
    brand: "OUTLOOK MONEY",
    badge: "🏅",
    subtitle:
      "This year reflected stronger brand credibility, deeper relationships, and a more mature planning ecosystem.",
  },
  {
    year: "2022",
    title: "Mint Best Wealth Advisory Firm",
    brand: "MINT",
    badge: "🥇",
    subtitle:
      "A year of high-impact execution where our planning quality and service depth stood out meaningfully.",
  },
  {
    year: "2023",
    title: "Business Standard Elite Partner",
    brand: "BUSINESS STANDARD",
    badge: "🏆",
    subtitle:
      "We continued to elevate our premium positioning with stronger planning quality and trusted execution.",
  },
  {
    year: "2024",
    title: "CNBCTV18 Wealth Excellence Award",
    brand: "CNBCTV18",
    badge: "💎",
    subtitle:
      "This phase reflected operational refinement, stronger outcomes, and a more elevated advisory presence.",
  },
  {
    year: "2025",
    title: "ET Best Wealth Management Firms",
    brand: "ECONOMIC TIMES",
    badge: "🥇",
    subtitle:
      "A year focused on expansion, operational strength, and the continued pursuit of measurable excellence.",
  },
  {
    year: "2026",
    title: "Tanish Gupta — Forbes 50 over 50",
    brand: "FORBES GLOBAL",
    badge: "🏆",
    subtitle:
      "A defining milestone showcasing the firm’s sustained excellence, trusted leadership, and premium advisory impact.",
  },
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
      "https://i.pinimg.com/1200x/44/0c/94/440c94130b3a3043b5074d057ef4ada6.jpg",
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

const testimonialsData = [
  {
    id: 1,
    name: "Jitender Singh",
    role: "Inspector , Delhi Police",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Jitender-Singh.jpg",
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
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Garvita-Sadhwani.jpg",
    quote:
      "For me, investing was a dream, but also a phobia. EPM Wealth team is very co-operative and has done an excellent job of transforming my investment mindset.",
  },
  {
    id: 4,
    name: "Jaideep Dudani",
    role: "Apple Products Distributor , North India",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Jaideep-Dudani.jpg",
    quote:
      "It's been a pleasure to deal with EPM team. Financial knowledge, attention to detail and communication are amazing. I've recommended EPM Wealth to family members who are now also happy clients.",
  },
  {
    id: 5,
    name: "Shantanu Gupta",
    role: "Managing Director of Roots Group of Institutes",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Shantanu-Gupta.jpg",
    quote:
      " I am grateful to have EPM WEALTH as my financial advisor . Their services have always been exceptional in every way",
  },
  {
    id: 6,
    name: "Himanshu Verma ",
    role: "Venture Capitalist",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Himanshu-Verma.jpg",
    quote:
      "It is such a relief to have someone you can trust completely looking after your portfolio. Their advice has always been beneficial to us and we would definitely recommend them to everyone.",
  },
  {
    id: 7,
    name: "Akash Chaudhary",
    role: "Ace fitness trainer",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Aakash-Chadhary.jpg",
    quote:
      "My financial education was O when I first met the EPM Wealth team. They have been very helpful in educating me and managing my finances.",
  },
];

const useCountUp = (end, duration = 2200, suffix = "", prefix = "") => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return [`${prefix}${count}${suffix}`, ref];
};

const Home = () => {
  const heroLines = [
    "It all begins with you.",
    "Attaining Financial Freedom.",
    "Making Your Money Work For You.",
    "Saving Taxes.",
    "Meeting Your Goals.",
  ];

  const heroBgRef = useRef(null);
  const heroEngineRef = useRef(null);

  const homeRef = useRef(null);
  const heroWrapRef = useRef(null);
  const heroVisualRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroCopyRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroTiltRef = useRef(null);

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [experience, ref1] = useCountUp(30, 2000, "+");
  const [clients, ref2] = useCountUp(1000, 2400, "+");
  const [locations, ref3] = useCountUp(2, 1800);
  const [aum, ref4] = useCountUp(150, 2400, " Cr", "₹");

  const featuredArticle = articles.find((item) => item.featured);
  const bottomArticles = articles.filter((item) => !item.featured);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [activeYear, setActiveYear] = useState("2022");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonialsData[activeTestimonial];

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const quoteRef = useRef(null);
  const clientRowRef = useRef(null);
  const imageWrapRef = useRef(null);
  const dotsRef = useRef(null);
  const autoSlideRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeData =
    awardsData.find((item) => item.year === activeYear) || awardsData[0];

  useEffect(() => {
    const currentLine = heroLines[lineIndex];
    let timeout;

    if (!isDeleting && charIndex < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 45);
    } else if (!isDeleting && charIndex === currentLine.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1600);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 22);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % heroLines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, heroLines]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const wrap = heroWrapRef.current;
      const tilt = heroTiltRef.current;
      if (!wrap || !tilt) return;

      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 10;
      const rotateX = (y / rect.height - 0.5) * -8;

      tilt.style.transform = `
        translate3d(0, 0, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const resetTransform = () => {
      const tilt = heroTiltRef.current;
      if (!tilt) return;
      tilt.style.transform = "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)";
    };

    const wrap = heroWrapRef.current;
    if (!wrap) return;

    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("mouseleave", resetTransform);

    return () => {
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroCopyRef.current,
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 1.05, ease: "power3.out" },
      );

      gsap.to(heroTitleRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: heroWrapRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // --- HERO ZOOM-OUT EFFECT ---
      const zoomTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".epm-hero-spacer",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      zoomTl.fromTo(
        heroContentRef.current,
        { scale: 1, y: 0, borderRadius: "0px" },
        {
          scale: 0.88,
          y: -18,
          borderRadius: "34px",
          duration: 1,
          ease: "none",
        },
      );
      // ----------------------------

      gsap.utils.toArray(".epm-reveal-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".decision-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".decision-grid",
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".vault-article-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".vault-bottom-grid",
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".core-value-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".core-values-grid",
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
    }, 4500);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".testimonials-mini-label",
          ".testimonials-luxury-header h2",
          cardRef.current,
          quoteRef.current,
          dotsRef.current,
        ].filter(Boolean),
        {
          opacity: 0,
          y: 40,
        },
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(".testimonials-mini-label", {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })
        .to(
          ".testimonials-luxury-header h2",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.3",
        )
        .to(
          cardRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.25",
        )
        .to(
          quoteRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .to(
          dotsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!quoteRef.current || !imageWrapRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      quoteRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
    ).fromTo(
      imageWrapRef.current,
      { opacity: 0, x: -18, rotateY: -15 },
      { opacity: 1, x: 0, rotateY: 0, duration: 0.55 },
      "-=0.3",
    );

    return () => tl.kill();
  }, [activeTestimonial]);

  useEffect(() => {
    const sections = document.querySelectorAll(".epm-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("epm-show");
          } else {
            entry.target.classList.remove("epm-show"); // 🔥 important for re-trigger
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
    }, 4500);
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    resetAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768 || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1400,
      transformOrigin: "center",
    });

    gsap.to(imageWrapRef.current, {
      rotateY: rotateY * 1.2,
      rotateX: rotateX * 1.2,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(imageWrapRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
      resetAutoSlide();
    } else if (diff < -50) {
      setActiveTestimonial((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1,
      );
      resetAutoSlide();
    }
  };

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

  const [sipData, setSipData] = useState({
    amount: "",
    frequency: "monthly",
    years: "",
    expectedReturn: "",
    inflationMode: "none",
    inflationRate: "",
  });

  const [sipResult, setSipResult] = useState(null);

  const handleSipChange = (e) => {
    const { name, value } = e.target;
    setSipData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatCurrency = (value) => {
    if (!Number.isFinite(value)) return "₹ 0";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getPeriodsPerYear = (frequency) => {
    switch (frequency) {
      case "weekly":
        return 52;
      case "quarterly":
        return 4;
      case "yearly":
        return 1;
      case "monthly":
      default:
        return 12;
    }
  };

  const calculateSipReturns = () => {
    const amount = parseFloat(sipData.amount);
    const years = parseFloat(sipData.years);
    const expectedReturn = parseFloat(sipData.expectedReturn);
    const inflationRate =
      sipData.inflationMode === "custom"
        ? parseFloat(sipData.inflationRate || 0)
        : 0;

    if (
      !Number.isFinite(amount) ||
      !Number.isFinite(years) ||
      !Number.isFinite(expectedReturn) ||
      amount <= 0 ||
      years <= 0 ||
      expectedReturn < 0
    ) {
      setSipResult({
        error:
          "Please enter valid values for investment amount, period, and return.",
      });
      return;
    }

    const periodsPerYear = getPeriodsPerYear(sipData.frequency);
    const totalPeriods = Math.round(years * periodsPerYear);
    const periodicRate = expectedReturn / 100 / periodsPerYear;

    let futureValue = 0;

    if (periodicRate === 0) {
      futureValue = amount * totalPeriods;
    } else {
      futureValue =
        amount *
        (((Math.pow(1 + periodicRate, totalPeriods) - 1) / periodicRate) *
          (1 + periodicRate));
    }

    const investedAmount = amount * totalPeriods;
    const profitEarned = futureValue - investedAmount;

    const realFutureValue =
      inflationRate > 0
        ? futureValue / Math.pow(1 + inflationRate / 100, years)
        : futureValue;

    const projectionDurations = [2, 5, 8, 10, 12, 15, 18, 20, 25, 30]
      .filter((yr) => yr <= Math.max(30, Math.ceil(years)))
      .map((yr) => {
        const periods = yr * periodsPerYear;
        let projectedFV = 0;

        if (periodicRate === 0) {
          projectedFV = amount * periods;
        } else {
          projectedFV =
            amount *
            (((Math.pow(1 + periodicRate, periods) - 1) / periodicRate) *
              (1 + periodicRate));
        }

        return {
          year: yr,
          invested: amount * periods,
          futureValue: projectedFV,
        };
      });

    setSipResult({
      error: "",
      investedAmount,
      futureValue,
      profitEarned,
      realFutureValue,
      projectionDurations,
    });
  };

  const resetSipCalculator = () => {
    setSipData({
      amount: "",
      frequency: "monthly",
      years: "",
      expectedReturn: "",
      inflationMode: "none",
      inflationRate: "",
    });

    setSipResult(null);
  };

  const sipChartBars = useMemo(() => {
    if (!sipResult || sipResult.error) return [];
    const total = Math.max(sipResult.futureValue, 1);
    return [
      {
        label: "Invested",
        value: sipResult.investedAmount,
        height: `${(sipResult.investedAmount / total) * 100}%`,
      },
      {
        label: "Returns",
        value: sipResult.profitEarned,
        height: `${(sipResult.profitEarned / total) * 100}%`,
      },
    ];
  }, [sipResult]);

  return (
    <div ref={homeRef} className="epm-home-page">
      <section className="epm-hero-wrap" ref={heroWrapRef} id="home">
        {/* <div className="epm-hero-bg-image-wrap">
          <img
            src="https://i.pinimg.com/webp/1200x/13/62/7a/13627acbaeb8e6fd18c6b9780a093bf4.webp"
            alt="EPM Wealth hero background"
            className="epm-hero-bg-image"
          />
        </div> */}

        <div className="epm-hero-bg-image-wrap" ref={heroBgRef}>
          <img
            src={heroVaultImg}
            alt="EPM Wealth Private Vault"
            className="epm-hero-bg-image"
          />
          {/* <div className="epm-vault-engine-glow" ref={heroEngineRef}></div> */}
        </div>

        <div className="epm-full-hero-flow"></div>
        <div className="epm-full-hero-orbit"></div>
        <div className="epm-full-hero-spark"></div>

        <div className="epm-social-stick">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="epm-social-btn"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube"
            className="epm-social-btn"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="epm-social-btn"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="epm-social-btn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="epm-hero-overlay-right">
          <div className="epm-hero-left-block" ref={heroCopyRef}>
            <h1 className="epm-hero-heading-alt" ref={heroTitleRef}>
              <span className="epm-hero-line epm-hero-line-one">
                BECAUSE YOUR
              </span>

              <span className="epm-hero-line epm-hero-line-two">WEALTH</span>

              <span className="epm-hero-line epm-hero-line-three">
                DESERVES <br /> EXCELLENCE
              </span>
            </h1>

            <div className="epm-typed-wrap epm-typed-wrap-left">
              <p className="epm-typed-line">
                {displayText}
                <span className="epm-typed-caret"></span>
              </p>
            </div>

            <div className="epm-hero-desc">
              <p>
                At EPM Wealth, we believe your wealth goes beyond money. We
                prioritize you, your loved ones, and your business with
                personalized planning, elear advisory, and future-ready
                financial strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="epm-hero-spacer"></div>

      <div className="epm-overlap-stack">
        <section className="epm-stats-section epm-overlap-panel">
          <div className="epm-stats-wrap">
            <div className="epm-stats-card">
              <div className="epm-stats-grid">
                <div className="epm-stat-box" ref={ref4}>
                  <h2>{aum}</h2>
                  <p>AUM</p>
                </div>

                <div className="epm-stat-line"></div>

                <div className="epm-stat-box" ref={ref1}>
                  <h2>{experience}</h2>
                  <p>Combined Team Experience</p>
                </div>
                <div className="epm-stat-line"></div>

                <div className="epm-stat-box" ref={ref2}>
                  <h2>{clients}</h2>
                  <p>Unique Clients Served</p>
                </div>

                <div className="epm-stat-line"></div>

                <div className="epm-stat-box" ref={ref3}>
                  <h2>{locations}</h2>
                  <p>Strategic Global Locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solutions-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="solutions-container">
            <div className="solutions-left">
              {/* <span className="solutions-label">SOLUTIONS</span> */}
              <h2>Wealth Is More Than Just Money...</h2>
              <Link to="/contact" className="solutions-link">
                START THE CONVERSATION <span>→</span>
              </Link>
            </div>

            <div className="solutions-right">
              <p>
                At EPM Wealth Management, wealth advisory goes far beyond simply
                building a portfolio. Working closely with individuals and
                corporates over the years, we understand that true wealth
                management requires a holistic, personalized approach aligned
                with each client’s unique goals.
              </p>

              <p>
                By combining deep financial insight with modern technology, we
                design strategies tailored to your evolving financial needs.
                Your dedicated advisor—supported by an experienced team—guides
                you through every important decision, ensuring clarity,
                confidence, and long-term financial growth.
              </p>
            </div>
          </div>
        </section>

        <section className="decision-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="decision-container">
            <div className="decision-top-row">
              <div className="decision-heading-wrap">
                {/* <span className="decision-mini-label">SERVICES</span> */}
                <h2 className="decision-heading">
                  Financial Decisions Made Simpler For Every Indian
                </h2>
              </div>

              <div className="decision-intro">
                <p>
                  Our financial services are tailored to your unique wealth
                  creation journey. Explore bespoke solutions designed for your
                  specific goals.
                </p>
              </div>
            </div>

            <div className="decision-grid">
              {features.map((item) => (
                <div
                  className="decision-card"
                  key={item.id}
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className="decision-card-bg"></div>
                  <div className="decision-card-dark-layer"></div>
                  <div className="decision-card-blur-panel"></div>

                  <div className="decision-card-content">
                    <span className="decision-card-meta">{item.meta}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="decision-card-footer">
                      <span className="decision-card-label">
                        EXPLORE SERVICE
                      </span>
                      <span className="decision-card-arrow">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vault-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="vault-container">
            <div className="vault-top-grid">
              <div className="vault-left-panel">
                {/* <span className="vault-label">VAULT</span> */}

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
                  className={`vault-article-card ${
                    index === 0 ? "first-vault-card" : ""
                  }`}
                  key={item.id}
                >
                  <div className="vault-article-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`vault-article-image ${
                        index === 0 ? "fit-image" : ""
                      }`}
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

        <section className="awards-showcase-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="awards-bg-glow awards-bg-glow-left"></div>
          <div className="awards-bg-glow awards-bg-glow-right"></div>
          <div className="awards-grid-pattern"></div>

          <div className="awards-showcase-container">
            <div className="awards-showcase-top">
              {/* <span className="awards-mini-label">AWARDS & MILESTONES</span> */}

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
          </div>

          <div className="awards-gallery-section">
            <div className="awards-gallery-head">
              <span>RECOGNITION GALLERY</span>
              <h4>Moments of Excellence</h4>
            </div>

            <div className="awards-gallery-marquee">
              <div className="awards-horizontal-scroll-track">
                {duplicatedGalleryImages.map((img, index) => (
                  <div className="awards-gallery-card" key={index}>
                    <img src={img} alt={`Award gallery ${index + 1}`} />
                    <div className="awards-gallery-card-overlay">
                      <span>EPM WEALTH</span>
                      <p>Recognition & Premium Milestones</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="core-values-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="core-values-container">
            <div className="core-values-top">
              <div className="core-values-top-left">
                <span className="core-values-label">CORE VALUES</span>
                <h2 className="core-values-heading">We believe in RISK</h2>
              </div>
            </div>

            <div className="core-values-grid">
              {coreValuesData.map((item, index) => (
                <div
                  className={`core-value-card core-value-card-${index + 1}`}
                  key={item.id}
                >
                  <div className="core-value-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="core-value-image"
                    />
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

        <section
          className="testimonials-luxury-section epm-animate epm-overlap-panel"
          ref={sectionRef}
        >
          <span className="testimonials-orb testimonials-orb-1"></span>
          <span className="testimonials-orb testimonials-orb-2"></span>

          <div className="testimonials-luxury-container">
            <div className="testimonials-luxury-header">
              <span className="testimonials-mini-label">
                CLIENT TESTIMONIALS
              </span>
              <h2>PEOPLE ARE TALKING</h2>
            </div>

            <div
              className="testimonials-luxury-card"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="testimonials-card-glow"></div>
              <div className="testimonials-card-noise"></div>

              <div className="testimonials-card-grid">
                <div
                  className="testimonials-client-image-side"
                  ref={imageWrapRef}
                >
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

                <div className="testimonials-content-side" ref={quoteRef}>
                  <div className="testimonials-quote-wrap">
                    <div className="testimonials-quote-layer">
                      <span className="testimonials-premium-quote">“</span>
                      <p className="testimonials-main-quote">
                        {currentTestimonial.quote}
                      </p>
                    </div>
                  </div>

                  <div className="testimonials-progress-bar">
                    <span
                      className="testimonials-progress-fill"
                      key={activeTestimonial}
                    ></span>
                  </div>

                  <div className="testimonials-dots-row" ref={dotsRef}>
                    {testimonialsData.map((item, index) => (
                      <button
                        key={item.id}
                        className={`testimonials-dot ${
                          activeTestimonial === index ? "active" : ""
                        }`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Show testimonial ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sip-luxury-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="sip-luxury-container">
            <div className="sip-luxury-head">
              <span className="sip-luxury-label">WEALTH PLANNING TOOL</span>
              <h2 className="sip-luxury-title">SIP Calculator</h2>
              <p className="sip-luxury-subtitle">
                Estimate your long-term wealth creation with a refined SIP
                planner designed for smart investment decisions.
              </p>
            </div>

            <div className="sip-luxury-card">
              <div className="sip-form-grid">
                <div className="sip-field">
                  <label>Investment Amount (₹)</label>
                  <div className="sip-input-group">
                    <input
                      type="number"
                      name="amount"
                      placeholder="Enter amount"
                      value={sipData.amount}
                      onChange={handleSipChange}
                    />
                    <select
                      name="frequency"
                      value={sipData.frequency}
                      onChange={handleSipChange}
                    >
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>

                <div className="sip-field">
                  <label>Investment Period (Years)</label>
                  <input
                    type="number"
                    name="years"
                    placeholder="Enter years"
                    value={sipData.years}
                    onChange={handleSipChange}
                  />
                </div>

                <div className="sip-field">
                  <label>Expected Annual Return (%)</label>
                  <input
                    type="number"
                    name="expectedReturn"
                    placeholder="Enter expected return"
                    value={sipData.expectedReturn}
                    onChange={handleSipChange}
                  />
                </div>

                <div className="sip-field">
                  <label>Adjust for Inflation</label>
                  <select
                    name="inflationMode"
                    value={sipData.inflationMode}
                    onChange={handleSipChange}
                  >
                    <option value="none">No Inflation</option>
                    <option value="custom">Custom Inflation</option>
                  </select>
                </div>

                {sipData.inflationMode === "custom" && (
                  <div className="sip-field sip-field-full">
                    <label>Inflation Rate (%)</label>
                    <input
                      type="number"
                      name="inflationRate"
                      placeholder="Enter inflation rate"
                      value={sipData.inflationRate}
                      onChange={handleSipChange}
                    />
                  </div>
                )}
              </div>

              <div className="sip-btn-row">
                <button
                  type="button"
                  className="sip-calc-btn"
                  onClick={calculateSipReturns}
                >
                  Calculate Returns
                </button>

                <button
                  type="button"
                  className="sip-reset-btn"
                  onClick={resetSipCalculator}
                >
                  Reset
                </button>
              </div>

              {sipResult?.error && (
                <div className="sip-error-box">{sipResult.error}</div>
              )}

              {sipResult && !sipResult.error && (
                <div className="sip-results-wrap">
                  <div className="sip-summary-grid">
                    <div className="sip-summary-card">
                      <span>Total Invested</span>
                      <strong>
                        {formatCurrency(sipResult.investedAmount)}
                      </strong>
                    </div>

                    <div className="sip-summary-card">
                      <span>Estimated Value</span>
                      <strong>{formatCurrency(sipResult.futureValue)}</strong>
                    </div>

                    <div className="sip-summary-card">
                      <span>Estimated Profit</span>
                      <strong>{formatCurrency(sipResult.profitEarned)}</strong>
                    </div>

                    <div className="sip-summary-card">
                      <span>Inflation Adjusted Value</span>
                      <strong>
                        {formatCurrency(sipResult.realFutureValue)}
                      </strong>
                    </div>
                  </div>

                  <div className="sip-bottom-grid">
                    <div className="sip-chart-card">
                      <div className="sip-chart-head">
                        <h3>Wealth Breakdown</h3>
                        <p>
                          Visual split of invested amount and profit earned.
                        </p>
                      </div>

                      <div className="sip-bars-wrap">
                        {sipChartBars.map((bar) => (
                          <div className="sip-bar-col" key={bar.label}>
                            <div className="sip-bar-track">
                              <div
                                className={`sip-bar-fill ${
                                  bar.label === "Invested"
                                    ? "invested"
                                    : "returns"
                                }`}
                                style={{ height: bar.height }}
                              />
                            </div>
                            <strong>{formatCurrency(bar.value)}</strong>
                            <span>{bar.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="sip-table-card">
                      <div className="sip-table-head">
                        <h3>Projected Growth Timeline</h3>
                        <p>Projected value across different time horizons.</p>
                      </div>

                      <div className="sip-table-wrap">
                        <table>
                          <thead>
                            <tr>
                              <th>Duration</th>
                              <th>Invested</th>
                              <th>Future Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sipResult.projectionDurations.map((item) => (
                              <tr key={item.year}>
                                <td>{item.year} years</td>
                                <td>{formatCurrency(item.invested)}</td>
                                <td>{formatCurrency(item.futureValue)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
