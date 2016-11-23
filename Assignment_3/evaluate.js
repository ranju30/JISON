var fs = require("fs");
var jison = require("jison");

var bnf = fs.readFileSync("grammar.jison", "utf8");
var parser = new jison.Parser(bnf);

var tree = parser.parse('1+2-6');
console.log(tree.evaluate());
