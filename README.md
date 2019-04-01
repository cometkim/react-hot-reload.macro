# react-hot-reload.macro

[![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg)](https://github.com/kentcdodds/babel-plugin-macros) [![NPM](https://img.shields.io/npm/v/react-hot-reload.macro.svg)](https://www.npmjs.com/package/react-hot-reload.macro) ![](https://img.shields.io/github/license/cometkim/react-hot-reload.macro.svg)

Zero configuration :fire:**Hot Module Replacement**:fire: using [Babel macro](https://github.com/kentcdodds/babel-plugin-macros)
and [react-hot-loader](https://github.com/gaearon/react-hot-loader), mostly for Create React App (v2+) users

No eject :tada: No configuration :tada:

## Usage

```bash
yarn add react-hot-reload.macro
# or
npm install --save react-hot-reload.macro
```

Modify your `App.js` component

```diff
import React from 'react'
+import hot from 'react-hot-reload.macro'

...

-export default App
+export default hot(App)
```

That's it. Happy Hacking!

## React-:fire:-DOM

> RHL will patch React, replace React-DOM by React-🔥-DOM and work with fiber directly

Since RHL 4.5.0+, you would need to patch react-dom by `@hot-loader/react-dom`

Currently only available option without ejecting is using Yarn's name resolution.

```bash
yarn add react-dom@npm:@hot-loader/react-dom
```

(if anyone know another workaround of it, please [let me know](https://github.com/cometkim/react-hot-reload.macro/issues/new))

## Configure RHL

You still can use RHL's APIs. Following the [`setConfig()`](https://github.com/gaearon/react-hot-loader#setconfigconfig) API of RHL.

## Changelog

- **v2.1.2**
  - Add **Flow** type definition
  - Update babel-plugin-macros to ^2.5.1
  - Update react-hot-loader to ^4.8.2

- **v2.1.0**
  - Update babel-plugin-macros to ^2.5.0
  - Update react-hot-loader to ^4.7.0

- **v2.0.2**
  - Add **TypeScript** definition
