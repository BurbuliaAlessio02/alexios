'use client'

import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";

export const useMenuAnimation = (isOpen: boolean) => {
  const containerRef = useRef<HTMLButtonElement | null>(null);
  const circle1Ref = useRef<HTMLDivElement | null>(null);
  const circle3Ref = useRef<HTMLDivElement | null>(null);

  const initialWidth = useRef(0);
  const initialHeight = useRef(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      initialWidth.current = container.offsetWidth;
      initialHeight.current = container.offsetHeight;
    }
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const c1 = circle1Ref.current;
    const c3 = circle3Ref.current;

    if (!container || !c1 || !c3) return;

    const height = initialHeight.current;
    const width = initialWidth.current;
    const center = height / 3.5;

    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(c1, { rotate: 45, y: center, duration: 0.3, ease: "circ.inOut" }, 0)
        .to(c3, { rotate: -45, y: -center, duration: 0.3, ease: "circ.inOut" }, 0)
        .to(container, { width: height, duration: 0.5, ease: "expo.out" }, 0);
    } else {
      tl.to(container, { width: width, duration: 0.5, ease: "expo.inOut" }, 0)
        .to(c1, { rotate: 0, y: 0, duration: 0.3, ease: "circ.inOut" }, 0)
        .to(c3, { rotate: 0, y: 0, duration: 0.3, ease: "circ.inOut" }, 0);
    }
  }, [isOpen]);

  return {
    containerRef,
    circle1Ref,
    circle3Ref
  };
}