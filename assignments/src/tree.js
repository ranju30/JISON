function Tree(root, leftLeaf, rightLeaf) {
    this.root = root;
    this.leftLeaf = leftLeaf;
    this.rightLeaf = rightLeaf;
    this.evaluate = function(memory) {
        if (isValidIdentifier(memory, leftLeaf)) {
            throw new Error('Hey something wrong with you');
        }
        leftLeaf = getEvaluatedLeftLeaf(memory, leftLeaf);
        rightLeaf = getEvaluatedRightLeaf(memory, rightLeaf);
        return root.evaluate(leftLeaf, rightLeaf, memory);
    }
};

var isValidIdentifier = function(memory, leftLeaf) {
    return leftLeaf.type == 'Identifier' && !memory[leftLeaf.value];
}
var getEvaluatedLeftLeaf = function(memory, leftLeaf) {
    if (leftLeaf.type == 'Identifier')
        return memory[leftLeaf.evaluate()];
    return leftLeaf;
}

var getEvaluatedRightLeaf = function(memory, rightLeaf) {
    if (rightLeaf.type == 'Identifier')
        return memory[rightLeaf.evaluate()];
    return rightLeaf;
}

module.exports = Tree;
