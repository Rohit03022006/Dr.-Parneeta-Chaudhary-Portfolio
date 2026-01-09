'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRight, BookOpen, GraduationCap, User, ExternalLink } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSkype,
  faResearchgate,
  faOrcid,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const academicLinks = [

    {
      name: 'ResearchGate',
      value: 'Parneeta-Chaudhary',
      icon: faResearchgate,
      isFontAwesome: true,
      href: 'https://www.researchgate.net/profile/Parneeta-Chaudhary',
      color: 'hover:text-[#00D0A0]'
    },
    {
      name: 'Google Scholar',
      value: '@ParneetaChaudhary',
      icon: GraduationCap,
      href: 'https://scholar.google.com/citations?user=@ParneetaChaudhary',
      color: 'hover:text-[#4285F4]'
    },
    {
      name: 'ORCID',
      value: '0000-0003-4314-3573',
      icon: faOrcid,
      isFontAwesome: true,
      href: 'https://orcid.org/0000-0003-4314-3573',
      color: 'hover:text-[#A6CE39]'
    },
    {
      name: 'LinkedIn',
      value: 'DR. Parneeta Chaudhary',
      icon: faLinkedin,
      isFontAwesome: true,
      href: 'https://linkedin.com/in/parneeta-chaudhary',
      color: 'hover:text-[#0077B5]'
    }
  ]

  return (
    <section className='flex flex-col justify-center items-center gap-6 sm:gap-8 min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:pt-24 mt-8 sm:mt-12 lg:mt-16 bg-[#131515] text-center'>
      {/* Text Content */}
      <div className='text-center max-w-4xl mx-auto space-y-3 sm:space-y-4'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#FFFAFB] font-playfair leading-tight'>
          Hi, I'm <span className='text-[#7DE2D1]'>Dr. Parneeta Chaudhary</span>
        </h3>

        <h1 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#7DE2D1] font-semibold font-inter leading-relaxed'>
          Assistant Professor
        </h1>

        <p className='text-base sm:text-lg lg:text-xl text-[#FFFAFB]/80 font-inter max-w-2xl mx-auto leading-relaxed px-2'>
          (Ph.D. Biotechnology)
        </p>
      </div>

      {/* Academic Links */}
      <div className='max-w-6xl mx-auto w-full px-2 sm:px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4'>
          {academicLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-[#2B2C28] border border-[#339989]/20 rounded-lg sm:rounded-xl hover:border-[#7DE2D1] transition-all duration-300 hover:shadow-lg hover:scale-105 min-w-0"
            >
              <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-br from-[#339989] to-[#7DE2D1] group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                {link.isFontAwesome ? (
                  <FontAwesomeIcon icon={link.icon} className="text-[#131515] text-[14px] sm:text-[16px] lg:text-[18px]" />
                ) : (
                  <link.icon size={16} className="text-[#131515] sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                )}
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-xs sm:text-sm font-semibold text-[#7DE2D1] font-inter truncate">
                  {link.name}
                </p>
                <p className="text-xs text-[#FFFAFB]/70 font-inter truncate">
                  {link.value}
                </p>
              </div>
              <ExternalLink size={14} className="text-[#339989] group-hover:text-[#7DE2D1] transition-colors duration-300 flex-shrink-0 ml-1" />
            </a>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 lg:mt-8 px-2'>

        <a
          href="#research"
          className='flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 border border-[#339989] bg-[#339989] text-[#131515] rounded-full transition-all duration-200 hover:bg-[#7DE2D1] font-inter font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto'
        >
          My Research <ArrowRight strokeWidth={1.5} size={18} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
        </a>
      </div>
    </section>
  )
}

export default Header
