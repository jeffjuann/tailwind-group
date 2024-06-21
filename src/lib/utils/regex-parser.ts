export function getDefaultClasses(content: string): string[] | null
{
  return content.match(/[^<>"'`\s]*[^<>"'`\s:]/g);
}

export function getGroupedClasses(content: string): string[] | null
{
  return content.match(/[a-zA-Z]+:\((?:[^()]*|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\))*\)/g); // only works for 4-level nesting
}

export function getGroupclassNames(content: string): string[] | null
{
  return content.match(/([a-zA-Z]+:\((?:[^()]+|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\))*\))|([^|()]+)/g); // | delimiter
}

export function isGroupclassNames(content: string): string | null
{
  const res = content.match(/[a-zA-Z]+:\((?:[^()]*|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\))*\)/); // only works for 4-level nesting
  return res ? res[0] : null;
}