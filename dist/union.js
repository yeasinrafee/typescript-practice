"use strict";
function kgToLBS(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLBS(60));
console.log(kgToLBS("60kg"));
//# sourceMappingURL=union.js.map