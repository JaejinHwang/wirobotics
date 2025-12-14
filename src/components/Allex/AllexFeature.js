import './AllexFeature.css';

const featureData = [
  {
    id: 1,
    label: '핵심기술 | 01',
    title: ['고자유도 순응형', '로봇 핸드'],
    highlight: (
      <>
        <strong>≤ 0.3 mm</strong> 손끝 위치 반복정밀도, <strong>40 N</strong> 손끝 힘, <strong>30+ kg</strong> 후크그립
      </>
    ),
    description: [
      '15자유도(DoF), 인간 손 크기 기반의 설계',
      '100gf 수준의 미세한 힘 감지',
      '고정밀, 고강도 제어',
    ],
    video: '/videos/allex/desc1-1.mp4',
  },
  {
    id: 2,
    label: '핵심기술 | 02',
    title: ['신규 구동 및', '제어 기술'],
    highlight: '상용 구동기 대비 마찰 1/10, 관성 1/24 수준',
    description: [
      '초저마찰, 저관성 구동기',
      '고역구동성 및 반응성',
      '통합 제어 알고리즘 탑재',
    ],
    video: '/videos/allex/desc2-1.mp4',
  },
  {
    id: 3,
    label: '핵심기능 | 03',
    title: ['경량 구조 및', '고하중 설계'],
    highlight: '팔 전체 무게 약 5 kg (구동부 ~850g), 한 손으로 3 kg 핸들링 가능',
    description: [
      '초경량 설계',
      '고하중 핸들링',
      '민첩하고 안정적인 인간 수준의 모션',
    ],
    video: '/videos/allex/allex04-1.mp4',
  },
  {
    id: 4,
    label: '핵심기능 | 04',
    title: ['전신 힘', '제어 및 상호작용'],
    highlight: null,
    description: [
      '전신 순응성',
      '안전한 힘 기반의 상호작용',
      'Sim-to-Real 격차의 최소화',
    ],
    video: '/videos/allex/allex06-1.mp4',
  },
  {
    id: 5,
    label: '핵심기능 | 05',
    title: ['고속', '통신 및 제어'],
    highlight: null,
    description: [
      '고속 EtherCAT 네트워크',
      '20 kHz 토크 제어 루프',
      '인간 수준의 적응성',
    ],
    video: '/videos/allex/allex07-1.mp4',
  },
];

function AllexFeature() {
  return (
    <section className="allex-feature">
      <div className="allex-feature-list">
        {featureData.map((feature, index) => (
          <div
            key={feature.id}
            className={`allex-feature-item ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="allex-feature-content">
              <p className="allex-feature-label">{feature.label}</p>
              <h3 className="allex-feature-title">
                {feature.title.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < feature.title.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              {feature.highlight && (
                <p className="allex-feature-highlight">{feature.highlight}</p>
              )}
              <div className="allex-feature-desc">
                {feature.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
            <div className="allex-feature-video-wrapper">
              <video
                className="allex-feature-video"
                src={feature.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllexFeature;
