//* app/[locale]/page.tsx

'use client';

import { useState } from 'react';
import HeaderHomePage from '@/components/headers/HeaderHomePage';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HomePage component that manages the home page layout and loading state.
 * 
 * @returns {JSX.Element} The rendered home page component.
 */
export default function HomePage() {
  // State to track if the page has finished loading
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="skeleton-page"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <p>WELCOME ON ALEXIOS</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/** render at finish to load component */}
      {isLoaded && <HeaderHomePage />}
      {!isLoaded && <HeaderHomePage onReady={() => setIsLoaded(true)} />}
    </>
  );
}
