const path = require("path");

module.exports = {
  title: "Vue Click Away",
  description: "Vue 3.0 Compatible Click Away Directive",
  dest: "./dist/docs",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "vinceg/vue-click-away",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    smoothScroll: true,
    nav: [],
    sidebar: "auto",
  },
  configureWebpack: {
    resolve: {
      modules: [path.resolve(__dirname, "../../dist")],
      alias: {
        "@": path.resolve(__dirname),
        dist: path.resolve(__dirname, "../../dist"),
      },
    },
  },
};
