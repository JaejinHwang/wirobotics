import "./CompanySection.css";

function CompanySection() {
  return (
    <section className="company-section">
      <div className="company-header">
        <span className="company-label">우리는</span>
        <h2 className="company-title">세상을 경험시킵니다</h2>
        <p className="company-subtitle">
          우리는 진정한 상호작용형 휴머노이드 로봇을 만듭니다.
        </p>
      </div>

      <div className="company-video-container">
        <video className="company-video" autoPlay loop muted playsInline>
          <source src="/videos/vision_2-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="company-content">
        <p className="company-description">
          우리의 로봇은 인간처럼 세상을 물리적으로 경험합니다.
        </p>

        <div className="company-features">
          <div className="feature-item">
            <img src="/icons/1.svg" alt="" className="feature-icon" />
            <div className="feature-text">
              <span className="feature-light">힘을</span>
              <span className="feature-bold">감지하고</span>
            </div>
          </div>

          <div className="feature-item">
            <img src="/icons/2.svg" alt="" className="feature-icon" />
            <div className="feature-text">
              <span className="feature-light">접촉을</span>
              <span className="feature-bold">활용하며</span>
            </div>
          </div>

          <div className="feature-item">
            <img src="/icons/3.svg" alt="" className="feature-icon" />
            <div className="feature-text">
              <span className="feature-light">충격에</span>
              <span className="feature-bold">적응하는</span>
            </div>
          </div>
        </div>

        <p className="company-footer">
          새로운 차원의 물리 지능을 발전시키기 위해
          <br />
          운동과 의미를 연결해 나갑니다.
        </p>
      </div>
    </section>
  );
}

export default CompanySection;
