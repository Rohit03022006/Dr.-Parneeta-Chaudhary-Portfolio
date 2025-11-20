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
    transition: { staggerChildren: 0.2 }
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
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const Icon = iconForRole(item.role)

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative pl-10"
    >
      <motion.div
        whileHover={{ translateY: -4 }}
        className="relative bg-[#2B2C28] border border-[#339989]/25 rounded-2xl p-6 shadow-lg"
      >
        <div className="absolute -left-5 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#339989] to-[#7DE2D1] flex items-center justify-center shadow-md">
          <Icon size={20} className="text-[#131515]" />
        </div>

        <p className="text-sm text-[#7DE2D1]/80 font-semibold">{item.period}</p>
        <h3 className="text-2xl font-bold text-[#FFFAFB] mt-1">{item.role}</h3>
        <p className="text-[#FFFAFB]/80 text-sm mt-2">
          {item.organization}
          {item.location ? ` · ${item.location}` : ''}
        </p>
        {item.focus && (
          <p className="text-[#FFFAFB]/70 text-sm mt-2">{item.focus}</p>
        )}

        {item.details?.length > 0 && (
          <ul className="mt-4 space-y-2 text-[#FFFAFB]/70 text-sm">
            {item.details.map((detail, detailIndex) => (
              <li key={`${item.role}-${detailIndex}`} className="flex gap-2">
                <span className="text-[#339989]">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-[#131515] scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#7DE2D1] text-lg font-inter mb-3">Professional Journey</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4">
          Experience & Training
        </h2>
        <p className="text-[#FFFAFB]/80 max-w-3xl mx-auto">
          A timeline of academic roles, research fellowships, and specialized laboratory trainings
          driving advancements across biotechnology, proteomics, and computational biology.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-5xl mx-auto space-y-8 mb-16"
      >
        {experienceTimeline.map((item, index) => (
          <ExperienceCard key={`${item.role}-${index}`} item={item} index={index} />
        ))}
      </motion.div>

      {/* Skills Section - Clear Left & Right Layout */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Takes 1/3 width */}
          <div className="lg:col-span-1 space-y-6">
            {/* Other Experiences */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-[#2B2C28] border border-[#339989]/20 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#FFFAFB] font-playfair mb-4">Other Experiences</h3>
              <ul className="space-y-3 text-[#FFFAFB]/80 text-sm">
                {otherExperienceHighlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#339989]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Additional Info Cards */}
            <div className="space-y-4">
              {/* Computer Proficiency */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                className="bg-[#2B2C28] border border-[#339989]/20 rounded-2xl p-5 shadow-lg"
              >
                <h4 className="text-xl font-bold text-[#FFFAFB] mb-3">Computer Proficiency</h4>
                <p className="text-sm text-[#FFFAFB]/80">{computerProficiency.join(' • ')}</p>
              </motion.div>

              {/* Languages */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                className="bg-[#2B2C28] border border-[#339989]/20 rounded-2xl p-5 shadow-lg"
              >
                <h4 className="text-xl font-bold text-[#FFFAFB] mb-3">Languages</h4>
                <p className="text-sm text-[#FFFAFB]/80">{languagesSpoken.join(' • ')}</p>
              </motion.div>

              {/* Professional Memberships */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                className="bg-[#2B2C28] border border-[#339989]/20 rounded-2xl p-5 shadow-lg"
              >
                <h4 className="text-xl font-bold text-[#FFFAFB] mb-3">Professional Memberships</h4>
                <ul className="text-sm text-[#FFFAFB]/80 space-y-2">
                  {professionalMemberships.map((membership, idx) => (
                    <li key={idx}>{membership}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Takes 2/3 width */}
          <div className="lg:col-span-2">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-[#2B2C28] border border-[#339989]/20 rounded-2xl p-6 shadow-lg h-full"
            >
              <h3 className="text-2xl font-bold text-[#FFFAFB] font-playfair mb-6">Technical Skills & Knowledge</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#FFFAFB]/80">
                {Object.entries(technicalSkills).map(([category, items]) => (
                  <div key={category} className="space-y-2">
                    <p className="text-[#7DE2D1] font-semibold capitalize text-base">
                      {category.replace(/([A-Z])/g, ' $1')}
                    </p>
                    <p className="text-[#FFFAFB]/70 leading-relaxed">
                      {items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience