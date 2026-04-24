import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const STATS = [
  { value: '500+', label: 'Different Games' },
  { value: String(new Date().getFullYear() - 2017), label: 'Years of Experience' },
  { value: '1000+', label: 'Happy Players' },
]

export default function SlideAbout() {
  const { t } = useTranslation()

  return (
    <div style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
      <img
        src="/images/IMG_0478-1.jpg"
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
        display: 'flex', alignItems: 'center',
        padding: 'clamp(80px, 10vw, 120px) 24px',
      }}>
        <div className="container-xl" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(168,0,0,0.08) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
              <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '140px', height: '140px', background: 'radial-gradient(circle, rgba(255,209,102,0.12) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
              <img
                src="/images/kutu-oyunlari-02.jpg"
                alt="Da Vinci Board Game Cafe"
                style={{
                  width: '100%', height: 'clamp(300px, 40vw, 460px)',
                  objectFit: 'cover', borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)', position: 'relative', zIndex: 1,
                }}
              />
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: '20px',
            }}>
              {t('Welcome to')}{' '}
              <span className="text-accent">{t("Da Vinci's World")}</span>
            </h2>
            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85,
              marginBottom: '40px', maxWidth: '480px',
            }}>
              {t('Since 2017, we have been keeping board game culture alive in Ankara, presenting hundreds of games with our experienced team. We have become a home for game lovers of all ages and experience levels.')}
            </p>
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {STATS.map(({ value, label }, idx) => (
                <div key={idx} style={{ borderLeft: '2px solid rgba(255,255,255,0.25)', paddingLeft: '16px' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#fff', lineHeight: 1 }}>
                    {t(value)}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: '4px' }}>
                    {t(label)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  )
}
