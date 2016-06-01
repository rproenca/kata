/*jshint esversion: 6 */
/*jshint -W097 */

'use strict';

//const evaluator = require('./expressionEvaluator.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an expression: ', (input) => {
//    console.log('Result = ' + evaluator.evaluate(input));
    rl.close();
});
