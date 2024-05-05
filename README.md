# @mizdra/node-run-all (In Development)

A CLI tool to run multiple npm-scripts in parallel or sequential like `npm-run-all`.

## Motivation

The motivation is to reduce the overhead of running npm-scripts.

`npm-run-all` is implemented by JavaScript. There is overhead for things like V8 set-up before Node.js can start executing JavaScript. `node-run-all` is implemented by Rust, so it has less overhead than `npm-run-all`.

Also, `npm-run-all` runs npm-scripts using `npm run`. On the other hand, `node-run-all` runs them using `node --run` with less overhead (This is the origin of the package name `node-run-all`).

Of course, they only reduce overhead a little. However, npm-scripts are run frequently. With this tool, the small overhead reductions can be accumulated over and over again, saving a lot of time in the long run.

## Installation

```bash
npm i -D @mizdra/node-run-all
```

> [!IMPORTANT]  
> This package uses the install script.
>
> If you are using pnpm or bun and the package fails to install, configure `package.json` to allow the install script to run.
>
> ```jsonc
> {
>   // for pnpm
>   "pnpm": {
>     "onlyBuiltDependencies": ["@mizdra/node-run-all"]
>   },
>   // for Bun
>   "trustedDependencies": ["@mizdra/node-run-all"],
>   // ...
> }
> ```

## Usage

TODO

## Supported Features

- [ ] `npm-run-all [tasks] [OPTIONS]` command
- [ ] `run-s [tasks] [OPTIONS]` command
- [ ] `run-p [tasks] [OPTIONS]` command
- [ ] `-p, --parallel <tasks>` option for `npm-run-all` command
- [ ] `-s, --sequential <tasks>, --serial <tasks>` option for `npm-run-all` command
- [ ] Glob-like pattern matching for script names
  - [ ] `*`
  - [ ] `**`
- [ ] Argument placeholders
  - [ ] `{1}`, `{2}`, `{3}`, ...
  - [ ] `{@}`
  - [ ] `{*}`
- [ ] `--max-parallel <number>` option for `npm-run-all` and `run-p` command
- [ ] `-n, --print-name` option
- [ ] `--silent` option

## Unsupported Features

Unlike `npm-run-all`, some features are not implemented for simplicity.

- `--aggregate-output` option
- `-l, --print-label` option
- `--npm-path <string>` option
- Node API

## Benchmark

TODO
