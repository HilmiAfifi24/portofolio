"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedCard({
  children,
  className = "",
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(glow, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
      });

      // 3D tilt effect
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        z: 50,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(glow, {
        opacity: 0.6,
        scale: 1.5,
        duration: 0.4,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        z: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(glow, {
        opacity: 0,
        scale: 1,
        duration: 0.6,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={glowRef}
        className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
      />
      {children}
    </div>
  );
}
