import { useTranslation } from 'react-i18next'

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/davinciboardgamecafe', label: 'Instagram' },
  { href: 'https://t.me/davinciboardgame', label: 'Telegram' },
  { href: 'https://wa.me/903122867860', label: 'WhatsApp' },
]

const NAV_LINKS = [
  { href: 'https://davinciboardgame.com/hakkimizda/', label: 'Hakkımızda' },
  { href: 'https://davinciboardgame.com/iletisim/', label: 'İletişim' },
  { href: '#about', label: 'Galeri' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{
      background: 'var(--black)',
      color: '#fff',
    }}>
      {/* Main footer body */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '56px 24px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
      }}>
        {/* Brand kolonu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', gridColumn: 'span 1' }}>
          <img
            src="/images/davinci-logo.png"
            alt="Da Vinci Board Game"
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
          />
          <p style={{
            fontSize: '0.83rem',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7,
            maxWidth: '240px',
          }}>
            Ankara'nın en büyük kutu oyunu kafe deneyimi. 500+ oyun, deneyimli ekip.
          </p>
          {/* Sosyal ikonlar */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
            {SOCIAL_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(168,0,0,0.5)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.background = 'rgba(168,0,0,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        {/* İletişim kolonu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '4px',
          }}>İletişim</h4>
          <FooterLink href="tel:+903122867860">0312 286 78 60</FooterLink>
          <FooterLink href="mailto:info@davinciboardgame.com">info@davinciboardgame.com</FooterLink>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginTop: '4px' }}>
            Neorama İş Merkezi<br />Beştepe, Ankara
          </p>
        </div>

        {/* Sayfalar kolonu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '4px',
          }}>Sayfalar</h4>
          {NAV_LINKS.map(({ href, label }) => (
            <FooterLink key={href} href={href}>{label}</FooterLink>
          ))}
        </div>

        {/* Çalışma saatleri kolonu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '4px',
          }}>Çalışma Saatleri</h4>
          <div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Hafta İçi</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>12:00 – 00:00</p>
          </div>
          <div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Hafta Sonu</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>10:00 – 00:00</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 24px',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.22)', fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} {t('footer.madeWith')}. {t('footer.rights')}
          </p>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--red-light)',
              display: 'inline-block',
              opacity: 0.7,
            }} />
            <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-body)' }}>
              Da Vinci Board Game Cafe, Ankara
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.45)',
        transition: 'color 0.2s ease',
        fontFamily: 'var(--font-body)',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
    >
      {children}
    </a>
  )
}
