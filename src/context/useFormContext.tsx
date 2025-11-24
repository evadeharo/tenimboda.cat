import { createContext, useContext, useState, type ReactNode } from "react";
import type { ConfirmationData } from "../api/confirmation";

type FormContextType = {
  formData: Partial<ConfirmationData>;
  setFormData: (data: Partial<ConfirmationData>) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext debe usarse dentro de FormProvider");
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormDataState] = useState<Partial<ConfirmationData>>({});

  const setFormData = (data: Partial<ConfirmationData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
