import { twOn } from "./tw-group";
import { ClassNameValue } from "./types";

/**
 * 
 *  Media and feature queries
 * 
 */

/**
 * 
 * Responsive breakpoints
 * 
 */

export function twOnMd(...classNames: ClassNameValue[]): string
{
  return twOn('md', ...classNames);
}

export function twOnLg(...classNames: ClassNameValue[]): string
{
  return twOn('lg', ...classNames);
}

/**
 * 
 * Prefers color scheme
 * 
 */

export function twOnDark(...classNames: ClassNameValue[]): string
{
  return twOn('dark', ...classNames);
}

/**
 * 
 * Prefers reduced motion
 * 
 */

export function twOnMotionReduce(...classNames: ClassNameValue[]): string
{
  return twOn('motion-reduce', ...classNames);
}

export function twOnMotionSafe(...classNames: ClassNameValue[]): string
{
  return twOn('motion-safe', ...classNames);
}

/**
 * 
 * Prefers contrast
 * 
 */

export function twOnContrastMore(...classNames: ClassNameValue[]): string
{
  return twOn('contrast-more', ...classNames);
}

export function twOnContrastLess(...classNames: ClassNameValue[]): string
{
  return twOn('contrast-less', ...classNames);
}

/**
 * 
 * Forced colors mode
 * 
 */

export function twOnForcedColors(...classNames: ClassNameValue[]): string
{
  return twOn('forced-colors', ...classNames);
}

/**
 * 
 * Viewport orientation
 * 
 */

export function twOnPortrait(...classNames: ClassNameValue[]): string
{
  return twOn('portrait', ...classNames);
}

export function twOnLandscape(...classNames: ClassNameValue[]): string
{
  return twOn('landscape', ...classNames);
}

export function twOnPrint(...classNames: ClassNameValue[]): string
{
  return twOn('print', ...classNames);
}

export function twOnSupportRules(rule: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`support-${rule}`, ...classNames);
}