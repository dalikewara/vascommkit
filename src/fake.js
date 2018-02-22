"use strict";

exports.fake = function (len, keys, local) {
  const faker = local ? require('faker/locale/' + local) : require('faker/locale/id_ID');
  const binding = Object.keys(keys);
  var n = 0;
  var data = [];
  const lenX = len - 1;

  for ( ;n < len; n++) {
    var res = new Object;
    var y = binding.length;
    var z = 1;

    binding.map(function (x) {
      module.exports.binding(faker, x, keys[x], function (result) {
        res = Object.assign(res, result);

        if (y == z) {
          data.push(res);
        }

        z++;
      });
    });
  }

  return data;
};

exports.binding = function (faker, prefix, value, callback) {
  value = value.replace(/\s+/g, '').split('|');
  var n = 0;
  var len = value.length;
  var data = new Object;
  var lenX = len - 1;

  for ( ;n < len; n++) {
    var q = value[n].split('@');
    var r = q[1] ? q[1] : q[0];
    data[q[0]] = faker[prefix] ? (faker[prefix][r] ? faker[prefix][r]() : null) : null;
  }

  callback(data);
};
