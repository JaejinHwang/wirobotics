import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import useFadeIn from "../../hooks/useFadeIn";
import "../../hooks/useFadeIn.css";
import "./AllexHero.css";

function AllexHero() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const contentFade = useFadeIn({ delay: 100 });

  const features = [
    {
      number: "1",
      title: t("allexHero.feature1Title"),
      description: t("allexHero.feature1Desc"),
    },
    {
      number: "2",
      title: t("allexHero.feature2Title"),
      description: t("allexHero.feature2Desc"),
    },
    {
      number: "3",
      title: t("allexHero.feature3Title"),
      description: t("allexHero.feature3Desc"),
    },
    {
      number: "4",
      title: t("allexHero.feature4Title"),
      description: t("allexHero.feature4Desc"),
    },
  ];

  const subtitleLines = t("allexHero.subtitle").split("\n");

  return (
    <section className="allex-hero">
      <div className="allex-hero-container">
        <div
          ref={contentFade.ref}
          className={`allex-hero-content fade-in-element ${contentFade.isVisible ? 'visible' : ''}`}
        >
          <h1 className="allex-hero-title">ALLEX</h1>
          <p className="allex-hero-subtitle">
            {subtitleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < subtitleLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="allex-hero-description">{t("allexHero.description")}</p>
          <div className="allex-hero-features">
            {features.map((feature) => (
              <div key={feature.number} className="allex-hero-feature">
                <span className="allex-hero-feature-number">
                  {feature.number}
                </span>
                <div className="allex-hero-feature-text">
                  <span className="allex-hero-feature-title">
                    {feature.title}{" "}
                  </span>
                  <span className="allex-hero-feature-desc">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="allex-hero-image-wrapper">
          <img
            className="allex-hero-image"
            src="/images/allex_hero.png"
            alt="ALLEX Robot"
          />
        </div>
      </div>
    </section>
  );
}

export default AllexHero;
