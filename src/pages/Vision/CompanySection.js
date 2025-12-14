import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import "./CompanySection.css";

function CompanySection() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const footerText = t('company.footer').split('\n');

  return (
    <section className="company-section">
      <div className="company-header">
        <span className="company-label">{t('company.label')}</span>
        <h2 className="company-title">{t('company.title')}</h2>
        <p className="company-subtitle">{t('company.subtitle')}</p>
      </div>

      <div className="company-video-container">
        <video className="company-video" autoPlay loop muted playsInline>
          <source src="/videos/vision_2-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="company-content">
        <p className="company-description">{t('company.description')}</p>

        <div className="company-features">
          <div className="feature-item">
            <img src="/icons/1.svg" alt="" className="feature-icon" />
            <div className="feature-text">
              <span className="feature-light">{t('company.feature1Light')}</span>
              <span className="feature-bold">{t('company.feature1Bold')}</span>
            </div>
          </div>

          <div className="feature-item">
            <img src="/icons/2.svg" alt="" className="feature-icon" />
            <div className="feature-text">
              <span className="feature-light">{t('company.feature2Light')}</span>
              <span className="feature-bold">{t('company.feature2Bold')}</span>
            </div>
          </div>

          <div className="feature-item">
            <img src="/icons/3.svg" alt="" className="feature-icon" />
            <div className="feature-text">
              <span className="feature-light">{t('company.feature3Light')}</span>
              <span className="feature-bold">{t('company.feature3Bold')}</span>
            </div>
          </div>
        </div>

        <p className="company-footer">
          {footerText.map((line, index) => (
            <span key={index}>
              {line}
              {index < footerText.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default CompanySection;
