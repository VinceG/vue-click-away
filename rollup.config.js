import pkg from "./package.json";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      copy({
        targets: [{ src: "dist/module.js", dest: "docs/.vitepress" }],
      }),
    ],
  },
];
