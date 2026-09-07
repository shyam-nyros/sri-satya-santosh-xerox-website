import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  ExternalLink,
  FileText,
  Filter,
  Globe2,
  GraduationCap,
  Image as ImageIcon,
  LocateFixed,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  ScanLine,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
  Calculator,
  Send,
  Plus,
  Minus,
  Maximize2,
} from "lucide-react";
import "./styles.css";

const PHONE = "09912794143";
const PHONE_DISPLAY = "099127 94143";
const MAP_URL =
  "https://www.google.com/maps/dir/?api=1&destination=X6PQ%2BV9%2C+Ramanayyapeta%2C+Andhra+Pradesh";
const GOOGLE_URL =
  "https://www.google.com/search?q=Sri+Satya+Santosh+Xerox+Ramanayyapeta";
const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi Sri Satya Santosh, I would like to know about your Xerox / printing / study material services.")}`;

const sampleImages = {
  // Local images from public/images
  // 1–5: Jumbo Xerox / large-format machine photos
  // 6: Project report & thesis binding promotional image
  shop: "/images/1.png",
  printCenter: "/images/2.png",
  stationery: "/images/3.png",
  printWorkspace: "/images/4.png",
  shopInterior: "/images/5.png",
  academic: "/images/6.png",

  jumboXerox: "/images/1.png",
  jumboXerox2: "/images/2.png",
  jumboXerox3: "/images/3.png",
  jumboXerox4: "/images/4.png",
  jumboXerox5: "/images/5.png",
  projectBinding: "/images/6.png",
};

const serviceCategories = [
  "all",
  "printing",
  "academic",
  "stationery",
  "online",
];
const categoryLabels = {
  all: "All services",
  printing: "Print & Xerox",
  academic: "Academic",
  stationery: "Stationery",
  online: "Online help",
};

const services = [
  {
    icon: Copy,
    title: "High-Speed Xerox",
    image: sampleImages.jumboXerox,
    text: "Sharp and reliable photocopying for documents, notes and study materials.",
    tag: "Fast service",
    category: "printing",
  },
  {
    icon: Printer,
    title: "Printing & Scanning",
    image: sampleImages.jumboXerox2,
    text: "Everyday document printing, scanning and digital file support.",
    tag: "Documents",
    category: "printing",
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    image: sampleImages.projectBinding,
    text: "JNTUK, AU and AKNU study materials with MBA semester resources.",
    tag: "Students",
    category: "academic",
  },
  {
    icon: FileText,
    title: "Project Records",
    image: sampleImages.projectBinding,
    text: "Project records, reports and academic document preparation.",
    tag: "Academic",
    category: "academic",
  },
  {
    icon: ScanLine,
    title: "Perfect Binding",
    image: sampleImages.projectBinding,
    text: "Clean and professional binding for projects, records and reports.",
    tag: "Finishing",
    category: "academic",
  },
  {
    icon: Globe2,
    title: "Internet Facility",
    image: sampleImages.jumboXerox3,
    text: "Convenient internet access for forms, downloads and online work.",
    tag: "Online work",
    category: "online",
  },
  {
    icon: GraduationCap,
    title: "Books & Stationery",
    image: sampleImages.jumboXerox4,
    text: "Books, stationery and useful educational essentials.",
    tag: "Essentials",
    category: "stationery",
  },
  {
    icon: Printer,
    title: "Jumbo Xerox",
    image: sampleImages.jumboXerox5,
    text: "Large-format Xerox and printing for oversized documents and academic work.",
    tag: "Large format",
    category: "printing",
  },
  {
    icon: BriefcaseBusiness,
    title: "Custom Document Work",
    image: sampleImages.projectBinding,
    text: "Practical document support for everyday academic and office needs.",
    tag: "Convenient",
    category: "online",
  },
];

const materials = [
  {
    title: "JNTUK MBA",
    text: "Semester-wise Xerox study materials for MBA students.",
    icon: GraduationCap,
  },
  {
    title: "AU Materials",
    text: "Study resources and document support for Andhra University students.",
    icon: BookOpen,
  },
  {
    title: "AKNU Materials",
    text: "Academic materials and Xerox support for Adikavi Nannaya University students.",
    icon: FileText,
  },
];

