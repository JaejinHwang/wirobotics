import { Link, useParams } from "react-router-dom";
import FadeInWrapper from "../components/FadeInWrapper";
import "./CareerDetail.css";

const jobData = {
  "mechanical-design": {
    title: "로봇 설계 엔지니어",
    type: "정규직 (Full-Time)",
    location: "판교 / 서울 (R&D Center)",
    openings: "0명 (충원 시 마감)",
    sections: [
      {
        title: "위로보틱스 개요",
        content:
          "로보틱스를 다시 정의하며, 한계를 넘어, 세상을 바꾸는 여정에 함께할 당신을 찾고 있습니다.",
      },
      {
        title: "포지션 개요",
        content: `휴머노이드 로봇의 상·하체, 고자유도 로봇 핸드, 모바일 플랫폼, 리더 시스템을 포함한 프로토타입 및 양산 제품의 전체 기구 설계를 담당합니다.
이 포지션은 경량·고강성 구조물과 정밀 구동계(감속기, 텐던, 케이블, 정밀 기어 등)를 직접 설계하며, 로봇의 성능, 신뢰성, 생산성을 종합적으로 최적화하는 핵심 역할을 수행합니다.`,
      },
      {
        title: "주요 업무",
        list: [
          "휴머노이드 로봇 ALLEX의 프로토타입 및 양산 설계",
          "상·하체, 팔, 손, 목, 허리를 포함한 고자유도 메커니즘 설계",
          "경량·고강성 구조물 및 구동계 설계",
          "DFMA(Design for Manufacturing and Assembly) 기반 제조·조립 공정 최적화",
          "3D CAD 설계 및 해석 (SolidWorks, CATIA, NX 등)",
          "도면·BOM·기술 문서 작성 및 협력업체 커뮤니케이션",
          "프로토타입 제작, 조립, 테스트 및 품질 개선",
        ],
      },
      {
        title: "자격요건",
        list: [
          "구조해석(FEA), 재질 선정, 공차 설계 경험",
          "기계, 메카트로닉스, 로봇공학 등 관련 전공 학사 이상",
          "3D CAD 활용 능숙",
          "로봇 또는 정밀 메커니즘 설계 분야 10년 이상 경력",
          "DFM/DFA 및 양산 공정 설계 이해",
        ],
      },
      {
        title: "우대사항",
        list: [
          "휴머노이드·협동로봇·산업용 매니퓰레이터 설계 경험",
          "하중·토크·강성 분석을 통한 모터·감속기·케이블 등 주요 부품 사양 결정 경험",
        ],
      },
      {
        title: "지원 방법",
        content: `이메일: apply@wirobotics.com
제출서류: 이력서, 포트폴리오 (선택)
마감일: 채용시까지`,
      },
    ],
  },
};

function CareerDetail() {
  const { slug } = useParams();
  const job = jobData[slug];

  if (!job) {
    return (
      <div className="page career-detail-page">
        <div className="career-detail-container">
          <Link to="/careers" className="career-back-link">
            목차로 돌아가기
          </Link>
          <h1 className="career-detail-title">포지션을 찾을 수 없습니다</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="page career-detail-page">
      <div className="career-detail-container">
        <FadeInWrapper>
          <Link to="/careers" className="career-back-link">
            목차로 돌아가기
          </Link>

          <h1 className="career-detail-title">{job.title}</h1>

          <div className="career-detail-content">
            {/* Left Column - Job Description */}
            <div className="career-detail-left">
              {job.sections.map((section, index) => (
                <div key={index} className="career-section">
                  <h3 className="career-section-title">{section.title}</h3>
                  {section.content && (
                    <p className="career-section-text">{section.content}</p>
                  )}
                  {section.list && (
                    <ul className="career-section-list">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Job Info */}
            <div className="career-detail-right">
              <p className="career-info-item">{job.type}</p>
              <p className="career-info-item">{job.location}</p>
              <p className="career-info-item">{job.openings}</p>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}

export default CareerDetail;
