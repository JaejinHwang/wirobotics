import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <span className="contact-label">위로보틱스는</span>
        <h2 className="contact-title">
          휴머노이드 로봇의
          <br />
          새로운 패러다임을
          <br />
          정의합니다.
        </h2>
        <div className="contact-description">
          <p>
            우리는 기존 상용 기술의 한계를 넘어선,
            <br />
            전혀 새로운 휴머노이드 로봇의 패러다임을 정의합니다.
          </p>
          <p>
            점진적인 개선에 머물지 않고,
            <br />
            진정한 인간 수준의 능력으로 도약하기 위한
            <br />
            근본적인 변화를 이끌어갑니다.
          </p>
        </div>
        <div className="contact-buttons">
          <a href="/product" className="contact-button">
            <span>
              우리의 로봇, <strong>ALLEX</strong>를 살펴보세요.
            </span>
            <span className="button-arrow">&gt;</span>
          </a>
          <a href="/careers" className="contact-button">
            <span>
              <strong>WIRobotics</strong>에 합류하세요.
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
