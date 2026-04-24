import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../../../hooks/useIsMobile'

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

const FEATURES = [
  { title: 'Extensive Game Library', desc: 'With over 500 board games, we offer options for every taste — from strategy to cooperative, family games to party games.' },
  { title: 'Experienced Game Guides', desc: 'Our expert team is ready to teach you any game and make your gaming experience as enjoyable as possible.' },
  { title: 'Comfortable Environment', desc: 'With wide tables, comfortable chairs and special lighting, you will feel at home in our venue designed for hours of play.' },
  { title: 'Delicious Menu', desc: 'From coffee to snacks, our rich menu completes your gaming table experience.' },
  { title: 'Events and Tournaments', desc: 'Become part of our gaming community with regularly organized tournaments and special events.' },
  { title: 'Group Reservations', desc: 'Birthday, bachelor party, corporate event — you can make special table reservations for all your special days.' },
]

function Polaroid({ src, title, desc, rotate, delay, imgHeight }: {
  src: string; title: string; desc: string; rotate: number; delay: number; imgHeight: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotate: rotate * 2 }}
      animate={{ opacity: 1, y: 0, rotate }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
      transition={{ duration: 0.85, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ position: 'relative', transformOrigin: 'center 90%', cursor: 'default' }}
    >
      <div style={{
        position: 'absolute', top: '-9px', left: '50%', transform: 'translateX(-50%)',
        width: '13px', height: '13px', borderRadius: '50%', background: 'var(--red)',
        boxShadow: '0 2px 6px rgba(168,0,0,0.45)', zIndex: 2,
      }} />
      <div style={{
        background: '#FFFEFB', padding: '10px 10px 8px',
        boxShadow: '0 8px 32px rgba(31,41,55,0.16), 0 2px 6px rgba(31,41,55,0.08)',
        position: 'relative',
      }}>
        <img src={src} alt={title} style={{ width: '100%', height: imgHeight, objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ marginTop: '14px', padding: '0 4px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--black)', marginBottom: '5px', lineHeight: 1.3 }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.81rem', color: 'var(--gray-600)', lineHeight: 1.68 }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function SlideFeatures() {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  const isTablet = useIsMobile(1024)

  return (
    <div style={{
      height: '100vh', minHeight: '600px', background: '#EDE8DF',
      overflowY: 'auto', padding: 'clamp(64px, 10vw, 100px) 24px',
      position: 'relative',
    }}>
      <div className="section-edge section-edge--top" style={{ background: 'linear-gradient(90deg, transparent, rgba(31,41,55,0.18), transparent)' }} />
      <div className="section-edge section-edge--bottom" style={{ background: 'linear-gradient(90deg, transparent, rgba(31,41,55,0.18), transparent)' }} />

      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: 'clamp(36px, 6vw, 72px)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge section-badge--dark" style={{ margin: '0 auto 20px' }}>
            {t('Why Da Vinci?')}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 700, color: 'var(--black)', lineHeight: 1.15,
          }}>
            {t('Experience')}{' '}
            <span className="text-accent">{t('The Difference')}</span>
          </h2>
        </motion.div>

        {isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {PHOTOS.map((photo, i) => (
              <Polaroid
                key={photo.area}
                src={photo.src}
                title={t(FEATURES[photo.featureIdx].title)}
                desc={t(FEATURES[photo.featureIdx].desc)}
                rotate={photo.rotate * 0.5}
                delay={i * 0.07}
                imgHeight={200}
              />
            ))}
          </div>
        )}

        {!isMobile && isTablet && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px 28px', alignItems: 'start' }}>
            {PHOTOS.map((photo, i) => (
              <Polaroid
                key={photo.area}
                src={photo.src}
                title={t(FEATURES[photo.featureIdx].title)}
                desc={t(FEATURES[photo.featureIdx].desc)}
                rotate={photo.rotate}
                delay={i * 0.08}
                imgHeight={220}
              />
            ))}
          </div>
        )}

        {!isTablet && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateAreas: `
              "lib game  salon"
              "lib menu  event"
            `,
            gap: '40px 36px',
            alignItems: 'start',
          }}>
            {PHOTOS.map((photo, i) => (
              <div key={photo.area} style={{ gridArea: photo.area, paddingTop: photo.area === 'lib' ? '10px' : undefined }}>
                <Polaroid
                  src={photo.src}
                  title={t(FEATURES[photo.featureIdx].title)}
                  desc={t(FEATURES[photo.featureIdx].desc)}
                  rotate={photo.rotate}
                  delay={i * 0.09}
                  imgHeight={IMG_HEIGHTS_DESKTOP[photo.area]}
                />
              </div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: 'clamp(32px, 5vw, 48px)',
            background: 'var(--red)', borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '20px', color: '#fff', boxShadow: '0 8px 32px rgba(168,0,0,0.22)',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.55rem)', fontWeight: 700, marginBottom: '8px', lineHeight: 1.25 }}>
              {t(FEATURES[5].title)}
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.88rem)', lineHeight: 1.68, opacity: 0.9, maxWidth: '600px' }}>
              {t(FEATURES[5].desc)}
            </p>
          </div>
          {!isMobile && (
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.28)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
