import { useEffect, useRef } from "react";
import "./HeroSection.css";

function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

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
          우리의 비전은 안전하고 인간과 공존하는 상호작용형 휴머노이드 로봇을
          통해
          <br />
          일상 속에 자연스럽게 스며들어 인간의 능력을 확장하고,
          <br />
          세상을 혁신하며 삶을 변화시키는 것입니다
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
