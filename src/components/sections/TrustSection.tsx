import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems, supportHighlights } from "../../data/content";
import { cn } from "../../utils/cn";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { SectionBadge } from "../ui/SectionBadge";

export function TrustSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionBadge>APPROACH & FAQ</SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                우리가 일하는 방식과
                <br />
                자주 묻는 질문에 답합니다.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              전략과 실행이 어떻게 연결되는지, 어떤 방식으로 브랜드와 협업하는지
              한눈에 확인할 수 있도록 답변을 모았습니다.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <Reveal x={-24}>
            <Card className="border-cyan-100/80 bg-white/82 p-6 shadow-cyan-100/40 backdrop-blur sm:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                {supportHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-[24px] bg-slate-50 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-lg font-semibold text-slate-950">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>

          <Reveal x={24} delay={0.08}>
            <Card className="border-cyan-100/80 bg-white/82 p-6 shadow-cyan-100/40 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <SectionBadge>FAQ</SectionBadge>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                    자주 나오는 질문
                  </h3>
                </div>
                <div className="rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500">
                  {faqItems.length} Questions
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {faqItems.map((item, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div
                      key={item.question}
                      className={cn(
                        "rounded-[26px] border transition",
                        isOpen
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-900"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      >
                        <span className="text-base font-semibold">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 transition-transform",
                            isOpen ? "rotate-180 text-white" : "text-slate-500"
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-sm leading-7 text-white/75">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
