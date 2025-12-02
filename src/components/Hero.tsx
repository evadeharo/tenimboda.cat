import Grid from "./Grid";
import { translations } from "../lib/texts";
import { ParallaxIcon } from "./ParallaxIcon";
import { useMouseParallax } from "../lib/useMouseParallax";

export default function Hero() {
  const { mouseX, mouseY, handleMouseMove } = useMouseParallax();

  return (
    <Grid
      className="h-screen flex items-end pb-[3.75rem] relative"
      onMouseMove={handleMouseMove}
    >
      <div className="col-span-full">
        <div className="flex flex-col md:items-center md:w-max md:gap-2">
          <h1 className="text-title-xl-mobile lg:text-title-xl w-2/3 md:w-full">
            {translations.orioleva}
          </h1>
          <h2 className="text-subtitle-mobile lg:text-subtitle">
            {translations.subtitle}
          </h2>
        </div>
      </div>

      <img
        src="images/spray/spray_hero.png"
        className="absolute inset-0 -z-10"
        draggable={false}
        loading="eager"
        fetchPriority="high"
      />
      <ParallaxIcon
        src="images/draws/hero_1.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-[2rem] md:top-[6.25rem] left-[2rem] md:left-[6.25rem] -z-0 w-20 md:w-28"
      />
      <ParallaxIcon
        src="images/draws/hero_2.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-[10rem] right-[8rem] md:top-[3.75rem] md:right-[20.25rem] -z-0 w-20 md:w-28"
      />
      <ParallaxIcon
        src="images/draws/hero_3.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-[18rem] left-[2rem] md:top-[20rem] md:left-[20.625rem] -z-0 w-24 md:w-32"
      />
      <ParallaxIcon
        src="images/draws/hero_4.png"
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-[29rem] right-[2rem] md:top-[40rem] md:right-[10.625rem] -z-0 w-20 md:w-28"
      />
    </Grid>
  );
}
