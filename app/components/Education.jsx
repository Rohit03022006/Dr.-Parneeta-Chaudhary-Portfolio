'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Award, School, ExternalLink } from 'lucide-react'

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

const levelMeta = {
  phd: { label: 'Doctoral Program', icon: GraduationCap },
  master: { label: 'Postgraduate', icon: BookOpen },
  bachelor: { label: 'Undergraduate', icon: Award },
  school: { label: 'Schooling', icon: School }
}

const detectLevel = (degree = '') => {
  const normalized = degree.toLowerCase()
  if (normalized.includes('ph.d')) return 'phd'
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
]
  .sort((a, b) => (a.period < b.period ? 1 : -1))

const EducationCard = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
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
      className={`relative flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'} md:gap-16`}
    >
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'} w-full`}> 
        <motion.div
          whileHover={{ translateY: -4 }}
          className="relative bg-[#2B2C28] border border-[#339989]/25 rounded-2xl p-6 shadow-lg"
        >
          <div className={`hidden md:flex absolute ${isLeft ? '-right-11' : '-left-11'} top-8 w-10 h-10 rounded-full bg-gradient-to-br from-[#339989] to-[#7DE2D1] items-center justify-center shadow-md`}> 
            <Icon size={20} className="text-[#131515]" />
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <p className="text-sm text-[#7DE2D1]/80 font-semibold">{item.period}</p>
            <span className="px-2 py-1 bg-[#339989]/15 text-[#7DE2D1] text-xs rounded-full border border-[#339989]/30">
              {meta.label}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-[#FFFAFB] mb-2">{item.degree}</h3>
          <p className="text-[#FFFAFB]/80 text-sm mb-1">{item.institution}</p>
          <p className="text-[#FFFAFB]/70 text-sm">{item.location}</p>

          {item.details && (
            <p className="text-[#FFFAFB]/70 text-sm leading-relaxed mt-4">
              {item.details}
            </p>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#7DE2D1] hover:text-[#FFFAFB] text-sm mt-4"
            >
              View details
              <ExternalLink size={14} />
            </a>
          )}
        </motion.div>
      </div>

      <div className="md:hidden flex items-center gap-3 mt-4"> 
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#339989] to-[#7DE2D1] flex items-center justify-center shadow-md">
          <Icon size={20} className="text-[#131515]" />
        </div>
        <span className="text-[#7DE2D1]/80 text-sm font-semibold">{meta.label}</span>
      </div>
    </motion.div>
  )
}

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-[#131515] scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#7DE2D1] text-lg font-inter mb-3">Academic Journey</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4">
          Education Timeline
        </h2>
        <p className="text-[#FFFAFB]/80 max-w-3xl mx-auto">
          A structured progression from foundational schooling to doctoral research, shaping multidisciplinary expertise
          across life sciences, bioinformatics, and biotechnology.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#339989] to-[#7DE2D1] -translate-x-1/2" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-10"
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