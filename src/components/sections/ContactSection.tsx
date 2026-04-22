import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.11 12 19.79 19.79 0 012.04 3.37 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SOCIALS = [
  {
    href: "https://www.instagram.com/davinciboardgamecafe",
    icon: <InstagramIcon />,
    labelKey: "contact.instagram",
    handle: "@davinciboardgamecafe",
  },
  {
    href: "https://t.me/davinciboardgame",
    icon: <TelegramIcon />,
    labelKey: "contact.telegram",
    handle: "t.me/davinciboardgame",
  },
  {
    href: "https://wa.me/903122867860",
    icon: <WhatsAppIcon />,
    labelKey: "contact.whatsapp",
    handle: "+90 506 477 23 00",
  },
];

export default function ContactSection() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section
      id="contact"
      style={{
        background: "#F7F3ED",
        padding: "clamp(80px, 10vw, 130px) 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(31,41,55,0.14), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <span className="section-badge section-badge--red">
              {t("contact.badge")}
            </span>
            <span className="section-badge section-badge--dark">
              {t("location.badge")}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "var(--black)",
              lineHeight: 1.15,
            }}
          >
            {t("contact.title")}{" "}
            <span style={{ color: "var(--red)", fontStyle: "italic" }}>
              {t("contact.titleAccent")}
            </span>
          </h2>
        </motion.div>

        {/* ── Body: two columns ───────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
            gap: isMobile ? "40px" : "clamp(40px, 6vw, 88px)",
            alignItems: isMobile ? "start" : "stretch",
          }}
        >
          {/* LEFT — Contact ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            {/* Phone + Email combined block */}
            <div style={{ marginBottom: "32px" }}>
              <a
                href="tel:+903122867860"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--black)",
                  textDecoration: "none",
                  padding: "10px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--red)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--black)";
                }}
              >
                <span
                  style={{
                    color: "var(--red)",
                    display: "flex",
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                  }}
                >
                  0312 286 78 60
                </span>
              </a>

              <div
                style={{
                  height: "1px",
                  background: "var(--gray-300)",
                  margin: "4px 0",
                }}
              />

              <a
                href="mailto:info@davinciboardgame.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--gray-700)",
                  textDecoration: "none",
                  padding: "10px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--red)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--gray-700)";
                }}
              >
                <span
                  style={{
                    color: "var(--red)",
                    display: "flex",
                    flexShrink: 0,
                  }}
                >
                  <MailIcon />
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  info@davinciboardgame.com
                </span>
              </a>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "var(--gray-300)",
                marginBottom: "28px",
              }}
            />

            {/* Social links */}
            <p
              style={{
                fontSize: "0.71rem",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "var(--gray-500)",
                marginBottom: "12px",
              }}
            >
              {t("contact.followUs")}
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {SOCIALS.map(({ href, icon, labelKey, handle }) => (
                <a
                  key={labelKey}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "11px 0",
                    borderBottom: "1px solid var(--gray-200)",
                    color: "var(--gray-700)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--red)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--gray-700)";
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexShrink: 0,
                      color: "var(--gray-500)",
                    }}
                  >
                    {icon}
                  </span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>
                    {t(labelKey)}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--gray-400)",
                      marginLeft: "auto",
                    }}
                  >
                    {handle}
                  </span>
                </a>
              ))}
            </div>

            {/* Spacer — adres ile çalışma saatlerini aynı hizaya çeker */}
            <div style={{ flex: 1 }} />

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "var(--gray-200)",
                margin: "24px 0",
              }}
            />

            {/* Address */}
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--gray-500)",
                lineHeight: 1.75,
                fontStyle: "italic",
              }}
            >
              {t("location.address")}
            </p>
          </motion.div>

          {/* RIGHT — Map + Hours ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              height: "100%",
            }}
          >
            {/* Map iframe */}
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                flex: isMobile ? "none" : 1,
                height: isMobile ? "260px" : undefined,
                minHeight: isMobile ? undefined : "280px",
                boxShadow: "0 8px 40px rgba(31,41,55,0.11)",
              }}
            >
              <iframe
                title="Da Vinci Board Game Cafe Konum"
                src="https://maps.google.com/maps?q=Da+Vinci+Board+Game+Cafe+Neorama+Ankara&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Hours + CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.71rem",
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "var(--gray-500)",
                    marginBottom: "10px",
                  }}
                >
                  {t("location.hours")}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <HourLine
                    label={t("location.weekdays")}
                    hours={t("location.weekdaysHours")}
                  />
                  <HourLine
                    label={t("location.weekends")}
                    hours={t("location.weekendsHours")}
                  />
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Da+Vinci+Board+Game+Cafe+Neorama+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--red)",
                  color: "#fff",
                  padding: "13px 22px",
                  borderRadius: "100px",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 20px rgba(168,0,0,0.22)",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--red-dark)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 28px rgba(168,0,0,0.30)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--red)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(168,0,0,0.22)";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-6-8-13A8 8 0 0120 9c0 7-8 13-8 13z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
                {t("location.getDirections")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HourLine({ label, hours }: { label: string; hours: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <span
        style={{
          fontSize: "0.84rem",
          color: "var(--gray-600)",
          minWidth: "90px",
        }}
      >
        {label}
      </span>
      <span
        style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--black)" }}
      >
        {hours}
      </span>
    </div>
  );
}
