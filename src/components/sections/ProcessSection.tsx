import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../utils/cn";
import { steps } from "../../data/content";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, idx) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(idx);
        },
        { threshold: 0.45 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const activeTitle = useMemo(
    () => steps[activeStep]?.title ?? steps[0].title,
    [activeStep]
  );

  return (
    <section id="process" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div>
            <SectionBadge>PROCESS</SectionBadge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              좋은 캠페인은
              <br />
              분명한 흐름에서 시작됩니다.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              현재 활성 단계는{" "}
              <span className="font-semibold text-slate-950">{activeTitle}</span>
              입니다. 브랜드를 이해하는 단계부터 실행과 리포트까지의 흐름을
              자연스럽게 확인할 수 있습니다.
            </p>
          </div>
        </Reveal>

        <div className="space-y-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.no}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ amount: 0.4, once: true }}
              className={cn(
                "rounded-[32px] border p-7 transition-all",
                activeStep === idx
                  ? "border-slate-950 bg-slate-950 text-white shadow-xl shadow-slate-300/40"
                  : "border-slate-200 bg-white text-slate-900"
              )}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div
                    className={cn(
                      "text-sm",
                      activeStep === idx ? "text-white/60" : "text-slate-500"
                    )}
                  >
                    STEP {step.no}
                  </div>
                  <div className="mt-2 text-2xl font-semibold">
                    {step.title}
                  </div>
                  <div
                    className={cn(
                      "mt-3 max-w-xl text-sm leading-7",
                      activeStep === idx ? "text-white/75" : "text-slate-600"
                    )}
                  >
                    {step.text}
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "mt-1 h-6 w-6 shrink-0",
                    activeStep === idx ? "text-white" : "text-slate-400"
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
