/*jshint esversion: 6 */
/*jshint -W097 */

'use strict';

const
    BOOK_PRICE = 8,
    DISCOUNTS = [1.0, 0.95, 0.90, 0.8, 0.75];

function price(basket) {
    let total = 0;

    if (basket.length === 0) return 0;
    else {
        let groups = [], // books grouped by different titles
            pos = 0; // position to correctly insert a different title

        for (let i = 0; i < basket.length; i++) {
            if (i === 0) {
                groups[0] = 1;
            } else {
                if (basket[i] === basket[i - 1]) { // same book title
                    pos++;
                    groups[pos] = groups[pos] ? ++groups[pos] : 1;
                } else { // different book title
                    pos = 0;
                    ++groups[pos];
                }

                // Optimal discount (que_impota_que_funcione)
                if (groups[pos] === 5 && (groups[pos + 1] && groups[pos + 1] === 3)) {
                    --groups[pos];
                    ++groups[pos + 1];
                } else if (groups[pos] === 3 && (groups[pos - 1] && groups[pos - 1] === 5)) {
                    ++groups[pos];
                    --groups[pos - 1];
                }
            }
        }

        for (let i = 0; i < groups.length; i++) {
            total += groups[i] * BOOK_PRICE * DISCOUNTS[groups[i] - 1];
        }
    }

    return total;
}

module.exports = {
    price
};
