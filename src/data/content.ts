import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Clock3,
  Globe2,
  Layers3,
  MessageSquareMore,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const stats = [
  { label: "핵심 서비스", value: "4개" },
  { label: "전문 영역", value: "Brand · Media · Content" },
  { label: "운영 채널", value: "Meta · Google · YouTube" },
  { label: "업데이트", value: "Newsroom 운영" },
];

export const features = [
  {
    icon: Building2,
    title: "브랜드 전략",
    desc: "브랜드의 방향과 메시지를 정리하고 시장에서 어떤 인상으로 기억될지 설계합니다.",
  },
  {
    icon: BriefcaseBusiness,
    title: "퍼포먼스 광고",
    desc: "검색, 디스플레이, 소셜 광고를 채널별로 운영하며 예산과 성과를 함께 관리합니다.",
  },
  {
    icon: Layers3,
    title: "콘텐츠 제작",
    desc: "브랜드 필름, 숏폼, 배너, 소셜 콘텐츠까지 캠페인에 필요한 크리에이티브를 제작합니다.",
  },
  {
    icon: MessageSquareMore,
    title: "뉴스룸 운영",
    desc: "캠페인 소식과 브랜드 인사이트를 꾸준히 공유하며 회사의 움직임을 지속적으로 전합니다.",
  },
];

export const valuePills = [
  "브랜드 전략",
  "퍼포먼스 광고",
  "콘텐츠 제작",
  "캠페인 운영",
  "뉴스룸",
  "문의",
];

export const clientLogos = [
  "LUMEN",
  "ARC COFFEE",
  "NOVA MOBILITY",
  "FLO LINE",
  "MOTION LAB",
  "RE:TAIL",
  "BLOOM",
  "AER STUDIO",
];

export const steps = [
  {
    no: "01",
    title: "브랜드 진단",
    text: "브랜드가 지금 어떤 인상으로 읽히는지 확인하고, 더 선명하게 전달할 핵심 메시지를 찾습니다.",
  },
  {
    no: "02",
    title: "캠페인 설계",
    text: "목표, 타깃, 채널, 예산, 콘텐츠 흐름을 하나의 전략으로 묶어 실행 방향을 정리합니다.",
  },
  {
    no: "03",
    title: "제작 및 운영",
    text: "영상, 배너, 카피, 랜딩 메시지를 정리하고 매체 집행까지 연결해 일관된 흐름을 만듭니다.",
  },
  {
    no: "04",
    title: "리포트와 확장",
    text: "캠페인 결과를 분석하고 다음 운영에 필요한 인사이트를 도출해 장기적인 브랜드 성장으로 연결합니다.",
  },
];

