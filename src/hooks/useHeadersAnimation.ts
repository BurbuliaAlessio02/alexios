// hooks/useHeaderAnimation.ts
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

type HeaderAnimationRefs = {
  rectangleRef: React.RefObject<HTMLDivElement | null>;
  numberRef: React.RefObject<HTMLParagraphElement| null>;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  letterA: React.RefObject<HTMLDivElement | null>;
  boxA: React.RefObject<HTMLDivElement | null>;
  letterL: React.RefObject<HTMLParagraphElement | null>;
  letterE: React.RefObject<HTMLParagraphElement | null>;
  iosWrapper: React.RefObject<HTMLDivElement | null>;
  boxPortfoil: React.RefObject<HTMLDivElement | null>;
};

export const useHeaderAnimation = ({ refs }: { refs: HeaderAnimationRefs }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
  
      tl.fromTo(
        refs.rectangleRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' },
        0
      );
  
      tl.fromTo(
        refs.numberRef.current,
        { x: '-1000%', opacity: 1 },
        { x: '0%', opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
  
      tl.fromTo(
        refs.boxA.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' },
        0
      );
  
      tl.fromTo(
        refs.letterA.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.6'
      );
  
      // Animazione per lettere L ed E
      tl.fromTo(
        [refs.letterL.current, refs.letterE.current],
        {
          x: '250%',
          opacity: 0
        },
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.1
        },
        0
      );
  
      tl.fromTo(
        refs.boxPortfoil.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' },
        0
      );

      tl.fromTo(
        refs.iosWrapper.current,
        {
          x: '-200%',
          opacity: 0
        },
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.1
        },
        0
      );
  
    }, refs.wrapperRef);
  
    return () => ctx.revert();
  }, [refs]);
};

export default useHeaderAnimation;