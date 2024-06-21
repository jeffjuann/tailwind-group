import { resolveVariant } from "./utils/variant-resolver";
import { getDefaultClasses, getGroupedClasses, getGroupclassNames, isGroupclassNames } from "./utils/regex-parser";

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
      groupExtractor(twClassNames, group);
    });
  }
  
  return twClassNames;
}

function groupExtractor(container: string[], group: string, prefixVariant?: string)
{
  const splitIndex = group.indexOf(':(');
  const presentVariant = group.slice(0, splitIndex);
  const classes = group.slice(splitIndex + 2);
  const variant = prefixVariant ? `${prefixVariant}:${presentVariant}` : presentVariant;
  const classNames = getGroupclassNames(classes);
  if(classNames)
  {
    classNames.forEach((className) =>
    {
      const group = isGroupclassNames(className);
      if(group)
      {
        groupExtractor(container, className, variant);
      }
      else if(className)
      {
        container.push(resolveVariant(variant, className));
      }
    })
  }
}