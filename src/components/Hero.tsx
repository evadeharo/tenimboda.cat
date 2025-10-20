import Grid from "./Grid";
import image from "../assets/images/spray/spray_hero.png"
import icon1 from "../assets/images/draws/hero_1.png"
import icon2 from "../assets/images/draws/hero_2.png"
import icon3 from "../assets/images/draws/hero_3.png"
import icon4 from "../assets/images/draws/hero_4.png"
import { translations } from "../lib/texts";

export default function Hero() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem] relative">
      <div className="col-span-full">
        <div className="flex flex-col items-center w-max">
          <h1 className="text-title-xl">{translations.orioleva}</h1>
          <h2 className="text-subtitle">{translations.subtitle}</h2>
        </div>
      </div>

      <img src={image} className="absolute inset-0 -z-10" draggable={false} />
      <img src={icon1} className="absolute top-[6.25rem] left-[6.25rem] -z-0 w-28" draggable={false} />
      <img src={icon3} className="absolute top-[20rem] left-[20.625rem] -z-0 w-32" draggable={false} />
      <img src={icon2} className="absolute top-[3.75rem] right-[20.25rem] -z-0 w-28" draggable={false} />
      <img src={icon4} className="absolute top-[40rem] right-[10.625rem] -z-0 w-28" draggable={false} />      
    </Grid>
  );
}
