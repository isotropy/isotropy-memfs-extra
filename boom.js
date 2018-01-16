const { fse , memfs } = require("./index");

const {vol, writeFileSync, readFileSync} = memfs;

const json = {
  './README.md': '1',
  './src/index.js': '2',
  './node_modules/debug/index.js': '3',
};

vol.fromJSON(json, '/app');

fse.copySync('/app/README.md', '/app/text1.txt')
console.log(readFileSync('/app/text1.txt', 'utf8'));