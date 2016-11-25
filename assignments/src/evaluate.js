var fs = require("fs");
var jison = require("jison");
var path = require('path');

var bnf = fs.readFileSync(path.resolve("./src/grammar.jison"), "utf8");
var parser = new jison.Parser(bnf);

var evaluate = function(expression) {
    var trees = parser.parse(expression);
    return trees.evaluate(new Object());
}

module.exports = evaluate;
