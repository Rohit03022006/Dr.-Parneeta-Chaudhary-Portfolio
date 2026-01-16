'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, BookOpen, Book, ExternalLink } from 'lucide-react'
import {
  researchPublications,
  manuscriptsInPipeline,
  bookChapters,
} from '@/app/data/research'

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

const typeMeta = {
  publication: { label: 'Research Publication', icon: FileText },
  manuscript: { label: 'Manuscript in Pipeline', icon: BookOpen },
  chapter: { label: 'Book Chapter', icon: Book }
}

const parseYear = (value) => {
  if (typeof value === 'number') return value
  const parsed = parseInt(value, 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

const joinMeta = (parts = []) => parts.filter(Boolean).join(' · ')

const timelineEntries = [
  ...researchPublications.map((pub) => ({
    id: `pub-${pub.id}`,
    type: 'publication',
    year: pub.year,
    sortYear: parseYear(pub.year),
    title: pub.title,
    subtitle: pub.authors,
    meta: joinMeta([pub.venue, pub.volume && `Vol. ${pub.volume}`, pub.pages && `pp. ${pub.pages}`]),
    summary: pub.summary,
    link: pub.link,
    doi: pub.doi
  })),
  ...manuscriptsInPipeline.map((manuscript) => ({
    id: `manuscript-${manuscript.id}`,
    type: 'manuscript',
    year: manuscript.year,
    sortYear: parseYear(manuscript.year),
    title: manuscript.title,
    subtitle: manuscript.authors,
    meta: joinMeta([manuscript.venue, manuscript.status, manuscript.manuscriptId && `ID: ${manuscript.manuscriptId}`]),
    summary: manuscript.summary,
    link: manuscript.link,
    doi: manuscript.doi
  })),
  ...bookChapters.map((chapter) => ({
    id: `chapter-${chapter.id}`,
    type: 'chapter',
    year: chapter.year,
    sortYear: parseYear(chapter.year),
    title: chapter.title,
    subtitle: chapter.authors,
    meta: joinMeta([chapter.book, chapter.editors && `Editors: ${chapter.editors}`, chapter.publisher]),
    summary: chapter.summary,
    link: chapter.doi ? `https://doi.org/${chapter.doi}` : null,
    doi: chapter.doi
  }))
].sort((a, b) => b.sortYear - a.sortYear)

const ResearchCard = ({ item }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const meta = typeMeta[item.type] ?? typeMeta.publication
  const Icon = meta.icon

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
        className="relative bg-(--card-bg-color) border border-(--border-color)/25 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
      >
        <div
          className="absolute -left-4 sm:-left-5 top-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-(--border-color) to-(--accent-color) flex items-center justify-center shadow-md"
        >
          <Icon size={16} className="sm:w-5 sm:h-5 text-(--bg-color)" />
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
          <p className="text-xs sm:text-sm text-(--accent-color)/80 font-semibold">
            {item.year}
          </p>
          <span
            className="px-2 py-1 bg-(--border-color)/15 text-(--accent-color) text-xs rounded-full border border-(--border-color)/30 whitespace-nowrap"
          >
            {meta.label}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-(--text-primary) mb-2 leading-tight">
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="text-(--text-primary)/80 text-xs sm:text-sm mb-2 leading-relaxed">
            {item.subtitle}
          </p>
        )}

        {item.meta && (
          <p className="text-(--text-primary)/70 text-xs sm:text-sm mb-3 leading-relaxed">
            {item.meta}
          </p>
        )}

        {item.summary && (
          <p className="text-(--text-primary)/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            {item.summary}
          </p>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-(--accent-color) hover:text-(--text-primary) text-xs sm:text-sm transition-colors duration-200"
          >
            {item.doi ? `DOI: ${item.doi}` : 'View reference'}
            <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}

const Research = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      id="research"
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-(--bg-color) scroll-mt-16 sm:scroll-mt-20"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="text-(--accent-color) text-base sm:text-lg font-inter mb-3">
          Research Contributions
        </p>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair mb-4 text-(--text-primary)"
        >
          Publications & Manuscripts
        </h2>

        <p
          className="text-(--text-primary)/80 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-4"
        >
          A chronological snapshot of peer-reviewed publications, manuscripts in review, and book chapters
          highlighting advancements in biotechnology, bioinformatics, and sustainable agriculture.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-4xl lg:max-w-5xl mx-auto space-y-6 sm:space-y-8"
      >
        {timelineEntries.map((item) => (
          <ResearchCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  )
}

export default Research
