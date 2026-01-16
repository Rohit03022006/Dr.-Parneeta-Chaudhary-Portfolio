'use client'

import React, { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const LazyContainer = memo(({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  duration = 0.5
}) => {
  const shouldReduceMotion = useReducedMotion()

  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '50px 0px'
  })

  return (
    <motion.div
      ref={ref}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : inView
            ? { opacity: 1, y: 0 }
            : {}
      }
      transition={{
        duration,
        delay: inView ? delay : 0,
        ease: "easeOut"
      }}
      className={`will-change-transform will-change-opacity ${className}`}
    >
      {children}
    </motion.div>
  )
})

LazyContainer.displayName = 'LazyContainer'

export const StaggerContainer = memo(({
  children,
  className = "",
  threshold = 0.1,
  staggerDelay = 0.15,
  rootMargin = '50px 0px'
}) => {
  const shouldReduceMotion = useReducedMotion()

  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    rootMargin
  })

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

StaggerContainer.displayName = 'StaggerContainer'

export const FadeInUp = memo(({
  children,
  delay = 0,
  duration = 0.5
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 30 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
})

FadeInUp.displayName = 'FadeInUp'

export const ScaleIn = memo(({
  children,
  delay = 0
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, scale: 0.9 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, scale: 1 }
      }
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
})

ScaleIn.displayName = 'ScaleIn'

export const SlideInLeft = memo(({
  children,
  delay = 0
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, x: -50 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0 }
      }
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
})

SlideInLeft.displayName = 'SlideInLeft'

export const SlideInRight = memo(({
  children,
  delay = 0
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, x: 50 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0 }
      }
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
})

SlideInRight.displayName = 'SlideInRight'
