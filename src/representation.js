var fs = require("fs");
var jison = require("jison");
var path = require('path');

var bnf = fs.readFileSync(path.resolve("./src/grammar.jison"), "utf8");
var parser = new jison.Parser(bnf);

var represent = function(expression){
  var tree = parser.parse(expression);
  return tree.represent();
}

module.exports = represent;
