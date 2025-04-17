// app/it/page.tsx
import { useTranslations } from 'next-intl';
import style from '@/styles/pages/homepage/homepage.module.scss';
import Image from 'next/image';
import ButtonNavBar from '@/components/navbar/ButtonNavBar';
import NavBar from '@/components/navbar/NavBar';
import { ChooseColorButton } from '@/components/choose-color/ChooseColorButton';

const home = () => {
  const t = useTranslations('home');
  const alt = useTranslations('home.alt');
  
  return (
    <header className={style.header}>
      {/* BOTTONE COLORE */}
    <div className="button-box-top">
      <ChooseColorButton />
      <ButtonNavBar />
    </div>
    <NavBar />
    <div className={style.rectangleWrapper}>
        <div className={style.rectangle}>
        </div>
          <p className={style.number61}>
          61
          </p>
        </div>
    <div className={style.titleBox}>
    <div className={`${style.letterWrapper} letter-a-wrapper`}>
    <p className={`${style.letter} letter-a`}>
    <span>a</span>
    </p>
    <div className={style.box}>
    a
    </div>
    </div>
    <p className={`${style.letter} letter-l`}>
    <span>
    l
    </span>
    </p>
    <p className={`${style.letter} letter-e`}>
    <span>
    e
    </span>
    </p>
    <Image
      src={'/images/logos/logo-black/logo-black-letter.png'}
      alt={alt('logoImage.letterX')}
      className={style.logoImageLetter}
      width={500}
      height={500}
      >
    </Image>
    <div className={`${style.letterWrapper} letter-ios-wrapper`}>
    <div className={style.letterGroup}>
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
    <div className={style.boxPortfoil}>
    <p className={style.portfoil}>{t('description')}</p>
    </div>
    </div>
    </div>
    {/** il titolo serve solo per la seo (display none) */}
    <h1 className={ style.title }>alexios</h1>
    </header>
  );
}

export default home;