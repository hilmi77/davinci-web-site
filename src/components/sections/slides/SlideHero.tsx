import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../../../hooks/useIsMobile'

const HERO_ROWS = (() => {
  let idx = 0
  return ['DA', 'VINCI', 'BOARD', 'GAME'].map(row => ({
    text: row,
    chars: row.split('').map((char, i) => ({ char, key: `${row}-${i}`, delay: 0.3 + idx++ * 0.055 })),
  }))
})()

interface SlideHeroProps {
  monthlyImageUrl: string | null
  onMonthlyImageClick: () => void
}

export default function SlideHero({ monthlyImageUrl, onMonthlyImageClick }: SlideHeroProps) {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  const heading = (
    <div style={{
      fontFamily: 'var(--font-display)', fontSize: isMobile ? '3.6rem' : 'clamp(2.8rem, 6.5vw, 5.5rem)',
      fontWeight: 900, lineHeight: 1.05, color: '#fff', letterSpacing: '-0.02em',
      marginBottom: isMobile ? '16px' : '24px',
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
  )

  const paragraph = (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.75)',
        maxWidth: '500px', marginTop: isMobile ? '8px' : '20px',
        marginBottom: isMobile ? '20px' : '40px', lineHeight: 1.7,
      }}
    >
      {t('With hundreds of board games and our experienced team, we welcome you to a fun-filled experience..')}
    </motion.p>
  )

  const buttons = (
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
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--red)', color: '#fff',
          padding: isMobile ? '12px 22px' : '16px 32px',
          borderRadius: '100px', fontWeight: 700, fontSize: '0.95rem',
          letterSpacing: '0.02em', fontFamily: 'var(--font-body)',
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
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,255,255,0.08)', color: '#fff',
          padding: isMobile ? '12px 22px' : '16px 32px',
          borderRadius: '100px', fontWeight: 600, fontSize: '0.95rem',
          border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
          fontFamily: 'var(--font-body)',
        }}
      >
        {t('Explore Games')}
      </motion.a>
    </motion.div>
  )

  const monthlyFrame = monthlyImageUrl ? (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : 40, rotate: isMobile ? 0 : 3 }}
      animate={{ opacity: 1, x: 0, rotate: isMobile ? 0 : 3 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="hero-monthly-frame"
      style={{
        flexShrink: 0, position: 'relative', padding: '10px 10px 8px',
        background: '#FFFEFB',
        boxShadow: '0 8px 32px rgba(31,41,55,0.16), 0 2px 6px rgba(31,41,55,0.08)',
        ...(isMobile ? { width: '100%' } : {}),
      }}
    >
      <div style={{
        position: 'absolute', top: '-9px', left: '50%', transform: 'translateX(-50%)',
        width: '13px', height: '13px', borderRadius: '50%', background: 'var(--red)',
        boxShadow: '0 2px 6px rgba(168,0,0,0.45)', zIndex: 2,
      }} />
      <div
        style={{ overflow: 'hidden', background: '#000', cursor: 'pointer' }}
        onClick={onMonthlyImageClick}
      >
        <img
          src={monthlyImageUrl}
          alt="monthly activity"
          style={{ width: isMobile ? '100%' : '520px', maxHeight: isMobile ? undefined : '600px', objectFit: 'contain', display: 'block' }}
        />
      </div>
    </motion.div>
  ) : null

  return (
    <div style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
      <img
        src="/images/6d8c8b52-cd9f-46fd-94ed-9a88e0df5808.jpg"
        alt="Da Vinci Board Game Cafe"
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

      {/* DESKTOP */}
      {!isMobile && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', padding: '0 24px', paddingTop: '80px',
          pointerEvents: 'none',
        }}>
          <div className="container-xl" style={{ width: '100%', pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              {heading}
              {paragraph}
              {buttons}
            </div>
            {monthlyFrame}
          </div>
        </div>
      )}

      {/* MOBILE */}
      {isMobile && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', padding: '70px 24px 40px',
        }}>
          <div>
            {heading}
            {paragraph}
            {buttons}
            {monthlyImageUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.05 }}
                style={{ marginTop: '12px' }}
              >
                <motion.button
                  onClick={onMonthlyImageClick}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'transparent', color: 'rgba(255,255,255,0.75)',
                    padding: '12px 0', border: 'none', cursor: 'pointer',
                    fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-body)',
                    textDecoration: 'underline', textUnderlineOffset: '4px',
                  }}
                >
                  {t('Ayın Etkinlikleri')} →
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
