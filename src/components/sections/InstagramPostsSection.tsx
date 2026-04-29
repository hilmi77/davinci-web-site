import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useInstagramPosts, type InstagramPost } from '../../utils/api/instagramPosts/instagramPosts'

function resolvePostImage(post: InstagramPost) {
  return post.thumbnail_url ?? post.media_url ?? ''
}

function formatDate(value?: string, locale = 'tr-TR') {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function shortCaption(caption?: string | null) {
  if (!caption) return ''
  return caption.length > 84 ? `${caption.slice(0, 84).trim()}...` : caption
}

export default function InstagramPostsSection() {
  const { t, i18n } = useTranslation()
  const { data, isLoading, isError } = useInstagramPosts(8)
  const posts = useMemo(() => (data ?? []).filter((post) => resolvePostImage(post)), [data])
  const loopPosts = useMemo(() => [...posts, ...posts], [posts])

  return (
    <section className="section-base section-pad instagram-feed-section">
      <div className="container-xl">
        <div className="instagram-feed-header">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '999px',
              backgroundColor: '#fff',
              border: '1px solid rgba(17, 24, 39, 0.12)',
              color: '#374151',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.01em',
            }}
          >
            <img
              src="/images/instagram/instagram-logo.png"
              alt="Instagram"
              style={{
                width: '16px',
                height: '16px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            @davinciboardgamecafe
          </span>
          <h2>{t('Latest Posts')}</h2>
        </div>

        {isLoading && (
          <div className="instagram-skeleton-grid" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="instagram-skeleton-card" key={index}>
                <div className="instagram-skeleton-image instagram-shimmer" />
                <div className="instagram-skeleton-body">
                  <div className="instagram-skeleton-line instagram-shimmer" />
                  <div className="instagram-skeleton-line instagram-skeleton-line-short instagram-shimmer" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="instagram-feed-state">
            <p>{t('Instagram content could not be loaded right now.')}</p>
          </div>
        )}

        {!isLoading && !isError && posts.length === 0 && (
          <div className="instagram-feed-state">
            <p>{t('No posts to display yet.')}</p>
          </div>
        )}

        {!isLoading && !isError && posts.length > 0 && (
          <div className="instagram-feed-marquee">
            <div className="instagram-feed-track" aria-label="Instagram post listesi">
              {loopPosts.map((post, index) => {
                const image = resolvePostImage(post)
                const caption = shortCaption(post.caption)
                const dateText = formatDate(post.timestamp, i18n.language === 'tr' ? 'tr-TR' : 'en-US')
                return (
                  <a
                    key={`${post.id}-${index}`}
                    className="instagram-feed-card"
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('Open post on Instagram')}
                  >
                    <div className="instagram-feed-media">
                      <img className="instagram-feed-media-image" src={image} alt={caption || 'Instagram'} loading="lazy" />
                    </div>
                    <div className="instagram-feed-card-body">
                      <p>{caption}</p>
                      {dateText && <small>{dateText}</small>}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
