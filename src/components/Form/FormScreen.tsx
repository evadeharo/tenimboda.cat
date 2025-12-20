import { z } from "zod";
import { translations } from "../../lib/texts";
import Button from "../Button";
import { RadioGroup } from "@ark-ui/react";
import { cx } from "class-variance-authority";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { FormField } from "./FormField";
import { useUser } from "../../context/UserContext";
import { confirmation, type ConfirmationData } from "../../api/confirmation";
import { useFormContext } from "../../context/useFormContext";
import { useState } from "react";

const ConfirmationSchema = z
  .object({
    foodSpecial: z.string(),
    foodSpecialInput: z.string().optional(),
    plusOne: z.string().optional(),
    plusOneFoodSpecial: z.string().optional(),
    plusOneFoodSpecialInput: z.string().optional(),
    song: z.string().optional(),
    userId: z.string(),
    name: z.string(),
    plusOneName: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.foodSpecial === "true" && !data.foodSpecialInput?.trim()) {
      ctx.addIssue({
        path: ["foodSpecialInput"],
        code: z.ZodIssueCode.custom,
        message: "Necessitem aquesta info!",
      });
    }
    if (data.plusOne === "true" && data.plusOneFoodSpecial === undefined) {
      ctx.addIssue({
        path: ["plusOneFoodSpecial"],
        code: z.ZodIssueCode.custom,
        message: "Ei! Has de respondre això",
      });
    }
    if (
      data.plusOneFoodSpecial === "true" &&
      !data.plusOneFoodSpecialInput?.trim()
    ) {
      ctx.addIssue({
        path: ["plusOneFoodSpecialInput"],
        code: z.ZodIssueCode.custom,
        message: "Necessitem aquesta info!",
      });
    }
  });

