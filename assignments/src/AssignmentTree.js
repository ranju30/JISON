function AssignmentTree(operator, leftLeaf, rightLeaf) {
    this.root = operator;
    this.leftLeaf = leftLeaf;
    this.rightLeaf = rightLeaf;
    this.evaluate = function(memory) {
        memory[this.leftLeaf.evaluate()] = this.rightLeaf;
        return memory;
    }
};

module.exports = AssignmentTree;
