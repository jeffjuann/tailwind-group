export function concatVariant(variant: string, className: string): string
{
  return `${variant}:${className}`;
}

export function resolveVariant(variant: string, className: string, options?: { type: 'custom' }): string
{
  if(options?.type === 'custom')
  {
    return concatVariant(variant, className);
  }
  else
  {
    switch (variant)
    {
      case 'twOnHover':
        return concatVariant('hover', className);
      case 'twOnFocus':
        return concatVariant('focus', className);
      case 'twOnActive':
        return concatVariant('active', className);
      default:
        return concatVariant(variant, className);
    }
  }
}