# @nixjs23n6/ts-enumify

Generates a enum (like an object) with keys and values based on the elements of an array.

## Install

```shell [npm]
npm install @nixjs23n6/ts-enumify
```

```shell [pnpm]
pnpm add @nixjs23n6/ts-enumify
```

```shell [yarn]
yarn add @nixjs23n6/ts-enumify
```

```shell [bun]
bun add -@nixjs23n6/ts-enumify
```

## Example

```typescript
import { Enumify } from '@nixjs23n6/ts-enumify'

const EnumKey = Enumify.generate(['ENUM1', 'ENUM2', 'ENUM3'] as const) // const EnumKey: Readonly<Enumify.ToObj<"ENUM1" | "ENUM2" | "ENUM3">>
type EnumType = keyof typeof EnumKey // type EnumType = "ENUM1" | "ENUM2" | "ENUM3"
```
