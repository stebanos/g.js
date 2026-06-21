import * as esbuild from "esbuild";

const PORT = 8000;

// Build the IIFE bundle to build/g.js — the path index.html loads via a plain
// <script> tag (global name `g`). This mirrors the iife target in build.mjs but
// is unminified for readable stack traces during development.
const ctx = await esbuild.context({
  entryPoints: ["src/g.js"],
  bundle: true,
  sourcemap: true,
  globalName: "g",
  format: "iife",
  // src/g.js has a default export, so the IIFE global lands as { default: g }.
  // Unwrap it so the notebook can call g.isDrawable(), g.ellipse(), etc.
  footer: { js: "g = g.default;" },
  outfile: "build/g.js",
});

// Rebuild on source changes...
await ctx.watch();

// ...and serve the project root so index.html, /bin/pathkit.{js,wasm} and the
// freshly built build/g.js all resolve. esbuild serves built output from memory
// overlaid on servedir, and exposes a /esbuild SSE endpoint for live reload.
const { host, port } = await ctx.serve({ servedir: ".", port: PORT });

console.log(`g.js notebook: http://localhost:${port} (serving ${host})`);
