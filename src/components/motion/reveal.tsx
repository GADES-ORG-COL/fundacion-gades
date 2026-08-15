"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  id?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  id,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      id={id}
      initial={
        prefersReducedMotion ? false : { opacity: 0, y: distance, scale: 0.985 }
      }
      transition={{
        duration: 0.64,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={
        prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
      }
    >
      {children}
    </motion.div>
  );
}

type FloatProps = {
  children: ReactNode;
  className?: string;
};

export function Float({ children, className }: FloatProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      className={className}
      transition={{
        duration: 7.2,
        ease: [0.77, 0, 0.175, 1],
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {children}
    </motion.div>
  );
}
