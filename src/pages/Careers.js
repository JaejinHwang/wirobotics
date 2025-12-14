import { Link } from 'react-router-dom';
import FadeInWrapper from '../components/FadeInWrapper';
import './Careers.css';

const positions = [
  { id: 1, title: '로봇 설계 엔지니어', slug: 'mechanical-design' },
  { id: 2, title: '전장 하드웨어 엔지니어', slug: 'electronics-hardware' },
  { id: 3, title: '로봇 소프트웨어 엔지니어', slug: 'robot-software' },
  { id: 4, title: '로봇 AI모델링 엔지니어', slug: 'ai-modeling' },
  { id: 5, title: '로봇 제어 엔지니어', slug: 'robot-control' },
  { id: 6, title: '로봇 통신 및 펌웨어 엔지니어', slug: 'firmware' },
];

function Careers() {
  return (
    <div className="page careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <img
          src="/images/career_hero.png"
          alt="Career Hero"
          className="careers-hero-image"
        />
        <div className="careers-hero-gradient" />
      </section>

      {/* Content Section */}
      <section className="careers-content">
        {/* Intro */}
        <FadeInWrapper>
          <div className="careers-intro">
            <h1 className="careers-title">
              로보틱스를 다시 정의하며, 한계를 넘어, 세상을 바꾸는 여정<br />
              <span className="careers-title-light">그 여정에 함께할 당신을 찾고 있습니다.</span>
            </h1>
            <div className="careers-description">
              <p>로보틱스와 AI — 오랫동안 나란히 진화해온 두 축이 이제 하나로 맞물리며, 혁신의 '빅뱅'을 일으키고 있습니다.</p>
              <p>우리의 비전은 원대하고, 미션은 담대하며, 우리가 가진 기술의 잠재력은 한계가 없습니다. 우리는 단순히 '직원'을 찾지 않습니다.</p>
              <p>상상을 현실로 바꾸는 사람들 — 꿈을 이루는 데 목마른 Builders, 늘 창조적 생각을 하는 사상가, 몽상으로 그치지 않는 실행하는 실천적 인재를 찾습니다.</p>
              <p>기구 설계(Mechanical Design), 전장(Electronics), 제어(Control), 소프트웨어(Software), AI —<br />이 모든 영역에서 함께 로보틱스의 다음 시대를 만들어갈 당신을 기다립니다.</p>
            </div>
          </div>
        </FadeInWrapper>

        {/* Positions */}
        <FadeInWrapper delay={200}>
          <div className="careers-positions">
            {positions.map((position) => (
              <Link
                key={position.id}
                to={`/career/${position.slug}`}
                className="careers-position-item"
              >
                <h2 className="careers-position-title">{position.title}</h2>
                <img src="/icons/chevron.svg" alt="" className="careers-position-chevron" />
              </Link>
            ))}
            <Link to="/career/other" className="careers-position-item contact">
              <h2 className="careers-position-title">
                다른 역할로 기여할 수 있다고 생각하시나요? 자유롭게 연락주세요.
              </h2>
            </Link>
          </div>
        </FadeInWrapper>
      </section>
    </div>
  );
}

export default Careers;
