import React from "react";
import { cn } from "../../utils/cn";

export function SectionBadge({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide backdrop-blur",
        dark
          ? "border border-white/10 bg-white/10 text-white/80"
          : "border border-slate-200 bg-white/70 text-slate-600"
      )}
    >
      {children}
    </div>
  );
}
