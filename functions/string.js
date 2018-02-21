"use strict";

exports.camelCase = function (str) {
  const r = new RegExp(/(?:^\w|[A-Z]|\b\w|\s+)/g);
  const n = str.replace(r, function (x, y) {
    if (+x == 0) {
      return '';
    }

    const z = (y == 0) ? x.toLowerCase() : x.toUpperCase();

    return z;
  });

  return n;
};

exports.snakeCase = function (str) {
  const r = new RegExp(/(?:^\w|[A-Z]|\b\w|\s+)/g);
  const n = str.replace(r, function (x, y) {
    if (+x == 0) {
      return '';
    }

    const z = (y === 0) ? x.toLowerCase() : ('_' + x.toLowerCase());

    return z;
  });

  return n;
};

exports.titleCase = function (str) {
  const r = new RegExp(/(?:^\w|[A-Z]|\b\w|\s+)/g);
  const n = str.replace(r, function (x, y) {
    if (+x == 0) {
      return '';
    }

    const z = (y === 0) ? x.toUpperCase() : (' ' + x.toUpperCase());

    return z;
  });

  return n;
};

exports.studlyCase = function (str) {
  const r = new RegExp(/(?:^\w|[A-Z]|\b\w|\s+)/g);
  const n = str.replace(r, function (x, y) {
    if (+x == 0) {
      return '';
    }

    const z = (y === 0) ? x.toUpperCase() : x.toUpperCase();

    return z;
  });

  return n;
};

exports.basename = function (ns, str) {
  str = str.split('').reverse().join('');
  str = str.split(ns);
  str = str[0].split('').reverse().join('');

  return str;
};

exports.endsWith = function (e, str) {
  const regex = new RegExp(e + '$');
  const n = regex.test(str);

  return n;
};

exports.startsWith = function (e, str) {
  const regex = new RegExp('^' + e);
  const n = regex.test(str);

  return n;
};

exports.after = function (e, str) {
  str = str.split(e);
  str = str[1] ? str[1] : '';

  return str;
};

exports.before = function (e, str) {
  str = str.split(e);
  str = str[0];

  return str;
};

exports.finish = function (e, str) {
  const x = module.exports.endsWith(e, str);
  str = (x == true) ? str : str + e;

  return str;
};

exports.start = function (e, str) {
  const x = module.exports.startsWith(e, str);
  str = (x == true) ? str : e + str;

  return str;
};

exports.contains = function (e, str) {
  const regex = new RegExp('(' + e + ')');
  const n = regex.test(str);

  return n;
};

exports.limit = function (n, str, prefix) {
  str = str.slice(0, n);
  str = (n > str.length) ? str : (prefix ? (str + prefix) : (str + '...'));

  return str;
};

exports.random = function (n) {
  var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
  str = str.sort(function (a, b) {
    return 0.5 - Math.random()
  });
  str = str.join('').slice(0, n);

  return str;
};

exports.slug = function (str, prefix) {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, prefix ? prefix : '-');

  return str;
};
