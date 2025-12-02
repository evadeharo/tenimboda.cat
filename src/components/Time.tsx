import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";
import { useMouseParallax } from "../lib/useMouseParallax";
import { ParallaxIcon } from "./ParallaxIcon";

export default function Time() {
  const { mouseX, mouseY, handleMouseMove } = useMouseParallax();

  return (
    <Grid
      className="min-h-screen flex items-end pb-[3.75rem] relative"
      onMouseMove={handleMouseMove}
      id="temps"
    >
      <div className="col-span-4 md:col-span-8">
        <h2 className="text-title-m-mobile lg:text-title-m pb-[1.75rem]">
          {translations.time_title}
        </h2>

        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-base-mobile lg:text-base mr-8">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="text-base-mobile lg:text-base mr-8 text-blue">
                {children}
              </strong>
            ),
            br: () => <span className="block h-1" />,
          }}
        >
          {translations.time_text}
        </Markdown>

        <div className="mt-6 lg:mt-10">
          {translations.time_times.map((i) => (
            <div className="flex gap-4 lg:gap-10 text-base-mobile lg:text-base ">
              <span className="font-bold">{i.hour}</span>
              <Markdown
                components={{
                  br: () => <span className="block h-0.5" />,
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      target="_blank"
                      className="text-black underline"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {i.text}
              </Markdown>
            </div>
          ))}
        </div>
      </div>

      <ParallaxIcon
        src="images/draws/time_1.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-[9rem] left-[1rem] lg:top-[14.25rem] lg:left-[6.25rem] -z-0 w-20 lg:w-24"
      />
      <ParallaxIcon
        src="images/draws/time_2.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-0 left-[11rem] lg:left-[30rem] -z-0 w-20 lg:w-24"
      />
      <ParallaxIcon
        src="images/draws/time_3.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-[16rem] right-[2rem] lg:top-[10rem] lg:right-[30rem] -z-0 w-20 lg:w-28"
      />
      <ParallaxIcon
        src="images/draws/time_4.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute -bottom-[4rem] right-[2rem] lg:bottom-[8rem] lg:right-[15rem] -z-0 w-24 lg:w-32"
      />
    </Grid>
  );
}
