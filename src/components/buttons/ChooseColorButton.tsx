'use client'

import { useThemeToggle } from "../../hooks/useThemeToggle";

/**
 * ChooseColorButton component that toggles the color theme.
 * 
 * @returns {JSX.Element | null} The rendered button component or null if not mounted.
 */
export const ChooseColorButton = () => {
  // Destructure the theme toggle hooks
  const { mounted, circleRef, containerRef, toggleTheme } = useThemeToggle();

  // Return null if the component is not mounted
  if (!mounted) return null;

  return (
    <button
      className="toggle-color-box"
      aria-label="Toggle color mode"
      onClick={toggleTheme}>
      <div className="hover-cursor toggle-color-mode" ref={containerRef}>
            <div 
              ref={circleRef} 
              className="toggle-color-mode__circle"
            />
      </div>
    </button>
  );
}