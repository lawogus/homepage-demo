import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FloatingPhone() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <div ref={ref} className="relative flex justify-center">
      <motion.div
        style={{ y, rotate }}
        className="relative h-[560px] w-[280px] rounded-[42px] border border-slate-200 bg-slate-950 p-3 shadow-2xl shadow-slate-300/60"
      >
        <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-slate-700" />

        <div className="flex h-full flex-col overflow-hidden rounded-[32px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="border-b border-white/10 px-5 pb-4 pt-8">
            <div className="text-xs text-white/50">Northbound Creative</div>
            <div className="mt-2 text-xl font-semibold leading-tight">
              오늘의 캠페인 보드
            </div>
            <div className="mt-1 text-sm text-white/60">
              Brand Campaign Review · 오전 09:20 기준
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 px-4 pt-4">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
              <div className="text-[11px] text-emerald-200/80">진행 캠페인</div>
              <div className="mt-1 text-xl font-semibold">8개</div>
            </div>
            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-3">
              <div className="text-[11px] text-sky-200/80">콘텐츠 업로드</div>
              <div className="mt-1 text-xl font-semibold">12건</div>
            </div>
          </div>

          <div className="mt-4 space-y-3 px-4">
            {[
              {
                tag: "STRATEGY",
                title: "브랜드 메시지 리파인",
                desc: "메인 카피와 런칭 톤을 한 문장으로 정리",
              },
              {
                tag: "MEDIA",
                title: "퍼포먼스 매체 운영",
                desc: "Meta · Google 채널 리포트 업데이트",
              },
              {
                tag: "CONTENT",
                title: "숏폼 콘텐츠 업로드",
                desc: "신규 브랜드 필름과 소셜 크리에이티브 반영",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="text-[11px] font-medium tracking-wide text-white/45">
                  {item.tag}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-1 text-xs leading-5 text-white/60">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto p-4">
            <div className="rounded-3xl bg-white p-4 text-slate-900">
              <div className="text-xs text-slate-500">캠페인 요약</div>
              <div className="mt-2 text-sm font-semibold leading-6">
                전략, 매체 운영, 콘텐츠 제작을
                <br />
                하나의 흐름으로 연결해 일관된 브랜드 경험을 만듭니다.
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute -left-12 top-20 hidden rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-slate-700 shadow-lg backdrop-blur md:block">
        브랜드와 매체 운영을 함께 설계
      </div>

      <div className="absolute -right-14 bottom-28 hidden rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-slate-700 shadow-lg backdrop-blur md:block">
        게시판으로 캠페인 소식 지속 운영
      </div>
    </div>
  );
}
