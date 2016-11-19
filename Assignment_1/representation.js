var fs = require("fs");
var jison = require("jison");

var bnf = fs.readFileSync("./assignment_1.jison", "utf8");
var parser = new jison.Parser(bnf);

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
}

console.log("Represent = ",represent(parser.parse('1+2-3')));
