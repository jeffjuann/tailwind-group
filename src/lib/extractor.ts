import { addDefaultVariant, addVariant } from "./assign-variants";
import { getDefaultClasses, getGroupedClasses, getGroupclassNames } from "./regex-parser";

export function twExtractor(extensions: string[])
{
  const extract = {} as any;
  extensions.forEach((extension: string) =>
  {
    extract[extension] = mainExtractor;
  }); 
  return extract;
}

export function mainExtractor(content: string): string[] 
{
  let twClassNames: string[] = [];
  twClassNames.push(...getDefaultClasses(content) || []); // parse normal tailwind classes

  const twGroups = getGroupedClasses(content);
  if(twGroups)
  { 
    twGroups.forEach((group: string) =>
    {
      const [variant, params] = group.split('(');
      console.log(variant, params);
      const classNames = getGroupclassNames(params);

      if(variant === 'twOn' && classNames)
      {
        const variant = classNames.shift();
        if(variant)
        {
          classNames.forEach((className) => 
          {
            if(className !== '') twClassNames.push(addDefaultVariant(variant, className));
          });
        }
      }
      else if(classNames)
      {
        classNames.forEach((className) => 
        {
          if(className !== '') twClassNames.push(addVariant(variant, className));
        });
      }
    });
  }
  
  return twClassNames;
}

