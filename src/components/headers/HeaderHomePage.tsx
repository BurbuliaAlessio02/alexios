'use client';

// app/it/page.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import NavBar from '@/components/navbar/NavBar';


import style from '@/styles/pages/homepage/homepage.module.scss'; // styling per la pagina in se
import { useRef } from 'react';
import useHeaderAnimation from '../../hooks/useHeadersAnimation';

const HeaderHomePage = () => {
  const t = useTranslations('headerHomePage');
  const alt = useTranslations('headerHomePage.alt');

  // Refs per gli elementi da animare
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

  // Utilizzo il nuovo custom hook per le animazioni
  useHeaderAnimation({
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
    }
  });

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
        <Image
          src={'/images/logos/logo-black/logo-black-letter.png'}
          alt={alt('logoImage.letterX')}
          className={style.logoImageLetter}
          width={500}
          height={500}
        />
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
            <p className={style.portfoil}>{t('description')}</p>
          </div>
        </div>
      </div>
      {/** il titolo serve solo per la seo (display none) */}
      <h1 className={style.title}>alexios</h1>
    </header>
  );
}

export default HeaderHomePage;