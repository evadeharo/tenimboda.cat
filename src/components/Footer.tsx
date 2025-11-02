import { useUser } from "../context/UserContext";
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";

export default function Footer() {
  const { user } = useUser();

  return (
    <Grid className="py-[3rem] lg:py-[3.75rem] min-h-screen bg-yellow">
      <div className="col-span-4 lg:col-span-3 order-2 lg:order-1">
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-base-mobile lg:text-base">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-black">{children}</strong>
            ),
            br: () => <span className="block h-0" />,
            a: ({ href, children }) => (
              <a
                href={`${href}?userId=${user?.userId}`}
                target="_blank"
                className="text-blue font-bold"
              >
                {children}
              </a>
            ),
          }}
        >
          {translations.footer_reminder}
        </Markdown>
      </div>
      <div className="col-span-4 lg:col-start-5 lg:col-span-5 order-1 lg:order-2">
        <Markdown>{translations.footer_text}</Markdown>
      </div>
      <div className="col-span-4 lg:col-span-full flex items-end order-3">
        <div className="flex flex-col w-max">
          <h1 className="text-title-xl-mobile lg:text-title-xl w-2/3 lg:w-full">
            {translations.orioleva}
          </h1>
          <h2 className="text-subtitle-mobile lg:text-subtitle">
            {translations.footer_thanks}
          </h2>
        </div>
      </div>
    </Grid>
  );
}
