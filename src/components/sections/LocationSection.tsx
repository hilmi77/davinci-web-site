import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'

export default function LocationSection() {
  const { t } = useTranslation()

  return (
    <section
      id="location"
      style={{
        background: 'var(--section-1)',
        padding: 'clamp(80px, 10vw, 130px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <AnimatedSection style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <span className="section-badge section-badge--red">{t('location.badge')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--black)',
            lineHeight: 1.15,
          }}>
            {t('location.title')}{' '}
            <span style={{ color: 'var(--red)', fontStyle: 'italic' }}>{t('location.titleAccent')}</span>
            {t('location.title2') ? (
              <><br />{t('location.title2')}</>
            ) : null}
          </h2>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(32px, 4vw, 56px)',
          alignItems: 'start',
        }}>
          {/* Google Maps Embed */}
          <AnimatedSection direction="left" delay={0.1}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              height: '440px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}>
              <iframe
                title="Da Vinci Board Game Cafe Konum"
                src="https://maps.google.com/maps?q=Da+Vinci+Board+Game+Cafe+Neorama+Ankara&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Info cards */}
          <AnimatedSection direction="right" delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Address */}
              <InfoCard
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-6-8-13A8 8 0 0120 9c0 7-8 13-8 13z"/><circle cx="12" cy="9" r="3"/></svg>}
                label={t('location.address')}
              />

              {/* Hours */}
              <div style={{
                background: 'var(--bg-gradient-2)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 28px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(230,57,70,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--red)',
                    flexShrink: 0,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--black)' }}>
                    {t('location.hours')}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <HourRow label={t('location.weekdays')} hours={t('location.weekdaysHours')} />
                  <HourRow label={t('location.weekends')} hours={t('location.weekendsHours')} />
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Da+Vinci+Board+Game+Cafe+Neorama+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'var(--red)',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 20px rgba(230,57,70,0.3)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background = 'var(--red-dark)'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 8px 32px rgba(168,0,0,0.35)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background = 'var(--red)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 4px 20px rgba(230,57,70,0.3)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-6-8-13A8 8 0 0120 9c0 7-8 13-8 13z"/><circle cx="12" cy="9" r="3"/>
                </svg>
                {t('location.getDirections')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      border: '1px solid rgba(0,0,0,0.07)',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'rgba(230,57,70,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--red)',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>{label}</p>
    </div>
  )
}

function HourRow({ label, hours }: { label: string; hours: string }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>{label}</span>
      <span style={{
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--red-dark)',
        background: 'rgba(168,0,0,0.08)',
        padding: '4px 12px',
        borderRadius: '100px',
      }}>{hours}</span>
    </div>
  )
}
