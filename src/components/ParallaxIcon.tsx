import { motion, MotionValue, useTransform, useSpring } from "framer-motion";

interface ParallaxIconProps {
  src: string;
  factor?: number;
  className?: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function ParallaxIcon({
  src,
  factor = 12,
  className,
  mouseX,
  mouseY,
}: ParallaxIconProps) {
  const rawX = useTransform(
    mouseX,
    [-window.innerWidth / 2, window.innerWidth / 2],
    [-factor, factor]
  );
  const rawY = useTransform(
    mouseY,
    [-window.innerHeight / 2, window.innerHeight / 2],
    [-factor, factor]
  );

  const x = useSpring(rawX, { stiffness: 90, damping: 10 });
  const y = useSpring(rawY, { stiffness: 90, damping: 10 });

  return (
    <motion.img
      src={src}
      style={{ x, y }}
      className={className}
      draggable={false}
    />
  );
}
