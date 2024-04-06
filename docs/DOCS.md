# Documentation

```ts
twOn('hover', 'bg-neutral-900 font-white') // hover:bg-neutral-900 hover:font-white
twOn('lg:[&:nth-child(3)]', 'bg-blue-100') // lg:[&:nth-child(3)]:bg-blue-100
twOn('focus', 'bg-gray-200', 'outline') // focus:bg-gray-200 focus:outline  
```

### On Custom modifier
```ts
twOn('hover', 'bg-neutral-900 font-white') // hover:bg-neutral-900 hover:font-white
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