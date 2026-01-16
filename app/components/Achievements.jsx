'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Trophy, Medal, Star, Zap } from 'lucide-react'

import { achievementsData } from '../data/achievements.js'
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const AchievementCard = ({ achievement, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const achievementMeta = (year) => {
    if (year >= 2024) return { label: 'Recent Honor', icon: Zap }
    if (year >= 2021) return { label: 'National Recognition', icon: Trophy }
    if (year >= 2019) return { label: 'Academic Excellence', icon: Medal }
    return { label: 'Milestone', icon: Award }
  }

  const meta = achievementMeta(achievement.year)
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
          className="relative bg-(--card-bg-color) border border-(--border-color)/25 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg"
        >
          <div
            className={`hidden lg:flex absolute ${isLeft ? '-right-10' : '-left-10'} top-6 w-8 h-8 xl:w-10 xl:h-10 rounded-full  bg-linear-to-br from-(--border-color) to-(--accent-color) items-center justify-center shadow-md z-10`}
          >
            <Icon size={16} className="xl:w-5 xl:h-5 text-(--bg-color)" />
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <p className="text-xs sm:text-sm text-(--accent-color)/80 font-semibold">
              {achievement.year}
            </p>
            <span
              className="px-2 py-1 bg-(--border-color)/15 text-(--accent-color) text-xs rounded-full border border-(--border-color)/30 whitespace-nowrap"
            >
              {meta.label}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-(--text-primary) mb-2 leading-tight">
            {achievement.title}
          </h3>

          <p className="text-(--text-primary)/80 text-sm mb-1">
            {achievement.organization}
          </p>

          <p className="text-(--text-primary)/70 text-xs sm:text-sm leading-relaxed">
            {achievement.description}
          </p>

          {achievement.location && (
            <p className="text-(--text-primary)/60 text-xs mt-2 leading-relaxed">
              {achievement.location}
            </p>
          )}

          {achievement.prize && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mt-3 bg-(--accent-color)/10 border border-(--accent-color)/30 rounded-full text-xs text-(--accent-color)"
            >
              <Star size={12} />
              {achievement.prize}
            </div>
          )}
        </motion.div>
      </div>

      <div className="lg:hidden flex items-center gap-3 mt-3 sm:mt-4">
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-(--border-color) to-(--accent-color) flex items-center justify-center shadow-md shrink-0"
        >
          <Icon size={16} className="sm:w-5 sm:h-5 text-(--bg-color)" />
        </div>
        <span className="text-(--accent-color)/80 text-sm font-semibold">
          {meta.label}
        </span>
      </div>
    </motion.div>
  )
}

const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      id='achievements'
      className='w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20 bg-(--bg-color)'
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className='text-center mb-12 sm:mb-16'
      >
        <p className='text-(--accent-color) text-base sm:text-lg font-inter mb-3'>
          Honors & Recognition
        </p>

        <h2
          className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair mb-4 text-(--text-primary)'
        >
          Achievements & Awards
        </h2>

        <p
          className='text-(--text-primary)/80 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-4'
        >
          A chronological showcase of accolades, grants, and recognitions earned through excellence in biotechnology
          research, teaching, and innovation.
        </p>
      </motion.div>

      <div className='relative max-w-5xl mx-auto'>
        <div
          className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--border-color) to-(--accent-color) -translate-x-1/2'
        />
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='space-y-8 sm:space-y-10'
        >
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