export function FormScreen({
  onClick,
  closeClick,
  setStepId,
}: {
  onClick: () => void;
  closeClick: () => void;
  setStepId: (e: "welcome" | "form" | "thanks" | "warning" | "error") => void;
}) {
  const { user } = useUser();
  const { formData, setFormData } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, fields] = useForm({
    id: "confirmation-form",
    defaultValue: formData,
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ConfirmationSchema });
    },
    onSubmit: async (event) => {
      event.preventDefault();

      if (isSubmitting) return;
      setIsSubmitting(true);

      const formData = new FormData(event.currentTarget);
      const result = parseWithZod(formData, { schema: ConfirmationSchema });

      if (result.status !== "success") {
        setStepId("error");
        setIsSubmitting(false);
        return;
      }

      const payload = result.payload as ConfirmationData;

      try {
        const response = await confirmation(payload);

        setFormData(payload);

        if (response.message) {
          onClick();
        } else {
          setStepId("error");
        }
      } catch (err) {
        console.error(err);
        setStepId("error");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  function closeClickAction() {
    const currentData = {
      foodSpecial: fields.foodSpecial.value,
      foodSpecialInput: fields.foodSpecialInput.value,
      plusOne: fields.plusOne.value,
      plusOneFoodSpecial: fields.plusOneFoodSpecial.value,
      plusOneFoodSpecialInput: fields.plusOneFoodSpecialInput.value,
      song: fields.song.value,
      userId: fields.userId.value,
      name: fields.name.value,
      plusOneName: fields.plusOneName.value,
    };

    setFormData(currentData);
    closeClick();
  }

  return (
    <section className="flex gap-8 flex-col">
      <div className="w-full flex justify-end">
        <Button variant="text-blue" onClick={closeClickAction}>
          {translations.cta_close}
        </Button>
      </div>

      <form className="flex flex-col gap-12" {...getFormProps(form)}>
        <input
          {...getInputProps(fields.name, { type: "hidden" })}
          value={user?.name}
        />
        <input
          {...getInputProps(fields.plusOneName, { type: "hidden" })}
          value={user?.plusOneName}
        />
        <input
          {...getInputProps(fields.userId, { type: "hidden" })}
          value={user?.userId}
        />
        <div className="lg:px-[12rem] flex gap-5 flex-col">
          <div className="flex flex-col gap-2">
            <h2 className="text-subtitle-s-mobile lg:text-subtitle-s">
              {translations.confirmation_title_2}
            </h2>
            <p className="text-base-mobile lg:text-[0.9375rem]">
              {translations.confirmation_text_2}
            </p>
          </div>

          <RadioGroup.Root
            name={fields.foodSpecial.name}
            defaultValue={fields.foodSpecial.initialValue}
            className="flex gap-4"
          >
            {[
              { label: translations.cta_no_i, value: "false" },
              { label: translations.cta_yes_i, value: "true" },
            ].map((item) => (
              <RadioGroup.Item
                key={item.value}
                value={item.value}
                className={cx(
                  "flex items-center gap-2 cursor-pointer text-button-mobile lg:text-button w-max",
                  "data-[state=checked]:bg-blue data-[state=checked]:text-white",
                  "shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.2rem] md:px-[1.875rem] pt-2.5 pb-2 rounded-full"
                )}
              >
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                <RadioGroup.ItemHiddenInput />
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
          {fields.foodSpecial.errors && (
            <span className="text-[red] text-base-mobile lg:text-[0.875rem]">
              {fields.foodSpecial.errors}
            </span>
          )}
        </div>

        <FormField
          label={translations.confirmation_title_3}
          errors={fields.foodSpecialInput.errors}
          className={cx(
            "lg:px-[12rem]",
            fields.foodSpecial.value !== "true" &&
              "opacity-50 cursor-not-allowed"
          )}
        >
          <input
            placeholder={translations.confirmation_placeholder_3}
            {...getInputProps(fields.foodSpecialInput, { type: "text" })}
            className="text-base-mobile lg:text-base w-full border-b-[1px] my-4 pb-1"
            disabled={fields.foodSpecial.value !== "true"}
          />
        </FormField>

        {user?.plusOneName && (
          <div className="lg:px-[12rem] flex gap-5 flex-col">
            <h2 className="text-subtitle-s-mobile lg:text-subtitle-s">
              {translations.confirmation_title_4.replace(
                "{nomAcompanyant}",
                user.plusOneName
              )}
            </h2>

            <RadioGroup.Root
              name={fields.plusOne.name}
              defaultValue={fields.plusOne.initialValue}
              className="flex gap-4"
            >
              {[
                { label: translations.confirmation_cta_no, value: "false" },
                { label: translations.confirmation_cta_yes, value: "true" },
              ].map((item) => (
                <RadioGroup.Item
                  key={item.value}
                  value={item.value}
                  className={cx(
                    "flex items-center gap-2 cursor-pointer text-button-mobile lg:text-button w-max",
                    "data-[state=checked]:bg-blue data-[state=checked]:text-white",
                    "shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.875rem] pt-2.5 pb-2 rounded-full"
                  )}
                >
                  <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  <RadioGroup.ItemHiddenInput />
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
            {fields.plusOne.errors && (
              <span className="text-[red] text-base-mobile lg:text-[0.875rem]">
                {fields.plusOne.errors}
              </span>
            )}
          </div>
        )}

        {user?.plusOneName && (
          <div
            className={cx(
              "lg:px-[12rem] flex gap-5 flex-col",
              fields.plusOne.value !== "true" && "opacity-50 cursor-not-allowed"
            )}
          >
            <h2 className="text-subtitle-s-mobile lg:text-subtitle-s">
              {translations.confirmation_title_5}
            </h2>

            <RadioGroup.Root
              name={fields.plusOneFoodSpecial.name}
              defaultValue={fields.plusOneFoodSpecial.initialValue}
              className="flex gap-4"
              disabled={fields.plusOne.value !== "true"}
            >
              {[
                { label: translations.confirmation_cta_no_5, value: "false" },
                { label: translations.confirmation_cta_yes_5, value: "true" },
              ].map((item) => (
                <RadioGroup.Item
                  key={item.value}
                  value={item.value}
                  className={cx(
                    "flex items-center gap-2 text-button-mobile lg:text-button w-max",
                    "data-[state=checked]:bg-blue data-[state=checked]:text-white",
                    "shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.875rem] pt-2.5 pb-2 rounded-full",
                    fields.plusOne.value === "true"
                      ? "cursor-pointer"
                      : "cursor-not-allowed  "
                  )}
                >
                  <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  <RadioGroup.ItemHiddenInput />
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
            {fields.plusOneFoodSpecial.errors && (
              <span className="text-[red] text-base-mobile lg:text-[0.875rem]">
                {fields.plusOneFoodSpecial.errors}
              </span>
            )}
          </div>
        )}

        {user?.plusOneName && (
          <FormField
            label={translations.confirmation_title_6}
            errors={fields.plusOneFoodSpecialInput.errors}
            className={cx(
              "lg:px-[12rem]",
              fields.plusOneFoodSpecial.value !== "true" &&
                "opacity-50 cursor-not-allowed"
            )}
          >
            <input
              placeholder={translations.confirmation_placeholder_6}
              {...getInputProps(fields.plusOneFoodSpecialInput, {
                type: "text",
              })}
              className="text-base-mobile lg:text-base w-full border-b-[1px] my-4 pb-1"
              disabled={fields.plusOneFoodSpecial.value !== "true"}
            />
          </FormField>
        )}

        <FormField
          label={translations.confirmation_title_7}
          errors={fields.song.errors}
          className="lg:px-[12rem]"
        >
          <input
            placeholder={translations.confirmation_placeholder_7}
            {...getInputProps(fields.song, { type: "text" })}
            className="text-base-mobile lg:text-base w-full border-b-[1px] my-4 pb-1"
          />
        </FormField>

        <div className="lg:px-[12rem] flex justify-center">
          <Button type="submit" variant="bg-blue" disabled={isSubmitting} className="flex gap-2">
            {translations.confirmation_send_form}
            {isSubmitting && <div className="animate-ping size-1 bg-blue rounded-full mt-1" />}
          </Button>
        </div>
      </form>
    </section>
  );
}
