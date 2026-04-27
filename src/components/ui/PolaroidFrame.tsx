import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

interface PolaroidFrameProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  rotate?: number
  delay?: number
}

export default function PolaroidFrame({ 
  children, 
  rotate = 0, 
  delay = 0, 
  style,
  ...props 
}: PolaroidFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      style={{
        position: 'relative',
        padding: '10px 10px 8px',
        background: '#FFFEFB',
        boxShadow: '0 8px 32px rgba(31,41,55,0.16), 0 2px 6px rgba(31,41,55,0.08)',
        ...style
      }}
      {...props}
    >
      {/* Red Dot */}
      <div style={{
        position: 'absolute',
        top: '-9px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '13px',
        height: '13px',
        borderRadius: '50%',
        background: 'var(--red)',
        boxShadow: '0 2px 6px rgba(168,0,0,0.45)',
        zIndex: 2,
      }} />
      
      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  )
}
