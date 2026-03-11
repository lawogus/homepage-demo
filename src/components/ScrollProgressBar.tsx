import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-slate-950"
    />
  );
}
