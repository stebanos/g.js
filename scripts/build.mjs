import * as esbuild from "esbuild";

// Shared options for every bundle. The iife targets unwrap the default export
// so the global `g` is the library object itself (g.isDrawable, g.ellipse, …)
// rather than { default: g }.
const base = {
  entryPoints: ["src/g.js"],
  bundle: true,
  sourcemap: true,
};

const iife = {
  ...base,
  globalName: "g",
  format: "iife",
  footer: { js: "g = g.default;" },
};

const esm = {
  ...base,
  format: "esm",
};

// Each format ships both a readable bundle and a minified one.
await Promise.all([
  esbuild.build({ ...esm, minify: false, outfile: "dist/esm/g.js" }),
  esbuild.build({ ...esm, minify: true, outfile: "dist/esm/g.min.js" }),
  esbuild.build({ ...iife, minify: false, outfile: "dist/iife/g.js" }),
  esbuild.build({ ...iife, minify: true, outfile: "dist/iife/g.min.js" }),
]);
