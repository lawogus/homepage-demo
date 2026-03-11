import { useState } from "react";
import { ChevronRight, Pin } from "lucide-react";
import { boardCategories } from "../../data/content";
import { cn } from "../../utils/cn";
import { Card } from "../ui/Card";
import { SectionBadge } from "../ui/SectionBadge";

export function BoardSection() {
  const [activeId, setActiveId] = useState(boardCategories[0].id);
  const activeCategory =
    boardCategories.find((category) => category.id === activeId) ??
    boardCategories[0];

  return (
    <section id="board" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionBadge>NEWSROOM</SectionBadge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              최근 작업과 생각을
              <br />
              꾸준히 전합니다.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            새로운 캠페인, 회사 소식, 브랜드에 대한 인사이트를 뉴스룸에 기록하며
            우리가 지금 어떤 작업을 하고 있는지 자연스럽게 공유합니다.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.76fr_1.24fr]">
          <Card className="border-cyan-100/80 bg-white/82 p-6 shadow-cyan-100/40 backdrop-blur">
            <div className="space-y-3">
              {boardCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={cn(
                    "w-full rounded-[24px] border px-5 py-4 text-left transition",
                    activeId === category.id
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-900 hover:border-slate-300"
                  )}
                >
                  <div className="text-sm font-semibold">{category.label}</div>
                  <div
                    className={cn(
                      "mt-2 text-sm leading-6",
                      activeId === category.id ? "text-white/70" : "text-slate-500"
                    )}
                  >
                    {category.description}
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="overflow-hidden border-cyan-100/80 bg-white/82 shadow-cyan-100/40 backdrop-blur">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-950">
                    {activeCategory.label}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    {activeCategory.description}
                  </div>
                </div>
                <div className="rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500">
                  {activeCategory.posts.length} posts
                </div>
              </div>
            </div>

            <div className="px-6 py-3 sm:px-8">
              {activeCategory.posts.map((post) => (
                <div
                  key={`${activeCategory.id}-${post.title}`}
                  className="border-b border-slate-100 py-5 last:border-b-0"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        {post.pinned ? (
                          <div className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-[11px] font-medium text-rose-700">
                            <Pin className="h-3 w-3" />
                            고정
                          </div>
                        ) : null}
                        <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
                          {post.tag}
                        </div>
                      </div>
                      <div className="mt-3 text-lg font-semibold text-slate-950">
                        {post.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {post.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <span>{post.date}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
