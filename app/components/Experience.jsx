'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Microscope, Cpu } from 'lucide-react'
import {
  experienceTimeline,
  otherExperienceHighlights,
  technicalSkills,
  computerProficiency,
  languagesSpoken,
  professionalMemberships,
} from '@/app/data/experience'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const iconForRole = (role = '') => {
  const normalized = role.toLowerCase()
  if (normalized.includes('post-doctoral') || normalized.includes('research fellow')) return Microscope
  if (normalized.includes('research scholar') || normalized.includes('ph.d')) return GraduationCap
  if (normalized.includes('project assistant') || normalized.includes('training')) return Cpu
  return Briefcase
}

const ExperienceCard = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const Icon = iconForRole(item.role)

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative pl-8 sm:pl-10"
    >
      <motion.div
        whileHover={{ translateY: -2 }}
        className="relative bg-[#2B2C28] border border-[#339989]/25 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
      >
        <div className="absolute -left-4 sm:-left-5 top-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#339989] to-[#7DE2D1] flex items-center justify-center shadow-md">
          <Icon size={16} className="sm:w-5 sm:h-5 text-[#131515]" />
        </div>

        <p className="text-xs sm:text-sm text-[#7DE2D1]/80 font-semibold">{item.period}</p>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFFAFB] mt-1 leading-tight">{item.role}</h3>
        <p className="text-[#FFFAFB]/80 text-xs sm:text-sm mt-2 leading-relaxed">
          {item.organization}
          {item.location ? ` · ${item.location}` : ''}
        </p>
        {item.focus && (
          <p className="text-[#FFFAFB]/70 text-xs sm:text-sm mt-2 leading-relaxed">{item.focus}</p>
        )}

        {item.details?.length > 0 && (
          <ul className="mt-3 sm:mt-4 space-y-2 text-[#FFFAFB]/70 text-xs sm:text-sm">
            {item.details.map((detail, detailIndex) => (
              <li key={`${item.role}-${detailIndex}`} className="flex gap-2">
                <span className="text-[#339989] flex-shrink-0 mt-0.5">•</span>
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="experience" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#131515] scroll-mt-16 sm:scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="text-[#7DE2D1] text-base sm:text-lg font-inter mb-3">Professional Journey</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4">
          Experience & Training
        </h2>
        <p className="text-[#FFFAFB]/80 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-4">
          A timeline of academic roles, research fellowships, and specialized laboratory trainings
          driving advancements across biotechnology, proteomics, and computational biology.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-4xl lg:max-w-5xl mx-auto space-y-6 sm:space-y-8 mb-12 sm:mb-16"
      >
        {experienceTimeline.map((item, index) => (
          <ExperienceCard key={`${item.role}-${index}`} item={item} index={index} />
        ))}
      </motion.div>  
    </section>
  )
}

export default Experience
