import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import useFadeIn from "../../hooks/useFadeIn";
import "../../hooks/useFadeIn.css";
import "./FeatureSection.css";

const videoSources = [
  "/videos/vision_3.1-1.mp4",
  "/videos/vision_3.2-1.mp4",
  "/videos/vision_3.3-1.mp4",
];

function FeatureSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const trackRef = useRef(null);
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const headerFade = useFadeIn();

  const extendedVideos = [
    videoSources[videoSources.length - 1],
    ...videoSources,
    videoSources[0],
  ];
  const adjustedIndex = currentIndex + 1;

  const goToPrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const currentVideo = videoRefs.current[adjustedIndex];
    if (currentVideo) {
      const handleEnded = () => {
        goToNext();
      };
      currentVideo.addEventListener("ended", handleEnded);
      return () => currentVideo.removeEventListener("ended", handleEnded);
    }
  }, [adjustedIndex]);

  useEffect(() => {
    if (currentIndex === videoSources.length) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setCurrentIndex(0);
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.8s ease-in-out";
          }
        }, 50);
      }, 800);
    } else if (currentIndex === -1) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setCurrentIndex(videoSources.length - 1);
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.8s ease-in-out";
          }
        }, 50);
      }, 800);
    }
  }, [currentIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === adjustedIndex) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [adjustedIndex]);

  const overlayLabels = t('feature.overlayLabels');
  const descriptionLines = t('feature.description').split('\n');

  return (
    <section className="feature-section">
      <div
        ref={headerFade.ref}
        className={`feature-header fade-in-element ${headerFade.isVisible ? 'visible' : ''}`}
      >
        <span className="feature-label">{t('feature.label')}</span>
        <h2 className="feature-title">{t('feature.title')}</h2>
        <p className="feature-description">
          {descriptionLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      <div className="feature-carousel">
        <div
          ref={trackRef}
          className="carousel-track"
          style={{ transform: `translateX(-${adjustedIndex * 100}%)` }}
        >
          {extendedVideos.map((src, index) => (
            <div key={index} className="carousel-slide">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="carousel-video"
                muted
                playsInline
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
        <div className="carousel-overlay">
          <div className="overlay-gradient-top" />
          <div className="overlay-gradient-bottom" />
          <div className="overlay-content">
            <p className="overlay-text-top">{t('feature.overlayTop')}</p>
            <div className="overlay-label-container">
              <button className="overlay-arrow prev" onClick={goToPrev}>
                &lt;
              </button>
              <span className="overlay-label">
                {overlayLabels[((currentIndex % videoSources.length) + videoSources.length) % videoSources.length]}
              </span>
              <button className="overlay-arrow next" onClick={goToNext}>
                &gt;
              </button>
            </div>
            <p className="overlay-text-bottom">{t('feature.overlayBottom')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