export const showcaseViews = [
  {
    id: "brand",
    label: "브랜드 캠페인",
    title: "브랜드가 시장에서 어떤 인상으로 기억될지 먼저 설계합니다.",
    description:
      "런칭 시점의 메시지, 키비주얼, 채널 톤을 일관되게 맞춰 브랜드의 첫 인상을 만듭니다.",
    icon: Building2,
    metrics: [
      { label: "핵심 메시지", value: "3축", detail: "브랜드 방향성 정리" },
      { label: "런칭 채널", value: "5개", detail: "온드/페이드 채널 포함" },
      { label: "캠페인 기간", value: "6주", detail: "기획부터 런칭까지" },
    ],
    highlights: [
      "브랜드 포지셔닝과 메시지를 한 방향으로 정리합니다.",
      "키비주얼과 카피 톤을 일관되게 맞춰 첫 인상을 만듭니다.",
      "런칭 이후 운영까지 고려한 캠페인 흐름을 함께 설계합니다.",
    ],
    timeline: [
      { time: "Audit", title: "브랜드 진단 및 방향 설정", state: "전략" },
      { time: "Create", title: "키비주얼과 핵심 카피 개발", state: "제작" },
      { time: "Launch", title: "채널별 런칭 집행", state: "오픈" },
    ],
    checklist: [
      { label: "브랜드 메시지", status: "READY" },
      { label: "키비주얼 방향", status: "수립" },
      { label: "런칭 플랜", status: "진행 중" },
    ],
  },
  {
    id: "performance",
    label: "퍼포먼스 운영",
    title: "데이터를 읽고 예산의 효율을 높이는 광고를 운영합니다.",
    description:
      "채널별 성과와 반응을 분석해 더 적절한 예산 배분과 메시지 테스트를 이어갑니다.",
    icon: ClipboardCheck,
    metrics: [
      { label: "운영 채널", value: "4개", detail: "검색 · 소셜 · 영상 · 디스플레이" },
      { label: "리포트 주기", value: "주간", detail: "성과와 인사이트 공유" },
      { label: "테스트 단위", value: "다중", detail: "소재 · 카피 · 타깃" },
    ],
    highlights: [
      "성과 중심으로 예산과 채널을 재배분합니다.",
      "광고 소재와 메시지를 지속적으로 테스트합니다.",
      "숫자만이 아니라 다음 액션이 보이는 리포트를 만듭니다.",
    ],
    timeline: [
      { time: "Monitor", title: "채널 성과 모니터링", state: "운영" },
      { time: "Optimize", title: "예산과 소재 최적화", state: "개선" },
      { time: "Report", title: "주간 리포트 공유", state: "리포트" },
    ],
    checklist: [
      { label: "채널 운영", status: "4개" },
      { label: "소재 테스트", status: "진행 중" },
      { label: "주간 리포트", status: "발행" },
    ],
  },
  {
    id: "content",
    label: "콘텐츠 제작",
    title: "브랜드의 무드가 꾸준히 이어지도록 콘텐츠를 제작합니다.",
    description:
      "영상과 소셜 콘텐츠가 단발성으로 끝나지 않도록 캠페인 맥락 안에서 일관된 결과물을 만듭니다.",
    icon: Workflow,
    metrics: [
      { label: "콘텐츠 형식", value: "Video · Shortform · Banner", detail: "제작 범위 요약" },
      { label: "작업 흐름", value: "기획 · 제작 · 배포", detail: "원스톱 진행" },
      { label: "운영 강도", value: "상시", detail: "캠페인 일정 연동" },
    ],
    highlights: [
      "브랜드 무드와 채널 특성에 맞는 콘텐츠를 제작합니다.",
      "영상과 배너, 숏폼을 하나의 캠페인 감도로 맞춥니다.",
      "제작 이후 배포와 운영까지 고려해 결과물을 설계합니다.",
    ],
    timeline: [
      { time: "Plan", title: "콘텐츠 콘셉트 기획", state: "기획" },
      { time: "Make", title: "촬영/디자인/편집 제작", state: "제작" },
      { time: "Distribute", title: "채널별 배포 운영", state: "배포" },
    ],
    checklist: [
      { label: "콘텐츠 유형", status: "3+" },
      { label: "캠페인 무드", status: "유지" },
      { label: "배포 일정", status: "연동" },
    ],
  },
  {
    id: "board",
    label: "뉴스룸",
    title: "캠페인 소식과 브랜드 인사이트를 꾸준히 전합니다.",
    description:
      "새로운 프로젝트, 최근 작업, 브랜드에 대한 생각을 정기적으로 공유하며 회사의 방향성을 보여줍니다.",
    icon: Globe2,
    metrics: [
      { label: "카테고리", value: "3개", detail: "공지 · 캠페인 · 인사이트" },
      { label: "업데이트 주기", value: "정기", detail: "새로운 소식 지속 발행" },
      { label: "콘텐츠 축적", value: "지속", detail: "브랜드 자산으로 축적" },
    ],
    highlights: [
      "회사 소식과 캠페인 결과를 꾸준히 공유합니다.",
      "브랜드에 대한 생각과 인사이트를 기록합니다.",
      "회사의 현재 움직임이 자연스럽게 드러나도록 운영합니다.",
    ],
    timeline: [
      { time: "Notice", title: "회사 공지와 업데이트", state: "소식" },
      { time: "Campaign", title: "최근 캠페인 리뷰", state: "사례" },
      { time: "Insight", title: "브랜드 인사이트 발행", state: "기록" },
    ],
    checklist: [
      { label: "공지사항", status: "ON" },
      { label: "캠페인 리뷰", status: "ON" },
      { label: "인사이트", status: "READY" },
    ],
  },
];

