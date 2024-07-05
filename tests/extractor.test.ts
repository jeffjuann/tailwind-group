import { 
  mainExtractor,
} from "../src/lib/extractor";

test('twOn hover extract test', () =>
{
  expect(mainExtractor("twOn('hover', 'bg-blue-500 text-white', 'underline')")).toContain('hover:bg-blue-500');
  expect(mainExtractor("twOn('hover', 'bg-blue-500 text-white', 'underline')")).toContain('hover:text-white');
  expect(mainExtractor("twOn('hover', 'bg-blue-500 text-white', 'underline')")).toContain('hover:underline');
});

test('twOn custom extract test', () =>
{
  expect(mainExtractor("twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=open]:animate-in');
  expect(mainExtractor("twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=closed]:animate-out');
  expect(mainExtractor("twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=closed]:fade-out-0');
  expect(mainExtractor("twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=open]:fade-in-0');
});

test('twOnHover extract test', () =>
{
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnHover('bg-red-500', 'border-2')"))
    .toContain('hover:bg-blue-500');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnHover('bg-red-500', 'border-2')"))
    .toContain('hover:text-white');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnHover('bg-red-500', 'border-2')"))
    .toContain('hover:underline');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnHover('bg-red-500', 'border-2')"))
    .toContain('hover:bg-red-500');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnHover('bg-red-500', 'border-2')"))
    .toContain('hover:border-2');
});

test('twOnFocus extract test', () =>
{
  expect(mainExtractor("twOnFocus('ring-ring', 'ring-blue-500') .... twOnFocus('outline-none')"))
    .toContain('focus:ring-ring');
  expect(mainExtractor("twOnFocus('ring-ring', 'ring-blue-500') .... twOnFocus('outline-none')"))
    .toContain('focus:ring-blue-500');
  expect(mainExtractor("twOnFocus('ring-ring', 'ring-blue-500') .... twOnFocus('outline-none')"))
    .toContain('focus:outline-none');
});

test('twOnActive extract test', () =>
{
  expect(mainExtractor("twOnActive('bg-blue-900') .... twOnActive('bg-violet-700')"))
    .toContain('active:bg-blue-900');
  expect(mainExtractor("twOnActive('bg-blue-900') .... twOnActive('bg-violet-700')"))
    .toContain('active:bg-violet-700');
});

test('combined twOn extract test', () =>
{
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('hover:bg-blue-500');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('hover:text-white');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('hover:underline');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('active:bg-violet-700');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('focus:ring-ring');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('focus:ring-blue-500');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=open]:animate-in');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=closed]:animate-out');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=open]:fade-in-0');
  expect(mainExtractor("twOnHover('bg-blue-500 text-white', 'underline') .... twOnActive('bg-violet-700') ... twOnFocus('ring-ring', 'ring-blue-500') ... twOn('data-[state=open]', 'animate-in fade-in-0') .... twOn('data-[state=closed]', 'animate-out fade-out-0')"))
    .toContain('data-[state=closed]:fade-out-0');

});

// With Quote

test('twOn hover extract test', () =>
  {
    expect(mainExtractor("twOn(\"hover\", \"bg-blue-500 text-white\", \"underline\")")).toContain('hover:bg-blue-500');
    expect(mainExtractor("twOn(\"hover\", \"bg-blue-500 text-white\", \"underline\")")).toContain('hover:text-white');
    expect(mainExtractor("twOn(\"hover\", \"bg-blue-500 text-white\", \"underline\")")).toContain('hover:underline');
  });
  
  test('twOn custom extract test', () =>
  {
    expect(mainExtractor("twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=open]:animate-in');
    expect(mainExtractor("twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=closed]:animate-out');
    expect(mainExtractor("twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=closed]:fade-out-0');
    expect(mainExtractor("twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=open]:fade-in-0');
  });
  
  test('combined twOn extract test', () =>
  {
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('hover:bg-blue-500');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('hover:text-white');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('hover:underline');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('active:bg-violet-700');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('focus:ring-ring');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('focus:ring-blue-500');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=open]:animate-in');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=closed]:animate-out');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=open]:fade-in-0');
    expect(mainExtractor("twOnHover(\"bg-blue-500 text-white\", \"underline\") .... twOnActive(\"bg-violet-700\") ... twOnFocus(\"ring-ring\", \"ring-blue-500\") ... twOn(\"data-[state=open]\", \"animate-in fade-in-0\") .... twOn(\"data-[state=closed]\", \"animate-out fade-out-0\")"))
      .toContain('data-[state=closed]:fade-out-0');
  });