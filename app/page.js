'use client'

import { Suspense, lazy, useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Research = lazy(() => import("./components/Research"));
const Experience = lazy(() => import("./components/Experience"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#131515] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7DE2D1]"></div>
  </div>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-linear-to-br from-[#339989] to-[#7DE2D1] text-[#131515] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        isVisible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default function Home() {
  return (
    <div className="bg-[#131515]">
      {/* Subtle gradient background */}
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-linear-to-br from-[#131515] via-[#1a1c1c] to-[#2B2C28] opacity-90"></div>

      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <Header />
        <About />
        <Education />
        <Research />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Suspense>
    </div>
  );
}