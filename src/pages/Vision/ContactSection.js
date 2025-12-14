import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import "./ContactSection.css";

function ContactSection() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const titleLines = t('contact.title').split('\n');
  const desc1Lines = t('contact.description1').split('\n');
  const desc2Lines = t('contact.description2').split('\n');

  return (
    <section className="contact-section">
      <div className="contact-content">
        <span className="contact-label">{t('contact.label')}</span>
        <h2 className="contact-title">
          {titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="contact-description">
          <p>
            {desc1Lines.map((line, index) => (
              <span key={index}>
                {line}
                {index < desc1Lines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p>
            {desc2Lines.map((line, index) => (
              <span key={index}>
                {line}
                {index < desc2Lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
        <div className="contact-buttons">
          <a href="/allex" className="contact-button">
            <span>
              {t('contact.buttonAllex')}<strong>{t('contact.buttonAllexBold')}</strong>{t('contact.buttonAllexEnd')}
            </span>
            <span className="button-arrow">&gt;</span>
          </a>
          <a href="/careers" className="contact-button">
            <span>
              {language === 'ko' ? (
                <><strong>WIRobotics</strong>{t('contact.buttonCareers')}</>
              ) : (
                <>{t('contact.buttonCareers')}<strong>WIRobotics</strong>.</>
              )}
            </span>
            <span className="button-arrow">&gt;</span>
          </a>
        </div>
      </div>
      <div className="contact-video-container">
        <video className="contact-video" autoPlay loop muted playsInline>
          <source src="/videos/vision_4-1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default ContactSection;
