function Tree(root, leftLeaf, rightLeaf) {
    this.root = root;
    this.leftLeaf = leftLeaf;
    this.rightLeaf = rightLeaf;
    this.evaluate = function(memory) {
        if (leftLeaf.type == 'Identifier') {
            leftLeaf = memory[leftLeaf.evaluate()];
        }
        if (rightLeaf.type == 'Identifier') {
            rightLeaf = memory[rightLeaf.evaluate()];
        }
        return root.evaluate(leftLeaf, rightLeaf, memory);
    }
};

module.exports = Tree;
