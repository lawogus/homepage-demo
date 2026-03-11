import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../utils/cn";

const navItems = [
  { href: "#about", label: "회사 소개", id: "about" },
  { href: "#features", label: "서비스", id: "features" },
  { href: "#process", label: "업무 흐름", id: "process" },
  { href: "#board", label: "뉴스룸", id: "board" },
  { href: "#contact", label: "문의", id: "contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-300/60">
              N
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-950">
                Northbound Creative
              </div>
              <div className="hidden text-xs text-slate-500 sm:block">
                Advertising & Brand Campaign Studio
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "transition hover:text-slate-950",
                  activeId === item.id ? "font-semibold text-slate-950" : ""
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              href="#contact"
              variant="secondary"
              className="border-2 border-slate-950 bg-white text-slate-950 shadow-sm shadow-slate-200/70 hover:bg-slate-50"
            >
              문의하기
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 md:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-4 top-20 z-30 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl md:hidden">
          <div className="flex flex-col gap-2 text-sm text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 hover:bg-slate-50",
                  activeId === item.id ? "bg-slate-50 font-semibold text-slate-950" : ""
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
