# kata: mathematical expression evaluation
==========================================

This is a node.js application that solves a mathematical expression in infix notation.
It uses Edsger Dijkstra's Shunting-yard algorithm to parse the expression. Once in postfix notation (a.k.a  Reverse Polish notation (RPN)) it solves the expression and gives the result. (https://en.wikipedia.org/wiki/Shunting-yard_algorithm)

Clone
```bash
$git clone https://github.com/rproenca/expressionevaluator.git
```

Install dependencies
```bash
$npm install
```

Run tests
```bash
$npm test
```

Run app
```bash
$node index.js
```

![alt tag](https://github.com/rproenca/expressionevaluator/blob/master/Terminal_016.png)
