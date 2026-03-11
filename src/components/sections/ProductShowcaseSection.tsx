import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { showcaseViews } from "../../data/content";
import { cn } from "../../utils/cn";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionBadge } from "../ui/SectionBadge";

export function ProductShowcaseSection() {
  const [activeId, setActiveId] = useState(showcaseViews[0].id);
  const activeView =
    showcaseViews.find((view) => view.id === activeId) ?? showcaseViews[0];

  return (
    <section id="features" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionBadge>CAMPAIGN VIEW</SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                브랜드의 성장 단계에 맞춘
                <br />
                주요 서비스를 소개합니다.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Northbound Creative는 브랜드 캠페인, 퍼포먼스 운영, 콘텐츠 제작,
              뉴스룸 운영을 하나의 흐름 안에서 다룹니다.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <Reveal x={-24}>
            <Card className="border-cyan-100/80 bg-white/82 p-6 shadow-cyan-100/40 backdrop-blur">
              <div className="flex flex-wrap gap-3">
                {showcaseViews.map((view) => {
                  const Icon = view.icon;

                  return (
                    <button
                      key={view.id}
                      type="button"
                      onClick={() => setActiveId(view.id)}
                      aria-pressed={activeId === view.id}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
                        activeId === view.id
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-950"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {view.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.24 }}
                  className="mt-8"
                >
                  <div className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50/70 px-3 py-1 text-xs font-medium text-cyan-900">
                    {activeView.label}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">
                    {activeView.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {activeView.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {activeView.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    href="#board"
                    size="lg"
                    className="mt-8 w-full bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-200/60"
                  >
                    뉴스룸 보기
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </Card>
          </Reveal>

          <Reveal x={24} delay={0.08}>
            <Card className="overflow-hidden border-white/60 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98)_0%,_rgba(30,41,59,0.96)_52%,_rgba(6,95,70,0.92)_100%)] text-white shadow-2xl shadow-slate-300/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.24 }}
                  className="p-6 sm:p-8"
                >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                      {activeView.label}
                    </div>
                    <div className="mt-2 text-2xl font-semibold">
                      Campaign Overview
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      주요 서비스와 운영 흐름을 한눈에 확인할 수 있습니다.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/75 backdrop-blur">
                    마지막 업데이트 3분 전
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {activeView.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur"
                    >
                      <div className="text-xs text-white/55">{metric.label}</div>
                      <div className="mt-2 text-3xl font-semibold">{metric.value}</div>
                      <div className="mt-3 text-sm text-white/65">
                        {metric.detail}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[28px] border border-white/10 bg-white/6 p-5">
                    <div className="text-sm font-semibold text-white">
                      캠페인 흐름
                    </div>
                    <div className="mt-4 space-y-3">
                      {activeView.timeline.map((item) => (
                        <div
                          key={`${item.time}-${item.title}`}
                          className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-sm font-medium text-white">
                              {item.title}
                            </div>
                            <div className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-cyan-100">
                              {item.state}
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-white/50">
                            {item.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                    <div className="rounded-[28px] border border-white/10 bg-white p-5 text-slate-900">
                      <div className="text-sm font-semibold text-slate-950">
                        바로 확인할 항목
                      </div>
                    <div className="mt-4 space-y-3">
                      {activeView.checklist.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                        >
                          <div className="text-sm font-medium text-slate-700">
                            {item.label}
                          </div>
                          <div className="rounded-full bg-slate-950 px-2.5 py-1 text-[11px] font-medium text-white">
                            {item.status}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-cyan-50 to-emerald-50 px-4 py-4">
                      <div className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-800/70">
                        Next Section
                      </div>
                      <div className="mt-2 text-sm font-semibold text-slate-950">
                        다음 영역에서는 최근 작업과 생각을 전하는 뉴스룸을 확인할 수 있습니다.
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
