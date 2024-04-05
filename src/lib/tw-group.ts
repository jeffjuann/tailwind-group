import { twMerge } from "tailwind-merge";
import { ClassNameValue } from "./types";
import clsx from "clsx";

export function twOn(state: string, ...classNames: ClassNameValue[]): string
{
  if(classNames.length === 0) return '';

  if(state === '') return twMerge(clsx(...classNames));

  const classNameResult: string = classNames.reduce(
    (acc: string, className: ClassNameValue) =>
    {
      if(Array.isArray(className))
      {
        const result: string = twOn(state, ...className);
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
              return twMerge(acc, `${state}::${className}`);
            }, '' as string);
        return twMerge(acc, result);
      }
      else
      {
        return acc;
      }
    }, '' as string);

  return twMerge(clsx(classNameResult));
}