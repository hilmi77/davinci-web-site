import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { fetchLatestMonthlyActivity } from '../../utils/api/monthlyActivity/monthlyActivity'

const HERO_ROWS = (() => {
  let idx = 0
  return ['DA', 'VINCI', 'BOARD', 'GAME'].map(row => ({
    text: row,
    chars: row.split('').map((char, i) => ({ char, key: `${row}-${i}`, delay: 0.3 + idx++ * 0.055 })),
  }))
})()

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
  const [monthlyImageUrl, setMonthlyImageUrl] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    fetchLatestMonthlyActivity().then(setMonthlyImageUrl)
  }, [])

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
                background: 'linear-gradient(135deg, rgba(17,24,39,0.93) 0%, rgba(17,24,39,0.65) 50%, rgba(17,24,39,0.85) 100%)',
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
        <div className="container-xl" style={{ width: '100%', pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          {/* Left: text content */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}>
              {HERO_ROWS.map(({ text, chars }) => (
                <div key={text}>
                  {chars.map(({ char, key, delay }) => (
                    <motion.span
                      key={key}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
                      style={{ display: 'inline-block' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>

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
              {t('With hundreds of board games and our experienced team, we welcome you to a fun-filled experience..')}
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
                {t('Make a Reservation')}
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
                {t('Explore Games')}
              </motion.a>
            </motion.div>
          </div>

          {/* Right: monthly activity image */}
          {monthlyImageUrl && (
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="hero-monthly-frame"
              style={{
                flexShrink: 0,
                position: 'relative',
                padding: '8px',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, #A80000, #540000, rgba(168,0,0,0.4))',
                boxShadow: '0 0 0 1px rgba(168,0,0,0.5), 0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(168,0,0,0.25)',
              }}
            >
              {/* Pin */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--red)',
                boxShadow: '0 2px 8px rgba(168,0,0,0.6)',
                zIndex: 2,
              }} />

              <div
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#000',
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={monthlyImageUrl}
                  alt="monthly activity"
                  style={{
                    width: '460px',
                    maxHeight: '600px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-monthly-frame { display: none !important; }
        }
      `}</style>

      {/* Lightbox */}
      {lightboxOpen && monthlyImageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(6px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative' }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#fff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <img
              src={monthlyImageUrl}
              alt="monthly activity"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '16px',
                display: 'block',
                objectFit: 'contain',
                boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
              }}
            />
          </motion.div>
        </motion.div>
      )}

    </section>
  )
}
