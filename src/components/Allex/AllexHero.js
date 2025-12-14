import "./AllexHero.css";

const features = [
  {
    number: "1",
    title: "전신 유연성",
    description:
      "팔, 손, 목, 허리 등 전신에 걸쳐 물리적 충돌과 외력을 흡수하며 자연스럽게 반응합니다.",
  },
  {
    number: "2",
    title: "인간 수준의 조작성",
    description:
      "고자유도(High-DOF) 손을 통해 정밀함, 유연성, 강도를 모두 갖춘 인간 수준의 조작 능력을 구현합니다.",
  },
  {
    number: "3",
    title: "탁월한 역구동성",
    description:
      "낮은 말단 질량, 낮은 마찰과 관성으로 시뮬레이션과 실제 간의 격차(sim-to-real gap)를 최소화합니다.",
  },
  {
    number: "4",
    title: "실환경 대응 성능",
    description:
      "섬세한 조작부터 고하중 및 고충격 작업까지 현실 세계의 다양한 작업을 수행할 수 있도록 정밀하게 설계되었습니다.",
  },
];

function AllexHero() {
  return (
    <section className="allex-hero">
      <div className="allex-hero-container">
        <div className="allex-hero-content">
          <h1 className="allex-hero-title">ALLEX</h1>
          <p className="allex-hero-subtitle">
            세상의 모든 경험을 담기 위해 설계된
            <br />
            범용 휴머노이드 로봇
          </p>
          <p className="allex-hero-description">
            ALLEX는 인간 수준의 유연성(Compliance), 기민한 조작성(Dexterity),
            그리고 탁월한 역구동성과 안정성을 결합하여 현실 세계에서 안전하고
            능동적으로 상호작용하기 위해 다음과 같은 특징을 갖추고 있습니다:
          </p>
          <div className="allex-hero-features">
            {features.map((feature) => (
              <div key={feature.number} className="allex-hero-feature">
                <span className="allex-hero-feature-number">
                  {feature.number}
                </span>
                <div className="allex-hero-feature-text">
                  <span className="allex-hero-feature-title">
                    {feature.title}{" "}
                  </span>
                  <span className="allex-hero-feature-desc">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="allex-hero-image-wrapper">
          <img
            className="allex-hero-image"
            src="/images/allex_hero.png"
            alt="ALLEX Robot"
          />
        </div>
      </div>
    </section>
  );
}

export default AllexHero;
