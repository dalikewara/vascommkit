"use strict";

const messages = require('./messages.js');

exports.getVal = function (tag, xml) {
    if (!tag || !xml) {
        throw new Error(messages.soa.missingArgument);
    }

    xml = String(xml);
    tag = String(tag);
    const regex = new RegExp('<' + tag + '.*>(.*)</.*' + tag + '>');
    var val = xml.match(regex);
    val = val ? val[1] : val;

    return val;
};
