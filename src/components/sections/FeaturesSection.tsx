import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const PHOTOS = [
  { src: '/features/Screenshot%202026-04-22%20at%2010.45.33.png', featureIdx: 0, rotate: -2.5, area: 'lib' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.41.31.png', featureIdx: 1, rotate: -2.2, area: 'game' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.38.42.png', featureIdx: 2, rotate: 3.2,  area: 'salon' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.40.07.png', featureIdx: 3, rotate: -1.9, area: 'menu' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.42.09.png', featureIdx: 4, rotate: -2.8, area: 'event' },
]

const IMG_HEIGHTS_DESKTOP: Record<string, number> = {
  lib: 440, game: 200, salon: 200, menu: 185, event: 200,
}

function Polaroid({
  src, title, desc, rotate, delay, imgHeight,
}: {
  src: string; title: string; desc: string; rotate: number; delay: number; imgHeight: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48, rotate: rotate * 2 }}
      animate={inView ? { opacity: 1, y: 0, rotate } : { opacity: 0, y: 48, rotate: rotate * 2 }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
      transition={{ duration: 0.85, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ position: 'relative', transformOrigin: 'center 90%', cursor: 'default' }}
    >
      {/* Pin */}
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

      {/* Polaroid frame */}
      <div style={{
        background: '#FFFEFB',
        padding: '10px 10px 8px',
        boxShadow: '0 8px 32px rgba(31,41,55,0.16), 0 2px 6px rgba(31,41,55,0.08)',
        position: 'relative',
      }}>
        <img
          src={src}
          alt={title}
          style={{ width: '100%', height: imgHeight, objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Caption */}
      <div style={{ marginTop: '14px', padding: '0 4px' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--black)',
          marginBottom: '5px',
          lineHeight: 1.3,
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '0.81rem',
          color: 'var(--gray-600)',
          lineHeight: 1.68,
        }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  const isTablet = useIsMobile(1024)
  const items = t('features.items', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <section
      style={{
        background: '#EDE8DF',
        padding: 'clamp(64px, 10vw, 130px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(31,41,55,0.18), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(31,41,55,0.18), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 'clamp(36px, 6vw, 72px)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge section-badge--dark" style={{ display: 'inline-flex', margin: '0 auto 20px' }}>
            {t('features.badge')}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--black)',
            lineHeight: 1.15,
          }}>
            {t('features.title')}{' '}
            <span style={{ color: 'var(--red)', fontStyle: 'italic' }}>
              {t('features.titleAccent')}
            </span>
          </h2>
        </motion.div>

        {/* Mobile: single column stack */}
        {isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {PHOTOS.map((photo, i) => (
              <Polaroid
                key={photo.area}
                src={photo.src}
                title={items[photo.featureIdx]?.title ?? ''}
                desc={items[photo.featureIdx]?.desc ?? ''}
                rotate={photo.rotate * 0.5}
                delay={i * 0.07}
                imgHeight={200}
              />
            ))}
          </div>
        )}

        {/* Tablet: 2-column grid */}
        {!isMobile && isTablet && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px 28px',
            alignItems: 'start',
          }}>
            {PHOTOS.map((photo, i) => (
              <Polaroid
                key={photo.area}
                src={photo.src}
                title={items[photo.featureIdx]?.title ?? ''}
                desc={items[photo.featureIdx]?.desc ?? ''}
                rotate={photo.rotate}
                delay={i * 0.08}
                imgHeight={220}
              />
            ))}
          </div>
        )}

        {/* Desktop: 3-column asymmetric grid with areas */}
        {!isTablet && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridTemplateAreas: `
                "lib game  salon"
                "lib menu  event"
              `,
              gap: '40px 36px',
              alignItems: 'start',
            }}
          >
            {PHOTOS.map((photo, i) => (
              <div
                key={photo.area}
                style={{
                  gridArea: photo.area,
                  paddingTop: photo.area === 'lib' ? '10px' : undefined,
                }}
              >
                <Polaroid
                  src={photo.src}
                  title={items[photo.featureIdx]?.title ?? ''}
                  desc={items[photo.featureIdx]?.desc ?? ''}
                  rotate={photo.rotate}
                  delay={i * 0.09}
                  imgHeight={IMG_HEIGHTS_DESKTOP[photo.area]}
                />
              </div>
            ))}
          </div>
        )}

        {/* Feature 6 — full-width red callout */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: 'clamp(32px, 5vw, 48px)',
            background: 'var(--red)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            color: '#fff',
            boxShadow: '0 8px 32px rgba(168,0,0,0.22)',
          }}
        >
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.55rem)',
              fontWeight: 700,
              marginBottom: '8px',
              lineHeight: 1.25,
            }}>
              {items[5]?.title}
            </h3>
            <p style={{
              fontSize: 'clamp(0.8rem, 1.5vw, 0.88rem)',
              lineHeight: 1.68,
              opacity: 0.9,
              maxWidth: '600px',
            }}>
              {items[5]?.desc}
            </p>
          </div>
          {!isMobile && (
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  )
}
