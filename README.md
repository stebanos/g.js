g.js
====
g.js is a JavaScript library for working with graphical objects. It provides a unified API for working with vector graphics (rectangles, paths, and text) and images.

[![CI](https://github.com/nodebox/g.js/actions/workflows/ci.yml/badge.svg)](https://github.com/nodebox/g.js/actions/workflows/ci.yml)

g.js is distributed as an ES module.

Installation
------------

### Using npm

    npm install g.js

Then import the library and start creating shapes:

```js
import g from "g.js";

// A 100×50 rectangle centred at (10, 20).
const shape = g.rect(new g.Point(10, 20), 100, 50);
```

This works with any modern bundler (Vite, esbuild, webpack, Rollup).

### In the browser

`npm run build` produces two minified bundles in `dist/`:

- `dist/esm/g.min.js` — an ES module, for `<script type="module">` or a bundler
- `dist/iife/g.min.js` — a classic script that exposes a global `g`

```html
<script src="dist/iife/g.min.js"></script>
<script>
  const shape = g.rect(new g.Point(10, 20), 100, 50);
</script>
```

Or with native ES modules:

```html
<script type="module">
  import g from "./dist/esm/g.min.js";
</script>
```

Development
-----------
g.js targets Node.js 20 or newer (the repository pins a version in `.nvmrc`). The following npm scripts are available:

- `npm test` — run the Mocha test suite.
- `npm run lint` — run ESLint.
- `npm run build` — bundle the ESM and IIFE distributions with esbuild.
- `npm run dist` — run the tests and rebuild the distributions.
- `npm run dev` — start a watching dev server with live reload on http://localhost:8000.

### Examples

Run `npm run dev` and open one of the example pages in the browser:

- `index.html` — an interactive notebook for evaluating g.js expressions.
- `svg.html` — a notebook that renders pasted SVG via `g.svg.parseString`.
- `img_examples/*.html` — imaging examples (layers, masks, blend modes, and
  filters) built on `g.ImageCanvas` and `g.loadImages`.

The dev server bundles the library to `build/g.js`, which every example page
loads, so they need to be served (not opened as `file://`).

### Publishing a release

1. Update the version number in `package.json`.
2. Run `npm run dist` to test and rebuild the files in the `dist` folder.
3. Commit (`git commit -a`) and create a tag (e.g. `git tag 1.2.1`). Push and push tags (`git push && git push --tags`).
4. Run `npm publish` to publish the package to npm.

Credits
-------

* Stefan Gabriëls <stefan@emrg.be>
* Frederik De Bleser <frederik@emrg.be>
