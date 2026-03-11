import React from "react";
import { cn } from "../../utils/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[30px] border border-slate-200/70 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
