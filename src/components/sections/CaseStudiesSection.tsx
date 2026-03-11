import { motion } from "framer-motion";
import { caseStudies } from "../../data/content";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { SectionBadge } from "../ui/SectionBadge";

export function CaseStudiesSection() {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionBadge>SELECTED WORK</SectionBadge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                최근 작업 중 일부를 소개합니다.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              브랜드의 단계와 목표에 따라 전략, 매체 운영, 콘텐츠 제작의 비중은
              달라집니다. 각 프로젝트는 필요한 방식으로 유연하게 설계됩니다.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-cyan-100/80 bg-white/82 p-6 shadow-cyan-100/40 backdrop-blur sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600">
                    {item.category}
                  </div>
                  <div className="text-sm font-medium text-slate-400">
                    {item.client}
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <div
                      key={service}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {service}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[22px] bg-slate-50 px-4 py-4"
                    >
                      <div className="text-xs text-slate-500">{metric.label}</div>
                      <div className="mt-2 text-2xl font-semibold text-slate-950">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
