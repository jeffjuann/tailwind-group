import { 
  twOn,
  twOnActive,
  twOnFocus,
  twOnHover, 
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