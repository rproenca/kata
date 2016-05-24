/*jshint esversion: 6 */
/*jshint -W097 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an expression: ', (input) => {
    console.log(input);
    rl.close();
});
