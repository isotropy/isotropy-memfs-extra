const fse = require("./index");
const memfs = require("memfs");

const {vol, writeFileSync, readFileSync} = memfs;

const json = {
  './README.md': '1',
  './src/index.js': '2',
  './node_modules/debug/index.js': '3',
};

vol.fromJSON(json, '/app');

fse.copySync('/README.md', '/text1.txt')
console.log(readFileSync('/text1.txt', 'utf8'));