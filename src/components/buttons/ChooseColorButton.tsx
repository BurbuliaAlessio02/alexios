'use client'

import gsap from "gsap";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";

export const ChooseColorButton = () => {
  const { theme, setTheme } = useTheme(); // hook gestione del colore del tema

  const circleRef = useRef<HTMLDivElement>(null); 
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false); // hook gestione del mount del componente

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (circleRef.current && containerRef.current) {
      const widthCircle = circleRef.current.offsetWidth
      const widthToX = containerRef.current.offsetWidth - widthCircle;
      
      const toX = theme === 'dark' ? 0 : widthToX;  // Calcola la posizione in base alla larghezza del container
      gsap.set(circleRef.current, { x: toX });
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const isDark = theme === 'dark';
    setTheme(isDark ? 'light' : 'dark');

    if (circleRef.current && containerRef.current) {
      const widthCircle = circleRef.current.offsetWidth
      const widthToX = containerRef.current.offsetWidth - widthCircle;

      const toX = isDark ? 0 : widthToX;

      gsap.to(circleRef.current, {
        x: toX,
        duration: 0.6,
        ease: "bounce.out",
      });
    }
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
      <button
        className="toggle-color-box"
        aria-label="Toggle color mode"
        onClick={toggleTheme}>
        <div className="toggle-color-mode" ref={containerRef}>
              <div 
                ref={circleRef} 
                className="toggle-color-mode__circle"
              />
        </div>
      </button>
  );
}