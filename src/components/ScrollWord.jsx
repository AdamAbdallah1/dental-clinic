import { motion as Motion, useTransform, useReducedMotion, cubicBezier } from "framer-motion";

// framer-motion's `ease` option expects a *function* (or an array of functions,
// one per output segment) — a raw bezier array would be misread as a list of
// functions. cubicBezier() builds the function for us.
// Expo-out: a word leaves the dim state quickly and settles decisively,
// so it reads as crisp rather than as a long translucent smear.
const EASE = cubicBezier(0.16, 1, 0.3, 1);

export const ScrollWord = ({ children, progress, range, y = 8, ease = EASE }) => {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, range, [0, 1], { ease });
  const translateY = useTransform(progress, range, [y, 0], { ease });

  return (
    <Motion.span
      className="inline-block will-change-transform"
      style={reduce ? { opacity: 1 } : { opacity, y: translateY }}
    >
      {children}
    </Motion.span>
  );
};
