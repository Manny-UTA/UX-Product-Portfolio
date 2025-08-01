"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  // direction animation offset
  const offset = {
    up: { y: 40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
