# tailwind-group
[![npm version](https://img.shields.io/npm/v/tailwind-group.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-group)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeffjuann/tailwind-group/blob/main/LICENSE)

Efficiently group Tailwind CSS classes & states

```ts
import { twOnHover } from 'tailwind-group'

twOnHover('font-bold text-xl underline') // hover:font-bold hover:text-xl hover:underline
```

Streamline the grouping of TailwindCSS state modifiers with tailwind-group. This package facilitates the consolidation of disparate Tailwind CSS class strings into concise and legible formats, ensuring optimal readability and maintainability of your codebase.

This package uses [tailwind-merge](https://github.com/dcastil/tailwind-merge) package to provide composition feature. Please use and see [tailwind-merge](https://github.com/dcastil/tailwind-merge) package for more Merging, Composition and Performace Features.

## Install
```bash
npm install tailwind-group
```

## Documentation
For detailed usage instructions, examples, and API reference, please refer to the [Documentation](https://github.com/jeffjuann/tailwind-group/blob/main/docs/DOCS.md).

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. See [CONTRIBUTING.md](https://github.com/jeffjuann/tailwind-group/blob/main/docs/CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/jeffjuann/tailwind-group/blob/main/LICENSE) file for details.
