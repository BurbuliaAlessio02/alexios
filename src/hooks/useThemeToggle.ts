'use client'

import gsap from "gsap";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const circleRef = useRef<HTMLDivElement>(null); 
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const isDark = useMemo(() => theme === 'dark', [theme]);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, [setTheme]);

  useEffect(() => {
    if (circleRef.current && containerRef.current && mounted) {
      const widthCircle = circleRef.current.offsetWidth;
      const widthToX = containerRef.current.offsetWidth - widthCircle;
      
      const toX = isDark ? 0 : widthToX;

      if (initialLoad) {
        gsap.set(circleRef.current, { x: toX });
        setInitialLoad(false);
      } else {
        gsap.to(circleRef.current, {
          x: toX,
          duration: 0.6,
          ease: "bounce.out",
        });
      }

      localStorage.setItem('theme', theme || 'light');
    }
  }, [theme, mounted, initialLoad, isDark]);

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
    
    if (circleRef.current && containerRef.current) {
      const widthCircle = circleRef.current.offsetWidth;
      const widthToX = containerRef.current.offsetWidth - widthCircle;

      const toX = isDark ? widthToX : 0;

      gsap.to(circleRef.current, {
        x: toX,
        duration: 0.6,
        ease: "bounce.out",
      });
    }  
  }, [isDark, setTheme]);

  return {
    mounted,
    circleRef,
    containerRef,
    toggleTheme
  };
}