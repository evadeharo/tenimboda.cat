import { cx } from "class-variance-authority";
import { translations } from "../lib/texts";
import Button from "./Button";

function ButtonNavigation({
  onClick,
  text,
  className,
}: {
  onClick: () => void;
  text: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cx("text-cta pr-[1.65625rem]", className)}
    >
      {text}
    </button>
  );
}

const navItems = [
  translations.cta_important,
  translations.cta_location,
  translations.cta_times,
  translations.cta_present,
  translations.cta_faqs,
];

export default function Header() {
  return (
    <nav className="fixed top-[2.85rem] end-[3rem] z-20 flex flex-col gap-[0.8rem] items-end">
      <Button>{translations.cta_confirmation}</Button>
      {navItems.map((text, i) => (
        <ButtonNavigation
          key={text}
          onClick={() => console.log(text)}
          text={text}
          className={i === 0 ? "mt-1" : ""}
        />
      ))}
    </nav>
  );
}
