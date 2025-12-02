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
  const { user, hasAnswered } = useUser();

  return (
    <>
      <div className="bg-gradient-to-b from-yellow to-transparent fixed top-0 left-0 w-full h-[12rem] md:hidden z-30" />
      <nav className="fixed top-[2rem] end-[1rem] md:top-[2.45rem] md:end-[2.5rem] z-40 flex flex-wrap md:flex-col gap-[0.8rem] items-end justify-end">
        {user && !hasAnswered && (
          <Button asChild>
            <a href={`/confirmation?userId=${user?.userId}`}>
              {translations.cta_confirmation}{" "}
            </a>
          </Button>
        )}
        {hasAnswered && <div className="text-button-mobile lg:text-button text-white bg-blue px-[1.4rem] md:px-[1.875rem] pt-2.5 pb-2 rounded-full ">Ja has confirmat!</div>}
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
