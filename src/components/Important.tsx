import { useState } from "react";
import { translations } from "../lib/texts";
import Grid from "./Grid";
import Markdown from "./Markdown";

export default function Important() {
  const [hover, setHover] = useState<boolean>(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <Grid className="h-screen flex items-end pb-[3.75rem]" id="important">
      {hover && (
        <div
          className="pointer-events-none fixed w-24 h-24 bg-blue rounded-full mix-blend-difference transition-transform duration-75"
          style={{
            left: `${pos.x - 48}px`,
            top: `${pos.y - 48}px`,
            transform: "translate3d(0, 0, 0)",
          }}
        />
      )}

      <div
        className="col-span-7 group cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      >
        <div>
          <h2 className="text-title-l">{translations.important_title}</h2>
          <Markdown
            components={{
              p: ({ children }) => <p className="text-title-l">{children}</p>,
              strong: ({ children }) => (
                <strong className="text-title-l text-blue">{children}</strong>
              ),
            }}
          >
            {translations.important_title2}
          </Markdown>
        </div>

        <Markdown
          components={{
            p: ({ children }) => (
              <p className="group text-base mr-8 pt-7">{children}</p>
            ),
          }}
        >
          {translations.important_text}
        </Markdown>
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="group text-base mr-8 pt-7">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="text-black font-semibold">{children}</strong>
            ),
            br: () => <span className="block h-0.5" />,
          }}
        >
          {translations.important_details}
        </Markdown>
      </div>
    </Grid>
  );
}
