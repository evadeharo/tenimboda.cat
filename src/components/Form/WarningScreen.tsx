import { translations } from "../../lib/texts";
import Button from "../Button";

export function WarningScreen({
  onClick,
  closeClick,
}: {
  onClick: () => void;
  closeClick: () => void;
}) {
  return (
    <section className="flex gap-8 flex-col">
      <div className="w-full flex justify-end">
        <Button variant="text-blue" onClick={closeClick}>
          {translations.cta_back_form}
        </Button>
      </div>
      <div className="lg:px-[12rem] flex gap-5 flex-col">
        <h2 className="text-subtitle-s-mobile lg:text-subtitle-s text-center">
          {translations.warning_title}
        </h2>
        <p className="text-center text-base-mobile lg:text-base">
          {translations.warning_text}
        </p>
        <div className="flex gap-5 mt-5 justify-center">
          <Button variant="bg-blue" onClick={onClick}>
            {translations.cta_leave_form}
          </Button>
        </div>
      </div>
    </section>
  );
}
