import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import './AllexFeature.css';

function AllexFeature() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const featureData = [
    {
      id: 1,
      label: t("allexFeature.label1"),
      title: t("allexFeature.title1"),
      highlight: (
        <>
          <strong>{t("allexFeature.highlight1Strong1")}</strong>
          {t("allexFeature.highlight1Mid1")}
          <strong>{t("allexFeature.highlight1Strong2")}</strong>
          {t("allexFeature.highlight1Mid2")}
          <strong>{t("allexFeature.highlight1Strong3")}</strong>
          {t("allexFeature.highlight1End")}
        </>
      ),
      description: t("allexFeature.desc1"),
      video: '/videos/allex/desc1-1.mp4',
    },
    {
      id: 2,
      label: t("allexFeature.label2"),
      title: t("allexFeature.title2"),
      highlight: t("allexFeature.highlight2"),
      description: t("allexFeature.desc2"),
      video: '/videos/allex/desc2-1.mp4',
    },
    {
      id: 3,
      label: t("allexFeature.label3"),
      title: t("allexFeature.title3"),
      highlight: t("allexFeature.highlight3"),
      description: t("allexFeature.desc3"),
      video: '/videos/allex/allex04-1.mp4',
    },
    {
      id: 4,
      label: t("allexFeature.label4"),
      title: t("allexFeature.title4"),
      highlight: null,
      description: t("allexFeature.desc4"),
      video: '/videos/allex/allex06-1.mp4',
    },
    {
      id: 5,
      label: t("allexFeature.label5"),
      title: t("allexFeature.title5"),
      highlight: null,
      description: t("allexFeature.desc5"),
      video: '/videos/allex/allex07-1.mp4',
    },
  ];

  return (
    <section className="allex-feature">
      <div className="allex-feature-list">
        {featureData.map((feature, index) => (
          <div
            key={feature.id}
            className={`allex-feature-item ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="allex-feature-content">
              <p className="allex-feature-label">{feature.label}</p>
              <h3 className="allex-feature-title">
                {feature.title.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < feature.title.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              {feature.highlight && (
                <p className="allex-feature-highlight">{feature.highlight}</p>
              )}
              <div className="allex-feature-desc">
                {feature.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
            <div className="allex-feature-video-wrapper">
              <video
                className="allex-feature-video"
                src={feature.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllexFeature;
