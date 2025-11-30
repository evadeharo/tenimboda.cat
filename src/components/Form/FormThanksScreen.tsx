import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { translations } from "../../lib/texts";
import Button from "../Button";

export function FormThanksScreen() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <section className="flex gap-8 flex-col">
      <div className="lg:px-[12rem] flex gap-5 flex-col">
        <h2 className="text-subtitle-s-mobile lg:text-subtitle-s text-center">
          {translations.thanks_title.replace(
            "${nomConvidat}",
            user?.name ?? "amic"
          )}
        </h2>
        <p className="text-center text-base-mobile lg:text-base">
          {translations.thanks_text}
        </p>
        <div className="flex gap-5 mt-5 justify-center">
          <Button
            variant="bg-blue"
            onClick={() => navigate(`/?userId=${user?.userId}`)}
          >
            {translations.thanks_cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
