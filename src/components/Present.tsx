import image from "../assets/images/spray/spray_bottom.png"
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";

export default function Present() {
  return (
    <Grid className="min-h-[100dvh] flex items-end pb-[3.75rem] relative" id="regal">
      <div className="col-span-7 flex flex-col gap-7">
        <Markdown
          components={{
            p: ({ children }) => <h2 className="text-title-l-mobile lg:text-title-l pr-[10%]">{children}</h2>,
            strong: ({ children }) => (
              <strong className="text-title-l-mobile lg:text-title-l text-blue">{children}</strong>
            ),
          }}
        >
          {translations.present_title}
        </Markdown>
        <Markdown
          components={{
            p: ({ children }) => <p className="text-base-mobile lg:text-base">{children}</p>,
            br: () => <span className="block h-5" />,
          }}
        >
          {translations.present_text}
        </Markdown>
      </div>

      <img src={image} className="absolute inset-0 -z-10" draggable={false} />
    </Grid>
  );
}
