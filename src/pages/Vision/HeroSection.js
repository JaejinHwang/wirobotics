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
          revolutionize the world and transform lives by
          <br />
          building safe, human-coexistent, interactive robots that
          <br />
          seamlessly integrate into daily life and enhance human capabilities.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
