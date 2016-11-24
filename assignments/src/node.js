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
      return left.evaluate();
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
    createAssignmentNode : function(operator){
      return {
          type: "Assignment",
          value: operator,
          evaluate: operatorEvaluaters[operator]
      }
    },
    createIdentifierNode : function(variable,value){
      storeVariable[variable] = value;
      return {
        type: "Assignment",
        value: variable,
        evaluate: function(){return storeVariable[variable]}
      }
    }
}

module.exports = node;
