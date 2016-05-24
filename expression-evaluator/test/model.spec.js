/*jshint esversion: 6 */
/*jshint -W097 */

'use strict';

const evaluator = require('../expressionEvaluator.js');
const test = require('tape');

test('test suffix expression with sum', (t) => {
    let input = '100 12 +',
        result = evaluator.postfixEval(input),
        expected = 112;
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with subtraction', (t) => {
    let input = '8 3 -',
        result = evaluator.postfixEval(input),
        expected = 5;
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with multiplication', (t) => {
    let input = '3000 4 *',
        result = evaluator.postfixEval(input),
        expected = 12000;
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with division', (t) => {
    let input = '21 7 /',
        result = evaluator.postfixEval(input),
        expected = 3;
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with all operands', (t) => {
    let input = '4 1 2 + 4 * 2 / +',
        result = evaluator.postfixEval(input),
        expected = 10;
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});


/* -------------------------------------------- */


test('test suffix expression with sum', (t) => {
    let input = '100+12',
        result = evaluator.parseExp(input),
        expected = '100 12 +';
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with subtraction', (t) => {
    let input = '8-3',
        result = evaluator.parseExp(input),
        expected = '8 3 -';
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with multiplication', (t) => {
    let input = '3000*4',
        result = evaluator.parseExp(input),
        expected = '3000 4 *';
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with division', (t) => {
    let input = '21/7',
        result = evaluator.parseExp(input),
        expected = '21 7 /';
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test suffix expression with all parenthesis', (t) => {
    let input = '4+((1+2)*4)/2',
        result = evaluator.parseExp(input),
        expected = '4 1 2 + 4 * 2 / +';
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test complete expression', (t) => {
    let input = '((3+2*(9-3))*(7-5)+8)/6',
        result = evaluator.evaluate(input).toFixed(2),
        expected = '6.33';
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});

test('test complete expression with whitespaces', (t) => {
    let input = '((3 + 2*(9-   3))  *(7 -5)+  8 ) /  6',
        result = evaluator.evaluate(input).toFixed(2),
        expected = '6.33';
    t.equal(result, expected, input + ' = ' + expected.toString());
    t.end();
});
