import { cx } from "class-variance-authority";
import { translations } from "../lib/texts";
import Button from "./Button";
import { useUser } from "../context/UserContext";

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
    <a
      href={link}
      className={cx("text-cta-mobile lg:text-cta pr-[1.65625rem]", className)}
    >
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
  const { user } = useUser()

  return (
    <>
      <div className="bg-gradient-to-b from-yellow to-transparent fixed top-0 left-0 w-full h-[12rem] lg:hidden" />
      <nav className="fixed top-[2rem] end-[1rem] lg:top-[2.45rem] lg:end-[2.5rem] z-20 flex flex-wrap lg:flex-col gap-[0.8rem] items-end justify-end">
        <Button asChild>
          <a href={`/confirmation?userId=${user?.userId}`}>{translations.cta_confirmation} </a>
        </Button>
        {navItems.map((item, i) => (
          <ButtonNavigation
            key={item.text}
            text={item.text}
            link={item.link}
            className={i === 0 ? "mt-1" : ""}
          />
        ))}
      </nav>
    </>
  );
}
