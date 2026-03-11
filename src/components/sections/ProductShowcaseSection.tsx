import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { showcaseViews } from "../../data/content";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { SectionBadge } from "../ui/SectionBadge";

const visualThemes = [
  "from-slate-950 via-slate-900 to-cyan-950",
  "from-slate-950 via-indigo-950 to-slate-900",
  "from-slate-950 via-emerald-950 to-slate-900",
  "from-slate-950 via-cyan-950 to-slate-900",
];

export function ProductShowcaseSection() {
  return (
    <section id="features" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionBadge>CAMPAIGN VIEW</SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                브랜드의 성장 단계에 맞는
                <br />
                주요 서비스를 소개합니다.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Northbound Creative는 전략 수립부터 매체 운영, 콘텐츠 제작,
              뉴스룸 운영까지 브랜드의 흐름에 맞춰 필요한 역할을 유기적으로
              연결합니다.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-10 lg:space-y-16">
          {showcaseViews.map((view, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <section
                key={view.id}
                className="grid items-center gap-6 lg:min-h-[76vh] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10"
              >
                <Reveal
                  className={isReversed ? "lg:order-2" : undefined}
                  y={54}
                  blur={14}
                >
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/88 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/50">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
                      {view.label}
                    </div>

                    <h3 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 xl:text-[3.35rem]">
                      {view.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                      {view.description}
                    </p>

                    <div className="mt-8 space-y-4">
                      {view.highlights.map((item, itemIdx) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 28 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.45,
                            delay: itemIdx * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          viewport={{ once: true, amount: 0.45 }}
                          className="flex items-start gap-3 text-base leading-7 text-slate-700"
                        >
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {view.metrics.map((metric, metricIdx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 24 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.12 + metricIdx * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                          className="rounded-2xl border border-white/80 bg-white/82 px-4 py-3 shadow-sm shadow-slate-200/50"
                        >
                          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                            {metric.label}
                          </div>
                          <div className="mt-2 text-xl font-semibold text-slate-950">
                            {metric.value}
                          </div>
                          <div className="mt-2 text-sm text-slate-500">
                            {metric.detail}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  className={isReversed ? "lg:order-1" : undefined}
                  y={64}
                  x={isReversed ? -18 : 18}
                  blur={16}
                  delay={0.06}
                >
                  <Card className="overflow-hidden border-white/60 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
                    <div
                      className={`relative bg-gradient-to-br p-6 text-white sm:p-8 ${visualThemes[idx] ?? visualThemes[0]}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_30%)]" />

                      <div className="relative">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                              {view.label}
                            </div>
                            <div className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white">
                              {view.title}
                            </div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/72 backdrop-blur">
                            Scene 0{idx + 1}
                          </div>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                          {view.metrics.map((metric, metricIdx) => (
                            <motion.div
                              key={metric.label}
                              initial={{ opacity: 0, y: 24 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.42,
                                delay: metricIdx * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              viewport={{ once: true, amount: 0.4 }}
                              className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur"
                            >
                              <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                                {metric.label}
                              </div>
                              <div className="mt-3 text-3xl font-semibold text-white">
                                {metric.value}
                              </div>
                              <div className="mt-3 text-sm leading-6 text-white/62">
                                {metric.detail}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-6 grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
                          <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur">
                            <div className="text-sm font-semibold text-white">
                              진행 흐름
                            </div>
                            <div className="mt-5 space-y-3">
                              {view.timeline.map((item, timelineIdx) => (
                                <motion.div
                                  key={`${view.id}-${item.title}`}
                                  initial={{ opacity: 0, y: 22 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.42,
                                    delay: 0.08 + timelineIdx * 0.06,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  viewport={{ once: true, amount: 0.5 }}
                                  className="rounded-[24px] border border-white/10 bg-black/12 px-4 py-4"
                                >
                                  <div className="flex items-center justify-between gap-3">
                                    <div className="text-sm font-medium text-white">
                                      {item.title}
                                    </div>
                                    <div className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-cyan-100">
                                      {item.state}
                                    </div>
                                  </div>
                                  <div className="mt-2 text-xs text-white/48">
                                    {item.time}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-4">
                            <div className="rounded-[32px] border border-white/10 bg-white p-6 text-slate-900 shadow-xl shadow-slate-950/10">
                              <div className="text-sm font-semibold text-slate-950">
                                바로 확인할 항목
                              </div>
                              <div className="mt-5 space-y-3">
                                {view.checklist.map((item, checklistIdx) => (
                                  <motion.div
                                    key={`${view.id}-${item.label}`}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.38,
                                      delay: 0.1 + checklistIdx * 0.05,
                                      ease: [0.22, 1, 0.36, 1],
                                    }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                                  >
                                    <div className="text-sm font-medium text-slate-700">
                                      {item.label}
                                    </div>
                                    <div className="rounded-full bg-slate-950 px-2.5 py-1 text-[11px] font-medium text-white">
                                      {item.status}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {idx === showcaseViews.length - 1 ? (
                              <Button
                                href="#board"
                                size="lg"
                                className="bg-white text-slate-950 hover:bg-slate-100"
                              >
                                뉴스룸 보기
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                              </Button>
                            ) : (
                              <div className="rounded-[32px] border border-white/10 bg-white/8 px-6 py-6 text-white/78 backdrop-blur">
                                <div className="text-xs uppercase tracking-[0.18em] text-cyan-100/72">
                                  Next
                                </div>
                                <p className="mt-3 text-sm leading-7">
                                  다음 서비스에서는 브랜드 흐름 안에서 필요한 실행과
                                  운영 방식을 이어서 확인할 수 있습니다.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
