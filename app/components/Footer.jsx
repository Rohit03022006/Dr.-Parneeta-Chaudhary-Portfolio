'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' }
  ]

  const academicProfiles = [
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=@ParneetaChaudhary' },
    { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Parneeta-Chaudhary' },
    { name: 'ORCID', href: 'https://orcid.org/0000-0003-4314-3573' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/parneeta-chaudhary/' }
  ]

  return (
    <footer className="relative bg-[linear-gradient(to_top,rgba(0,0,0,0.25),transparent)] bg-(--bg-color) border-t border-(--border-color)/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-3 sm:mb-4 text-(--accent-color)">
              Dr. Parneeta Chaudhary
            </h3>

            <div className="flex items-center gap-2 text-(--text-primary)/60 text-sm">
              <Heart size={16}  fill="var(--border-color)" className="text-(--border-color) flex-shrink-0" />
              <span>Building the future of biotechnology</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-start"
          >
            <div>
              <h4 className="text-lg font-semibold mb-4 font-inter text-(--text-primary)">
                Quick Links
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="block text-(--text-primary)/70 hover:text-(--accent-color) transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Academic Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-start"
          >
            <div>
              <h4 className="text-lg font-semibold mb-4 font-inter text-(--text-primary)">
                Academic Profiles
              </h4>

              <div className="space-y-3">
                {academicProfiles.map((profile, index) => (
                  <motion.a
                    key={index}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-(--text-primary)/70 hover:text-(--accent-color) transition-colors duration-200 text-sm sm:text-base group"
                  >
                    <span className="truncate">{profile.name}</span>
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-(--border-color)/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-(--text-primary)/60 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1"
            >
              © {currentYear} Dr. Parneeta Chaudhary. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-(--text-primary)/60 text-xs sm:text-sm order-1 sm:order-2"
            >
              <Heart size={14} fill="var(--border-color)" className="text-(--border-color)" />
              <span>Made with passion for science</span>
            </motion.div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
