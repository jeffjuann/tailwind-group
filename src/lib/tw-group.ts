import { twMerge } from "tailwind-merge";
import { ClassNameValue } from "./types";

export function twOn(state: string, ...classNames: ClassNameValue[]): string
{
  if(classNames.length === 0) return '';

  if(state === '') return twMerge(...classNames);

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
              return `${acc} ${state}:${className}`;
            }, '' as string);
        return twMerge(acc, result);
      }
      else
      {
        return acc;
      }
    }, '' as string);

  return classNameResult;
}