import { z } from "zod";
import { translations } from "../lib/texts";
import Button from "./Button";
import { RadioGroup } from "@ark-ui/react";
import { cx } from "class-variance-authority";

const ConfirmationSchema = z
  .object({
    foodSpecial: z.boolean(),
    foodSpecialInput: z.string().optional(),
    plusOne: z.boolean(),
    plusOneFoodSpecial: z.boolean().optional(),
    plusOneFoodSpecialInput: z.string().optional(),
    song: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.foodSpecial && !data.foodSpecialInput?.trim()) {
      ctx.addIssue({
        path: ["foodSpecialInput"],
        code: z.ZodIssueCode.custom,
        message: "Este campo es requerido",
      });
    }

    if (data.plusOne && data.plusOneFoodSpecial === undefined) {
      ctx.addIssue({
        path: ["plusOneFoodSpecial"],
        code: z.ZodIssueCode.custom,
        message: "Debes indicar si hay comida especial para tu acompañante",
      });
    }

    if (data.plusOneFoodSpecial && !data.plusOneFoodSpecialInput?.trim()) {
      ctx.addIssue({
        path: ["plusOneFoodSpecialInput"],
        code: z.ZodIssueCode.custom,
        message: "Este campo es requerido",
      });
    }
  });

export function FormScreen({
  onClick,
  closeClick,
}: {
  onClick: () => void;
  closeClick: () => void;
}) {
  return (
    <section className="flex gap-6 flex-col">
      <div className="w-full flex justify-end">
        <Button variant="text-blue" onClick={closeClick}>
          {translations.cta_close}
        </Button>
      </div>

      <form className="flex flex-col gap-12">
        <RadioGroup.Root className="lg:px-[12rem] flex gap-5 flex-col">
          <RadioGroup.Label className="text-subtitle-s-mobile lg:text-subtitle-s">
            {translations.confirmation_title_2}
          </RadioGroup.Label>

          <p className="text-base-mobile lg:text-base">
            {translations.confirmation_text_2}
          </p>

          <div className="flex gap-5 mt-3">
            {[translations.cta_yes_i, translations.cta_no_i].map((item) => (
              <RadioGroup.Item
                key={item}
                value={item}
                className={cx(
                  "flex items-center gap-2 cursor-pointer text-button-mobile lg:text-button",
                  "data-[state=checked]:bg-blue data-[state=checked]:text-white",
                  "shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.875rem] pt-2.5 pb-2 rounded-full"
                )}
              >
                <RadioGroup.ItemText>{item}</RadioGroup.ItemText>
                <RadioGroup.ItemHiddenInput />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>

        <div className="lg:px-[12rem] flex gap-5 flex-col">
          <h2 className="text-subtitle-s-mobile lg:text-subtitle-s ">
            {translations.confirmation_title_3}
          </h2>
          {/* TODO: input */}
          {translations.confirmation_placeholder_3}
        </div>

        <RadioGroup.Root className="lg:px-[12rem] flex gap-5 flex-col">
          <RadioGroup.Label className="text-subtitle-s-mobile lg:text-subtitle-s">
            {translations.confirmation_title_4}
          </RadioGroup.Label>

          <div className="flex gap-5 mt-3">
            {[
              translations.confirmation_cta_no,
              translations.confirmation_cta_yes,
            ].map((item) => (
              <RadioGroup.Item
                key={item}
                value={item}
                className={cx(
                  "flex items-center gap-2 cursor-pointer text-button-mobile lg:text-button",
                  "data-[state=checked]:bg-blue data-[state=checked]:text-white",
                  "shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.875rem] pt-2.5 pb-2 rounded-full"
                )}
              >
                <RadioGroup.ItemText>{item}</RadioGroup.ItemText>
                <RadioGroup.ItemHiddenInput />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>

        <RadioGroup.Root className="lg:px-[12rem] flex gap-5 flex-col">
          <RadioGroup.Label className="text-subtitle-s-mobile lg:text-subtitle-s">
            {translations.confirmation_title_5}
          </RadioGroup.Label>

          <div className="flex gap-5 mt-3">
            {[
              translations.confirmation_cta_yes_5,
              translations.confirmation_cta_no_5,
            ].map((item) => (
              <RadioGroup.Item
                key={item}
                value={item}
                className={cx(
                  "flex items-center gap-2 cursor-pointer text-button-mobile lg:text-button",
                  "data-[state=checked]:bg-blue data-[state=checked]:text-white",
                  "shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.875rem] pt-2.5 pb-2 rounded-full"
                )}
              >
                <RadioGroup.ItemText>{item}</RadioGroup.ItemText>
                <RadioGroup.ItemHiddenInput />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>

        <div className="lg:px-[12rem] flex gap-5 flex-col">
          <h2 className="text-subtitle-s-mobile lg:text-subtitle-s ">
            {translations.confirmation_title_6}
          </h2>
          {/* TODO: input */}
          {translations.confirmation_placeholder_6}
        </div>

        <div className="lg:px-[12rem] flex gap-5 flex-col">
          <h2 className="text-subtitle-s-mobile lg:text-subtitle-s ">
            {translations.confirmation_title_7}
          </h2>
          {/* TODO: input */}
          {translations.confirmation_placeholder_7}
        </div>

        <div className="lg:px-[12rem] flex justify-center">
          <Button variant="bg-blue" onClick={onClick}>
            {translations.confirmation_send_form}
          </Button>
        </div>
      </form>
    </section>
  );
}
