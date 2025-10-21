import { cx } from "class-variance-authority";
import { translations } from "../lib/texts";
import Button from "./Button";

function ButtonNavigation({
  text,
  className,
  link,
}: {
  link: string;
  text: string;
  className?: string;
}) {
  return (
    <a href={link} className={cx("text-cta pr-[1.65625rem]", className)}>
      {text}
    </a>
  );
}

const navItems = [
  { text: translations.cta_important, link: "#important" },
  { text: translations.cta_location, link: "#lloc" },
  { text: translations.cta_times, link: "#temps" },
  { text: translations.cta_present, link: "#regal" },
  { text: translations.cta_faqs, link: "#faqs" },
];

export default function Header() {
  return (
    <nav className="fixed top-[2.85rem] end-[3rem] z-20 flex flex-col gap-[0.8rem] items-end">
      <Button>{translations.cta_confirmation}</Button>
      {navItems.map((item, i) => (
        <ButtonNavigation
          key={item.text}
          text={item.text}
          link={item.link}
          className={i === 0 ? "mt-1" : ""}
        />
      ))}
    </nav>
  );
}
