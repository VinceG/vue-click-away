import pkg from "./package.json";
import copy from "rollup-plugin-copy";
import babel from "rollup-plugin-babel"

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
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        plugins: ['@babel/plugin-transform-arrow-functions']
      }),
      copy({
        targets: [{ src: "dist/module.js", dest: "docs/.vitepress" }],
      }),
    ],
  },
];
