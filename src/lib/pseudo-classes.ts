import { twOn } from "./tw-group";
import { ClassNameValue } from "./types";

/**
 * 
 * Pseudo-classes
 * 
 */

/**
 * 
 * Hover, focus, and active
 * 
 */

export function twOnHover(...classNames: ClassNameValue[]): string
{
  return twOn('hover', ...classNames);
}

export function twOnFocus(...classNames: ClassNameValue[]): string
{
  return twOn('focus', ...classNames);
}

export function twOnActive(...classNames: ClassNameValue[]): string
{
  return twOn('active', ...classNames);
}

/**
 * 
 * First, last, even, and odd
 * 
 */

export function twOnFirst(...classNames: ClassNameValue[]): string
{
  return twOn('first', ...classNames);
}

export function twOnLast(...classNames: ClassNameValue[]): string
{
  return twOn('last', ...classNames);
}

export function twOnEven(...classNames: ClassNameValue[]): string
{
  return twOn('even', ...classNames);
}

export function twOnOdd(...classNames: ClassNameValue[]): string
{
  return twOn('odd', ...classNames);
}

/**
 * 
 * Form states
 * 
 */

export function twOnRequired(...classNames: ClassNameValue[]): string
{
  return twOn('required', ...classNames);
}

export function twOnInvalid(...classNames: ClassNameValue[]): string
{
  return twOn('invalid', ...classNames);
}

export function twOnDisabled(...classNames: ClassNameValue[]): string
{
  return twOn('disabled', ...classNames);
}

/**
 * 
 * Styling based on the parent state
 * 
 */

export function twOnGroup(state: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`group-${state}`, ...classNames);
}

export function twOnGroupHover(...classNames: ClassNameValue[]): string
{
  return twOn('group-hover', ...classNames);
}

export function twOnGroupFocus(...classNames: ClassNameValue[]): string
{
  return twOn('group-focus', ...classNames);
}

/**
 * 
 * Styling based on sibling state
 * 
 */

export function twOnSibling(state: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`peer-${state}`, ...classNames);
}

export function twOnSiblingHover(...classNames: ClassNameValue[]): string
{
  return twOn('peer-hover', ...classNames);
}

export function twOnSiblingFocus(...classNames: ClassNameValue[]): string
{
  return twOn('peer-focus', ...classNames);
}

/**
 * 
 * Styling direct children
 * 
 */

export function twOnChild(...classNames: ClassNameValue[]): string
{
  return twOn('*', ...classNames);
}

/**
 * 
 * Styling based on descendants
 * 
 */

export function twOnHas(state: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`has-${state}`, ...classNames);
}

export function twOnGroupHas(state: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`group-has-${state}`, ...classNames);
}

export function twOnSiblingHas(state: string, ...classNames: ClassNameValue[]): string
{
  return twOn(`peer-has-${state}`, ...classNames);
}

