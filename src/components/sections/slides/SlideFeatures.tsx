import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../../../hooks/useIsMobile'
import PolaroidFrame from '../../ui/PolaroidFrame'

const PHOTOS = [
  { src: '/features/Screenshot%202026-04-22%20at%2010.45.33.png', featureIdx: 0, rotate: -2.5, area: 'lib' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.41.31.png', featureIdx: 1, rotate: -2.2, area: 'game' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.38.42.png', featureIdx: 2, rotate: 3.2,  area: 'salon' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.40.07.png', featureIdx: 3, rotate: -1.9, area: 'menu' },
  { src: '/features/Screenshot%202026-04-22%20at%2010.42.09.png', featureIdx: 4, rotate: -2.8, area: 'event' },
]

const IMG_HEIGHTS_DESKTOP: Record<string, number> = {
  lib: 380, game: 155, salon: 155, menu: 145, event: 155,
}

const FEATURES = [
  { title: 'Extensive Game Library', desc: 'With over 500 board games, we offer options for every taste — from strategy to cooperative, family games to party games.' },
  { title: 'Experienced Game Guides', desc: 'Our expert team is ready to teach you any game and make your gaming experience as enjoyable as possible.' },
  { title: 'Comfortable Environment', desc: 'With wide tables, comfortable chairs and special lighting, you will feel at home in our venue designed for hours of play.' },
  { title: 'Delicious Menu', desc: 'From coffee to snacks, our rich menu completes your gaming table experience.' },
  { title: 'Events and Tournaments', desc: 'Become part of our gaming community with regularly organized tournaments and special events.' },
]

function Polaroid({ src, title, desc, rotate, delay, imgHeight }: {
  src: string; title: string; desc: string; rotate: number; delay: number; imgHeight: number
}) {
  return (
    <div style={{ position: 'relative' }}>
      <PolaroidFrame
        rotate={rotate}
        initial={{ opacity: 0, y: 48, rotate: rotate * 2 }}
        animate={{ opacity: 1, y: 0, rotate }}
        transition={{ duration: 0.85, delay, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: 'center 90%', cursor: 'default' }}
      >
        <img src={src} alt={title} style={{ width: '100%', height: imgHeight, objectFit: 'cover', display: 'block' }} />
      </PolaroidFrame>
      <div style={{ marginTop: '8px', padding: '0 4px' }}>
        <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '5px', lineHeight: 1.3 }}>
          {title}
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function SlideFeatures() {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  const isTablet = useIsMobile(1024)

  return (
    <div style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
      <img
        src="/images/IMG_0477-1.jpg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(17,24,39,0.93) 0%, rgba(17,24,39,0.65) 50%, rgba(17,24,39,0.85) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
        background: 'linear-gradient(0deg, rgba(17,24,39,1) 0%, transparent 100%)',
      }} />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        overflowY: isTablet ? 'auto' : 'hidden',
        padding: isTablet ? 'clamp(64px, 10vw, 100px) 24px' : '40px 24px',
        display: 'flex', flexDirection: 'column', justifyContent: isTablet ? 'flex-start' : 'center',
      }}>
        <div className="section-edge section-edge--top" style={{ background: 'linear-gradient(90deg, transparent, rgba(31,41,55,0.18), transparent)' }} />
        <div className="section-edge section-edge--bottom" style={{ background: 'linear-gradient(90deg, transparent, rgba(31,41,55,0.18), transparent)' }} />

        <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: isTablet ? 'clamp(36px, 6vw, 72px)' : '24px' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          
          <h2 style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.15,
          }}>
            {t('Experience')}{' '}
            {t('The Difference')}
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
            gap: '24px 28px',
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

        </div>
      </div>
    </div>
  )
}
