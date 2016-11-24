var fs = require("fs");
var jison = require("jison");
var path = require('path');

var bnf = fs.readFileSync(path.resolve("./src/grammar.jison"), "utf8");
var parser = new jison.Parser(bnf);

var evaluate = function(expression){
  var tree = parser.parse(expression);
  console.log(tree);
  return '';
}

console.log(evaluate('1+2+2+2'))

module.exports = evaluate;
