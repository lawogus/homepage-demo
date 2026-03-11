import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 28,
  scale = 1,
  amount = 0.25,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion ? false : { opacity: 0, x, y, scale }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, amount }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
