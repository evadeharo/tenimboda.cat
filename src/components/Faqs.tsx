import { Accordion } from "@ark-ui/react";
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";

export default function Faqs() {
  return (
    <Grid className="pt-[6.25rem] min-h-screen" id="faqs">
      <div className="col-span-7">
        <h2 className="text-title-l mb-[4.6875rem]">
          {translations.faqs_title}
        </h2>
        <Accordion.Root
          defaultValue={[translations.faqs_content[0].title]}
          className="flex flex-col gap-6"
        >
          {translations.faqs_content.map((item) => (
            <Accordion.Item key={item.title} value={item.title}>
              <Accordion.ItemTrigger className="text-subtitle-bold flex justify-between w-full text-left">
                {item.title}
                <Accordion.ItemIndicator className="data-[state=open]:rotate-0 rotate-180 transition-all duration-150">
                  <span>^</span>
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent className="text-6">
                <Markdown
                  components={{
                    p: ({ children }) => (
                      <p className="text-base">{children}</p>
                    ),
                    br: () => <span className="block h-2" />,
                    strong: ({ children }) => (
                      <strong className="font-bold text-blue">{children}</strong>
                    ),
                  }}
                >
                  {item.text}
                </Markdown>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Grid>
  );
}
