import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  direction?: 'up' | 'left' | 'right' | 'fade'
}

export default function AnimatedSection({ children, delay = 0, className, style, direction = 'up' }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
