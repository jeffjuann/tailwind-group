import { twMerge } from "tailwind-merge";
import { ClassNameValue } from "../types";
import { resolveVariant } from "../utils/variant-resolver";

export function twOn(variant: string, ...classNames: ClassNameValue[]): string
{
  if(classNames.length === 0) return '';

  if(variant === '') return twMerge(...classNames);

  const classNameResult: string = classNames.reduce(
    (acc: string, className: ClassNameValue) =>
    {
      if(Array.isArray(className))
      {
        const result: string = twOn(variant, ...className);
        return twMerge(acc, result);
      }
      else if(typeof className === 'string')
      {
        const result = className
          .trim()
          .split(' ')
          .reduce(
            (acc: string, className: string) =>
            {
              return twMerge(acc, resolveVariant(variant, className, { type: "custom" }));
            }, '' as string);
        return twMerge(acc, result);
      }
      else
      {
        return acc;
      }
    }, '' as string);

  return twMerge(classNameResult);
}