export const useCases = [
  {
    title: "브랜드 런칭",
    subtitle: "새로운 브랜드의 메시지와 첫 인상을 정교하게 만들어야 할 때",
    icon: Building2,
  },
  {
    title: "퍼포먼스 운영",
    subtitle: "검색, 소셜, 디스플레이 광고를 성과 중심으로 운영해야 할 때",
    icon: ShieldCheck,
  },
  {
    title: "콘텐츠 브랜딩",
    subtitle: "영상과 소셜 콘텐츠를 브랜드 자산처럼 꾸준히 쌓아가고 싶을 때",
    icon: BarChart3,
  },
];

export const caseStudies = [
  {
    category: "Brand Campaign",
    client: "LUMEN SKIN",
    title: "런칭 메시지부터 영상, 디지털 광고까지 하나의 톤으로 연결했습니다.",
    summary:
      "신규 스킨케어 브랜드 런칭을 위해 브랜드 메시지, 키비주얼, 숏폼 콘텐츠, 디지털 광고를 하나의 감도로 설계했습니다.",
    services: ["브랜드 전략", "캠페인 기획", "브랜드 필름", "Meta Ads"],
    metrics: [
      { label: "런칭 6주 도달", value: "320만+" },
      { label: "브랜드 검색량", value: "+182%" },
      { label: "영상 완주율", value: "41%" },
    ],
  },
  {
    category: "Performance",
    client: "NOVA MOBILITY",
    title: "채널 구조를 재정비해 성과를 읽기 쉬운 운영 체계로 전환했습니다.",
    summary:
      "검색, 소셜, 디스플레이 캠페인을 분산 운영하던 구조를 정리하고 예산 재배분과 소재 테스트 체계를 새로 설계했습니다.",
    services: ["퍼포먼스 광고", "리포트 설계", "소재 테스트"],
    metrics: [
      { label: "전환 효율", value: "+38%" },
      { label: "CPA", value: "-27%" },
      { label: "주간 리포트", value: "정착" },
    ],
  },
  {
    category: "Content",
    client: "ARC COFFEE",
    title: "시즌 캠페인을 중심으로 브랜드 무드가 이어지는 콘텐츠를 제작했습니다.",
    summary:
      "시즌 한정 메뉴 프로모션을 위해 숏폼, 매장 비주얼, 배너, SNS 콘텐츠를 통합된 톤으로 제작했습니다.",
    services: ["콘텐츠 제작", "숏폼 영상", "비주얼 디자인"],
    metrics: [
      { label: "콘텐츠 발행", value: "24건" },
      { label: "저장/공유", value: "+64%" },
      { label: "프로모션 참여", value: "+29%" },
    ],
  },
];

export const supportHighlights = [
  {
    icon: Clock3,
    title: "전략 중심 접근",
    desc: "브랜드가 어떤 장면에서 기억되어야 하는지 먼저 정의하고 그에 맞는 실행을 설계합니다.",
  },
  {
    icon: Workflow,
    title: "실행 밀도",
    desc: "전략, 제작, 운영이 끊기지 않도록 한 팀 안에서 빠르고 촘촘하게 움직입니다.",
  },
  {
    icon: MessageSquareMore,
    title: "지속적인 기록",
    desc: "캠페인이 끝난 뒤에도 소식과 인사이트를 남기며 브랜드의 흐름을 이어갑니다.",
  },
];

export const faqItems = [
  {
    question: "어떤 브랜드와 가장 잘 맞나요?",
    answer:
      "브랜드 런칭이 필요하거나, 퍼포먼스 광고와 콘텐츠 제작을 함께 운영해야 하는 브랜드와 특히 잘 맞습니다.",
  },
  {
    question: "주로 어떤 업무를 함께 하나요?",
    answer:
      "브랜드 전략 수립, 광고 운영, 콘텐츠 제작, 캠페인 리포트, 뉴스룸 운영까지 브랜드가 시장과 만나는 전 과정을 함께합니다.",
  },
  {
    question: "뉴스룸에는 어떤 내용을 올리나요?",
    answer:
      "최근 캠페인 소식, 브랜드 인사이트, 업계 트렌드, 프로젝트 비하인드처럼 회사의 관점이 드러나는 콘텐츠를 올립니다.",
  },
  {
    question: "협업은 어떤 방식으로 진행되나요?",
    answer:
      "브랜드 목표를 함께 정리한 뒤 전략, 제작, 운영 단계를 순차적으로 진행하며 정기 리포트와 피드백으로 다음 액션을 맞춥니다.",
  },
];

