import { useUser } from "../../context/UserContext";
import { translations } from "../../lib/texts";
import Button from "../Button";

export function FormFirstScreen({
  onClick,
  closeClick,
}: {
  onClick: () => void;
  closeClick: () => void;
}) {
  const { user } = useUser();

  return (
    <section className="flex gap-8 flex-col">
      <div className="w-full flex justify-end">
        <Button variant="text-blue" onClick={closeClick}>
          {translations.cta_close}
        </Button>
      </div>
      <div className="lg:px-[12rem] flex gap-5 flex-col">
        <h2 className="text-subtitle-s-mobile lg:text-subtitle-s text-center">
          {translations.confirmation_title_1.replace(
            "{nomConvidat}",
            user?.name ?? "amic"
          )}
        </h2>
        <p className="text-center text-base-mobile lg:text-base">
          {translations.confirmation_text_1}
        </p>
        <div className="flex gap-5 mt-5 justify-center">
          <Button variant="bg-blue" onClick={onClick}>
            {translations.cta_confirm}
          </Button>
        </div>
      </div>
    </section>
  );
}
