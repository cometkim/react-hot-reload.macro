# react-hot-reload.macro

[![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros)

Zero configuration :fire: hot reloading :fire: using [Babel macro](https://github.com/kentcdodds/babel-plugin-macros)

Using [react-hot-loader](https://github.com/gaearon/react-hot-loader), mostly for Create React App (v2+) users

## Usage

```bash
yarn add react-hot-reload.macro

or

npm install --save react-hot-reload.macro
```

Modify your `App.js` component

```diff
import React from 'react'
+import hot from 'react-hot-reload.macro'

...

-export default App
+export default hot(module)(App)
```

That's it. Happy Hacking!
