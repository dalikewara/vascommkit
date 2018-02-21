"use strict";

const async = require('async');
const messages = require('../messages.js');
const lps = require('./lps.js').lps;
const lpz = require('./lpz.js').lpz;
const rps = require('./rps.js').rps;
const rpz = require('./rpz.js').rpz;
const looper = require('./looper.js').looper;
var APP = new Object;
APP.lps = lps;
APP.lpz = lpz;
APP.rps = rps;
APP.rpz = rpz;
APP.looper = looper;

exports.string = function (params, options, callback) {
    if (!params) {
        throw new Error(messages.cemtex.missingArgument);
    }

    var callback = (options && typeof options == 'function') ? options : ((callback && typeof callback == 'function') ? callback : undefined);
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
          const keys = Object.keys(params.header.keys);
          const data = Object.keys(params.header.data);
          const keysLen = keys.length;
          const dataLen = data.length;
          const keysLenX = keysLen - 1;
          const dataLenX = dataLen - 1;
          var a = 0;

          APP.looper(a, keysLen, function (n) {
            var def = params.header.keys[keys[n]].default ? params.header.keys[keys[n]].default : ' '; 
            var type = params.header.keys[keys[n]].type ? params.header.keys[keys[n]].type : 'lps';
            var length = params.header.keys[keys[n]].length ? params.header.keys[keys[n]].length : 'lps';
            var val = params.header.data[keys[n]] ? params.header.data[keys[n]] : def;
            val = APP[type](length, val);
            header += val;
          }, function () {
            var q1 = header.length;

            if (q1 < options.charLength) {
              header = APP.rps(options.charLength, header);

              callback(null, header);
            } else {
              callback(null, header);
            }
          });
        }
      },
      function (callback) {
        if (!params.detail) {
          callback(null, detail);
        } else {
          const len = params.detail.data.length;

          if (len < 1) {
            callback(null, detail);
          } else {
            var q = 0;
            var w = len - 1;
            var f = function (keys, data, keysLen, dataLen, keysLenX, dataLenX, a, g, m) {
              var d = '';
              APP.looper(a, keysLen, function (n) {
                var def = params.detail.keys[keys[n]].default ? params.detail.keys[keys[n]].default : ' '; 
                var type = params.detail.keys[keys[n]].type ? params.detail.keys[keys[n]].type : 'lps';
                var length = params.detail.keys[keys[n]].length ? params.detail.keys[keys[n]].length : 'lps';
                var val = params.detail.data[m][keys[n]] ? params.detail.data[m][keys[n]] : def;
                val = APP[type](length, val);
                d += val;
              }, function () {
                var q1 = d.length;

                if (q1 < options.charLength) {
                  d = APP.rps(options.charLength, d);
                  detail += d;
                  detail += (options.enter == true) ? '\n' : '';

                  if (m == w) {
                    callback(null, detail);
                  }
                } else {
                  detail += d;
                  detail += (options.enter == true) ? '\n' : '';

                  if (m == w) {
                    callback(null, detail);
                  }
                }
              });
            };

            APP.looper(q, len, function (m) {
              var keys = Object.keys(params.detail.keys);
              var data = Object.keys(params.detail.data);
              var keysLen = keys.length;
              var dataLen = data.length;
              var keysLenX = keysLen - 1;
              var dataLenX = dataLen - 1;
              var a = 0;
              var g = '';

              f(keys, data, keysLen, dataLen, keysLenX, dataLenX, a, g, m);
            });
          }
        }
      },
      function (callback) {
        if (!params.footer) {
          callback(null, footer);
        } else {
          const keys = Object.keys(params.footer.keys);
          const data = Object.keys(params.footer.data);
          const keysLen = keys.length;
          const dataLen = data.length;
          const keysLenX = keysLen - 1;
          const dataLenX = dataLen - 1;
          var a = 0;

          APP.looper(a, keysLen, function (n) {
            var def = params.footer.keys[keys[n]].default ? params.footer.keys[keys[n]].default : ' '; 
            var type = params.footer.keys[keys[n]].type ? params.footer.keys[keys[n]].type : 'lps';
            var length = params.footer.keys[keys[n]].length ? params.footer.keys[keys[n]].length : 'lps';
            var val = params.footer.data[keys[n]] ? params.footer.data[keys[n]] : def;
            val = APP[type](length, val);
            footer += val;
          }, function () {
            var q1 = footer.length;

            if (q1 < options.charLength) {
              footer = APP.rps(options.charLength, footer);

              callback(null, footer);
            } else {
              callback(null, footer);
            }
          });
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