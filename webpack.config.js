const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "isotropy-memfs-extra.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    alias: {
      fs: "memfs"
    }
  },
};
