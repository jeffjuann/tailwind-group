import { 
  twOn,
  twOnActive,
  twOnChild,
  twOnDisabled,
  twOnEven,
  twOnFirst,
  twOnFocus,
  twOnGroup,
  twOnGroupFocus,
  twOnGroupHas,
  twOnGroupHover,
  twOnHas,
  twOnHover, 
  twOnInvalid, 
  twOnLast,
  twOnOdd,
  twOnRequired,
  twOnSibling,
  twOnSiblingFocus,
  twOnSiblingHas,
  twOnSiblingHover
} from "../src/index";

test('custom on modifier', () =>
{
  expect(twOn('hover','bg-neutral-500')).toBe('hover:bg-neutral-500');
  expect(twOn('[&:nth-child(3)]', 'text-medium underline')).toBe('[&:nth-child(3)]:text-medium [&:nth-child(3)]:underline');
  expect(twOn('lg:[&:nth-child(3)]:hover', 'underline bg-neutral-500')).toBe('lg:[&:nth-child(3)]:hover:underline lg:[&:nth-child(3)]:hover:bg-neutral-500');
});

test('on hover modifier', () =>
{
  expect(twOnHover('bg-blue-500 text-white ring ring-white')).toBe('hover:bg-blue-500 hover:text-white hover:ring hover:ring-white');
  expect(twOnHover('bg-blue-500 text-white', 'ring ring-white')).toBe('hover:bg-blue-500 hover:text-white hover:ring hover:ring-white');
});

test('on focus modifier', () =>
{
  expect(twOnFocus('outline-none ring ring-violet-300')).toBe('focus:outline-none focus:ring focus:ring-violet-300');
  expect(twOnFocus('outline-none ring ring-violet-300', 'bg-violet-600 text-white')).toBe('focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-600 focus:text-white');
});

test('on active modifier', () =>
{
  expect(twOnActive('text-red-500 underline')).toBe('active:text-red-500 active:underline');
  expect(twOnActive('text-red-500 underline', 'bg-green-500 font-bold')).toBe('active:text-red-500 active:underline active:bg-green-500 active:font-bold');
});

test('on first modifier', () =>
{
  expect(twOnFirst('text-red-500 underline')).toBe('first:text-red-500 first:underline');
  expect(twOnFirst('text-red-500 underline', 'bg-green-500 font-bold')).toBe('first:text-red-500 first:underline first:bg-green-500 first:font-bold');
});

test('on last modifier', () =>
{
  expect(twOnLast('text-red-500 underline')).toBe('last:text-red-500 last:underline');
  expect(twOnLast('text-red-500 underline', 'bg-green-500 font-bold')).toBe('last:text-red-500 last:underline last:bg-green-500 last:font-bold');
});

test('on even modifier', () =>
{
  expect(twOnEven('text-red-500 underline')).toBe('even:text-red-500 even:underline');
  expect(twOnEven('text-red-500 underline', 'bg-green-500 font-bold')).toBe('even:text-red-500 even:underline even:bg-green-500 even:font-bold');
});

test('on odd modifier', () =>
{
  expect(twOnOdd('text-red-500 underline')).toBe('odd:text-red-500 odd:underline');
  expect(twOnOdd('text-red-500 underline', 'bg-green-500 font-bold')).toBe('odd:text-red-500 odd:underline odd:bg-green-500 odd:font-bold');
});

test('on required modifier', () =>
{
  expect(twOnRequired('text-red-500 underline')).toBe('required:text-red-500 required:underline');
  expect(twOnRequired('text-red-500 underline', 'bg-green-500 font-bold')).toBe('required:text-red-500 required:underline required:bg-green-500 required:font-bold');
});

test('on invalid modifier', () =>
{
  expect(twOnInvalid('text-red-500 underline')).toBe('invalid:text-red-500 invalid:underline');
  expect(twOnInvalid('text-red-500 underline', 'bg-green-500 font-bold')).toBe('invalid:text-red-500 invalid:underline invalid:bg-green-500 invalid:font-bold');
});

