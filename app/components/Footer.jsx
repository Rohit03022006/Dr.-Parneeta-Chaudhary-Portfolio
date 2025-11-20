'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: MapPin,
      text: 'New Delhi, India',
      href: '#'
    }
  ]

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
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/parneetachaudhary' }
  ]

  return (
    <footer className="bg-[#2B2C28] border-t border-[#339989]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-[#7DE2D1] font-playfair mb-4">
              Dr. Parneeta Chaudhary
            </h3>
            <p className="text-[#FFFAFB]/70 text-sm leading-relaxed mb-4">
              Assistant Professor & Ph.D. in Biotechnology. Dedicated to advancing 
              biotechnology research and education through innovation and excellence.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={16} className="text-[#339989]" />
              <span className="text-[#FFFAFB]/70 text-sm">New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2 text-[#FFFAFB]/60 text-sm">
              <Heart size={16} className="text-[#339989]" />
              <span>Building the future of biotechnology</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div>
              <h4 className="text-lg font-semibold text-[#FFFAFB] mb-4 font-inter">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="block text-[#FFFAFB]/70 hover:text-[#7DE2D1] transition-colors duration-200 text-sm"
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
            className="flex justify-center lg:justify-start"
          >
            <div>
              <h4 className="text-lg font-semibold text-[#FFFAFB] mb-4 font-inter">Academic Profiles</h4>
              <div className="space-y-3">
                {academicProfiles.map((profile, index) => (
                  <motion.a
                    key={index}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#FFFAFB]/70 hover:text-[#7DE2D1] transition-colors duration-200 text-sm group"
                  >
                    <span>{profile.name}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#339989]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[#FFFAFB]/60 text-sm text-center md:text-left"
            >
              © {currentYear} Dr. Parneeta Chaudhary. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-[#FFFAFB]/60 text-sm"
            >
              <span>Made with passion for science</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer