function Tree(root, leftLeaf, rightLeaf) {
    this.root = root;
    this.leftLeaf = leftLeaf;
    this.rightLeaf = rightLeaf;
    this.evaluate = function() {
        return root.evaluate(leftLeaf, rightLeaf);
    };
    this.represent = function(){
      return root.represent(leftLeaf,rightLeaf);
    }
};

module.exports = Tree;
