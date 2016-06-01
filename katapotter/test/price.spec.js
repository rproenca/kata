/*jshint esversion: 6 */
/*jshint -W097 */

'use strict';

const katapotter = require('../katapotter.js');
const test = require('tape');

test('test basic scenarios', (t) => {
    t.equal(katapotter.price([]), 0, 'should return $0 for emtpy basket');
    t.equal(katapotter.price([0]), 8, 'should return $8 for book #1');
    t.equal(katapotter.price([1]), 8, 'should return $8 for book #2');
    t.equal(katapotter.price([2]), 8, 'should return $8 for book #3');
    t.equal(katapotter.price([3]), 8, 'should return $8 for book #4');
    t.equal(katapotter.price([4]), 8, 'should return $8 for book #5');
    t.equal(katapotter.price([0, 0]), 8 * 2, 'should return $16 for two books #1');
    t.equal(katapotter.price([1, 1, 1]), 8 * 3, 'should return $24 for three books #2');

    t.end();
});

test('test simple discounts', (t) => {
    t.equal(katapotter.price([0, 1]), 8 * 2 * 0.95, 'should return $15.2');
    t.equal(katapotter.price([0, 2, 4]), 8 * 3 * 0.9, 'should return $21.6');
    t.equal(katapotter.price([0, 1, 2, 4]), 8 * 4 * 0.8, 'should return $25.6');
    t.equal(katapotter.price([0, 1, 2, 3, 4]), 8 * 5 * 0.75, 'should return $15.0');

    t.end();
});

test('test several discounts', (t) => {
    t.equal(katapotter.price([0, 0, 1]), 8 + (8 * 2 * 0.95), 'should return $23.2');
    t.equal(katapotter.price([0, 0, 1, 1]), 2 * (8 * 2 * 0.95), 'should return $30.4');
    t.equal(katapotter.price([0, 0, 1, 2, 2, 3]), (8 * 4 * 0.8) + (8 * 2 * 0.95), 'should return $40.8');
    t.equal(katapotter.price([0, 1, 1, 2, 3, 4]), 8 + (8 * 5 * 0.75), 'should return $38.0');

    t.end();
});

test('test edge cases', (t) => {
    t.equal(katapotter.price([0, 0, 1, 1, 2, 2, 3, 4]), 2 * (8 * 4 * 0.8), 'should return $51.2');
    t.equal(katapotter.price([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4]), 3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8), 'should return $141.2');
    t.equal(katapotter.price([0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4]), 78.8, 'should return $78.8');
    t.equal(katapotter.price([0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]).toFixed(2), 100.0.toFixed(2), 'should return $100.0');

    t.end();
});
