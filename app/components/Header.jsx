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
      name: 'Skype',
      value: 'parnita.chaudhary',
      icon: faSkype,
      isFontAwesome: true,

      href: 'skype:parnita.chaudhary?chat',
      color: 'hover:text-[#00AFF0]'
    },
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
      value: 'parneetachaudhary',
      icon: faLinkedin,
      isFontAwesome: true,

      href: 'https://www.linkedin.com/in/parneetachaudhary',
      color: 'hover:text-[#0077B5]'
    }
  ]

  return (
    <section className='flex flex-col justify-center items-center gap-8 min-h-screen px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24'>
      {/* Profile Image */}
      <div className='relative'>
        {/* <div className='relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#339989] shadow-lg'>
          <Image 
            src="/profile.jpg" 
            alt="Dr. Parneeta Chaudhary" 
            fill
            className='object-cover'
            priority
          />
        </div> */}
        {/* Decorative element */}
        
      </div> 
      
      
      {/* Text Content */}
      <div className='text-center max-w-4xl mx-auto space-y-4'>
        <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFAFB] font-playfair leading-tight'>
          Hi, I'm <span className='text-[#7DE2D1]'>Dr. Parneeta Chaudhary</span>
        </h3>
        
        <h1 className='text-xl sm:text-2xl lg:text-3xl text-[#7DE2D1] font-semibold font-inter leading-relaxed'>
          Assistant Professor & Ph.D. Biotechnology
        </h1>
        
        <p className='text-lg sm:text-xl text-[#FFFAFB]/80 font-inter max-w-2xl mx-auto leading-relaxed'>
          Dedicated educator and researcher passionate about advancing biotechnology 
          through innovative research and quality education.
        </p>
      </div>

      {/* Academic Links */}
      <div className='max-w-2xl mx-auto w-full'>
        <div className='grid center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {academicLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-[#2B2C28] border border-[#339989]/20 rounded-xl hover:border-[#7DE2D1] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br from-[#339989] to-[#7DE2D1] group-hover:scale-110 transition-transform duration-300`}>
                {link.isFontAwesome ? (
                  <FontAwesomeIcon icon={link.icon} className="text-[#131515] text-[18px]" />
                ) : (
                  <link.icon size={20} className="text-[#131515]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#7DE2D1] font-inter truncate">
                  {link.name}
                </p>
                <p className="text-xs text-[#FFFAFB]/70 font-inter truncate">
                  {link.value}
                </p>
              </div>
              <ExternalLink size={16} className="text-[#339989] group-hover:text-[#7DE2D1] transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8'>
        <a 
          href="#contact" 
          className='flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-[#339989] bg-transparent text-[#FFFAFB] rounded-full transition-all duration-200 hover:bg-[#339989] hover:text-[#131515] font-inter font-medium text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105'
        >
          Contact Me <ArrowRight strokeWidth={1.5} size={20} />
        </a>
        <a 
          href="#research" 
          className='flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-[#339989] bg-[#339989] text-[#131515] rounded-full transition-all duration-200 hover:bg-[#7DE2D1] font-inter font-medium text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105'
        >
          My Research <ArrowRight strokeWidth={1.5} size={20} />
        </a>
      </div>
    </section>
  )
}

export default Header