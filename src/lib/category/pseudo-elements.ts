import { twOn } from "../core/tw-group";
import { ClassNameValue } from "../types";

/**
 * 
 * Pseudo-elements
 * 
 */

/**
 * 
 * Before and after
 * 
 */

export function twOnBefore(...classNames: ClassNameValue[]): string
{
  return twOn('before', ...classNames);
}

export function twOnAfter(...classNames: ClassNameValue[]): string
{
  return twOn('after', ...classNames);
}

/**
 * 
 * Placeholder test
 * 
 */

export function twOnPlaceholder(...classNames: ClassNameValue[]): string
{
  return twOn('placeholder', ...classNames);
}

/**
 * 
 * File input buttons
 * 
 */

export function twOnFile(...classNames: ClassNameValue[]): string
{
  return twOn('file', ...classNames);
}

/**
 * 
 * List markers
 * 
 */

export function twOnMarker(...classNames: ClassNameValue[]): string
{
  return twOn('marker', ...classNames);
}

/**
 * 
 * Higlighted text
 * 
 */

export function twOnSelection(...classNames: ClassNameValue[]): string
{
  return twOn('selection', ...classNames);
}

/**
 * 
 * First-line and first-letter
 * 
 */

export function twOnFirstLine(...classNames: ClassNameValue[]): string
{
  return twOn('first-line', ...classNames);
}

export function twOnFirstLetter(...classNames: ClassNameValue[]): string
{
  return twOn('first-letter', ...classNames);
}

/**
 * 
 * Dialog backdrops
 * 
 */

export function twOnBackdrop(...classNames: ClassNameValue[]): string
{
  return twOn('backdrop', ...classNames);
}
