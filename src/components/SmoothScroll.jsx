// src/components/SmoothScroll.jsx
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // optional CSS helper (tiny)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothTouch: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // cleanup on unmount
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}