test('on disabled modifier', () =>
{
  expect(twOnDisabled('text-red-500 underline')).toBe('disabled:text-red-500 disabled:underline');
  expect(twOnDisabled('text-red-500 underline', 'bg-green-500 font-bold')).toBe('disabled:text-red-500 disabled:underline disabled:bg-green-500 disabled:font-bold');
});

test('on group modifier', () =>
{
  expect(twOnGroup('hover/item', 'text-red-500 underline')).toBe('group-hover/item:text-red-500 group-hover/item:underline');
  expect(twOnGroup('hover/item', 'text-red-500 underline', 'bg-green-500 font-bold')).toBe('group-hover/item:text-red-500 group-hover/item:underline group-hover/item:bg-green-500 group-hover/item:font-bold');
});

test('on group hover modifier', () =>
{
  expect(twOnGroupHover('text-red-500 underline')).toBe('group-hover:text-red-500 group-hover:underline');
  expect(twOnGroupHover('text-red-500 underline', 'bg-green-500 font-bold')).toBe('group-hover:text-red-500 group-hover:underline group-hover:bg-green-500 group-hover:font-bold');
});

test('on group focus modifier', () =>
{
  expect(twOnGroupFocus('text-red-500 underline')).toBe('group-focus:text-red-500 group-focus:underline');
  expect(twOnGroupFocus('text-red-500 underline', 'bg-green-500 font-bold')).toBe('group-focus:text-red-500 group-focus:underline group-focus:bg-green-500 group-focus:font-bold');
});

test('on sibling modifier', () =>
{
  expect(twOnSibling('active', 'text-red-500 underline')).toBe('peer-active:text-red-500 peer-active:underline');
  expect(twOnSibling('active', 'text-red-500 underline', 'bg-green-500 font-bold')).toBe('peer-active:text-red-500 peer-active:underline peer-active:bg-green-500 peer-active:font-bold');
});

test('on sibling hover modifier', () =>
{
  expect(twOnSiblingHover('text-red-500 underline')).toBe('peer-hover:text-red-500 peer-hover:underline');
  expect(twOnSiblingHover('text-red-500 underline', 'bg-green-500 font-bold')).toBe('peer-hover:text-red-500 peer-hover:underline peer-hover:bg-green-500 peer-hover:font-bold');
});

test('on sibling focus modifier', () =>
{
  expect(twOnSiblingFocus('text-red-500 underline')).toBe('peer-focus:text-red-500 peer-focus:underline');
  expect(twOnSiblingFocus('text-red-500 underline', 'bg-green-500 font-bold')).toBe('peer-focus:text-red-500 peer-focus:underline peer-focus:bg-green-500 peer-focus:font-bold');
});

test('on child modifier', () =>
{
  expect(twOnChild('text-red-500 underline')).toBe('*:text-red-500 *:underline');
  expect(twOnChild('text-red-500 underline', 'bg-green-500 font-bold')).toBe('*:text-red-500 *:underline *:bg-green-500 *:font-bold');
});

test('on has modifier', () =>
{
  expect(twOnHas('[a]','text-red-500 underline')).toBe('has-[a]:text-red-500 has-[a]:underline');
  expect(twOnHas('[a]','text-red-500 underline', 'bg-green-500 font-bold')).toBe('has-[a]:text-red-500 has-[a]:underline has-[a]:bg-green-500 has-[a]:font-bold');
});

test('on group has modifier', () =>
{
  expect(twOnGroupHas('[a]', 'text-red-500 underline')).toBe('group-has-[a]:text-red-500 group-has-[a]:underline');
  expect(twOnGroupHas('[a]', 'text-red-500 underline', 'bg-green-500 font-bold')).toBe('group-has-[a]:text-red-500 group-has-[a]:underline group-has-[a]:bg-green-500 group-has-[a]:font-bold');
});

test('on sibling has modifier', () =>
{
  expect(twOnSiblingHas('[p]', 'text-red-500 underline')).toBe('peer-has-[a]:text-red-500 peer-has-[a]:underline');
  expect(twOnSiblingHas('[p]', 'text-red-500 underline', 'bg-green-500 font-bold')).toBe('peer-has-[a]:text-red-500 peer-has-[a]:underline peer-has-[a]:bg-green-500 peer-has-[a]:font-bold');
});