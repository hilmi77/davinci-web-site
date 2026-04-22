import { useTranslation } from "react-i18next";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/davinciboardgamecafe",
    label: "Instagram",
  },
  { href: "https://t.me/davinciboardgame", label: "Telegram" },
  { href: "https://wa.me/903122867860", label: "WhatsApp" },
];

const NAV_LINKS = [
  { href: "https://davinciboardgame.com/hakkimizda/", label: "Hakkımızda" },
  { href: "https://davinciboardgame.com/iletisim/", label: "İletişim" },
  { href: "#about", label: "Galeri" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        background: "var(--black)",
        color: "#fff",
      }}
    >
      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.22)",
              fontFamily: "var(--font-body)",
            }}
          >
            © {new Date().getFullYear()} {t("footer.madeWith")}.{" "}
            {t("footer.rights")}
          </p>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--red-light)",
                display: "inline-block",
                opacity: 0.7,
              }}
            />
            <span
              style={{
                fontSize: "0.76rem",
                color: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-body)",
              }}
            >
              Da Vinci Board Game Cafe, Ankara
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        fontSize: "0.85rem",
        color: "rgba(255,255,255,0.45)",
        transition: "color 0.2s ease",
        fontFamily: "var(--font-body)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "rgba(255,255,255,0.85)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(255,255,255,0.45)";
      }}
    >
      {children}
    </a>
  );
}
