import { twOn } from "./tw-group";
import { ClassNameValue } from "./types";

/**
 * 
 * Attribute selectors
 * 
 */

/**
 * 
 * Hover, focus, and active
 * 
 */

export function twOnAria(state: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`aria-${state}`, ...classNames);
}

export function twOnAriaBusy(...classNames: ClassNameValue[]): string
{
  return twOn('aria-busy', ...classNames);
}

export function twOnAriaChecked(...classNames: ClassNameValue[]): string
{
  return twOn('aria-checked', ...classNames);
}

export function twOnAriaDisabled(...classNames: ClassNameValue[]): string
{
  return twOn('aria-disabled', ...classNames);
}

export function twOnAriaExpanded(...classNames: ClassNameValue[]): string
{
  return twOn('aria-expanded', ...classNames);
}

export function twOnAriaHidden(...classNames: ClassNameValue[]): string
{
  return twOn('aria-hidden', ...classNames);
}

export function twOnAriaPressed(...classNames: ClassNameValue[]): string
{
  return twOn('aria-pressed', ...classNames);
}

export function twOnAriaReadonly(...classNames: ClassNameValue[]): string
{
  return twOn('aria-readonly', ...classNames);
}

export function twOnAriaRequired(...classNames: ClassNameValue[]): string
{
  return twOn('aria-required', ...classNames);
}

export function twOnAriaSelected(...classNames: ClassNameValue[]): string
{
  return twOn('aria-selected', ...classNames);
}

/**
 * 
 * Data attributes
 * 
 */

export function twOnData(state: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`data-${state}`, ...classNames);
}

/**
 * 
 * RTl support
 * 
 */

export function twOnLtr(...classNames: ClassNameValue[]): string
{
  return twOn('ltr', ...classNames);
}

export function twOnRtl(...classNames: ClassNameValue[]): string
{
  return twOn('rtl', ...classNames);
}

/**
 * 
 * Open/closed states
 * 
 */

export function twOnOpen(...classNames: ClassNameValue[]): string
{
  return twOn('open', ...classNames);
}