const gallery = [
  {
    image: sampleImages.jumboXerox,
    title: "Jumbo Xerox Machine",
    type: "Jumbo Xerox",
  },
  {
    image: sampleImages.jumboXerox2,
    title: "Large Format Xerox",
    type: "Jumbo Xerox",
  },
  {
    image: sampleImages.jumboXerox3,
    title: "Jumbo Printing Work",
    type: "Jumbo Xerox",
  },
  {
    image: sampleImages.jumboXerox4,
    title: "Large Format Printing",
    type: "Jumbo Xerox",
  },
  {
    image: sampleImages.jumboXerox5,
    title: "Professional Xerox Machine",
    type: "Jumbo Xerox",
  },
  {
    image: sampleImages.projectBinding,
    title: "Project Reports & Thesis Binding",
    type: "Academic",
  },
];

const reviews = [
  {
    name: "S V S S Hari Kishna",
    rating: 5,
    text: "Awesome experience.. the owner and the helper are so friendly in behaviour.",
  },
  {
    name: "Shyam K",
    rating: 5,
    text: "Nice work and good performance and nice dealing with customers.",
  },
  {
    name: "Hari Pavan Sriram Yalamati",
    rating: 2,
    text: "Review mentions high prices and late service, while also noting online payments were not accepted.",
  },
];

const faqs = [
  [
    "What services are available?",
    "The shop offers high-speed Xerox, printing and scanning, study materials, project records, perfect binding, internet facility, books and stationery, Jumbo Xerox and custom document work.",
  ],
  [
    "Do you have JNTUK, AU and AKNU materials?",
    "The website highlights JNTUK MBA, AU and AKNU materials. Availability can vary, so WhatsApp the shop before visiting for the specific semester or material you need.",
  ],
  [
    "Can I ask about printing a file before visiting?",
    "Yes. Use the WhatsApp button to ask about your file, copies, pages, print type or finishing requirements before you travel.",
  ],
  [
    "What are the opening hours?",
    "The business information provided for this website lists daily hours from 9:00 AM to 9:30 PM.",
  ],
];

