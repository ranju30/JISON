var fs = require("fs");
var jison = require("jison");
var inWordsEn = require('in-words').en;

var bnf = fs.readFileSync("../Assignment_1/assignment_1.jison", "utf8");
var parser = new jison.Parser(bnf);

var symbols = {
    '+': 'plus',
    '-': 'minus',
    '*': 'times',
    '/': 'by'
};


function representInWord(tree) {
    if (!tree.leftChild.parent && !tree.rightChild.parent) {
        return '(' + inWordsEn(tree.leftChild) + ' ' + symbols[tree.parent] + ' ' + inWordsEn(tree.rightChild) + ')';
    };
    if (tree.leftChild.parent && tree.rightChild.parent) {
        return '(' + representInWord(tree.leftChild) + ' ' + symbols[tree.parent] + ' ' + representInWord(tree.rightChild) + ')';
    }
    if (tree.leftChild.parent && !tree.rightChild.parent) {
        return '(' + representInWord(tree.leftChild) + ' ' + symbols[tree.parent] + ' ' + inWordsEn(tree.rightChild) + ')';
    }
    if (!tree.leftChild.parent && tree.rightChild.parent) {
        return '(' + inWordsEn(tree.leftChild) + ' ' + symbols[tree.parent] + ' ' + representInWord(tree.rightChild) + ')';
    }
}

console.log(representInWord(parser.parse('1+2+3*5/1000000000')));
