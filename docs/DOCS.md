# Documentation

```ts
twOn('hover', 'bg-neutral-900 font-white') // hover:bg-enutral-900 hover:font-white
twOn('lg:[&:nth-child(3)]', 'bg-blue-100') // lg:[&:nth-child(3)]:bg-blue-100
twOn('focus', 'bg-gray-200', 'outline') // focus:bg-gray-200 focus:outline  
```

### Group custom modifier
```ts
twOn('hover', 'bg-neutral-900 font-white') // hover:bg-enutral-900 hover:font-white
```

## Pseudo-classes

### On Hover Modifier
```ts
twOnHover('bg-blue-600') // hover:bg-blue-600
```
### On Focus Modifier
```ts
twOnFocus('outline-none ring ring-violet-300') // ocus:outline-none focus:ring focus:ring-violet-300
```
### On Active Modifier
```ts
twOnActive('bg-violet-700') // active:bg-violet-700
```

### On First Item Modifier
```ts
twOnFirst('pt-0') // first:pt-0
```
### On Last Item Modifier
```ts
twOnLast('last:pb-0') // last:pb-0
```
### On Even Item Modifier
```ts
twOnEven('bg-white') // odd:bg-white 
```
### On Odd Item Modifier
```ts
twOnOdd('bg-slate-50') // even:bg-slate-50
```

### On Required Modifier
```ts
twOnRequired('border-green-500') // required:border-green-500
```
### On Invalid Modifier
```ts
twOnInvalid('border-pink-500 text-pink-600') // invalid:border-pink-500 invalid:text-pink-600
```
### On Disabled Modifier
```ts
twOnDisabled('bg-slate-50 text-slate-500 border-slate-200 shadow-none') // disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
``` 

### On Custom Group Modifier
```ts
twOnGroup('hover/item', 'translate-x-0.5 text-slate-500') // group-hover/item:translate-x-0.5 group-hover/item:text-slate-500
```
### On Group Hover Modifier
```ts
twOnGroupHover('text-white bg-sky-500') // group-hover:text-white group-hover:bg-sky-500
```
### On Group Focus Modifier
```ts
twOnGroupFocus('text-blue-800') // group-focus:text-blue-800
```

### On Custom Sibling Modifier
```ts
twOnSibling('invalid', 'visible') // peer-invalid:visible
```
### On Sibling Hover Modifier
```ts
twOnSiblingHover('bg-blue/90 text-neutral-500') // peer-hover:bg-blue/90 peer-hover:text-neutral-500  
```
### On Sibling Focus Modifier
```ts
twOnSiblingFocus('bg-blue-500') // peer-focus:bg-blue-500 
```
 
### On Child Modifier
```ts
twOnChild('rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5') // *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 
```

### On Custom Has Modifier
```ts
twOnHas('[:checked]','bg-indigo-50 text-indigo-900 ring-indigo-200') // has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200
```
### On Group Has Modifier
```ts
twOnGroupHas('[a]', 'block') // group-has-[a]:block
```
### On Sibling Has Modifier
```ts
twOnSiblingHas('[:checked]', 'hidden') // has-[:checked]:hidden
```

## Pseudo-elements

### On Before Modifier
```ts
twOnBefore('block absolute -inset-1 -skew-y-3 bg-pink-500') // before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500
```
### On After Modifier
```ts
twOnAfter('content-['*'] ml-0.5 text-red-500') // after:content-['*'] after:ml-0.5 after:text-red-500
```
### On Placeholder Modifier
```ts
twOnPlaceholder('italic text-slate-400') // placeholder:italic placeholder:text-slate-400 
```
### On File Input Modifier
```ts
twOnFile('mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 text-violet-700') // file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 
```
### On Marker Modifier
```ts
twOnMarker('text-sky-400') // marker:text-sky-400 
```
### On Selection Modifier
```ts
twOnSelection('bg-fuchsia-300 text-fuchsia-900') // selection:bg-fuchsia-300 selection:text-fuchsia-900 
```

### On First Line Modifier
```ts
twOnFirstLine('uppercase tracking-widest') // first-line:uppercase first-line:tracking-widest
```
### On First Letter Modifier
```ts
twOnFirstLetter('text-7xl font-bold text-white mr-3 float-left') // first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left
```

