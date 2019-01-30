# react-hot-reload.macro

[![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg)](https://github.com/kentcdodds/babel-plugin-macros) [![NPM](https://img.shields.io/npm/v/react-hot-reload.macro.svg)](https://www.npmjs.com/package/react-hot-reload.macro) ![](https://img.shields.io/github/license/cometkim/react-hot-reload.macro.svg)

Zero configuration :fire:**Hot Module Replacement**:fire: using [Babel macro](https://github.com/kentcdodds/babel-plugin-macros)
and [react-hot-loader](https://github.com/gaearon/react-hot-loader), mostly for Create React App (v2+) users

No eject, No configuration :tada::tada:

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

If you want to see more detail: [API section of RHL](https://github.com/gaearon/react-hot-loader#api)

## Changes

- **v2.0.2**
  - Add **TypeScript** definition
