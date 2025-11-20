'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const LazyContainer = ({ children, className = "", threshold = 0.1 }) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '50px 0px'
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}