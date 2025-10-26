import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";

export default function Footer() {
  return (
    <Grid className="py-[3.75rem] min-h-screen bg-yellow">
      <div className="col-span-3">
        <Markdown
          components={{
            p: ({ children }) => <p className="text-base">{children}</p>,
            strong: ({ children }) => (
              <strong className="font-bold text-black">{children}</strong>
            ),
            br: () => <span className="block h-0" />,
            a: ({ href, children }) => (
              <a href={href} target="_blank" className="text-blue font-bold">
                {children}
              </a>
            ),
          }}
        >
          {translations.footer_reminder}
        </Markdown>
      </div>
      <div className="col-start-5 col-span-5">
        <Markdown>{translations.footer_text}</Markdown>
      </div>
      <div className="col-span-full flex items-end">
        <div className="flex flex-col w-max">
          <h1 className="text-title-xl">{translations.orioleva}</h1>
          <h2 className="text-subtitle">{translations.footer_thanks}</h2>
        </div>
      </div>
    </Grid>
  );
}
