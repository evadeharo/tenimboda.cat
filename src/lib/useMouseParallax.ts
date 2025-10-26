import { useMotionValue } from "framer-motion";
import { useCallback } from "react";

export function useMouseParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e: MouseEvent | React.MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY, handleMouseMove };
}
