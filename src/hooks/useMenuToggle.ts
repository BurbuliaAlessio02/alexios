// hooks/useNavAnimation.ts
'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export const useNavAnimation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navRef, setNavRef] = useState<HTMLElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!navRef) return;

    const items = navRef.querySelectorAll('.navbar__item');
    const overlays = navRef.querySelectorAll('.overlay');

    // Animazione tendina
    gsap.to(navRef, {
      y: isMenuOpen ? '0%' : '100%',
      duration: 0.5,
      ease: isMenuOpen ? 'power2.out' : 'power2.in'
    });

    // Animazioni elementi
    if (isMenuOpen) {
      gsap.fromTo(items,
        { y: '-100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }
      );

      gsap.to(overlays, {
        y: '-100%',
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    } else {
      gsap.to(items, {
        y: '-100%',
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.in'
      });

      gsap.to(overlays, {
        y: '0%',
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.in'
      });
    }
  }, [isMenuOpen, navRef]);

  return { isMenuOpen, toggleMenu, setNavRef };
};