
//* app/[locale]/NavLayoutClient.tsx

'use client';
import React from 'react';
import { useNavAnimation } from '@/hooks/useMenuToggle';
import ButtonNavBar from '@/components/buttons/ButtonNavBar';
import NavBar from '@/components/navbar/NavBar';

/**
 * NavLayoutClient component that manages the navigation layout.
 * 
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to render.
 * 
 * @returns {JSX.Element} The rendered navigation layout component.
 */
export default function NavLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  // Destructure the navigation animation hooks
  const { isMenuOpen, toggleMenu, setNavRef } = useNavAnimation();

  return (
    <>
      {/* ButtonNavBar component to toggle the menu */}
      <ButtonNavBar 
      isOpen={isMenuOpen} 
      toggleMenu={toggleMenu} 
      />
      {/* NavBar component to display the navigation bar */}
      <NavBar setNavRef={setNavRef} />
      {children}
    </>
  );
}
