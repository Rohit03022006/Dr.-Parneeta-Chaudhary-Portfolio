'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Award, School, ExternalLink } from 'lucide-react'

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

const levelMeta = {
  phd: { label: 'Doctoral Program', icon: GraduationCap },
  master: { label: 'Postgraduate', icon: BookOpen },
  bachelor: { label: 'Undergraduate', icon: Award },
  school: { label: 'Schooling', icon: School }
}

const detectLevel = (degree = '') => {
  const normalized = degree.toLowerCase()
  if (normalized.includes('ph.d') || normalized.includes('doctorate')) return 'phd'
  if (normalized.includes('master') || normalized.includes('m.sc')) return 'master'
  if (normalized.includes('bachelor') || normalized.includes('b.sc')) return 'bachelor'
  return 'school'
}

const educationData = [
  {
    period: '2018 – 2022',
    degree: 'Doctorate of Philosophy (Ph.D. Biotechnology)',
    institution: 'Guru Gobind Singh Indraprastha University',
    location: 'University School of Biotechnology, New Delhi, India',
    details: 'Supervisor: Prof. P.C. Sharma — Focus on genetic diversity, gender markers, and miRNA validation in Seabuckthorn'
  },
  {
    period: '2015 – 2017',
    degree: 'Master of Science (M.Sc. Bioinformatics)',
    institution: 'Jamia Millia Islamia',
    location: 'Faculty of Natural Science (Computer Science), New Delhi, India'
  },
  {
    period: '2012 – 2015',
    degree: 'Bachelor of Science (B.Sc. Life Sciences)',
    institution: 'University of Delhi',
    location: 'Zakir Husain Delhi College, New Delhi, India'
  },
  {
    period: '2010 – 2012',
    degree: 'Senior Higher Secondary School (+12)',
    institution: 'CBSE Board',
    location: 'St. Lawrence Convent Sr. Sec. Public School, New Delhi, India'
  },
  {
    period: '2010',
    degree: 'Secondary School (+10 / Matriculation)',
    institution: 'ICSE Board',
    location: 'Dagshai Public School, Dagshai Cantt., Himachal Pradesh, India'
  }
].sort((a, b) => (a.period < b.period ? 1 : -1))

const EducationCard = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const level = detectLevel(item.degree)
  const meta = levelMeta[level] ?? levelMeta.school
  const Icon = meta.icon
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`relative flex flex-col lg:flex-row ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} lg:gap-12 xl:gap-16`}
    >
      <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-12 xl:pr-16' : 'lg:pl-12 xl:pl-16'} w-full`}>
        <motion.div
          whileHover={{ translateY: -4 }}
          className="relative bg-[#2B2C28] border border-[#339989]/25 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg"
        >
          <div className={`hidden lg:flex absolute ${isLeft ? '-right-10' : '-left-10'} top-6 w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-gradient-to-br from-[#339989] to-[#7DE2D1] items-center justify-center shadow-md z-10`}>
            <Icon size={16} className="xl:w-5 xl:h-5 text-[#131515]" />
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <p className="text-xs sm:text-sm text-[#7DE2D1]/80 font-semibold">{item.period}</p>
            <span className="px-2 py-1 bg-[#339989]/15 text-[#7DE2D1] text-xs rounded-full border border-[#339989]/30 whitespace-nowrap">
              {meta.label}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFFAFB] mb-2 leading-tight">{item.degree}</h3>
          <p className="text-[#FFFAFB]/80 text-sm mb-1">{item.institution}</p>
          <p className="text-[#FFFAFB]/70 text-xs sm:text-sm leading-relaxed">{item.location}</p>

          {item.details && (
            <p className="text-[#FFFAFB]/70 text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4">
              {item.details}
            </p>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#7DE2D1] hover:text-[#FFFAFB] text-xs sm:text-sm mt-3 sm:mt-4 transition-colors duration-200"
            >
              View details
              <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
            </a>
          )}
        </motion.div>
      </div>

      <div className="lg:hidden flex items-center gap-3 mt-3 sm:mt-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#339989] to-[#7DE2D1] flex items-center justify-center shadow-md flex-shrink-0">
          <Icon size={16} className="sm:w-5 sm:h-5 text-[#131515]" />
        </div>
        <span className="text-[#7DE2D1]/80 text-sm font-semibold">{meta.label}</span>
      </div>
    </motion.div>
  )
}

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="education" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#131515] scroll-mt-16 sm:scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="text-[#7DE2D1] text-base sm:text-lg font-inter mb-3">Academic Journey</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4">
          Education Timeline
        </h2>
        <p className="text-[#FFFAFB]/80 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-4">
          A structured progression from foundational schooling to doctoral research, shaping multidisciplinary expertise
          across life sciences, bioinformatics, and biotechnology.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#339989] to-[#7DE2D1] -translate-x-1/2" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8 sm:space-y-10"
        >
          {educationData.map((item, idx) => (
            <EducationCard key={`${item.degree}-${idx}`} item={item} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education