'use client'
import { ArrowUpRight, Moon, Menu, X } from "lucide-react";
import React, { useState, useCallback, memo } from "react";
import Link from "next/link";
const NavItem = memo(({ href, children, onClick }) => (
  <li>
    <a 
      onClick={onClick}
      href={href} 
      className="block py-3 text-lg text-[#FFFAFB] hover:text-[#7DE2D1] transition-colors duration-200 border-b border-[#339989]/20"
    >
      {children}
    </a>
  </li>
));

NavItem.displayName = 'NavItem';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = useCallback(() => setOpen(false), []);
    
    const toggleMenu = useCallback(() => setOpen(prev => !prev), []);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#education", label: "Education" },
        { href: "#research", label: "Research" },
        { href: "#experience", label: "Experience" },
        { href: "#achievements", label: "Achievements" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#131515]/90 backdrop-blur-sm supports-backdrop-blur:bg-[#131515]/80">
                <div className="max-w-7xl mx-auto flex justify-between items-center h-16 lg:h-20 font-medium px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFFAFB] font-playfair">Dr. Parneeta</h1>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-4 xl:gap-6 rounded-full px-6 lg:px-8 py-2 lg:py-3 bg-[#2B2C28] shadow-sm text-[#FFFAFB] font-inter text-sm lg:text-base">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a 
                                    href={item.href} 
                                    className="hover:text-[#7DE2D1] transition-colors duration-200 whitespace-nowrap text-sm lg:text-base px-1 lg:px-2"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Section */}
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                        <a
                            className="hidden sm:flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 border border-[#339989] bg-[#339989] text-[#131515] rounded-full hover:bg-[#7DE2D1] transition-colors duration-200 font-inter font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap"
                            href="#contact"
                        >
                            Contact <ArrowUpRight strokeWidth={1.5} size={16} className="sm:w-4 sm:h-4" />
                        </a>

                        {/* Mobile Menu Button */}
                        <button 
                            className="block lg:hidden p-2 rounded-full hover:bg-[#2B2C28] transition-colors duration-200"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                        >
                            {open ? (
                                <X strokeWidth={1.5} size={20} className="text-[#FFFAFB] sm:w-6 sm:h-6" />
                            ) : (
                                <Menu strokeWidth={1.5} size={20} className="text-[#FFFAFB] sm:w-6 sm:h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Sidebar */}
                    <div
                        className={`lg:hidden fixed top-0 right-0 w-full h-screen bg-[#131515]/95 backdrop-blur-sm z-50 transition-opacity duration-300 ${
                            open ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                        onClick={closeMenu}
                    >
                        <div 
                            className={`flex flex-col gap-4 p-6 absolute top-0 right-0 w-full sm:w-80 h-screen bg-[#2B2C28] shadow-lg transition-transform duration-300 ${
                                open ? "translate-x-0" : "translate-x-full"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="self-end p-2 rounded-full hover:bg-[#131515] transition-colors duration-200 mb-4"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <X strokeWidth={1.5} size={24} className="text-[#FFFAFB]" />
                            </button>

                            <h2 className="text-2xl font-bold text-[#FFFAFB] font-playfair mb-2">Menu</h2>
                            
                            <ul className="flex flex-col gap-1 font-inter">
                                {navItems.map((item) => (
                                    <NavItem 
                                        key={item.href} 
                                        href={item.href} 
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </NavItem>
                                ))}
                            </ul>

                            {/* Mobile Contact Button */}
                            <a
                                className="sm:hidden flex items-center justify-center gap-2 mt-4 px-4 py-3 border border-[#339989] bg-[#339989] text-[#131515] rounded-full hover:bg-[#7DE2D1] transition-colors duration-200 font-inter font-medium text-lg"
                                href="#contact"
                                onClick={closeMenu}
                            >
                                Contact <ArrowUpRight strokeWidth={1.5} size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default memo(Navbar);