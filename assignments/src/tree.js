function Tree(root, leftLeaf, rightLeaf) {
    this.root = root;
    this.leftLeaf = leftLeaf;
    this.rightLeaf = rightLeaf;
    this.evaluate = function(memory) {
      if(leftLeaf.type != 'Number')
          leftLeaf = memory[leftLeaf];
        return root.evaluate(leftLeaf, rightLeaf);
    }
};

module.exports = Tree;
