"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const words = text.split(" ");
    textRef.current.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>&nbsp;`
      )
      .join("");

    const spans = textRef.current.querySelectorAll("span span");

    gsap.fromTo(
      spans,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
        delay: delay,
      }
    );
  }, [text, delay]);

  return <div ref={textRef} className={className} />;
}
