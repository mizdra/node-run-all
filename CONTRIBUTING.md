# Contributing

This is a guide for contributors.

## Requirements
- rustc
- Cargo
- Node.js

## How to dev

- `npm run build`: Build for production
- `npm run lint`: Run static-checking
- `npm run test`: Run tests

## How to release

- Wait for passing CI...
- ```bash
  git switch main && git pull
  ```
- ```bash
  rm -rf target && npm run build
  ```
- ```bash
  npm version <major|minor|patch>
  ```
  - If you want to release a pre-release version, use the following command instead:
    ```bash
    npm version <premajor|preminor|prepatch> --preid=<alpha|beta>
    ```
  - If you want to update the pre-release version, use the following command instead:
    ```bash
    npm version prerelease
    ```
- ```bash
  git push --follow-tags
  ```