### On Backdrop Modifier
```ts
twOnBackdrop('backdrop-blur') // backdrop:backdrop-blur 
```

## Media Queries

### On Medium Breakpoints Modifier
```ts
twOnMd('text-lg bg-red-500') // md:text-lg md:bg-red-500 
```
### On Large Breakpoints Modifier
```ts
twOnLg('text-xl bg-green-500') // lg:text-xl lg:bg-green-500
```

### On Dark Color Scheme Modifier
```ts
twOnDark('text-white bg-black') // dark:text-white dark:bg-black
```

### On Motion Reduced Modifier
```ts
twOnMotionReduced('hidden') // motion-reduce:hidden
```
### On Motion Safe Modifier
```ts
twOnMotionSafe('-translate-x-0.5 transition') // motion-safe:-translate-x-0.5 motion-safe:transition
```

### On Contrast More Modifier
```ts
twOnContrastMore('border-slate-400 placeholder-slate-500') // contrast-more:border-slate-400 contrast-more:placeholder-slate-500
```
### On Contrast Less Modifier
```ts
twOnContrastLess('bg-white text-black') // contrast-less:bg-white contrast-less:text-black
```

### On Forced Colors Modifier
```ts
twOnForcedColors('appearance-auto') // forced-colors:appearance-auto
```

### On Portrait Modifier
```ts
twOnPortrait('bg-red-500 text-white font-bold') // porttrait:bg-red-500 porttrait:text-white porttrait:font-bold
```
### On Landscape Modifier
```ts
twOnLandscape('bg-green-500 text-white font-bold') // landscape:bg-green-500 landscape:text-white landscape:font-bold
```
### On Print Modifier
```ts
twOnPrint('hidden') // print:hidden 
```
### On Support Rules Modifier
```ts
twOnSupportRules('[backdrop-filter]', 'bg-black/25 backdrop-blur') // supports-[backdrop-filter]:bg-black/25 supports-[backdrop-filter]:backdrop-blur
```

## Attribute Selectors

### On Custom Aria Modifier
```ts
twOnAria('[sort=ascending]', 'class-one class-two') // aria-[sort=ascending]:class-one aria-[sort=ascending]:class-two 
```
### On Aria Busy Modifier
```ts
twOnAriaBusy('class-one class-two') // aria-busy:class-one aria-busy:two 
```
### On Aria Checked Modifier
```ts
twOnAriaChecked('class-one class-two') // aria-checked:class-one aria-checked:two
```
### On Aria Disabled Modifier
```ts
twOnAriaDisabled('class-one class-two') // aria-disabled:class-one aria-disabled:two
```
### On Aria Expanded Modifier
```ts
twOnAriaExpanded('class-one class-two') // aria-expanded:class-one aria-expanded:two
```
### On Aria Hidden Modifier
```ts
twOnAriaHidden('class-one class-two') // aria-hidden:class-one aria-hidden:two
```
### On Aria Pressed Modifier
```ts
twOnAriaPressed('class-one class-two') // aria-pressed:class-one aria-pressed:two
```
### On Aria Readonly Modifier
```ts
twOnAriaReadonly('class-one class-two') // aria-readonly:class-one aria-readonly:two
```
### On Aria Required Modifier
```ts
twOnAriaRequired('class-one class-two') // aria-required:class-one aria-required:two
```
### On Aria Selected Modifier
```ts
twOnAriaSelected('class-one class-two') // aria-selected:class-one aria-selected:two
```

### On Custom Data Attributes Modifier
```ts
twOnData('[size=large]', 'p-8 bg-violet-500') // data-[size=large]:p-8 data-[size=large]:bg-violet-500
```
### On LTR Modifier
```ts
twOnLtr('ml-3') // ltr:ml-3 
```
### On RTL Modifier
```ts
twOnRtl('ml-3') // rtl:ml-3  
```
### On Open Modifier
```ts
twOnOpen('bg-white ring-1 ring-black/5 ring-white/10 shadow-lg') // open:bg-white open:ring-1 open:ring-black/5 open:ring-white/10 open:shadow-lg 
```