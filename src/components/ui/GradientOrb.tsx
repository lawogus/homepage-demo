import { cn } from "../../utils/cn";

export function GradientOrb({ className }: { className: string }) {
  return <div className={cn("absolute rounded-full blur-3xl", className)} />;
}
