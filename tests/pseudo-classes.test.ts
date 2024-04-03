import { twOnHover } from "../src/index";


test('twOnHover', () =>
{
  expect(twOnHover('text-red-500 underline')).toBe('hover:text-red-500 hover:underline');
  expect(twOnHover('text-red-500 underline', 'bg-green-500 font-bold')).toBe('hover:text-red-500 hover:underline hover:bg-green-500 hover:font-bold');
});