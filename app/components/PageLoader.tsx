"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animate loader
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    tl.to(".loader-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(".loader-bar", {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(".loader-text", {
        opacity: 0,
        y: -20,
        duration: 0.5,
      })
      .to(
        ".loader-container",
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.2"
      );

    // Prevent scroll during loading
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowY = "auto";
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = "auto";
      document.body.style.overflowY = "auto";
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="loader-container fixed inset-0 z-50 bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="loader-text text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 translate-y-10">
          Mohammad Hilmi Afifi
        </h2>
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
          <div className="loader-bar h-full bg-linear-to-r from-purple-500 to-pink-600 origin-left scale-x-0"></div>
        </div>
      </div>
    </div>
  );
}
