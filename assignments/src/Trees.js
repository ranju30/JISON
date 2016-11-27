function Trees() {
    this.trees = [];
}

Trees.prototype.addTree = function(tree) {
    this.trees.push(tree);
};

Trees.prototype.evaluate = function(memory) {
    return this.trees.reduce(function(memory, tree) {
        memory = tree.evaluate(memory);
        return memory;
    }, memory);
};

module.exports = Trees;
