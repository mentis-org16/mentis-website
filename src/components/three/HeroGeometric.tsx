"use client";

import { useEffect, useRef } from "react";

/**
 * CSS-based 3D geometric scene for the hero.
 * Renders an animated wireframe icosahedron-like shape using pure CSS transforms.
 * No WebGL dependency — works everywhere, respects reduced motion.
 */
export function HeroGeometric() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced && containerRef.current) {
      containerRef.current.style.animationPlayState = "paused";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-scene"
      aria-hidden="true"
      role="presentation"
    >
      <div className="hero-shape">
        {/* Outer rotating ring */}
        <div className="hero-ring hero-ring-1">
          <div className="hero-ring-line" />
        </div>
        <div className="hero-ring hero-ring-2">
          <div className="hero-ring-line" />
        </div>
        <div className="hero-ring hero-ring-3">
          <div className="hero-ring-line" />
        </div>
        {/* Center element */}
        <div className="hero-core" />
        {/* Orbiting dots */}
        <div className="hero-orbit">
          <div className="hero-dot hero-dot-1" />
          <div className="hero-dot hero-dot-2" />
          <div className="hero-dot hero-dot-3" />
        </div>
      </div>
    </div>
  );
}
