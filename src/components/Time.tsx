import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";
import icon1 from "../assets/images/draws/time_1.png"
import icon2 from "../assets/images/draws/time_2.png"
import icon3 from "../assets/images/draws/time_3.png"
import icon4 from "../assets/images/draws/time_4.png"

export default function Time() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem] relative" id="temps">
      <div className="col-span-8">
        <h2 className="text-title-m pb-[1.75rem]">{translations.time_title}</h2>

        <Markdown
          components={{
            p: ({ children }) => <p className="text-base mr-8">{children}</p>,
            strong: ({ children }) => (
              <strong className="text-base mr-8 text-blue">{children}</strong>
            ),
            br: () => <span className="block h-1" />,
          }}
        >
          {translations.time_text}
        </Markdown>

        <div className="mt-10">
          {translations.time_times.map((i) => (
            <div className="flex gap-10">
              <span className="font-bold">{i.hour}</span>
              <Markdown
                components={{
                  br: () => <span className="block h-0.5" />,
                  a: ({ children, href }) => (
                    <a href={href} target="_blank" className="text-black underline">{children}</a>
                  ),
                }}
              >
                {i.text}
              </Markdown>
            </div>
          ))}
        </div>
      </div>

      <img src={icon1} className="absolute top-[14.25rem] left-[6.25rem] -z-0 w-24" draggable={false} />
      <img src={icon2} className="absolute top-0 left-[30rem] -z-0 w-24" draggable={false} />
      <img src={icon3} className="absolute top-[10rem] right-[30rem] -z-0 w-28" draggable={false} />
      <img src={icon4} className="absolute bottom-[8rem] right-[15rem] -z-0 w-32" draggable={false} />   
    </Grid>
  );
}
