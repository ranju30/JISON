function Tree(root, leftLeaf, rightLeaf) {
    this.root = root;
    this.leftLeaf = leftLeaf;
    this.rightLeaf = rightLeaf;
    this.evaluate = function() {
        return root.evaluate(leftLeaf, rightLeaf);
    }
};

module.exports = Tree;
