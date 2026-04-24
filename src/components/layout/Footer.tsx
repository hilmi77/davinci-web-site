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
        <div className="container-xl" style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-body)",
            }}
          >
            © {new Date().getFullYear()} {t("Da Vinci Board Game Cafe")}.{" "}
            {t("All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
}
