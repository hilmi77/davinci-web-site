import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      style={{
        background: 'var(--section-3)',
        padding: 'clamp(80px, 10vw, 130px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(rgba(31,41,55,0.05) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      {/* Red accent line top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--red), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <span className="section-badge section-badge--red" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            {t('contact.badge')}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--black)',
            lineHeight: 1.15,
          }}>
            {t('contact.title')}{' '}
            <span style={{ color: 'var(--red)', fontStyle: 'italic' }}>{t('contact.titleAccent')}</span>
          </h2>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {/* Phone */}
          <AnimatedSection delay={0.1}>
            <ContactCard
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>}
              label={t('contact.phone')}
              value="0312 286 78 60"
              href="tel:+903122867860"
            />
          </AnimatedSection>

          {/* Email */}
          <AnimatedSection delay={0.15}>
            <ContactCard
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
              label={t('contact.email')}
              value="info@davinciboardgame.com"
              href="mailto:info@davinciboardgame.com"
            />
          </AnimatedSection>

          {/* Social */}
          <AnimatedSection delay={0.2}>
            <div style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 'var(--radius-md)',
              padding: '28px 24px',
              boxShadow: 'var(--shadow-sm)',
              height: '100%',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255,209,102,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--yellow-dark)',
                marginBottom: '16px',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
              </div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gray-500)', textTransform: 'uppercase', marginBottom: '16px' }}>
                {t('contact.social')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <SocialLink
                  href="https://www.instagram.com/davinciboardgamecafe"
                  icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                  label={t('contact.instagram')}
                />
                <SocialLink
                  href="https://t.me/davinciboardgame"
                  icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>}
                  label={t('contact.telegram')}
                />
                <SocialLink
                  href="https://wa.me/903122867860"
                  icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
                  label={t('contact.whatsapp')}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href }: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 'var(--radius-md)',
        padding: '28px 24px',
        transition: 'all 0.25s ease',
        color: 'inherit',
        boxShadow: 'var(--shadow-sm)',
        height: '100%',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(168,0,0,0.04)'
        el.style.borderColor = 'rgba(168,0,0,0.18)'
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 12px 40px rgba(168,0,0,0.10)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = '#fff'
        el.style.borderColor = 'rgba(0,0,0,0.07)'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'var(--shadow-sm)'
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(168,0,0,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--red)',
        marginBottom: '16px',
      }}>
        {icon}
      </div>
      <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gray-500)', textTransform: 'uppercase', marginBottom: '8px' }}>
        {label}
      </p>
      <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--black)' }}>{value}</p>
    </a>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 12px',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--gray-700)',
        fontSize: '0.88rem',
        fontWeight: 500,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(168,0,0,0.06)'
        el.style.color = 'var(--red)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'transparent'
        el.style.color = 'var(--gray-700)'
      }}
    >
      {icon}
      {label}
    </a>
  )
}
