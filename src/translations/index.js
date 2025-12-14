const translations = {
  ko: {
    // HeroSection
    hero: {
      text: "우리의 비전은 안전하고 인간과 공존하는 상호작용형 휴머노이드 로봇을 통해\n일상 속에 자연스럽게 스며들어 인간의 능력을 확장하고,\n세상을 혁신하며 삶을 변화시키는 것입니다",
    },
    // CompanySection
    company: {
      label: "우리는",
      title: "세상을 경험시킵니다",
      subtitle: "우리는 진정한 상호작용형 휴머노이드 로봇을 만듭니다.",
      description: "우리의 로봇은 인간처럼 세상을 물리적으로 경험합니다.",
      feature1Light: "힘을",
      feature1Bold: "감지하고",
      feature2Light: "접촉을",
      feature2Bold: "활용하며",
      feature3Light: "충격에",
      feature3Bold: "적응하는",
      footer:
        "새로운 차원의 물리 지능을 발전시키기 위해\n운동과 의미를 연결해 나갑니다.",
    },
    // FeatureSection
    feature: {
      label: "우리의 로봇은",
      title: "인간 친화적이면서도 고도로 유능합니다.",
      description:
        "우리는 사람과 안전하게 협업는 것은 물론, 다양한 임무 —\n정밀 조작부터 역동적 작업까지 수행하는 고성능·인간 친화적 로봇을 설계합니다.",
      overlayLabels: ["정확한", "유연한", "목적에 부합하는"],
      overlayTop: "우리의 로봇은 단순히 안전하거나 친근한 수준을 넘어,",
      overlayBottom: "존재로서 인간이 이룰 수 있는 한계를 확장합니다.",
    },
    // ContactSection
    contact: {
      label: "위로보틱스는",
      title: "휴머노이드 로봇의\n새로운 패러다임을\n정의합니다.",
      description1:
        "우리는 기존 상용 기술의 한계를 넘어선,\n전혀 새로운 휴머노이드 로봇의 패러다임을 정의합니다.",
      description2:
        "점진적인 개선에 머물지 않고,\n진정한 인간 수준의 능력으로 도약하기 위한\n근본적인 변화를 이끌어갑니다.",
      buttonAllex: "우리의 로봇, ",
      buttonAllexBold: "ALLEX",
      buttonAllexEnd: "를 살펴보세요.",
      buttonCareers: "에 합류하세요.",
    },
  },
  en: {
    // HeroSection
    hero: {
      text: "revolutionize the world and transform lives by\nbuilding safe, human-coexistent, interactive robots that\nseamlessly integrate into daily life and enhance human capabilities",
    },
    // CompanySection
    company: {
      label: "WE DESIGN",
      title: "Robots that experience the world",
      subtitle:
        "We create the next generation of truly interactive humanoid robots.",
      description:
        "Our robot physically experience the world in human-like ways,",
      feature1Light: "Sensing",
      feature1Bold: "force",
      feature2Light: "Leveraging",
      feature2Bold: "contact",
      feature3Light: "Adapting",
      feature3Bold: "to impact",
      footer:
        "developing a new dimension of physical Intelligence that\nconnects motion with meaning.",
    },
    // FeatureSection
    feature: {
      label: "OUR ROBOT",
      title: "Human-friendly yet Highly Capable",
      description:
        "We design robots that safely collaborate with people and perform diverse tasks —\nfrom precise manipulation and gentle interaction to dynamic, demanding operations.",
      overlayLabels: ["Dexterity", "Flexible", "Purpose-Driven"],
      overlayTop:
        "Our robots go far beyond being simply safe or friendly — they embody",
      overlayBottom: " expanding what humans can achieve.",
    },
    // ContactSection
    contact: {
      label: "WIRobotics",
      title: "Defining a\nNew Paradigm of\nHumanoid Robots",
      description1:
        "We define a new paradigm of humanoid robots that\nwas never possible with off-the-shelf technologies.",
      description2:
        "Our approach breaks away from incremental improvement,\nmarking a fundamental leap \ntoward truly human-like capability.",
      buttonAllex: "Look around our robot, ",
      buttonAllexBold: "ALLEX",
      buttonAllexEnd: "",
      buttonCareers: "Join our team,",
    },
  },
};

export function getTranslation(language, key) {
  const keys = key.split(".");
  let result = translations[language];
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      return key;
    }
  }
  return result;
}

export function useTranslation() {
  return { t: getTranslation, translations };
}

export default translations;
