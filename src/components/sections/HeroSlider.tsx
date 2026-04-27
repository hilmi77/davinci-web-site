import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { useLatestMonthlyActivity } from '../../utils/api/monthlyActivity/monthlyActivity'
import SlideHero from './slides/SlideHero'
import SlideAbout from './slides/SlideAbout'
import SlideFeatures from './slides/SlideFeatures'

export default function HeroSlider() {
  const { data: monthlyImageUrl } = useLatestMonthlyActivity()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section id="home" className="section-base" style={{ height: '100vh', minHeight: '600px' }}>
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        navigation
        loop
        style={{ height: '100%' }}
      >
        <SwiperSlide>
          <SlideHero
            monthlyImageUrl={monthlyImageUrl ?? null}
            onMonthlyImageClick={() => setLightboxOpen(true)}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideAbout />
        </SwiperSlide>

        <SwiperSlide>
          <SlideFeatures />
        </SwiperSlide>

      </Swiper>

      <style>{`
        #home .swiper, #home .swiper-slide { user-select: none; }
      `}</style>

      {lightboxOpen && monthlyImageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.85)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)',
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
                position: 'absolute', top: '-16px', right: '-16px',
                width: '36px', height: '36px', borderRadius: '50%',
                background: '#fff', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
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
                maxWidth: '90vw', maxHeight: '90vh', borderRadius: '16px',
                display: 'block', objectFit: 'contain', boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
