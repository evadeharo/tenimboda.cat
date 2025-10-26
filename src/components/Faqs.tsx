import { Accordion } from "@ark-ui/react";
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";

const crossSvg = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2216 1.44V7.344H17.4136C18.5656 7.344 18.8056 7.632 18.6136 8.784L18.5176 9.648C18.3256 10.8 17.9896 11.088 16.8376 11.088H11.2216V16.992C11.2216 18.144 10.9336 18.432 9.78156 18.432H8.86956C7.71756 18.432 7.42956 18.144 7.42956 16.992V11.088H1.28556C0.133559 11.088 -0.106442 10.8 0.0375584 9.648L0.133558 8.784C0.325558 7.632 0.661558 7.344 1.81356 7.344H7.42956V1.44C7.42956 0.287999 7.71756 0 8.86956 0H9.78156C10.9336 0 11.2216 0.287999 11.2216 1.44Z"
      fill="currentColor"
    />
  </svg>
);

export default function Faqs() {
  return (
    <Grid className="pt-[6.25rem] min-h-[100dvh]" id="faqs">
      <div className="col-span-7">
        <h2 className="text-title-l-mobile lg:text-title-l mb-[2.8rem] lg:mb-[4.6875rem]">
          {translations.faqs_title}
        </h2>
        <Accordion.Root
          defaultValue={[translations.faqs_content[0].title]}
          className="flex flex-col gap-6 pb-44"
        >
          {translations.faqs_content.map((item) => (
            <Accordion.Item key={item.title} value={item.title}>
              <Accordion.ItemTrigger className="text-subtitle-bold-mobile lg:text-subtitle-bold flex justify-between w-full text-left gap-6">
                {item.title}
                <Accordion.ItemIndicator className="data-[state=closed]:rotate-0 rotate-45 transform transition-all duration-200 aspect-square w-6 h-6 grid place-items-center">
                  <div className="w-5">{crossSvg}</div>
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Markdown
                  components={{
                    p: ({ children }) => (
                      <p className="text-base-mobile lg:text-base mt-3 lg:mt-0">{children}</p>
                    ),
                    br: () => <span className="block h-2" />,
                    strong: ({ children }) => (
                      <strong className="font-bold text-blue">
                        {children}
                      </strong>
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
