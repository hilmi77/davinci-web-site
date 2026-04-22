import { useTranslation } from "react-i18next";

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
