"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function SmoothScroll() {
  useEffect(() => {
    // Override default smooth scroll behavior
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        if (target) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: target,
              offsetY: 80,
            },
            ease: "power3.inOut",
          });
        }
      });
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.getElementById("home");

      if (hero) {
        gsap.to(hero, {
          y: scrolled * 0.5,
          opacity: 1 - scrolled / 800,
          duration: 0.3,
          ease: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
