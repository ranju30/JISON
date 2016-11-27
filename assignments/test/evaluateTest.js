var assert = require('assert');
var evaluator = require('../src/evaluate.js');

describe('evaluator test', function() {
    it('Should return the evaluated value for given expression addition', function() {
        assert.equal(5, evaluator('2+3;'));
    });
    it('Should return the evaluated value for given expression substraction', function() {
        assert.equal(2, evaluator('3-1;'));
    });
    it('Should return the evaluated value for given expression multiplication', function() {
        assert.equal(6, evaluator('2*3;'));
    });
    it('Should return the evaluated value for given expression division', function() {
        assert.equal(2, evaluator('4/2;'));
    });
    it('Should return the evaluated value for given expression for multiple level', function() {
        assert.equal(11, evaluator('2+3*3;'));
    });
    it('Should return the evaluated value for given expression power', function() {
        assert.equal(8, evaluator('2^3;'));
    });
    it('Should return the evaluated value for given expression with assignment', function() {
        assert.equal(4, evaluator('x=2;x+2;'));
    });
    it('Should return the evaluated value for given expression with assignment multiply', function() {
        assert.equal(6, evaluator('x=2;x*3;'));
    });
    it('Should return the evaluated value for given expression with assignment division', function() {
        assert.equal(2, evaluator('x=4;x/2;'));
    });
    it('Should return the evaluated value for given expression with assignment substraction', function() {
        assert.equal(0, evaluator('x=2;x-2;'));
    });
    it('Should return the evaluated value for given expression with assignment power', function() {
        assert.equal(4, evaluator('x=2;x^2;'));
    });
    it('Should return the evaluated value for given expression with assignment multi level expression', function() {
        assert.equal(30, evaluator('x=10;y=20;x+y;'));
    });
    it('Should return the evaluated value for given expression with assignment multi level expression with one assignment', function() {
        assert.equal(20, evaluator('x=10;x+5*2;'));
    });
    it('Should return the evaluated value if identifier is given after operator', function() {
        assert.equal(12, evaluator('x=10;2+x;'));
    });
    it('Should return the evaluated value for two identifier', function() {
        assert.equal(21, evaluator('x=10;y=11;x+y;'));
    });
    it('Should return the evaluated value if identifier is given after operator and multiple evaluation', function() {
        assert.equal(14, evaluator('x=10;1+x+3;'));
    });
    it('Should return the evaluated value for given expression with assignment multi level expression and evaluate them', function() {
        assert.equal(60, evaluator('x=10;y=20;z=30;x+y+z;'));
    });
});