export const boardCategories = [
  {
    id: "notice",
    label: "공지사항",
    description: "회사 소식과 기본 공지를 전하는 공간입니다.",
    posts: [
      {
        title: "2026 상반기 캠페인 쇼케이스 공개",
        summary: "상반기 주요 브랜드 작업과 크리에이티브 결과물을 뉴스룸에 정리했습니다.",
        date: "2026.03.08",
        tag: "안내",
        pinned: true,
      },
      {
        title: "브랜드 비주얼 가이드 업데이트",
        summary: "메인 비주얼과 서비스 메시지를 최근 방향에 맞춰 정리했습니다.",
        date: "2026.02.28",
        tag: "업데이트",
      },
      {
        title: "뉴스룸 운영 시작",
        summary: "캠페인 소식과 브랜드 인사이트를 정기적으로 전하는 페이지를 열었습니다.",
        date: "2026.02.17",
        tag: "Newsroom",
      },
    ],
  },
  {
    id: "campaign",
    label: "캠페인 소식",
    description: "최근 프로젝트와 운영 소식을 공유하는 공간입니다.",
    posts: [
      {
        title: "신규 브랜드 런칭 캠페인 티저 공개",
        summary: "브랜드 필름과 숏폼, 런칭 메시지를 하나의 캠페인으로 묶어 공개했습니다.",
        date: "2026.03.03",
        tag: "캠페인",
        pinned: true,
      },
      {
        title: "퍼포먼스 광고 운영 리포트 발행",
        summary: "검색과 소셜 채널 운영 데이터를 바탕으로 다음 운영 방향을 제안했습니다.",
        date: "2026.02.24",
        tag: "리포트",
      },
      {
        title: "브랜드 콘텐츠 제작 사례 추가",
        summary: "영상과 소셜 콘텐츠를 함께 전개한 최근 작업을 뉴스룸에 반영했습니다.",
        date: "2026.02.14",
        tag: "콘텐츠",
      },
    ],
  },
  {
    id: "insight",
    label: "인사이트",
    description: "브랜드와 광고에 대한 생각을 정리하는 공간입니다.",
    posts: [
      {
        title: "브랜드 메시지는 왜 더 짧아져야 하는가",
        summary: "첫 화면 문장을 정리할 때 무엇을 남기고 무엇을 덜어낼지에 대한 생각을 정리했습니다.",
        date: "2026.03.01",
        tag: "브랜딩",
        pinned: true,
      },
      {
        title: "소셜 광고 소재는 어떻게 실험해야 할까",
        summary: "같은 메시지도 포맷과 길이에 따라 반응이 달라지기 때문에 실험 구조가 중요합니다.",
        date: "2026.02.20",
        tag: "퍼포먼스",
      },
      {
        title: "캠페인은 끝난 뒤의 기록이 더 중요하다",
        summary: "성과 이후의 인사이트가 다음 캠페인의 기준이 되는 이유를 정리했습니다.",
        date: "2026.02.09",
        tag: "운영",
      },
    ],
  },
];

export const officeHighlights = [
  {
    title: "Who We Are",
    desc: "브랜드 전략, 퍼포먼스 광고, 콘텐츠 제작을 함께 다루는 크리에이티브 광고회사입니다.",
  },
  {
    title: "What We Do",
    desc: "브랜드가 시장과 만나는 전 과정에서 더 선명한 메시지와 더 적절한 채널을 제안합니다.",
  },
  {
    title: "How We Work",
    desc: "전략, 제작, 운영이 분리되지 않도록 한 팀 안에서 빠르게 실행하고 꾸준히 기록합니다.",
  },
];

export const contactChannels = [
  { label: "대표 이메일", value: "hello@northboundcreative.co.kr" },
  { label: "대표번호", value: "02-548-2314" },
  { label: "운영 시간", value: "평일 09:00 - 18:30" },
  { label: "오피스", value: "서울 성수동 2가 302-14, 5층" },
];

export const inquiryTopics = [
  "브랜드 전략",
  "퍼포먼스 광고",
  "콘텐츠 제작",
  "캠페인 제안",
];

export const profileHighlights = [
  "브랜드가 시장에서 어떤 인상으로 기억될지 먼저 고민합니다.",
  "전략, 매체 운영, 콘텐츠 제작을 따로 보지 않고 하나의 흐름으로 연결합니다.",
  "캠페인이 끝난 뒤에도 기록과 인사이트를 남기며 다음 성장을 준비합니다.",
];
