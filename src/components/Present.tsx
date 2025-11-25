import { useEffect, useState } from "react";
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "images/trail/1.jpg",
  "images/trail/2.jpg",
  "images/trail/3.jpg",
  "images/trail/4.jpg",
  "images/trail/5.jpg",
  "images/trail/6.jpg",
  "images/trail/7.jpg",
  "images/trail/8.jpg",
  "images/trail/9.jpg",
  "images/trail/10.jpg",
  "images/trail/11.jpg",
  "images/trail/12.jpg",
  "images/trail/13.jpg",
  "images/trail/14.jpg",
  "images/trail/15.jpg",
  "images/trail/16.jpg",
  "images/trail/17.jpg",
  "images/trail/18.jpg",
  "images/trail/19.jpg",
  "images/trail/20.jpg",
  "images/trail/21.jpg",
  "images/trail/22.jpg",
  "images/trail/23.jpg",
  "images/trail/24.jpg",
  "images/trail/25.jpg",
  "images/trail/26.jpg",
  "images/trail/27.jpg",
  "images/trail/28.jpg",
  "images/trail/29.jpg",
  "images/trail/30.jpg",
  "images/trail/31.jpg",
  "images/trail/32.jpg",
  "images/trail/33.jpg",
  "images/trail/34.jpg",
  "images/trail/35.jpg",
];

export default function Present() {
  const [hover, setHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!hover) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 400);

    return () => clearInterval(interval);
  }, [hover]);

  useEffect(() => {
    const handleScroll = () => setHover(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid
      className="min-h-screen flex items-end pb-[3.75rem] relative"
      id="regal"
    >
      <AnimatePresence>
        {hover && (
          <div className="md:fixed md:top-1/2 md:left-1/2 md:w-[35vw] w-auto h-[25vh] md:h-auto md:-translate-x-1/2 md:-translate-y-1/2 col-span-3 col-start-2 overflow-hidden grid place-items-center">
            <motion.img
              src={images[currentImage]}
              className="pointer-events-none object-contain h-full w-auto md:h-auto md:w-full"
              draggable={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </AnimatePresence>

      <div className="col-span-4 md:col-span-7 flex flex-col gap-7">
        <Markdown
          components={{
            p: ({ children }) => (
              <h2 className="text-title-l-mobile lg:text-title-l pr-[10%]">
                {children}
              </h2>
            ),
            strong: ({ children }) => (
              <strong
                className="text-title-l-mobile lg:text-title-l text-blue cursor-pointer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {children}
              </strong>
            ),
          }}
        >
          {translations.present_title}
        </Markdown>
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-base-mobile lg:text-base">{children}</p>
            ),
            br: () => <span className="block h-5" />,
          }}
        >
          {translations.present_text}
        </Markdown>
      </div>

      <img
        src="images/spray/spray_bottom.png"
        className="absolute inset-0 -z-10"
        draggable={false}
      />
    </Grid>
  );
}
