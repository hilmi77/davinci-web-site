import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'

const ICONS = [
  <svg key={0} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  <svg key={1} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>,
  <svg key={2} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  <svg key={3} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1"/><path d="M15 3H5a2 2 0 00-2 2v8a2 2 0 002 2h2l4 4V5a2 2 0 00-2-2z"/></svg>,
  <svg key={4} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  <svg key={5} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
]

export default function FeaturesSection() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <section
      style={{
        background: 'var(--section-2)',
        padding: 'clamp(80px, 10vw, 130px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top/bottom divider */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gray-300), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gray-300), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <span className="section-badge section-badge--dark" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            {t('features.badge')}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--black)',
            lineHeight: 1.15,
          }}>
            {t('features.title')}{' '}
            <span style={{ color: 'var(--red)', fontStyle: 'italic' }}>
              {t('features.titleAccent')}
            </span>
          </h2>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {items.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.07} style={{ height: '100%' }}>
              <FeatureCard icon={ICONS[idx]} title={item.title} desc={item.desc} idx={idx} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc, idx }: {
  icon: React.ReactNode
  title: string
  desc: string
  idx: number
}) {
  const isHighlighted = idx === 0 || idx === 4

  return (
    <div
      style={{
        background: isHighlighted
          ? 'linear-gradient(160deg, rgba(168,0,0,0.05) 0%, rgba(168,0,0,0.01) 100%)'
          : '#fff',
        border: `1px solid ${isHighlighted ? 'rgba(168,0,0,0.15)' : 'rgba(31,41,55,0.07)'}`,
        borderRadius: 'var(--radius-md)',
        padding: '28px 24px',
        transition: 'all 0.28s ease',
        cursor: 'default',
        boxShadow: 'var(--shadow-sm)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'linear-gradient(135deg, rgba(168,0,0,0.07) 0%, rgba(168,0,0,0.02) 100%)'
        el.style.borderColor = 'rgba(168,0,0,0.22)'
        el.style.transform = 'translateY(-5px)'
        el.style.boxShadow = '0 16px 48px rgba(168,0,0,0.10)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = isHighlighted
          ? 'linear-gradient(160deg, rgba(168,0,0,0.05) 0%, rgba(168,0,0,0.01) 100%)'
          : '#fff'
        el.style.borderColor = isHighlighted ? 'rgba(168,0,0,0.15)' : 'rgba(31,41,55,0.07)'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'var(--shadow-sm)'
      }}
    >
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(168,0,0,0.10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--red)',
        marginBottom: '20px',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.15rem',
        fontWeight: 700,
        color: 'var(--black)',
        marginBottom: '12px',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '0.87rem',
        color: 'var(--gray-600)',
        lineHeight: 1.75,
        marginTop: 'auto',
      }}>
        {desc}
      </p>
    </div>
  )
}
