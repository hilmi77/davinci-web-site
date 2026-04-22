import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const SLIDES = [
  {
    img: '/images/6d8c8b52-cd9f-46fd-94ed-9a88e0df5808.jpg',
    alt: 'Da Vinci Board Game Cafe',
  },
  {
    img: '/images/IMG_0477-1.jpg',
    alt: 'Kutu Oyunları',
  },
  {
    img: '/images/IMG_0478-1.jpg',
    alt: 'Oyun Keyfi',
  },
]

export default function HeroSlider() {
  const { t } = useTranslation()

  return (
    <section id="home" className="section-base" style={{ height: '100vh', minHeight: '600px' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        style={{ height: '100%' }}
      >
        {SLIDES.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
              <img
                src={slide.img}
                alt={slide.alt}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              {/* Layered overlays for depth */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.4) 50%, rgba(17,24,39,0.7) 100%)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(0deg, rgba(17,24,39,1) 0%, transparent 100%)',
              }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        paddingTop: '80px',
        pointerEvents: 'none',
      }}>
        <div className="container-xl" style={{ width: '100%', pointerEvents: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: '100px',
              marginBottom: '18px',
              background: 'rgba(255,255,255,0.14)',
              color: 'rgba(255,255,255,0.92)',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)',
              fontFamily: 'var(--font-body)',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff', display: 'inline-block', opacity: 0.9 }} />
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              color: '#fff',
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}
          >
            {t('hero.title')}
            <br />
            <span className="text-accent" style={{ WebkitTextStroke: 'none' }}>
              {t('hero.titleAccent')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '500px',
              marginTop: '20px',
              marginBottom: '40px',
              lineHeight: 1.7,
            }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <motion.a
              href="https://yervarmi.davinciboardgame.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(230,57,70,0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--red)',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '100px',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
                fontFamily: 'var(--font-body)',
              }}
            >
              {t('hero.cta')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://buoyunvarmi.davinciboardgame.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '100px',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {t('hero.ctaSecondary')}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '28px',
            height: '44px',
            borderRadius: '14px',
            border: '2px solid rgba(255,255,255,0.3)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <div style={{ width: '4px', height: '8px', borderRadius: '2px', background: 'var(--red)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
