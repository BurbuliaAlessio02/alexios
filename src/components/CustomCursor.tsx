'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor component that provides a custom cursor effect on hover.
 * 
 * @returns {JSX.Element} The rendered custom cursor component.
 */
const CustomCursor = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = () => {
      // Update cursor position with a smoothing effect
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(move);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Update mouse position on mouse move
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    // Sostituisci '.hover-cursor' con il selettore degli elementi su cui vuoi l'effetto
    const targets = document.querySelectorAll('.hover-cursor');
    const handleMouseEnter = () => setActive(true);
    const handleMouseLeave = () => setActive(false);

    // Add event listeners to target elements
    targets.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add mouse move event listener
    document.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      // Cleanup event listeners on component unmount
      document.removeEventListener('mousemove', handleMouseMove);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={wrapperRef} className="custom-cursor-wrapper">
      <div className="cursor-outer" />
      <div
        ref={innerRef}
        className={`cursor-inner${active ? ' cursor-inner--active' : ''}`}
      />
    </div>
  );
};

export default CustomCursor;
