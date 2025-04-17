'use client'; //* componente da renderizzare lato client

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LangChangeButton from '../language/LangChangeButton';
import { ChooseColorButton } from '../choose-color/ChooseColorButton';

export const NavBar = () => {
  const t = useTranslations('navbar');
  
  return (
    <nav className="navbar">
      {/* LISTA PAGINE */}
      <ul className="navbar__menu">
      <li className="navbar__item">
      <Link href="/" lang="en">HOME</Link>
      <div className='block'></div>
      </li>
      <li className="navbar__item">
      <Link href="/projects">{t('projects')}</Link>
      <div className='block'></div>
      </li>
      <li className="navbar__item">
      <Link href="/about">{t('about')}</Link>
      <div className='block'></div>
      </li>
      <li className="navbar__item">
      <Link href="/contact">{t('contact')}</Link>
      <div className="block"></div>
      </li>
      <li className="navbar__item">
      <Link href="/blog" lang="en">blog</Link>
      <div className='block'></div>
      </li>
      </ul>
    {/* BOTTONE MULTILINGUA */}
      <div className="navbar__bottom">
        <LangChangeButton />
      </div>
    </nav>
  );
};

export default NavBar;
