import { Suspense, lazy } from 'react';

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Research = lazy(() => import("./components/Research"));
const Experience = lazy(() => import("./components/Experience"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-[#131515] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7DE2D1]"></div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131515]">
      {/* Subtle gradient background */}
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-gradient-to-br from-[#131515] via-[#1a1c1c] to-[#2B2C28] opacity-90"></div>

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
      </Suspense>
    </div>
  );
}