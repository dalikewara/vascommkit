"use strict";

const messages = require('../messages.js');

exports.lps = function (n, val) {
    if (!n || !val) {
        throw new Error(messages.lps.missingArgument);
    }

    n = Number(n);
    val = String(val);
    const len = val.length;

    if (len > n) {
        return val.slice(0, n);
    }

    if (len == n) {
        return val;
    }

    if (len < n) {
        const x = n - len;

        return ' '.repeat(x) + val;
    }
}
