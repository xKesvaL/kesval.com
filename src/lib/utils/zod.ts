import { ZodType } from "zod";
export const getAllChecks = (field: ZodType) => {
  return field.def.checks?.map((check) => {

    switch (check._zod.def.check) {
      case "min_length":
        return {
          type: check._zod.def.check,
          check: (check._zod.def as unknown as { minimum: number }).minimum
        } as const
    }

    return null
  })
}