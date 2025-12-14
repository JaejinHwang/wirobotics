import { useState, useEffect, useRef } from "react";
import "./FeatureSection.css";

const videoSources = [
  "/videos/vision_3.1-1.mp4",
  "/videos/vision_3.2-1.mp4",
  "/videos/vision_3.3-1.mp4",
];

const overlayLabels = ["정확한", "유연한", "목적에 부합하는"];

function FeatureSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const trackRef = useRef(null);

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

  return (
    <section className="feature-section">
      <div className="feature-header">
        <span className="feature-label">우리의 로봇은</span>
        <h2 className="feature-title">인간 친화적이면서도 고도로 유능합니다.</h2>
        <p className="feature-description">
          우리는 사람과 안전하게 협업는 것은 물론, 다양한 임무 —
          <br />
          정밀 조작부터 역동적 작업까지 수행하는 고성능·인간 친화적 로봇을 설계합니다.
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
            <p className="overlay-text-top">
              우리의 로봇은 단순히 안전하거나 친근한 수준을 넘어,
            </p>
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
            <p className="overlay-text-bottom">
              존재로서 인간이 이룰 수 있는 한계를 확장합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
