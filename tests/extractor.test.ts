import { 
  mainExtractor,
} from "../src/lib/extractor";

test('single nested grouping', () =>
{
  expect(mainExtractor("hover:(bg-blue-500|text-white)")).toContain('hover:bg-blue-500');
  expect(mainExtractor("hover:(bg-blue-500|text-white)")).toContain('hover:text-white');

  expect(mainExtractor("dark:(bg-blue-500|text-white|font-bold|text-8xl)")).toContain('dark:bg-blue-500');
  expect(mainExtractor("dark:(bg-blue-500|text-white|font-bold|text-8xl)")).toContain('dark:text-white');
  expect(mainExtractor("dark:(bg-blue-500|text-white|font-bold|text-8xl)")).toContain('dark:font-bold');
  expect(mainExtractor("dark:(bg-blue-500|text-white|font-bold|text-8xl)")).toContain('dark:text-8xl');
});

test('double nested grouping', () =>
{
  expect(mainExtractor("hover:(bg-blue-500|dark:(text-white))")).toContain('hover:bg-blue-500');
  expect(mainExtractor("hover:(bg-blue-500|dark:(text-white))")).toContain('hover:dark:text-white');
  
  expect(mainExtractor("hover:(focus:(bg-blue-500)|dark:(text-white))")).toContain('hover:focus:bg-blue-500');
  expect(mainExtractor("hover:(focus:(bg-blue-500)|dark:(text-white))")).toContain('hover:dark:text-white');
});

test('triple nested grouping', () =>
{
  expect(mainExtractor("hover:(focus:(md:(bg-blue-500))|dark:(text-white))")).toContain('hover:focus:md:bg-blue-500');
  expect(mainExtractor("hover:(focus:(md:(bg-blue-500))|dark:(text-white))")).toContain('hover:dark:text-white');
  
  expect(mainExtractor("hover:(focus:(md:(bg-blue-500))|dark:(xl:(text-white)))")).toContain('hover:focus:md:bg-blue-500');
  expect(mainExtractor("hover:(focus:(md:(bg-blue-500))|dark:(xl:(text-white)))")).toContain('hover:dark:xl:text-white');

  expect(mainExtractor("hover:(focus:(md:(bg-blue-500|text-red-600))|dark:(text-white)|xl:(font-bold))")).toContain('hover:focus:md:bg-blue-500');
  expect(mainExtractor("hover:(focus:(md:(bg-blue-500|text-red-600))|dark:(text-white)|xl:(font-bold))")).toContain('hover:focus:md:text-red-600');
  expect(mainExtractor("hover:(focus:(md:(bg-blue-500|text-red-600))|dark:(text-white)|xl:(font-bold))")).toContain('hover:dark:text-white');
  expect(mainExtractor("hover:(focus:(md:(bg-blue-500|text-red-600))|dark:(text-white)|xl:(font-bold))")).toContain('hover:xl:font-bold');
});


test('triple nested grouping', () =>
{

});