/*jshint esversion: 6 */
/*jshint -W097 */

'use strict';

Array.prototype.top = function() {
    if (this.length > 0) return this[this.length - 1];
};

function expToArray(exp) {
    return exp.replace(/(\d+)/gi, ",$1").replace(/\+/gi, ",+").replace(/\-/gi, ",-")
        .replace(/\*/gi, ",*").replace(/\//gi, ",/")
        .replace(/\(/gi, ",(").replace(/\)/gi, ",)")
        .replace(/\s/gi, "").split(',').splice(1);
}

function isOperator(char) {
    return ['+', '-', '*', '/'].indexOf(char) >= 0;
}

function isEmptyStack(stack) {
    return stack.length === 0;
}

function isLeftParenthesis(char) {
    return char === '(';
}

function isRightParenthesis(char) {
    return char === ')';
}

function hasHigherPrecedence(op1, op2) {
    return (op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-');
}

function hasLessPrecedence(op1, op2) {
    return (op1 === '+' || op1 === '-') && (op2 === '*' || op2 === '/');
}

// Evaluates a postfix expression
let postfixEval = function(exp) {
    let stack = [],
        postfixExp = exp.split(' ');

    for (let i = 0; i < postfixExp.length; i++) {
        let token = postfixExp[i];

        if (Number.isInteger(parseInt(token))) {
            stack.push(parseInt(token));
        } else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
            }
        }
    }

    return stack.pop();
};

// Creates a postfix expression from an infix expression
// using Dijkstra's Shunting-yard algorithm
let parseExp = function(exp) {
    let queue = [],
        stack = [];

    let infixExp = expToArray(exp);

    for (let i = 0; i < infixExp.length; i++) {
        let token = infixExp[i];

        if (Number.isInteger(parseInt(token))) {
            queue.push(parseInt(token));
        } else if (isRightParenthesis(token)) {
            while (!isLeftParenthesis(stack.top())) {
                queue.push(stack.pop());
            }
            stack.pop();
        } else if (isOperator(token) || isLeftParenthesis(token)) {
            if (isEmptyStack(stack) || hasHigherPrecedence(token, stack.top()) ||
                isLeftParenthesis(token) || isLeftParenthesis(stack.top())) {
                stack.push(token);
            } else if (hasLessPrecedence(token, stack.top())) {
                while (stack.length > 0 && !isLeftParenthesis(stack.top())) {
                    queue.push(stack.pop());
                }
                stack.push(token);
            } else {
                queue.push(stack.pop());
                stack.push(token);
            }
        }
    }

    while (stack.length > 0) {
        queue.push(stack.pop());
    }

    return queue.join(' ');
};

function evaluate(infixExp) {
    let postfixExp = parseExp(infixExp);
    return postfixEval(postfixExp);
}

module.exports = {
    postfixEval,
    parseExp,
    evaluate
};
