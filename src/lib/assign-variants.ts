export function addDefaultVariant(variant: string, className: string): string
{
  return `${variant}:${className}`;
}

export function addVariant(variant: string, className: string): string
{
  switch (variant) {
    case 'twOnHover':
      return `hover:${className}`;
    case 'twOnFocus':
      return `focus:${className}`;
    case 'twOnActive':
      return `active:${className}`;
    default:
      return '';
  }
}