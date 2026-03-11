import { motion } from "framer-motion";
import { clientLogos } from "../../data/content";
import { SectionBadge } from "../ui/SectionBadge";

export function ClientLogosSection() {
  return (
    <section className="px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[36px] border border-cyan-100/80 bg-white/76 px-6 py-8 shadow-sm shadow-cyan-100/40 backdrop-blur sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <SectionBadge>PARTNERS</SectionBadge>
              <div className="mt-4 text-2xl font-semibold text-slate-950">
                함께해 온 브랜드
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              다양한 산업의 브랜드와 함께 메시지를 만들고, 채널을 운영하고,
              콘텐츠를 제작해 왔습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                viewport={{ once: true }}
                className="flex h-20 items-center justify-center rounded-[28px] border border-slate-100 bg-slate-50 text-center text-lg font-semibold tracking-[0.14em] text-slate-400"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
