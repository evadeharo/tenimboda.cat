import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";

export default function Time() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem] relative">
      <div className="col-span-8">
        <h2 className="text-title-m pb-[1.75rem]">
          {translations.time_title}
        </h2>

        <Markdown
          components={{
            p: ({ children }) => <p className="text-base mr-8">{children}</p>,
            strong: ({ children }) => <strong className="text-base mr-8 text-blue">{children}</strong>,
            br: () => <span className="block h-1" />,
          }}
        >
          {translations.time_text}
        </Markdown>
      </div>
    </Grid>
  );
}
