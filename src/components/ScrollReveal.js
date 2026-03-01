import { motion } from "framer-motion";

const DEFAULT_VIEWPORT = {
  once: true,
  margin: "-60px 0px -60px 0px",
  amount: 0.2,
};

const EASING = [0.25, 0.46, 0.45, 0.94]; // ease-out quad

/**
 * ScrollReveal - A reusable wrapper for scroll-triggered reveal animations.
 * Elements fade in + move upward + blur to sharp with smooth easing.
 * Use for cards, sections, and content that should appear on scroll.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} [props.delay=0] - Stagger delay in seconds (for staggered layouts)
 * @param {number} [props.duration=0.7] - Animation duration in seconds (600-800ms)
 * @param {number} [props.yOffset=40] - Starting Y offset in pixels
 * @param {number} [props.scale=0.95] - Starting scale (0.95 → 1)
 * @param {boolean} [props.blur=true] - Whether to use blur effect (blur-sm → blur-0)
 * @param {string} [props.className] - Additional CSS classes for the wrapper
 */
export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 40,
  scale = 0.95,
  blur = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale,
        filter: blur ? "blur(4px)" : "blur(0)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0)",
      }}
      viewport={DEFAULT_VIEWPORT}
      transition={{
        duration,
        delay,
        ease: EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
