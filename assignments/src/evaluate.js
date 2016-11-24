var fs = require("fs");
var jison = require("jison");
var path = require('path');

var bnf = fs.readFileSync(path.resolve("./src/grammar.jison"), "utf8");
var parser = new jison.Parser(bnf);

var evaluate = function(expression) {
    var tree;
    if (parser.parse(expression).length > 1)
        tree = parser.parse(expression)[1];
    else {
        tree = parser.parse(expression)[0];
    }
    return tree.evaluate();
}

module.exports = evaluate;
