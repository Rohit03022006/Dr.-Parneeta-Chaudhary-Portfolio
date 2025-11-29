'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Trophy, Medal, Star, Zap } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Achievement Item Component
const AchievementCard = ({ achievement, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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
      animate={inView ? "visible" : "hidden"}
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
            <p className="text-xs sm:text-sm text-[#7DE2D1]/80 font-semibold">{achievement.year}</p>
            <span className="px-2 py-1 bg-[#339989]/15 text-[#7DE2D1] text-xs rounded-full border border-[#339989]/30 whitespace-nowrap">
              {meta.label}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFFAFB] mb-2 leading-tight">{achievement.title}</h3>
          <p className="text-[#FFFAFB]/80 text-sm mb-1">{achievement.organization}</p>
          <p className="text-[#FFFAFB]/70 text-xs sm:text-sm leading-relaxed">{achievement.description}</p>

          {achievement.location && (
            <p className="text-[#FFFAFB]/60 text-xs mt-2 leading-relaxed">{achievement.location}</p>
          )}

          {achievement.prize && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mt-3 bg-[#7DE2D1]/10 border border-[#7DE2D1]/30 rounded-full text-xs text-[#7DE2D1]">
              <Star size={12} />
              {achievement.prize}
            </div>
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

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true
  })

  const achievementsData = [
    {
      id: 1,
      year: 2025,
      title: "Junior Young Scientist Award",
      organization: "Seabuckthorn Association of India (SAI)",
      description: "Conferred for outstanding research contribution towards medicinal plants",
      location: "NATIONAL CONFERENCE ON SEABUCKTHORN, Graphic Era Deemed to be University, Dehradun (5-6th March 2025)",
      prize: "Award"
    },
    {
      id: 2,
      year: 2024,
      title: "Grant Prize",
      organization: "Biochemical Society of London",
      description: "Secured grant prize for research excellence",
      prize: "Grant"
    },
    {
      id: 3,
      year: 2023,
      title: "Young Professional Position",
      organization: "Department of Biotechnology, Ministry of Science and Technology",
      description: "Selected for the position of Young Professional",
      prize: "Selection"
    },
    {
      id: 4,
      year: 2023,
      title: "Budding Young Scientist Award",
      organization: "Indian Society of Horticulture Research and Development (ISHRD)",
      description: "Conferred for outstanding Ph.D. thesis research",
      location: "Progressive Horticulture Conclave (PHC 2023), G.B. Pant University of Agriculture and Technology, Pantnagar (3-5th February 2023)",
      prize: "Award"
    },
    {
      id: 5,
      year: 2021,
      title: "1st Prize in Poster Presentation",
      organization: "42nd Annual Meeting of Plant Tissue Culture Association (India)",
      description: "Awarded 1st prize in poster presentation",
      location: "International Symposium on Advances in Plant Biotechnology and Genome Editing-2021, ICAR-Indian Institute of Agricultural Biotechnology, Ranchi (8th-10th April 2021)",
      prize: "1st Prize"
    },
    {
      id: 6,
      year: 2019,
      title: "3rd Prize in Poster Presentation",
      organization: "3rd National Conference of Seabuckthorn Association of India",
      description: "Awarded 3rd prize in poster presentation",
      location: "Delhi University Botanical Society & Department of Botany, University of Delhi, Delhi (19th-20th December 2019)",
      prize: "3rd Prize"
    },
    {
      id: 7,
      year: 2019,
      title: "Master of Science in Bioinformatics",
      organization: "Jamia Millia Islamia",
      description: "First division with Distinction",
      prize: "Distinction"
    },
    {
      id: 8,
      year: 2018,
      title: "Short Term Research Scholarship",
      organization: "Guru Gobind Singh Indraprastha University",
      description: "Awarded twice (2018-2020 and 2020-2021) for full term Research Scholar",
      location: "Office of the Director (Research & Consultancy)",
      prize: "Scholarship"
    },
    {
      id: 9,
      year: 2017,
      title: "Ph.D. Common Entrance Exam Qualified",
      organization: "Guru Gobind Singh Indraprastha University",
      description: "Qualified Guru Gobind Indraprastha University Ph.D. common entrance Exam (CET-2017)",
      prize: "Qualified"
    },
    {
      id: 10,
      year: 2015,
      title: "M.Sc. Bioinformatics Entrance Exam Qualified",
      organization: "Jamia Millia Islamia",
      description: "Qualified Jamia Millia Islamia Entrance Examination for M.Sc. Bioinformatics",
      prize: "Qualified"
    }
  ].sort((a, b) => b.year - a.year)

  return (
    <section id='achievements' className='w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#131515]'>
      {/* Header Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className='text-center mb-12 sm:mb-16'
      >
        <p className='text-[#7DE2D1] text-base sm:text-lg font-inter mb-3'>
          Honors & Recognition
        </p>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4'>
          Achievements & Awards
        </h2>
        <p className='text-[#FFFAFB]/80 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-4'>
          A chronological showcase of accolades, grants, and recognitions earned through excellence in biotechnology
          research, teaching, and innovation.
        </p>
      </motion.div>

      {/* Achievements Grid */}
      <div className='relative max-w-5xl mx-auto'>
        <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#339989] to-[#7DE2D1] -translate-x-1/2' />
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='space-y-8 sm:space-y-10 '
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