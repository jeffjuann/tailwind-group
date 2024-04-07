<h1 align="center">tailwind-group</h1>

<div align="center">

[![npm version](https://img.shields.io/npm/v/tailwind-group.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-group)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeffjuann/tailwind-group/blob/main/LICENSE)

</div>

Efficiently group Tailwind CSS variants

```ts
TwOn("hover", "bg-neutral-900 font-white"); // hover:bg-neutral-900 hover:font-white
```

`tailwind-group` is a package designed to efficiently group Tailwind CSS variants, facilitating the consolidation of disparate Tailwind CSS class strings into concise and legible formats, ensuring optimal readability and maintainability of your codebase.

As this package is still in development, if you encounter any bugs or broken functionalities, please don't hesitate to open an issue. Your feedback is valuable, and we're committed to addressing any issues promptly to ensure the package works smoothly. Thank you for your support and patience.

This package uses [tailwind-merge](https://github.com/dcastil/tailwind-merge) package to provide composition feature. Please use and see [tailwind-merge](https://github.com/dcastil/tailwind-merge) package for more Merging, Composition and Performace Features.

> 🚧 Attention: This npm package is experimental and currenlt under active development

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

### Usage
```ts
 twOn("hover", "bg-blue-500") 
 // or
 twOnHover("bg-blue-500")
```

#### Don't Do This
```ts
import { twOnHover as onHover } from 'tailwind-group'
```
This package operates by customizing the Tailwind classes detection in your codebase. It detects particular patterns such as `twOn`, `twOnHover`, and other patterns within your code.
```ts
  twOn('hover', 'bg-sky-500', twOn('dark', 'bg-sky-700'))  
```
Currently, `tailwind-group` does not support nested functions.

## Documentation
For detailed usage instructions, examples, and API reference, please refer to the [Documentation](docs/DOCS.md).

## Contributing
Contributions are welcome! Please open an issue or discussion first to discuss what you would like to change. See [CONTRIBUTING](docs/CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
