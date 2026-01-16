'use client'

import { ArrowUpRight, Moon, Sun, Menu, X } from "lucide-react";
import React, { useState, useCallback, memo, useEffect } from "react";
import Link from "next/link";

const NavItem = memo(({ href, children, onClick }) => (
  <li>
    <a
      onClick={onClick}
      href={href}
      className="block py-3 text-lg text-(--text-primary) hover:text-(--accent-color) transition-colors duration-200 border-b border-(--border-color)/20"
    >
      {children}
    </a>
  </li>
));

NavItem.displayName = 'NavItem';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [theme]);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-(--bg-color)/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 lg:h-20 font-medium px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-playfair text-(--text-primary)">
            Dr. Parneeta
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 rounded-full px-8 py-3  bg-(--card-bg-color) text-(--text-primary) font-inter shadow-sm">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-(--accent-color) transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-(--card-bg-color) hover:bg-(--accent-color)/20 transition-colors duration-200"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-(--accent-color)" />
            ) : (
              <Moon size={20} className="text-(--accent-color)" />
            )}
          </button>

          <button
            className="block lg:hidden p-2 rounded-full hover:bg-(--card-bg-color) transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X size={22} className="text-(--text-primary)" />
            ) : (
              <Menu size={22} className="text-(--text-primary)" />
            )}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-full h-screen 
                      bg-(--bg-color)/95 
                      backdrop-blur-sm z-50 
                      transition-opacity duration-300 
                      ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={closeMenu}
        >
          <div
            className={`flex flex-col gap-4 p-6 absolute top-0 right-0 w-full sm:w-80 h-screen bg-(--card-bg-color) shadow-lg transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="self-end p-2 rounded-full hover:bg-(--bg-color) transition-colors duration-200"
              onClick={closeMenu}
            >
              <X size={24} className="text-(--text-primary)" />
            </button>

            <h2 className="text-2xl font-bold font-playfair text-(--text-primary)">Menu</h2>

            <ul className="flex flex-col gap-1 font-inter">
              {navItems.map(item => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavItem>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={closeMenu}
              className="sm:hidden flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-full bg-(--button-color) text-(--bg-color) hover:bg-(--accent-color) transition-colors duration-200 font-medium text-lg"
            >
              Contact <ArrowUpRight size={20} />
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
