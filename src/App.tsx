import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavBar } from "./components/NavBar";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { FloatingPhone } from "./components/FloatingPhone";
import { ClientLogosSection } from "./components/sections/ClientLogosSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ProductShowcaseSection } from "./components/sections/ProductShowcaseSection";
import { CaseStudiesSection } from "./components/sections/CaseStudiesSection";
import { BoardSection } from "./components/sections/BoardSection";
import { TrustSection } from "./components/sections/TrustSection";
import { ContactSection } from "./components/sections/ContactSection";
import { SectionBadge } from "./components/ui/SectionBadge";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { GradientOrb } from "./components/ui/GradientOrb";
import { features, stats, useCases, valuePills } from "./data/content";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top,_#eef6ff_0%,_#f7fbff_34%,_#f6faf9_70%,_#f8fafc_100%)] text-slate-900">
      <ScrollProgressBar />
      <NavBar />

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
          <GradientOrb className="left-[-80px] top-10 h-72 w-72 bg-cyan-300/35" />
          <GradientOrb className="right-0 top-20 h-96 w-96 bg-indigo-300/30" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-cyan-100/80 bg-white/80 px-3 py-2 shadow-sm shadow-cyan-100/40 backdrop-blur">
                  <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-200/40">
                    <span className="relative text-sm font-bold tracking-[-0.04em]">
                      N
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-[-0.03em] text-slate-950">
                      Northbound Creative
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-700/80">
                      Advertising & Brand Campaign Studio
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  브랜드를 더 선명하게 보이게 만드는
                  <br />
                  전략과 크리에이티브 중심의
                  <br />
                  광고회사입니다.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  Northbound Creative는 브랜드 전략, 퍼포먼스 광고 운영, 콘텐츠
                  제작을 하나의 흐름으로 연결하는 광고회사입니다. 브랜드의 방향을
                  선명하게 정리하고, 시장에서 더 또렷하게 보일 수 있는 캠페인을
                  기획하고 운영합니다.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="#features"
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-200/60"
                  >
                    서비스 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    href="#contact"
                    size="lg"
                    variant="secondary"
                    className="border-indigo-200 bg-white/80 text-indigo-950"
                  >
                    문의하기
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {valuePills.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm shadow-cyan-100/40 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.45 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-cyan-100/80 bg-white/75 p-5 shadow-sm shadow-cyan-100/40 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-slate-950">
                      {item.value}
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <FloatingPhone />
            </motion.div>
          </div>
        </section>

        <ClientLogosSection />

        <section id="about" className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionBadge>ABOUT</SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                브랜드의 방향을 정하고
                <br />
                실행까지 연결합니다.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                우리는 전략이 좋은 말로만 남지 않도록 매체 운영과 콘텐츠 제작까지
                함께 다룹니다. 각 서비스는 브랜드의 현재 단계와 목표에 맞춰 유연하게
                조합됩니다.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.45 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full rounded-[28px] border-cyan-100/80 bg-white/80 shadow-cyan-100/40 backdrop-blur">
                      <div className="p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-emerald-500 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="mt-5 text-xl font-semibold">
                          {feature.title}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {feature.desc}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ProductShowcaseSection />
        <ProcessSection />
        <CaseStudiesSection />

        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div>
              <SectionBadge>USE CASE</SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                이런 브랜드와
                <br />
                함께해 왔습니다.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {useCases.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.45 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-cyan-100/80 bg-white/82 shadow-cyan-100/40">
                      <div className="p-7">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50 text-cyan-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="mt-5 text-xl font-semibold">
                          {item.title}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {item.subtitle}
                        </p>
                        <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                          브랜드의 성장 단계에 따라 필요한 전략과 실행 방식을 제안합니다.
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <BoardSection />
        <TrustSection />
        <ContactSection />

        <footer className="px-6 pb-10 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[32px] border border-white/60 bg-white/72 px-6 py-6 text-sm text-slate-500 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold text-slate-900">Northbound Creative</div>
              <div className="mt-1">Advertising & Brand Campaign Studio</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="transition hover:text-slate-900">
                회사 소개
              </a>
              <a href="#features" className="transition hover:text-slate-900">
                서비스
              </a>
              <a href="#board" className="transition hover:text-slate-900">
                뉴스룸
              </a>
              <a href="#contact" className="transition hover:text-slate-900">
                문의
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
