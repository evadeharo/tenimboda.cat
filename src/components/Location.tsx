import Grid from "./Grid";
import image from "../assets/images/spray/spray_mid.png";
import icon1 from "../assets/images/draws/location_1.png";
import icon2 from "../assets/images/draws/location_2.png";
import icon3 from "../assets/images/draws/location_3.png";
import Markdown from "./Markdown";
import { translations } from "../lib/texts";

export default function Location() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem] relative" id="lloc">
      <div className="col-span-8">
        <h2 className="text-title-m pb-[1.75rem]">
          {translations.locations_title}
        </h2>

        <Markdown
          components={{
            p: ({ children }) => <p className="text-base mr-8">{children}</p>,
            br: () => <span className="block h-5" />,
          }}
        >
          {translations.locations_text}
        </Markdown>
      </div>

      <img src={image} alt="" className="absolute left-0 top-0 -z-10" />
      <img
        src={icon1}
        className="absolute top-[4rem] left-[4rem] -z-0 w-28"
        draggable={false}
      />
      <img
        src={icon2}
        className="absolute top-[12rem] left-[30rem] -z-0 w-24"
        draggable={false}
      />
      <img
        src={icon3}
        className="absolute top-[2rem] right-[32rem] -z-0 w-28"
        draggable={false}
      />
    </Grid>
  );
}
