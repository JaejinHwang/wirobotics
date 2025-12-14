import { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import "./HeroSection.css";

function HeroSection() {
  const videoRef = useRef(null);
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const heroText = t("hero.text").split("\n");

  return (
    <section className="hero-section">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/vision_1-1.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <img src="/images/logo.png" alt="WIRobotics" className="hero-logo" />
        <p className="hero-text">
          {heroText.map((line, index) => (
            <span key={index}>
              {line}
              {index < heroText.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
