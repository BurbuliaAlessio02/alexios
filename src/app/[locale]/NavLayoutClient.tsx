
'use client';

import React from 'react';
import { useNavAnimation } from '@/hooks/useMenuToggle';
import ButtonNavBar from '@/components/buttons/ButtonNavBar';
import NavBar from '@/components/navbar/NavBar';

export default function NavLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMenuOpen, toggleMenu, setNavRef } = useNavAnimation();

  return (
    <>
      <ButtonNavBar 
      isOpen={isMenuOpen} 
      toggleMenu={toggleMenu} 
      />
      <NavBar setNavRef={setNavRef} />
      {children}
    </>
  );
}
