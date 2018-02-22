"use strict";

const fs = require('fs');
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
    var counts = [];
    options.enter = options.enter || false;
    options.default = options.default || ' ';
    options.charLength = options.charLength || 160;

    async.series([
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
            var from = params.header.keys[keys[n]].from ? params.header.keys[keys[n]].from : undefined;

            if (from) {
              var decimal = (params.header.keys[from].decimal != undefined && params.header.keys[from].decimal == false) ? false : true;
              var def = params.header.keys[from].default ? params.header.keys[from].default : ' ';
              var type = params.header.keys[from].type ? params.header.keys[from].type : 'lps';
              var length = params.header.keys[from].length ? params.header.keys[from].length : 'lps';
              var val = params.header.data[from] ? params.header.data[from] : def;
              val = (decimal == false) ? val.replace(/\./g, '') : val;
              val = APP[type](length, val);
              header += val;
            } else {
              var decimal = (params.header.keys[keys[n]].decimal != undefined && params.header.keys[keys[n]].decimal == false) ? false : true;
              var def = params.header.keys[keys[n]].default ? params.header.keys[keys[n]].default : ' ';
              var type = params.header.keys[keys[n]].type ? params.header.keys[keys[n]].type : 'lps';
              var length = params.header.keys[keys[n]].length ? params.header.keys[keys[n]].length : 'lps';
              var val = params.header.data[keys[n]] ? params.header.data[keys[n]] : def;
              val = (decimal == false) ? val.replace(/\./g, '') : val;
              val = APP[type](length, val);
              header += val;
            }
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
                var from = params.detail.keys[keys[n]].from ? params.detail.keys[keys[n]].from : undefined;

                if (from) {
                  var decimal = (params.detail.keys[from].decimal != undefined && params.detail.keys[from].decimal == false) ? false : true;
                  var def = params.detail.keys[from].default ? params.detail.keys[from].default : ' ';
                  var type = params.detail.keys[from].type ? params.detail.keys[from].type : 'lps';
                  var length = params.detail.keys[from].length ? params.detail.keys[from].length : 'lps';
                  var val = params.detail.data[m][from] ? params.detail.data[m][from] : def;
                  val = (decimal == false) ? val.replace(/\./g, '') : val;
                  val = APP[type](length, val);
                  var numVal = Number(val);
                  d += val;

                  if (numVal) {
                    if ((counts[keys[n]] && counts[keys[n]] != 0) || counts[keys[n]] == 0) {
                      counts[keys[n]] += numVal;
                    } else {
                      counts[keys[n]] = numVal;
                    }
                  }
                } else {
                  var decimal = (params.detail.keys[keys[n]].decimal != undefined && params.detail.keys[keys[n]].decimal == false) ? false : true;
                  var def = params.detail.keys[keys[n]].default ? params.detail.keys[keys[n]].default : ' ';
                  var type = params.detail.keys[keys[n]].type ? params.detail.keys[keys[n]].type : 'lps';
                  var length = params.detail.keys[keys[n]].length ? params.detail.keys[keys[n]].length : 'lps';
                  var val = params.detail.data[m][keys[n]] ? params.detail.data[m][keys[n]] : def;
                  val = (decimal == false) ? val.replace(/\./g, '') : val;
                  val = APP[type](length, val);
                  var numVal = Number(val);
                  d += val;

                  if (numVal) {
                    if ((counts[keys[n]] && counts[keys[n]] != 0) || counts[keys[n]] == 0) {
                      counts[keys[n]] += numVal;
                    } else {
                      counts[keys[n]] = numVal;
                    }
                  }
                }
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
            var from = params.footer.keys[keys[n]].from ? params.footer.keys[keys[n]].from : undefined;

            if (from) {
              var countFromDetail = (params.footer.keys[keys[n]].countFromDetail) ? params.footer.keys[keys[n]].countFromDetail : undefined;
              var decimal = (params.footer.keys[from].decimal != undefined && params.footer.keys[from].decimal == false) ? false : true;
              var def = params.footer.keys[from].default ? params.footer.keys[from].default : ' '; 
              var type = params.footer.keys[from].type ? params.footer.keys[from].type : 'lps';
              var length = params.footer.keys[from].length ? params.footer.keys[from].length : 'lps';
              var val = params.footer.data[from] ? params.footer.data[from] : def;
              val = countFromDetail ? counts[countFromDetail] : val;
              val = (decimal == false) ? val.replace(/\./g, '') : val;
              val = APP[type](length, val);
              footer += val;
            } else {
              var countFromDetail = (params.footer.keys[keys[n]].countFromDetail) ? params.footer.keys[keys[n]].countFromDetail : undefined;
              var decimal = (params.footer.keys[keys[n]].decimal != undefined && params.footer.keys[keys[n]].decimal == false) ? false : true;
              var def = params.footer.keys[keys[n]].default ? params.footer.keys[keys[n]].default : ' '; 
              var type = params.footer.keys[keys[n]].type ? params.footer.keys[keys[n]].type : 'lps';
              var length = params.footer.keys[keys[n]].length ? params.footer.keys[keys[n]].length : 'lps';
              var val = params.footer.data[keys[n]] ? params.footer.data[keys[n]] : def;
              val = countFromDetail ? counts[countFromDetail] : val;
              val = (decimal == false) ? val.replace(/\./g, '') : val;
              val = APP[type](length, val);
              footer += val;
            }
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

exports.generate = function (fullpath, params, options, callback) {
  module.exports.string(params, options, function (err, result) {
    if (err) {
      callback(err);
    } else {
      fs.writeFile(fullpath, result, function(err) {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
  });
};