"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Eye,
  ChevronLeft,
  ChevronRight,
  Gitlab,
} from "lucide-react";
import Image from "next/image";
import ThreeBackground from "./components/ThreeBackground";
import AnimatedText from "./components/AnimatedText";
import ScrollAnimations from "./components/ScrollAnimations";
import MagneticButton from "./components/MagneticButton";
import AnimatedCard from "./components/AnimatedCard";
// import CustomCursor from "./components/CustomCursor";
import PageLoader from "./components/PageLoader";
// import SmoothScroll from "./components/SmoothScroll";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = useMemo(() => [
    {
      title: "Moncube",
      description:
        "Website yang dikembangkan untuk memfasilitasi pemantauan dan pencatatan listrik pintar secara real-time, aman, dan efisien",
      tech: ["ReactJs", "TypeScript", "Zustand", "Tailwind"],
      images: [
        "/moncube/moncube.png",
        "/moncube/moncubesatu.png",
        "/moncube/moncube2.png",
        "/moncube/moncube3.png",
      ],
      link: "https://moncube.co.id/auth",
    },
    {
      title: "Salinix",
      description:
        "Website yang dikembangkan untuk memfasilitasi pemantauan dan pencatatan hasil tangkapan sampel garam, khususnya dalam pengelolaan kontaminan garam",
      tech: ["ReactJs", "TypeScript", "Tailwind", "Zustand"],
      images: [
        "/salinix/salinix.png",
        "/salinix/salinix1.png",
        "/salinix/salinix2.png",
        "/salinix/salinix4.png",
      ],
      link: "https://salinix.sindika.cloud/auth",
    },
    {
      title: "Pumpora",
      description:
        "Website yang berfungsi untuk pemantauan, pengelolaan, dan pelaporan operasi pompa secara real-time pada skala operasional",
      tech: ["ReactJs", "Typescript", "Tailwind", "Zustand"],
      images: [
        "/pumpora/pumpora.png",
        "/pumpora/pumpora1.png",
        "/pumpora/pumpora2.png",
        "/pumpora/pumpora3.png",
      ],
      link: "https://pumpora.sindika.cloud/auth",
    },
    {
      title: "Riseup",
      description:
        "Website yang berfokus pada donasi untuk orang penyakit kanker di Indonesia melalui midtrans payment gateway",
      tech: ["NextJs", "TypeScript", "Tailwind", "Prisma", "Midtrans"],
      images: [
        "/riseup/riseup.png",
        "/riseup/riseup1.png",
        "/riseup/riseup3.png",
        "/riseup/riseup4.png",
        "/riseup/riseup5.png",
        "/riseup/riseup6.png",
      ],
      link: "https://rise-up-psi.vercel.app/",
    },
     {
      title: "Hydrate",
      description: "Aplikasi pemantauan konsumsi air harian untuk membantu pengguna tetap terhidrasi dengan baik dan terintegrasi dengan cuaca",
      tech: ["Flutter", "Sqlite"],
      images: [
        "/hydrate/hydrate.png",
        "/hydrate/hydrate1.png",
        "/hydrate/hydrate2.png",
        "/hydrate/hydrate4.png",
      ],
      link: "https://play.google.com/store/apps/details?id=com.hydrate.pdbl"
    },
  ], []);

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    Backend: ["Next.js", "Laravel", "PostgreSQL", "MongoDB", "Prisma"],
    Mobile: ["Flutter", "Dart"],
    // "Tools": ["Git", "Docker", "AWS", "Vercel", "Figma"]
  };

  const experiences = [
    {
      role: "Intern Frontend Developer",
      company: "PT. Sinergi Dimensi Informatika",
      period: "Juli 2025 - Present",
      description:
        "Berkolaborasi dalam pengembangan website",
    },
    {
      role: "Mobile Developer",
      company: "Hydrate App",
      period: "Februari 2025 - Juni 2024",
      description:
        "Mengembangkan aplikasi mobile Flutter untuk pemantauan konsumsi air harian",
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const openModal = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const currentProject = projects[currentProjectIndex];
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    const currentProject = projects[currentProjectIndex];
    setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setCurrentImageIndex(0);
      } else if (e.key === "ArrowRight") {
        const currentProject = projects[currentProjectIndex];
        setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
      } else if (e.key === "ArrowLeft") {
        const currentProject = projects[currentProjectIndex];
        setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, currentProjectIndex, projects]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <PageLoader />
      {/* <CustomCursor /> */}
      {/* <SmoothScroll /> */}
      <ThreeBackground />
      <ScrollAnimations />
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors hover:text-purple-400 ${
                      activeSection === item ? "text-purple-400" : ""
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize block w-full text-left px-3 py-2 hover:bg-slate-700 rounded-md"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32"
      >
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Profile Image */}
          <div className="mb-4 sm:mb-5 animate-fade-in">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 p-1 shadow-2xl shadow-purple-500/30">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/diri/hilmi1.jpg"
                  alt="Mohammad Hilmi Afifi"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <AnimatedText
            text="Mohammad Hilmi Afifi"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight px-2"
            delay={0.2}
          />

          {/* Role */}
          <AnimatedText
            text="Frontend Developer | Mobile Developer"
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-2 sm:mb-3"
            delay={0.5}
          />
          <AnimatedText
            text="ReactJs & Flutter Specialist"
            className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-400 font-medium mb-6 sm:mb-8"
            delay={0.6}
          />

          {/* Description */}
          <AnimatedText
            text="Membuat solusi digital yang inovatif dengan fokus pada performa, user experience, dan clean code architecture"
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            delay={0.8}
          />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0">
            <MagneticButton
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-purple-500 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all font-medium text-sm sm:text-base"
              strength={0.4}
            >
              <span onClick={() => scrollToSection("projects")}>Lihat Projects</span>
            </MagneticButton>
            <MagneticButton
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-purple-500 rounded-full hover:bg-purple-500/20 transition-all font-medium text-sm sm:text-base"
              strength={0.4}
            >
              <span onClick={() => scrollToSection("contact")}>Contact Me</span>
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-5">
            <a 
              href="https://gitlab.com/HilmiAfifi" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-slate-800/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Gitlab className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-hilmi-afifi-464949342/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-slate-800/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:hilmiafifi65@gmail.com" 
              className="p-2.5 sm:p-3 rounded-full bg-slate-800/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            Tentang{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Saya
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                Saya adalah seorang Frontend Developer dan Mobile Developer dengan 1+ tahun
                pengalaman dalam membangun website dan applications yang scalable dan
                user-friendly. Passion saya adalah menciptakan solusi digital
                yang tidak hanya terlihat bagus, tetapi juga memberikan nilai
                nyata kepada users.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                Spesialisasi saya adalah dalam React ecosystem, terutama Next.js
                untuk production-grade applications. Saya juga memiliki
                pengalaman yang kuat dalam Mobile development dengan Flutter.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                Saat ini saya fokus pada pengembangan website dan aplikasi dengan clean
                architecture, best practices, dan modern development workflows.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Pengalaman</h3>
              {experiences.map((exp, index) => (
                <AnimatedCard
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-400">
                    {exp.role}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">{exp.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            Featured{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <AnimatedCard
                key={index}
                className="project-card bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all"
              >
                <div className="h-40 sm:h-48 overflow-hidden relative group">
                  <Image
                    width={800}
                    height={500}
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with Eye Icon */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openModal(index)}
                      className="bg-purple-600 hover:bg-purple-700 p-4 rounded-full transform hover:scale-110 transition-all"
                    >
                      <Eye size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base text-purple-400 hover:text-purple-300"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            Technical{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <AnimatedCard
                key={category}
                className="skill-card bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-slate-700 hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-400">
                  {category}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {items.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-linear-to-r from-purple-400 to-pink-600 rounded-full shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Mari{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Berkolaborasi
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 px-4 sm:px-0">
            Saya terbuka untuk peluang kerja baru dan project menarik. Mari
            berdiskusi bagaimana saya bisa membantu project Anda!
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <AnimatedCard className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
              <a href="mailto:hilmiafifi64@gmail.com" className="block">
                <Mail className="mx-auto mb-2 sm:mb-3 text-purple-400 w-6 h-6 sm:w-8 sm:h-8" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                <p className="text-gray-400 text-xs sm:text-sm break-all">hilmiafifi64@gmail.com</p>
              </a>
            </AnimatedCard>

            <AnimatedCard className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
              <a href="https://github.com/HilmiAfifi24" target="_blank" rel="noopener noreferrer" className="block">
                <Github className="mx-auto mb-2 sm:mb-3 text-purple-400 w-6 h-6 sm:w-8 sm:h-8" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">GitHub</h3>
                <p className="text-gray-400 text-xs sm:text-sm">HilmiAfifi24</p>
              </a>
            </AnimatedCard>

            <AnimatedCard className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-700 hover:border-purple-500 transition-all sm:col-span-2 md:col-span-1">
              <a href="https://www.linkedin.com/in/mohammad-hilmi-afifi-464949342/" target="_blank" rel="noopener noreferrer" className="block">
                <Linkedin className="mx-auto mb-2 sm:mb-3 text-purple-400 w-6 h-6 sm:w-8 sm:h-8" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">LinkedIn</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Mohammad Hilmi Afifi</p>
              </a>
            </AnimatedCard>
          </div>

          <MagneticButton
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-linear-to-r from-purple-500 to-pink-600 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            strength={0.5}
          >
            <a href="mailto:hilmiafifi64@gmail.com">Get In Touch</a>
          </MagneticButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">© 2025 Mohammad Hilmi Afifi. Built with NextJs & Tailwind CSS</p>
        </div>
      </footer>

      {/* Image Modal Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-purple-400 transition-colors z-10"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-1 sm:left-4 text-white hover:text-purple-400 transition-colors z-10 bg-slate-800/50 p-2 sm:p-3 rounded-full hover:bg-slate-700/50"
          >
            <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-1 sm:right-4 text-white hover:text-purple-400 transition-colors z-10 bg-slate-800/50 p-2 sm:p-3 rounded-full hover:bg-slate-700/50"
          >
            <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
          </button>

          {/* Modal Content */}
          <div className="max-w-6xl max-h-[95vh] sm:max-h-[90vh] w-full mx-2 sm:mx-4">
            <div className="bg-slate-900 rounded-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center bg-slate-950">
                <Image
                  width={1200}
                  height={800}
                  src={projects[currentProjectIndex].images[currentImageIndex]}
                  alt={`${projects[currentProjectIndex].title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6 border-t border-slate-700">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">
                  {projects[currentProjectIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                  {projects[currentProjectIndex].description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {projects[currentProjectIndex].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[currentProjectIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-purple-400 hover:text-purple-300"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Image Counter */}
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-center text-gray-400 text-sm sm:text-base">
                <span>
                  {currentImageIndex + 1} / {projects[currentProjectIndex].images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
