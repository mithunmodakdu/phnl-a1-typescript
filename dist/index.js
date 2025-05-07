"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        const lowerString = input.toLowerCase();
        return lowerString;
    }
    else {
        const upperString = input.toUpperCase();
        return upperString;
    }
}