function Stars({ rating = 5 }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={14} fill={n <= rating ? "currentColor" : "none"} />
      ))}
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [serviceFilter, setServiceFilter] = useState("all");
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [faqOpen, setFaqOpen] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pages, setPages] = useState(10);
  const [printType, setPrintType] = useState("B&W");
  const [sides, setSides] = useState("Single side");
  const [binding, setBinding] = useState(false);
  const [jumbo, setJumbo] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const filteredServices = useMemo(
    () =>
      serviceFilter === "all"
        ? services
        : services.filter((s) => s.category === serviceFilter),
    [serviceFilter],
  );
  const filteredGallery = useMemo(
    () =>
      galleryFilter === "All"
        ? gallery
        : gallery.filter((g) => g.type === galleryFilter),
    [galleryFilter],
  );

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "home",
      "services",
      "materials",
      "gallery",
      "reviews",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const copyLocation = async () => {
    try {
      await navigator.clipboard.writeText(
        "X6PQ+V9, Ramanayyapeta, Andhra Pradesh 533003",
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const requestText = `Hi Sri Satya Santosh, I want to ask about a print/Xerox job. Pages: ${pages}. Type: ${printType}. ${sides}. ${binding ? "Perfect binding needed. " : ""}${jumbo ? "Jumbo Xerox needed. " : ""}Please let me know the details.`;
  const requestUrl = `https://wa.me/91${PHONE}?text=${encodeURIComponent(requestText)}`;

  const openGallery = (index) => setSelectedImage(index);
  const nextImage = () =>
    setSelectedImage((v) => (v === null ? 0 : (v + 1) % gallery.length));
  const prevImage = () =>
    setSelectedImage((v) =>
      v === null ? 0 : (v - 1 + gallery.length) % gallery.length,
    );

  return (
    <div className="site-shell">
      <div className="announcement">
        <div className="container announcement-inner">
          <span>
            <Zap size={14} /> Fast local Xerox & document services
          </span>
          <span className="announcement-right">
            <Clock3 size={14} /> Daily 9:00 AM – 9:30 PM
          </span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Go to home"
          >
            <span className="brand-mark">
              <Copy size={21} />
            </span>
            <span className="brand-copy">
              <strong>Sri Satya Santosh</strong>
              <small>XEROX • BOOKS • STATIONERY</small>
            </span>
          </button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["services", "materials", "gallery", "reviews", "contact"].map(
              (id) => (
                <button
                  key={id}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => scrollTo(id)}
                >
                  {id === "materials"
                    ? "Study Materials"
                    : id[0].toUpperCase() + id.slice(1)}
                </button>
              ),
            )}
            <a className="nav-call" href={`tel:${PHONE}`}>
              <Phone size={16} /> Call Now
            </a>
          </nav>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-grid container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="pulse-dot" /> Your everyday document partner in
                Ramanayyapeta
              </div>
              <h1>
                Get it <span>printed.</span>
                <br />
                Get it done.
              </h1>
              <p className="hero-lead">
                Fast Xerox, printing, binding, project records, study materials
                and stationery — all at one convenient local counter.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={19} /> WhatsApp Us
                </a>
                <a
                  className="btn btn-secondary"
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocateFixed size={18} /> Get Directions{" "}
                  <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-trust">
                <div className="rating">
                  <Stars rating={4} />
                  <strong>3.9/5</strong>
                  <span>115 Google reviews</span>
                </div>
                <span className="trust-divider" />
                <div className="micro-trust">
                  <ShieldCheck size={16} /> Local & convenient
                </div>
              </div>
              <div className="hero-chips">
                <span>
                  <Copy size={14} /> High-speed Xerox
                </span>
                <span>
                  <GraduationCap size={14} /> JNTUK • AU • AKNU
                </span>
                <span>
                  <Sparkles size={14} /> Perfect Binding
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="hero-image-card">
                <img
                  src={sampleImages.shop}
                  alt="Temporary sample print and stationery shop"
                />
                <div className="image-shade" />
                <div className="hero-image-caption">
                  <div>
                    <small>SAMPLE IMAGE</small>
                    <strong>Your shop photo goes here</strong>
                  </div>
                  <span>
                    <ImageIcon size={18} />
                  </span>
                </div>
              </div>
              <div className="open-badge">
                <span className="status-dot" />{" "}
                <div>
                  <strong>Daily hours</strong>
                  <small>9:00 AM – 9:30 PM</small>
                </div>
              </div>
              <div className="float-card float-card-one">
                <Copy size={18} />
                <div>
                  <strong>High-speed Xerox</strong>
                  <small>Clear & dependable</small>
                </div>
              </div>
              <div className="float-card float-card-two">
                <GraduationCap size={18} />
                <div>
                  <strong>Student friendly</strong>
                  <small>JNTUK • AU • AKNU</small>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-fade" />
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            {[
              [Printer, "Print & Xerox", "Everyday documents"],
              [BookOpen, "Study Materials", "JNTUK • AU • AKNU"],
              [FileText, "Project Records", "Academic work"],
              [Sparkles, "Binding", "Clean finishing"],
            ].map(([Icon, title, text]) => (
              <button
                key={title}
                onClick={() =>
                  scrollTo(
                    title === "Study Materials" ? "materials" : "services",
                  )
                }
              >
                <span className="quick-icon">
                  <Icon size={19} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">WHAT WE DO</span>
                <h2>
                  Everything you need,
                  <br />
                  <em>under one roof.</em>
                </h2>
              </div>
              <p>
                Explore the core services in one place. Tap a category to
                quickly narrow down what you need.
              </p>
            </div>
            <div className="filter-row">
              <div className="filter-label">
                <Filter size={15} /> Filter services
              </div>
              <div className="filter-pills">
                {serviceCategories.map((c) => (
                  <button
                    key={c}
                    className={serviceFilter === c ? "active" : ""}
                    onClick={() => setServiceFilter(c)}
                  >
                    {categoryLabels[c]}
                  </button>
                ))}
              </div>
            </div>
            <div className="services-grid enhanced-services">
              {filteredServices.map(
                ({ icon: Icon, title, text, tag, image }) => (
                  <article className="service-card" key={title}>
                    <div className="service-photo">
                      <img src={image} alt={`${title} sample`} loading="lazy" />
                      <span>{tag}</span>
                    </div>
                    <div className="service-top">
                      <span className="service-icon">
                        <Icon size={21} />
                      </span>
                      <button
                        className="service-mini-action"
                        onClick={() =>
                          window.open(
                            `${WHATSAPP_URL}&text=${encodeURIComponent(`Hi, I want to ask about ${title}.`)}`,
                            "_blank",
                          )
                        }
                        aria-label={`Ask about ${title}`}
                      >
                        <MessageCircle size={15} />
                      </button>
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="service-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="materials-section" id="materials">
          <div className="container materials-layout">
            <div className="materials-intro">
              <span className="section-kicker light">FOR STUDENTS</span>
              <h2>
                Study smarter.
                <br />
                <em>Stay prepared.</em>
              </h2>
              <p>
                Need semester materials, notes or academic documents? Ask the
                shop for available Xerox study resources.
              </p>
              <div className="material-tabs">
                {materials.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      className={activeMaterial === index ? "active" : ""}
                      onClick={() => setActiveMaterial(index)}
                    >
                      <Icon size={17} />
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="material-feature">
              <div className="material-card-main">
                <div className="material-number">0{activeMaterial + 1}</div>
                {React.createElement(materials[activeMaterial].icon, {
                  className: "material-big-icon",
                  size: 44,
                })}
                <span className="availability">CHECK CURRENT AVAILABILITY</span>
                <h3>{materials[activeMaterial].title}</h3>
                <p>{materials[activeMaterial].text}</p>
                <a
                  href={`${WHATSAPP_URL}&text=${encodeURIComponent(`Hi, I want to ask about ${materials[activeMaterial].title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Ask about materials <ArrowRight size={16} />
                </a>
              </div>
              <div className="material-side-note">
                <Check size={16} /> Semester-wise support
              </div>
              <div className="material-side-note">
                <Check size={16} /> Xerox-ready resources
              </div>
              <div className="material-side-note">
                <Check size={16} /> Student-focused service
              </div>
            </div>
          </div>
        </section>

        <section className="section request-section" id="request">
          <div className="container request-grid">
            <div>
              <span className="section-kicker">SMART REQUEST</span>
              <h2>
                Prepare your job
                <br />
                <em>before you visit.</em>
              </h2>
              <p>
                Use this quick request builder to describe your print or Xerox
                requirement. It creates a WhatsApp message — it does not
                calculate or promise a price.
              </p>
              <div className="request-benefits">
                <span>
                  <Check size={15} /> Clear job details
                </span>
                <span>
                  <Check size={15} /> Easy WhatsApp handoff
                </span>
                <span>
                  <Check size={15} /> Ask before travelling
                </span>
              </div>
            </div>
            <div className="request-card">
              <div className="request-card-head">
                <span>
                  <Calculator size={17} /> Request builder
                </span>
                <small>Estimate-free</small>
              </div>
              <div className="control-group">
                <label>Print type</label>
                <div className="segmented">
                  <button
                    className={printType === "B&W" ? "active" : ""}
                    onClick={() => setPrintType("B&W")}
                  >
                    Black & White
                  </button>
                  <button
                    className={printType === "Color" ? "active" : ""}
                    onClick={() => setPrintType("Color")}
                  >
                    Color
                  </button>
                </div>
              </div>
              <div className="control-group">
                <label>Pages / copies</label>
                <div className="stepper">
                  <button onClick={() => setPages(Math.max(1, pages - 1))}>
                    <Minus size={16} />
                  </button>
                  <strong>{pages}</strong>
                  <button onClick={() => setPages(pages + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <div className="control-group">
                <label>Printing</label>
                <div className="segmented">
                  <button
                    className={sides === "Single side" ? "active" : ""}
                    onClick={() => setSides("Single side")}
                  >
                    Single side
                  </button>
                  <button
                    className={sides === "Double side" ? "active" : ""}
                    onClick={() => setSides("Double side")}
                  >
                    Double side
                  </button>
                </div>
              </div>
              <div className="toggle-row">
                <button
                  className={binding ? "toggle active" : "toggle"}
                  onClick={() => setBinding((v) => !v)}
                >
                  <span>{binding ? <Check size={14} /> : null}</span> Perfect
                  binding
                </button>
                <button
                  className={jumbo ? "toggle active" : "toggle"}
                  onClick={() => setJumbo((v) => !v)}
                >
                  <span>{jumbo ? <Check size={14} /> : null}</span> Jumbo Xerox
                </button>
              </div>
              <div className="request-summary">
                <small>YOUR REQUEST</small>
                <strong>
                  {pages} pages · {printType} · {sides}
                </strong>
                <span>
                  {binding ? "Binding included · " : ""}
                  {jumbo ? "Jumbo Xerox included" : "Standard size"}
                </span>
              </div>
              <a
                className="btn btn-primary request-send"
                href={requestUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Send size={17} /> Send request on WhatsApp{" "}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section workflow-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">SIMPLE PROCESS</span>
              <h2>
                Bring it in. <em>Get it done.</em>
              </h2>
              <p>
                A straightforward local experience without unnecessary steps.
              </p>
            </div>
            <div className="steps enhanced-steps">
              <div className="step">
                <span>01</span>
                <div className="step-line" />
                <h3>Bring or ask</h3>
                <p>
                  Bring your document or ask about sending a file for printing.
                </p>
              </div>
              <div className="step">
                <span>02</span>
                <div className="step-line" />
                <h3>Choose the work</h3>
                <p>
                  Tell us your Xerox, print, scan, binding or record
                  requirements.
                </p>
              </div>
              <div className="step">
                <span>03</span>
                <div className="step-line" />
                <h3>Collect & go</h3>
                <p>Get your finished documents and continue your day.</p>
              </div>
            </div>
            <div className="workflow-cta">
              <div>
                <strong>Prefer to ask first?</strong>
                <span>Send your requirement on WhatsApp.</span>
              </div>
              <a
                className="btn btn-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">SHOP PREVIEW</span>
                <h2>
                  See the kind of work
                  <br />
                  <em>we handle.</em>
                </h2>
              </div>
              <p>
                Temporary sample images are being used for now. Replace these
                with your actual shop, machine, books and stationery photos
                later.
              </p>
            </div>
            <div className="gallery-toolbar">
              <div className="gallery-filters">
                {[
                  "All",
                  "Jumbo Xerox",
                  "Printing",
                  "Academic",
                  "Stationery",
                ].map((f) => (
                  <button
                    key={f}
                    className={galleryFilter === f ? "active" : ""}
                    onClick={() => setGalleryFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <span>
                <ImageIcon size={15} /> Sample gallery
              </span>
            </div>
            <div className="gallery-grid enhanced-gallery">
              {filteredGallery.map((item, index) => (
                <button
                  className="gallery-card"
                  key={item.title}
                  onClick={() =>
                    openGallery(
                      gallery.findIndex((g) => g.title === item.title),
                    )
                  }
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <span>{item.type} • SAMPLE</span>
                    <h3>{item.title}</h3>
                    <p>Replace with your actual shop photo later.</p>
                  </div>
                  <span className="gallery-zoom">
                    <Maximize2 size={16} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="container">
            <div className="reviews-head">
              <div>
                <span className="section-kicker">CUSTOMER FEEDBACK</span>
                <h2>
                  Local service,
                  <br />
                  <em>real experiences.</em>
                </h2>
              </div>
              <div className="google-rating">
                <div className="big-rating">3.9</div>
                <div>
                  <Stars rating={4} />
                  <strong>115 Google reviews</strong>
                </div>
              </div>
            </div>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <article
                  className={`review-card ${index === 2 ? "review-neutral" : ""}`}
                  key={review.name}
                >
                  <Stars rating={review.rating} />
                  <p>“{review.text}”</p>
                  <div className="review-person">
                    <span>{review.name.charAt(0)}</span>
                    <div>
                      <strong>{review.name}</strong>
                      <small>Google review</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="reviews-cta">
              <div>
                <strong>Want to see more customer feedback?</strong>
                <span>
                  Open the Google listing to explore the available reviews.
                </span>
              </div>
              <a
                className="btn btn-outline"
                href={GOOGLE_URL}
                target="_blank"
                rel="noreferrer"
              >
                View Google reviews <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div>
              <span className="section-kicker">QUICK ANSWERS</span>
              <h2>
                Questions,
                <br />
                <em>made simple.</em>
              </h2>
              <p>Useful information before you make the trip to the shop.</p>
              <a
                className="text-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Ask a question on WhatsApp <ArrowRight size={16} />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <div
                  className={`faq-item ${faqOpen === i ? "open" : ""}`}
                  key={q}
                >
                  <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                    <span>{q}</span>
                    {faqOpen === i ? <Minus size={17} /> : <Plus size={17} />}
                  </button>
                  {faqOpen === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section location-section" id="contact">
          <div className="container location-grid">
            <div className="location-card">
              <div className="map-placeholder">
                <div className="map-grid" />
                <div className="map-pin">
                  <MapPin size={28} />
                </div>
                <div className="map-label">
                  <strong>X6PQ+V9</strong>
                  <span>Ramanayyapeta</span>
                </div>
                <a
                  className="map-open"
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocateFixed size={15} /> Open directions
                </a>
              </div>
            </div>
            <div className="contact-content">
              <span className="section-kicker">COME VISIT</span>
              <h2>
                Right where you
                <br />
                <em>need us.</em>
              </h2>
              <p className="contact-lead">
                Find us opposite SRR.I.T.I and HDFC Bank, beside Sri Dwarampudi
                Baskar Reddy Padmavathi Kalyana Mandapam.
              </p>
              <div className="contact-list">
                <a href={MAP_URL} target="_blank" rel="noreferrer">
                  <span>
                    <MapPin size={19} />
                  </span>
                  <div>
                    <strong>Address</strong>
                    <small>
                      X6PQ+V9, Ramanayyapeta, Andhra Pradesh 533003
                      <br />
                      Opp. SRR.I.T.I, HDFC Bank Opp Road, beside Sri Dwarampudi
                      Baskar Reddy Padmavathi Kalyana Mandapam.
                    </small>
                  </div>
                  <ExternalLink size={16} />
                </a>
                <a href={`tel:${PHONE}`}>
                  <span>
                    <Phone size={19} />
                  </span>
                  <div>
                    <strong>Call us</strong>
                    <small>{PHONE_DISPLAY}</small>
                  </div>
                  <ArrowRight size={16} />
                </a>
                <div>
                  <span>
                    <Clock3 size={19} />
                  </span>
                  <div>
                    <strong>Opening</strong>
                    <small>Daily · 9:00 AM – 9:30 PM</small>
                  </div>
                </div>
              </div>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`tel:${PHONE}`}>
                  <Phone size={18} /> Call Now
                </a>
                <a
                  className="btn btn-outline"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <button className="btn btn-outline" onClick={copyLocation}>
                  <Copy size={18} />
                  {copied ? "Copied" : "Copy location"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <span className="section-kicker light">
                NEED SOMETHING PRINTED?
              </span>
              <h2>
                Let's get your work <em>done.</em>
              </h2>
            </div>
            <div className="final-actions">
              <a
                className="btn btn-white"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a className="btn btn-ghost-white" href={`tel:${PHONE}`}>
                <Phone size={18} /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <span className="brand-mark">
              <Copy size={21} />
            </span>
            <div>
              <strong>Sri Satya Santosh</strong>
              <small>HIGH SPEED DIGITAL XEROX & BOOK STALL</small>
            </div>
          </div>
          <p>
            Fast Xerox • Books • Stationery • Printing • Binding • Study
            Materials
          </p>
          <div className="footer-links">
            {["services", "materials", "gallery", "reviews", "contact"].map(
              (id) => (
                <button key={id} onClick={() => scrollTo(id)}>
                  {id === "materials"
                    ? "Study Materials"
                    : id[0].toUpperCase() + id.slice(1)}
                </button>
              ),
            )}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Sri Satya Santosh. All rights reserved.
          </span>
          <span>Ramanayyapeta • Andhra Pradesh</span>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:${PHONE}`}>
          <Phone size={18} />
          Call
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a href={MAP_URL} target="_blank" rel="noreferrer">
          <MapPin size={18} />
          Directions
        </a>
      </div>
      <a
        className="floating-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Sri Satya Santosh"
      >
        <MessageCircle size={22} />
        <span>Chat</span>
      </a>
      {showTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ChevronDown size={18} />
        </button>
      )}

      {selectedImage !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            <X />
          </button>
          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[selectedImage].image}
              alt={gallery[selectedImage].title}
            />
            <figcaption>
              <strong>{gallery[selectedImage].title}</strong>
              <span>Local website image</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
