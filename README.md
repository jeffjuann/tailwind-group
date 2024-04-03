# tailwind-group

Efficiently group Tailwind CSS classes & states

Streamline the grouping of Tailwind CSS classes and states with tailwind-group, a sophisticated solution leveraging the capabilities of tailwind-merge to deliver advanced merging, composition, and performance enhancements.

This package facilitates the consolidation of disparate Tailwind CSS class strings into concise and legible formats, ensuring optimal readability and maintainability of your codebase. By harnessing the robust features of tailwind-merge, tailwind-group achieves efficient class merging, eliminating redundancies and optimizing CSS output for enhanced performance

This package uses [tailwind-merge](https://github.com/dcastil/tailwind-merge) package to provide composition feature. please use and see [tailwind-merge](https://github.com/dcastil/tailwind-merge) package for more Merging, Composition and Performace Features.

```ts
import { twOnHover } from 'tailwind-group'

...
twOnHover('font-bold text-xl underline') // hover:font-bold hover:text-xl hover:underline
...
```

## Install
```bash
npm install tailwind-group
```

## Documentation
For detailed usage instructions, examples, and API reference, please refer to the documentation.

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. See CONTRIBUTING.md for more information.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
