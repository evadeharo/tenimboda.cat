import { useState } from "react";
import { FormFirstScreen } from "../components/FormFirstScreen";
import { FormThanksScreen } from "../components/FormThanksScreen";
import { FormScreen } from "../components/FormScreen";

export default function FormPage() {
  const [stepId, setStepId] = useState<"welcome" | "form" | "thanks">(
    "welcome"
  );

  return (
    <main className="bg-yellow min-h-screen w-full grid place-items-center">
      <div className="bg-white w-[90%] lg:w-[65%] rounded-[3.125rem] shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] p-[3rem] my-28">
        {stepId === "welcome" && (
          <FormFirstScreen
            onClick={() => setStepId("form")}
            closeClick={() => window.alert("Cuidado!")}
          />
        )}
        {stepId === "form" && (
          <FormScreen
            closeClick={() => window.alert("Cuidado!")}
            onClick={() => console.log("sent")}
            // onClick={() => setStepId("thanks")}
          />
        )}
        {stepId === "thanks" && (
          <FormThanksScreen
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            closeClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </div>
    </main>
  );
}
