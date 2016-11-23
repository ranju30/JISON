var operatorEvaluaters = {
    '+': function(left, right) {
        return left.evaluate() + right.evaluate()
    },
    '-': function(left, right) {
        return left.evaluate() - right.evaluate()
    }
}

var node = {
    createOperatorNode : function(operator) {
        return {
            type: "Operator",
            value: operator,
            evaluate: operatorEvaluaters[operator]
        }
    },
    createNumberNode : function(number) {
        return {
            type: "Number",
            value: Number(number),
            evaluate: function(){return this.value}
        }
    }
}

module.exports = node;
