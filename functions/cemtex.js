"use strict";

const async = require('async');
const messages = require('../messages.js');
const lps = require('./lps.js');
const lpz = require('./lpz.js');
const rps = require('./rps.js');
const rpz = require('./rpz.js');
const looper = require('./looper.js');

exports.string = function (params, options, callback) {
    if (!params || !options) {
        throw new Error(messages.cemtex.missingArgument);
    }

    var header = '';
    var detail = '';
    var footer = '';
    options.enter = options.enter || false;
    options.default = options.default || ' ';
    options.charLength = options.charLength || 160;

    async.parallel([
      function (callback) {
        if (!params.header) {
          callback(null, header);
        } else {
          header += 'header';
          callback(null, header);
        }
      },
      function (callback) {
        if (!params.detail) {
          callback(null, detail);
        } else {
          detail += 'detail';
          callback(null, detail);
        }
      },
      function (callback) {
        if (!params.footer) {
          callback(null, footer);
        } else {
          footer += 'footer';
          callback(null, footer);
        }
      }
    ], function (err, result) {
      if (err) {
        callback(err);
      } else {
        const string = (options.enter == true) ? header + '\n' + detail + '\n' + footer : header + detail + footer;

        callback(null, string);
      }
    });
};
