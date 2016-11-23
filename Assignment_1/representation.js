var fs = require("fs");
var jison = require("jison");

var data = fs.readFileSync("./assignment_1.jison", "utf8");
var parser = new jison.Parser(data);


function represent(tree) {
    if(!tree.leftChild.parent && !tree.rightChild.parent) {
    	return '(' + tree.leftChild + tree.parent + tree.rightChild + ')';
    };
    if(tree.leftChild.parent && tree.rightChild.parent){
    	return '(' + represent(tree.leftChild) + tree.parent + represent(tree.rightChild) + ')';
    }
    if(tree.leftChild.parent && !tree.rightChild.parent){
    	return '(' + represent(tree.leftChild) + tree.parent + tree.rightChild + ')';
    }
    if(!tree.leftChild.parent && tree.rightChild.parent){
    	return '(' + tree.leftChild + tree.parent + represent(tree.rightChild) + ')';
    }
};

var input = '1+2-3';

console.log("Represent of " + input, represent(parser.parse(input)));
