import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "index.js",
    output: {
      file: "./dist/clickaway.common.js",
      format: "cjs",
      exports: "named",
    },
  },
  {
    input: "index.js",
    output: {
      file: "./dist/clickaway.js",
      format: "iife",
      exports: "named",
      name: "VueClickAway",
    },
  },
  {
    input: "index.js",
    output: {
      file: "./dist/clickaway.min.js",
      format: "iife",
      exports: "named",
      name: "VueClickAway",
    },
    plugins: [terser()],
  },
];
