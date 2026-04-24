import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'

const STATS = [
  { value: '500+', label: 'Different Games' },
  { value: '7', label: 'Years of Experience' },
  { value: '1000+', label: 'Happy Players' },
]

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="section-base section-pad"
      style={{ background: 'var(--section-1)' }}
    >
      {/* Subtle top divider gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, rgba(168,0,0,0.25), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container-xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Image side */}
          <AnimatedSection direction="left">
            <div style={{ position: 'relative' }}>
              {/* Soft decorative circle */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(168,0,0,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-30px',
                width: '140px',
                height: '140px',
                background: 'radial-gradient(circle, rgba(255,209,102,0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
              }} />
              <img
                src="/images/kutu-oyunlari-02.jpg"
                alt="Da Vinci Board Game Cafe"
                style={{
                  width: '100%',
                  height: 'clamp(300px, 40vw, 460px)',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
              {/* Floating stat chip */}
              <div style={{
                position: 'absolute',
                bottom: '28px',
                left: '-16px',
                background: 'var(--black)',
                color: '#fff',
                padding: '14px 22px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 2,
                borderLeft: '3px solid var(--red-light)',
              }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--yellow)', lineHeight: 1 }}>
                  {t('500+')}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500, marginTop: '4px' }}>
                  {t('Different Games')}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="section-badge section-badge--soft">
              {t('About Us')}
            </span>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--black)',
              marginBottom: '20px',
            }}>
              {t('Welcome to')}{' '}
              <span className="text-accent">
                {t("Da Vinci's World")}
              </span>
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'var(--gray-600)',
              lineHeight: 1.85,
              marginBottom: '40px',
              maxWidth: '480px',
            }}>
              {t('Since 2017, we have been keeping board game culture alive in Ankara, presenting hundreds of games with our experienced team. We have become a home for game lovers of all ages and experience levels.')}
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {STATS.map(({ value, label }, idx) => (
                <div key={idx} style={{
                  borderLeft: '2px solid var(--gray-300)',
                  paddingLeft: '16px',
                }}>
                  <div style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--black)',
                    lineHeight: 1,
                  }}>
                    {t(value)}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', fontWeight: 500, marginTop: '4px' }}>
                    {t(label)}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
