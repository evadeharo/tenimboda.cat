import { useEffect, useState } from "react";
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";
import { AnimatePresence, motion } from "framer-motion";
import { cx } from "class-variance-authority";
import { Clipboard } from "@ark-ui/react";

const IBAN = "ES58 1465 0120 3317 5722 5377"
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
      className="min-h-[130vh] md:min-h-screen flex items-end pb-[3.75rem] relative"
      id="regal"
    >
      <AnimatePresence>
        {hover && (
          <div
            className={cx(
              "w-auto min-h-[50vh] place-items-end h-[25vh] col-span-3 col-start-2 overflow-hidden grid",
              "md:absolute md:top-1/2 md:left-1/2 md:w-[35vw] md:h-auto md:-translate-x-1/2 md:-translate-y-1/2 md:place-items-center md:col-span-auto md:col-start-auto"
            )}
          >
            <motion.img
              src={images[currentImage]}
              className="pointer-events-none object-contain h-auto w-full"
              draggable={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              loading="eager"
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
            em: ({ children }) => (
              <Clipboard.Root
                value={IBAN}
                className="flex gap-2 items-center"
              >
                <Clipboard.Label className="text-base-mobile lg:text-base items-center cursor-pointer">
                  {children}
                </Clipboard.Label>
                <Clipboard.Control>
                  <Clipboard.Trigger>
                    <Clipboard.Indicator
                      copied={
                        <span className="text-base-mobile text-blue">
                          {translations.copied}
                        </span>
                      }
                    >
                      <div className="size-4 hover:text-blue">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 75 75"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M67.856 17.6875H57.149V6.9805C57.149 3.125 54.024 0 50.1685 0H6.9805C3.125 0 0 3.125 0 6.9805V50.1685C0 54.024 3.125 57.149 6.9805 57.149H17.6875V67.856C17.6875 71.7115 20.8125 74.8365 24.668 74.8365H67.856C71.7115 74.8365 74.8365 71.7115 74.8365 67.856V24.668C74.8365 20.8125 71.7115 17.6875 67.856 17.6875ZM6.981 52.9805C5.438 52.9805 4.1685 51.711 4.1685 50.168V6.98C4.1685 5.437 5.438 4.1675 6.981 4.1675H50.169C51.712 4.1675 52.9815 5.437 52.9815 6.98V17.687H24.6695C20.814 17.687 17.689 20.812 17.689 24.6675V52.9795L6.981 52.9805ZM70.669 67.8555C70.669 69.3985 69.3995 70.668 67.8565 70.668H24.6685C23.1255 70.668 21.856 69.3985 21.856 67.8555V24.6675C21.856 23.1245 23.1255 21.855 24.6685 21.855H67.8565C69.3995 21.855 70.669 23.1245 70.669 24.6675V67.8555Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </Clipboard.Indicator>
                  </Clipboard.Trigger>
                </Clipboard.Control>
              </Clipboard.Root>
            ),
          }}
        >
          {translations.present_text}
        </Markdown>
      </div>

      <img
        src="images/spray/spray_bottom.png"
        className="absolute top-0 end-0 -z-10"
        draggable={false}
      />
    </Grid>
  );
}
