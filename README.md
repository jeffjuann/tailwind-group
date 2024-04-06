# tailwind-group
[![npm version](https://img.shields.io/npm/v/tailwind-group.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-group)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeffjuann/tailwind-group/blob/main/LICENSE)

Efficiently group Tailwind CSS variants

```ts
TwOn("hover", "bg-blue-500");
```

Streamline the grouping of TailwindCSS state modifiers with tailwind-group. This package facilitates the consolidation of disparate Tailwind CSS class strings into concise and legible formats, ensuring optimal readability and maintainability of your codebase.

This package uses [tailwind-merge](https://github.com/dcastil/tailwind-merge) package to provide composition feature. Please use and see [tailwind-merge](https://github.com/dcastil/tailwind-merge) package for more Merging, Composition and Performace Features.

## Installation
### Install Package
```bash
npm install tailwind-group
```
### Setup Tailwind Configuration
```ts
...
import { twExtractor } from "tailwind-group";

const config = {
  ...
  content: {
    files: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    extract: twExtractor(["ts", "tsx", "js", "jsx"]),
  },
  ...
} satisfies Config

export default config
```
### Use tailwind-group in your code
```ts
 twOn("hover", "bg-blue-500") 
 // or
 twOnHover("bg-blue-500")
```

## Documentation
For detailed usage instructions, examples, and API reference, please refer to the [Documentation](https://github.com/jeffjuann/tailwind-group/blob/main/docs/DOCS.md).

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. See [CONTRIBUTING.md](https://github.com/jeffjuann/tailwind-group/blob/main/docs/CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/jeffjuann/tailwind-group/blob/main/LICENSE) file for details.
