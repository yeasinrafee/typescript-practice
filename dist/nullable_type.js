"use strict";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log(`Mr. ${typeof name}`);
}
greet("Rafee");
greet(null);
greet(undefined);
//# sourceMappingURL=nullable_type.js.map