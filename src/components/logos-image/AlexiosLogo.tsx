'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import style from '@/styles/pages/homepage/homepage.module.scss';
import { useMemo } from 'react';

type AlexiosLogoProps = {
  onLoad?: () => void;
};

/**
 * AlexiosLogo component that displays the Alexios logo with theme-based image selection.
 * 
 * @param {AlexiosLogoProps} props - The properties object.
 * @param {Function} [props.onLoad] - Optional callback function to be called when the image is loaded.
 * 
 * @returns {JSX.Element} The rendered logo component.
 */
const AlexiosLogo = ({ onLoad }: AlexiosLogoProps) => {
  const { theme } = useTheme();
  const alt = useTranslations('imagesAlt.home.header');

  // Memoized image source based on the current theme
  const imageSrc = useMemo(
    () =>
      theme === 'dark'
        ? '/images/logos/logo-black/logo-black-letter.png'
        : '/images/logos/logo-white/logo-white-letter.png',
    [theme]
  );

  return (
    <Image
      src={imageSrc}
      alt={alt('logo')}
      className={style.logoImageLetter}
      width={500}
      height={707}
      priority
      onLoad={onLoad}
    />
  );
};

export default AlexiosLogo;