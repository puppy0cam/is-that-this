"use strict";
const result_types = exports.result_types = Object.freeze({ // RUNTIME DOCUMENTATION!!!!!
    IS_MODULE: Symbol("Indicates that the value is the exports object for is-that-this"),
    IS_FUNCTION: Symbol("Indicates that the value is the function that checks if a value is is-that-this"),
    NONE: false,
});
exports.isThatThis = Object.freeze(function isThatThis(value) {
    "use strict"
    switch (value) {
        case isThatThis: return result_types.IS_FUNCTION;
        case exports: return result_types.IS_MODULE;
        default: return result_types.NONE;
    }
});
Object.freeze(exports);
