const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    alias: {
      fs: "memfs"
    }
  },
};
