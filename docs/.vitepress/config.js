const path = require("path");

module.exports = {
  title: "Vue Click Away",
  description: "Vue 3.0 Compatible Click Away Directive",
  dest: "./dist/docs",
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
      },
    ],
  ],
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
};
