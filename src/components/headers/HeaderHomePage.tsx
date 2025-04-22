// HeaderHomePage.tsx
'use client';

import { useRef, useMemo } from 'react';
import style from '@/styles/pages/homepage/homepage.module.scss';
import useHeaderAnimation from '../../hooks/useHeadersAnimation';
import AlexiosLogo from '../logos-image/AlexiosLogo';

type Props = {
  onReady?: () => void;
};

/**
 * HeaderHomePage component that displays the header with animations.
 * 
 * @param {Props} props - The properties object.
 * @param {Function} [props.onReady] - Optional callback function to be called when the component is ready.
 * 
 * @returns {JSX.Element} The rendered header component.
 */
const HeaderHomePage = ({ onReady }: Props) => {

  // Refs per animazioni
  const rectangleRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const letterAWrapper = useRef<HTMLDivElement>(null);
  const letterA = useRef<HTMLDivElement>(null);
  const boxA = useRef<HTMLDivElement>(null);
  const iosWrapper = useRef<HTMLDivElement>(null);
  const boxPortfoil = useRef<HTMLDivElement>(null);
  const letterL = useRef<HTMLParagraphElement>(null);
  const letterE = useRef<HTMLParagraphElement>(null);

  // Memoized options for header animations
  const animationOptions = useMemo(() => ({
    refs: {
      rectangleRef,
      numberRef,
      wrapperRef,
      letterA,
      boxA,
      letterL,
      letterE,
      iosWrapper,
      boxPortfoil
    },
    isLoaded: true
  }), []);

  // Initialize header animations
  useHeaderAnimation(animationOptions);

  return (
    <header className={style.header}>
      <div className={style.rectangleWrapper} ref={wrapperRef}>
        <div className={style.rectangle} ref={rectangleRef} />
        <p className={style.number61} ref={numberRef}>
          61
        </p>
      </div>
      <div className={style.titleBox}>
        <div className={`${style.letterWrapper} letter-a-wrapper`} ref={letterAWrapper}>
          <p className={`${style.letter} letter-a`} ref={letterA}>
            <span>a</span>
          </p>
          <div className={style.box} ref={boxA}>
            a
          </div>
        </div>
        <p className={`${style.letter} letter-l`} ref={letterL}>
          <span>l</span>
        </p>
        <p className={`${style.letter} letter-e`} ref={letterE}>
          <span>e</span>
        </p>
        <AlexiosLogo onLoad={onReady} />
        <div className={`${style.letterWrapper} letter-ios-wrapper`}>
          <div className={style.letterGroup} ref={iosWrapper}>
            <p className={`${style.letter} letter-i`}>
              <span>i</span>
            </p>
            <p className={`${style.letter} letter-o`}>
              <span>o</span>
            </p>
            <p className={`${style.letter} letter-s`}>
              <span>s</span>
            </p>
          </div>
          <div className={style.boxPortfoil} ref={boxPortfoil}>
            <p className={style.portfoil}>portfolio</p>
          </div>
        </div>
      </div>
      <h1 className={style.title}>alexios</h1>
    </header>
  );
};

export default HeaderHomePage;
