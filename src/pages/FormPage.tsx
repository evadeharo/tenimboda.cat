import { useState } from "react";
import { FormThanksScreen } from "../components/Form/FormThanksScreen";
import { FormScreen } from "../components/Form/FormScreen";
import { WarningScreen } from "../components/Form/WarningScreen";
import { useNavigate } from "react-router-dom";
import { ErrorScreen } from "../components/Form/ErrorScreen";
import { FormFirstScreen } from "../components/Form/FormFirstScreen";
import { useUser } from "../context/UserContext";

export default function FormPage() {
  const [stepId, setStepId] = useState<
    "welcome" | "form" | "thanks" | "warning" | "error"
  >("welcome");
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <main className="bg-yellow min-h-screen w-full grid place-items-center">
      <div className="bg-white w-[90%] lg:w-[65%] rounded-[3.125rem] shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] p-[3rem] my-28">
        {stepId === "welcome" && (
          <FormFirstScreen
            onClick={() => setStepId("form")}
            closeClick={() => setStepId("warning")}
          />
        )}
        {stepId === "form" && (
          <FormScreen
            closeClick={() => setStepId("warning")}
            onClick={() => setStepId("thanks")}
            setStepId={setStepId}
          />
        )}
        {stepId === "warning" && (
          <WarningScreen
            onClick={() => navigate(`/?userId${user?.userId}`)}
            closeClick={() => setStepId("form")}
          />
        )}
        {stepId === "error" && (
          <ErrorScreen
            closeClick={() => setStepId("form")}
            onClick={() => navigate(`/?userId${user?.userId}`)}
          />
        )}
        {stepId === "thanks" && <FormThanksScreen />}
      </div>
    </main>
  );
}
