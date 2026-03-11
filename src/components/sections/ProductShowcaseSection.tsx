import { useEffect, useRef, useState } from "react";
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
  const [activeId, setActiveId] = useState(showcaseViews[0].id);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    blockRefs.current.forEach((element, idx) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(showcaseViews[idx].id);
          }
        },
        {
          rootMargin: "-28% 0px -42% 0px",
          threshold: [0.2, 0.4, 0.65],
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const activeIndex = showcaseViews.findIndex((view) => view.id === activeId);
  const activeView = showcaseViews[activeIndex] ?? showcaseViews[0];

  return (
    <section id="features" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionBadge>CAMPAIGN VIEW</SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                스크롤을 따라 흐름이 이어지도록
                <br />
                서비스를 하나의 장면처럼 구성했습니다.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              브랜드 전략, 퍼포먼스 운영, 콘텐츠 제작, 뉴스룸 운영이 서로 따로
              보이지 않도록 각 단계가 자연스럽게 이어지는 방식으로 정리했습니다.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:hidden">
          {showcaseViews.map((view, idx) => (
            <Reveal key={view.id} delay={idx * 0.06}>
              <Card className="overflow-hidden border-cyan-100/80 bg-white/86 p-6 shadow-cyan-100/40 backdrop-blur">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  {view.label}
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">
                  {view.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {view.description}
                </p>

                <div className="mt-6 space-y-3">
                  {view.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-12">
            {showcaseViews.map((view, idx) => {
              const isActive = activeId === view.id;

              return (
                <motion.div
                  key={view.id}
                  ref={(element) => {
                    blockRefs.current[idx] = element;
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    y: isActive ? 0 : 22,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[72vh] items-center"
                >
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/88 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/50">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
                      {view.label}
                    </div>

                    <h3 className="mt-7 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-950 xl:text-[3.35rem]">
                      {view.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                      {view.description}
                    </p>

                    <div className="mt-8 space-y-4">
                      {view.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7 text-slate-700"
                        >
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {view.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/80 bg-white/82 px-4 py-3 shadow-sm shadow-slate-200/50"
                        >
                          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                            {metric.label}
                          </div>
                          <div className="mt-2 text-xl font-semibold text-slate-950">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="sticky top-28 h-[calc(100vh-7rem)]">
            <div className="relative h-full overflow-hidden rounded-[40px] border border-white/60 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
              {showcaseViews.map((view, idx) => {
                const isActive = activeId === view.id;

                return (
                  <motion.div
                    key={view.id}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 26,
                      scale: isActive ? 1 : 0.985,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${visualThemes[idx] ?? visualThemes[0]}`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.22),_transparent_30%)]" />

                    <div className="relative flex h-full flex-col p-8 xl:p-10">
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
                        {view.metrics.map((metric) => (
                          <div
                            key={metric.label}
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
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 grid flex-1 gap-4 xl:grid-cols-[1.02fr_0.98fr]">
                        <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur">
                          <div className="text-sm font-semibold text-white">
                            진행 흐름
                          </div>
                          <div className="mt-5 space-y-3">
                            {view.timeline.map((item, timelineIdx) => (
                              <motion.div
                                key={`${view.id}-${item.title}`}
                                initial={false}
                                animate={{
                                  opacity: isActive ? 1 : 0.5,
                                  x: isActive ? 0 : 12,
                                }}
                                transition={{
                                  duration: 0.35,
                                  delay: isActive ? timelineIdx * 0.06 : 0,
                                }}
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
                                  initial={false}
                                  animate={{
                                    opacity: isActive ? 1 : 0.55,
                                    y: isActive ? 0 : 10,
                                  }}
                                  transition={{
                                    duration: 0.35,
                                    delay: isActive ? checklistIdx * 0.06 : 0,
                                  }}
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

                          <div className="rounded-[32px] border border-white/10 bg-white/8 px-6 py-6 text-white/78 backdrop-blur">
                            <div className="text-xs uppercase tracking-[0.18em] text-cyan-100/72">
                              Scroll Story
                            </div>
                            <p className="mt-3 text-sm leading-7">
                              왼쪽 설명이 넘어갈 때마다 오른쪽 장면도 함께 전환되도록
                              설계했습니다. 서비스가 개별 메뉴가 아니라 하나의 운영
                              흐름으로 읽히도록 만드는 구간입니다.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {showcaseViews.map((item) => (
                            <div
                              key={item.id}
                              className={`rounded-full px-3 py-1.5 text-xs transition ${
                                item.id === activeId
                                  ? "bg-white text-slate-950"
                                  : "bg-white/10 text-white/58"
                              }`}
                            >
                              {item.label}
                            </div>
                          ))}
                        </div>
                        <Button
                          href="#board"
                          size="lg"
                          className="bg-white text-slate-950 hover:bg-slate-100"
                        >
                          뉴스룸 보기
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 hidden items-center justify-between rounded-[32px] border border-white/70 bg-white/76 px-6 py-5 text-sm text-slate-600 shadow-sm shadow-slate-200/50 backdrop-blur lg:flex">
            <div>
              현재 장면은{" "}
              <span className="font-semibold text-slate-950">{activeView.label}</span>
              입니다. 왼쪽 설명을 스크롤하면 오른쪽 시각 영역이 교차 전환됩니다.
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-500">
              Scroll to explore
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
