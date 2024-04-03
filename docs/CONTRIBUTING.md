# Contribution Guide
Thanks for your interest in contributing to tailwind-group. We're happy to have you here. Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## Guide
### Fork this repo
You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine
```bash
git clone https://github.com/your-username/tailwind-group.git
```

### Navigate to project directory
```bash
cd tailwind-group
```

### Create a new Branch
```bash
git checkout -b <new-branch-name>
```

### Install dependencies
```bash
npm install
```

## Documentation

The documentation for this project is located in the `docs` directory. When adding a new feature or modifying feature, plese make sure to update the documentation to the related feature.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Request for new feature
if you have any suggestion, freely to open any discussion.