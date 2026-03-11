import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
  blur?: number;
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
  blur = 10,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "start 38%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    mass: 0.2,
  });
  const opacity = useTransform(progress, [0, 0.42, 0.78, 1], [0, 0, 0.82, 1]);
  const translateY = useTransform(progress, [0, 1], [y, 0]);
  const translateX = useTransform(progress, [0, 1], [x, 0]);
  const scaled = useTransform(progress, [0, 1], [scale, 1]);
  const filteredBlur = useTransform(progress, [0, 1], [blur, 0]);
  const filter = useMotionTemplate`blur(${filteredBlur}px)`;

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!once || !ref.current || prefersReducedMotion) return;
    if (value >= 0.995) {
      ref.current.dataset.revealed = "true";
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : undefined}
      style={
        prefersReducedMotion
          ? undefined
          : {
              opacity,
              x: translateX,
              y: translateY,
              scale: scaled,
              filter,
            }
      }
      whileInView={
        ref.current?.dataset.revealed === "true" || prefersReducedMotion
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : undefined
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, amount }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
