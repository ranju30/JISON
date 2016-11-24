var storeVariable = {};

var operatorEvaluaters = {
    '+': function(left, right) {
        return left.evaluate() + right.evaluate();
    },
    '-': function(left, right) {
        return left.evaluate() - right.evaluate();
    },
    '*': function(left, right) {
        return left.evaluate() * right.evaluate();
    },
    '/': function(left, right) {
        return left.evaluate() / right.evaluate();
    },
    '^': function(left,right){
      return Math.pow(left.evaluate(),right.evaluate());
    },
    '=': function (left,right) {
      return storeVariable[left];
    }
}

var node = {
    createOperatorNode : function(operator) {
        return {
            type: "Operator",
            value: operator,
            evaluate: operatorEvaluaters[operator],
        }
    },
    createNumberNode : function(number) {
        return {
            type: "Number",
            value: Number(number),
            evaluate: function(){return this.value}
        }
    },
    createAssignmentNode : function(name,operator,value){
      storeVariable[name] = value;
      return {
          type: "Assignment",
          name: name,
          value: value,
          evaluate: function(){return storeVariable[name]}
      }
    },
    createIdentifierNode : function(variable){
      return {
        type: "Identifier",
        value: variable,
        evaluate: function(){return storeVariable[variable]}
      }
    }
}

module.exports = node;
