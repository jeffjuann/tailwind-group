<h1 align="center">tailwind-group</h1>

<div align="center">

[![npm version](https://img.shields.io/npm/v/tailwind-group.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-group)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeffjuann/tailwind-group/blob/main/LICENSE)

</div>

Efficiently group Tailwind CSS variants

```ts
... className="hover:(bg-blue-500|text-white)" ...
```

`tailwind-group` is a package designed to efficiently group Tailwind CSS variants, facilitating the consolidation of disparate Tailwind CSS class strings into concise and legible formats, ensuring optimal readability and maintainability of your codebase.

As this package is still in development, if you encounter any bugs or broken functionalities, please don't hesitate to open an issue. Your feedback is valuable, and we're committed to addressing any issues promptly to ensure the package works smoothly. Thank you for your support and patience.

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
... className="hover:(bg-blue-500|text-white)" ... 
 // or
... className="hover:(bg-blue-500|dark:(text-white|underline))" ...
```

## Documentation
For detailed usage instructions, examples, and API reference, please refer to the [Documentation](docs/DOCS.md).

## Contributing
Contributions are welcome! Please open an issue or discussion first to discuss what you would like to change. See [CONTRIBUTING](docs/CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.