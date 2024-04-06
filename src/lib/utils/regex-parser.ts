export function getDefaultClasses(content: string): string[] | null
{
  return content.match(/[^<>"'`\s]*[^<>"'`\s:]/g);
}

export function getGroupedClasses(content: string): string[] | null
{
  return content.match(/twOn[a-zA-Z]*\((.*?)\)/g);
}

export function getGroupclassNames(content: string): string[] | null
{
  return content.match(/[^"'`\s]*[^"'`\s:]/g);
}