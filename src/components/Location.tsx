import Grid from "./Grid";
import image from "../assets/images/spray/spray_mid.png";
import icon1 from "../assets/images/draws/location_1.png";
import icon2 from "../assets/images/draws/location_2.png";
import icon3 from "../assets/images/draws/location_3.png";
import Markdown from "./Markdown";
import { translations } from "../lib/texts";
import { ParallaxIcon } from "./ParallaxIcon";
import { useMouseParallax } from "../lib/useMouseParallax";

export default function Location() {
  const { mouseX, mouseY, handleMouseMove } = useMouseParallax();

  return (
    <Grid
      className="min-h-screen flex items-end pb-[3.75rem] relative"
      onMouseMove={handleMouseMove}
      id="lloc"
    >
      <div className="col-span-4 lg:col-span-8">
        <h2 className="text-title-m-mobile lg:text-title-m pb-[1.75rem]">
          {translations.locations_title}
        </h2>

        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-base-mobile lg:text-base mr-8">{children}</p>
            ),
            br: () => <span className="block h-5" />,
          }}
        >
          {translations.locations_text}
        </Markdown>
      </div>

      <img src={image} alt="" className="absolute left-0 top-0 -z-10" />
      <ParallaxIcon
        src={icon1}
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-[8rem] lg:top-[4rem] left-[8rem] lg:left-[5rem] -z-0 w-20 lg:w-28"
      />
      <ParallaxIcon
        src={icon2}
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-0 left-0 lg:top-[12rem] lg:left-[30rem] -z-0 w-[4.375rem] lg:w-24"
      />
      <ParallaxIcon
        src={icon3}
        mouseX={mouseX}
        mouseY={mouseY}
        className="absolute top-0 right-0 lg:top-[2rem] lg:right-[32rem] -z-0 w-[4.375rem] lg:w-28"
      />
    </Grid>
  );
}
