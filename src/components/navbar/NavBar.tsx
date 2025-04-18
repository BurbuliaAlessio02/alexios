'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LangChangeButton from '../buttons/LangChangeButton';
import { ChooseColorButton } from '../buttons/ChooseColorButton';
import { useEffect, useRef } from 'react';

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/projects', key: 'projects' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
  { href: '/blog', label: 'blog' },
];

const NavBar = ({ setNavRef }: { setNavRef: (ref: HTMLElement | null) => void }) => {
  const t = useTranslations('navbar');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      setNavRef(navRef.current);
    }
  }, [setNavRef]);

  return (
    <nav className="navbar" ref={navRef}>
      <ul className="navbar__menu">
        {navItems.map((item, index) => (
          <li
            className="navbar__item relative overflow-hidden"
            key={index}
          >
            <Link href={item.href}>{item.label || t(item.key!)}</Link>
            <div className="overlay" />
          </li>
        ))}
      </ul>
      <div className="navbar__bottom">
        <ChooseColorButton />
        <LangChangeButton />
      </div>
    </nav>
  );
};

export default NavBar;