"use strict";
function money(amount, taxYear = 2022) {
    if (taxYear !== 2022) {
        return amount * 1.6;
    }
    else {
        return amount;
    }
}
money(3000, 2023);
//# sourceMappingURL=function.js.map