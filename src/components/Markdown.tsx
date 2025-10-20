import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = ComponentProps<typeof ReactMarkdown>;

export const defaultPlugins = [remarkGfm] satisfies Props["remarkPlugins"];

export const defaultComponents = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" className="text-blue">
      {children}
    </a>
  ),
  p: ({ children }) => (
    <p className="group">
      {children}
      <br className="group-last:hidden" />
    </p>
  ),
  br: () => <span className="block h-5" />,
} satisfies Props["components"];

export default function Markdown({
  children = null,
  components = {},
  remarkPlugins = defaultPlugins,
  ...props
}: Props) {
  const parsed = children?.replace(/\n|<br>/g, "  \n");

  return (
    <ReactMarkdown
      {...props}
      remarkPlugins={remarkPlugins}
      components={Object.assign(defaultComponents, components)}
    >
      {parsed}
    </ReactMarkdown>
  );
}
