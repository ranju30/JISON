var AssignmentTree = require('./AssignmentTree.js');

function Tree(root, leftLeaf, rightLeaf) {
    this.root = root;
    this.leftLeaf = leftLeaf;
    this.rightLeaf = rightLeaf;
    this.evaluate = function(memory) {
        if (typeof leftLeaf == 'string') {
            leftLeaf = memory[leftLeaf];
        }
        if (typeof rightLeaf == 'string') {
            rightLeaf = memory[rightLeaf];
        }
        return root.evaluate(leftLeaf, rightLeaf);
    }
};

module.exports = Tree;
