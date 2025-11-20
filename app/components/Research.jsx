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
]
  .sort((a, b) => b.sortYear - a.sortYear)

const ResearchCard = ({ item }) => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const meta = typeMeta[item.type] ?? typeMeta.publication
  const Icon = meta.icon

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

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <p className="text-sm text-[#7DE2D1]/80 font-semibold">{item.year}</p>
          <span className="px-2 py-1 bg-[#339989]/15 text-[#7DE2D1] text-xs rounded-full border border-[#339989]/30">
            {meta.label}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#FFFAFB] mb-2">{item.title}</h3>

        {item.subtitle && (
          <p className="text-[#FFFAFB]/80 text-sm mb-2">{item.subtitle}</p>
        )}

        {item.meta && (
          <p className="text-[#FFFAFB]/70 text-sm mb-3">{item.meta}</p>
        )}

        {item.summary && (
          <p className="text-[#FFFAFB]/70 text-sm leading-relaxed mb-4">{item.summary}</p>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#7DE2D1] hover:text-[#FFFAFB] text-sm"
          >
            {item.doi ? `DOI: ${item.doi}` : 'View reference'}
            <ExternalLink size={14} />
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}

const Research = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="research" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-[#131515] scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#7DE2D1] text-lg font-inter mb-3">Research Contributions</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4">
          Publications & Manuscripts
        </h2>
        <p className="text-[#FFFAFB]/80 max-w-3xl mx-auto">
          A chronological snapshot of peer-reviewed publications, manuscripts in review, and book chapters
          highlighting advancements in biotechnology, bioinformatics, and sustainable agriculture.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-5xl mx-auto space-y-8"
      >
        {timelineEntries.map((item) => (
          <ResearchCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  )
}

export default Research