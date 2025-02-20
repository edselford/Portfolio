"use client";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,      // Transition duration
      smoothWheel: true,  // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1, // Mouse wheel multiplier
      touchMultiplier: 2, // Touch multiplier
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Ease out exponential
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}