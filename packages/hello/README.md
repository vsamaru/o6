<a href="https://github.com/o6/o6/tree/main/packages/hello#readme">
<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=o6&background=tiles&project=Hello" alt="o6 Hello">
</p>

# Hello

Example hello world package in the o6 repository.

## Installation

```bash
npm install @o6/hello
# or
yarn add @o6/hello
# or
pnpm add @o6/hello
```

## How to use it

```ts
import { createHello } from '@o6/hello'

const [hello, setHello] = createHello()

hello() // => "Hello World!"

setHello('Solid')

hello() // => "Hello Solid!"
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
