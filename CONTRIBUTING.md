# Contributing

This is a guide for contributors.

## Requirements

- rustup
- Node.js

## How to dev

- `cargo build`: Build for development
- `cargo run`: Run for development
- `cargo test`: Run tests

## How to release

- Wait for passing CI...
- ```bash
  git switch main && git pull
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
- Wait for the release workflow to finish...
  - https://github.com/mizdra/node-run-all/actions/workflows/release.yml
