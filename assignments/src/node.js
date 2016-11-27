var operatorEvaluaters = {
    '+': function(left, right, memory) {
        return left.evaluate(memory) + right.evaluate(memory);
    },
    '-': function(left, right, memory) {
        return left.evaluate(memory) - right.evaluate(memory);
    },
    '*': function(left, right, memory) {
        return left.evaluate(memory) * right.evaluate(memory);
    },
    '/': function(left, right, memory) {
        return left.evaluate(memory) / right.evaluate(memory);
    },
    '^': function(left, right, memory) {
        return Math.pow(left.evaluate(memory), right.evaluate(memory));
    }
}

var node = {
    createOperatorNode: function(operator) {
        return {
            type: "Operator",
            value: operator,
            evaluate: operatorEvaluaters[operator],
        }
    },
    createNumberNode: function(number) {
        return {
            type: "Number",
            value: Number(number),
            evaluate: function() {
                return this.value
            }
        }
    },
    createIdentifierNode: function(variable) {
        return {
            type: "Identifier",
            value: variable,
            evaluate: function() {
                return this.value
            }
        }
    }
}

module.exports = node;
