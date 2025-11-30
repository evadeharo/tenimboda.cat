import { useState } from "react";
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";
import { useUser } from "../context/UserContext";
import {
  AnimatePresence,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";

export default function Important() {
  const [hover, setHover] = useState(false);
  const { user } = useUser();

  const mouseX = useMotionValue(400);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  return (
    <Grid className="min-h-screen flex items-end pb-[3.75rem]" id="important">
      <div className="col-span-3 col-start-2 overflow-hidden md:hidden min-h-[50vh] grid place-items-end">
        <AnimatePresence>
          {hover && (
            <motion.img
              src="images/hover/hover.jpg"
              className="object-cover w-full"
              draggable={false}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="col-span-4 lg:col-span-7 group">
        <h2 className="text-title-l-mobile lg:text-title-l">
          {translations.important_title}
        </h2>
        <div
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseX.set(x);
            mouseY.set(y);
          }}
          onClick={() => setHover(!hover)}
        >
          <Markdown
            components={{
              p: ({ children }) => (
                <p className="text-title-l-mobile lg:text-title-l">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="text-title-l-mobile lg:text-title-l text-blue">
                  {children}
                </strong>
              ),
            }}
          >
            {translations.important_title2}
          </Markdown>
          <AnimatePresence>
            {hover && (
              <motion.div
                className="hidden md:block md:absolute pointer-events-none w-72 h-72 bg-blue rounded-full mix-blend-difference"
                style={{
                  x: springX,
                  y: springY,
                  translateX: "-50%",
                  translateY: "-85%",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="images/hover/hover.jpg"
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Markdown
          components={{
            p: ({ children }) => (
              <p className="group text-base-mobile lg:text-base mr-8 pt-7">
                {children}
              </p>
            ),
          }}
        >
          {translations.important_text.replace(
            "{nomConvidat}",
            user?.name ?? "amic"
          )}
        </Markdown>
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="group text-base-mobile lg:text-base mr-8 pt-7">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="text-black font-semibold">{children}</strong>
            ),
            br: () => <span className="block h-0.5" />,
          }}
        >
          {translations.important_details}
        </Markdown>
      </div>

      <img
        src="images/spray/spray_bottom.png"
        className="absolute inset-0 -z-10 lg:hidden"
        draggable={false}
      />
    </Grid>
  );
}
