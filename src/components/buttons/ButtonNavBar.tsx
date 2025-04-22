'use client'

import clsx from "clsx";
import { useMenuAnimation } from "../../hooks/useMenuAnimation";

/**
 * ButtonNavBar component that manages the navigation button with animation.
 * 
 * @param {Object} props - The properties object.
 * @param {boolean} props.isOpen - Indicates if the menu is open.
 * @param {Function} props.toggleMenu - Function to toggle the menu state.
 * 
 * @returns {JSX.Element} The rendered button navigation component.
 */
const ButtonNavBar = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  // Destructure the animation references from the hook
  const { containerRef, circle1Ref, circle3Ref } = useMenuAnimation(isOpen);

  return (
    <div className="buttonNavBar hover-cursor">
      <button
        className={clsx("menuNavBar", { open: isOpen })}
        ref={containerRef}
        onClick={toggleMenu}
      >
        {/* Circle elements for animation */}
        <div className="circle" ref={circle1Ref}></div>
        <div className="circle"></div>
        <div className="circle" ref={circle3Ref}></div>
        {/* Icon to represent the menu state */}
        <div className="x-icon"></div>
      </button>
    </div>
  );
};

export default ButtonNavBar;