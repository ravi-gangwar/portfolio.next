"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeadingWithUnderlineProps {
  text: string;
  className?: string;
  highlightColor?: string;
  animationDuration?: number;
  animationDelay?: number;
  headingClassName?: string;
}

export default function HeadingWithUnderline({
  text,
  className = "",
  highlightColor = "fill-red-600",
  animationDuration = 0.6,
  animationDelay = 0,
  headingClassName = "text-3xl font-bold",
}: HeadingWithUnderlineProps) {
  const highlightRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (highlightRef.current) {
      // Reset the scale and set transform origin
      gsap.set(highlightRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Animate the scale
      gsap.to(highlightRef.current, {
        scaleX: 1,
        duration: animationDuration,
        delay: animationDelay,
        ease: "power2.out",
      });
    }
  }, [animationDuration, animationDelay]);

  return (
    <div className={`inline-block ${className}`}>
      <div className="relative">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 50"
          preserveAspectRatio="none"
          style={{ transform: "scale(1.2, 1.4)" }}
        >
          <path
            ref={highlightRef}
            className={highlightColor}
            d="M5.65,25.93c9.39-1.08,19.63-1.28,29.38-1.5c16.89-.38,33.79-.44,50.69-.45
            c32.89,0,65.79.13,98.68.38c19.47.15,38.94.35,58.4.7c11.9.21,23.79.48,35.68.85
            c6.75.21,13.5.45,20.24.73"
            style={{
              strokeWidth: "40",
              stroke: "currentColor",
              strokeLinecap: "round",
              fill: "none",
            }}
          />
        </svg>
        <h1 className={`${headingClassName} relative z-10 px-2`}>{text}</h1>
      </div>
    </div>
  );
}
