import { motion as Motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className, y = 24 }) => {
  const reduce = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
};
