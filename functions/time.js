"use strict";

const moment = require('moment');
const momenttz = require('moment-timezone');

exports.daysInMonth = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).daysInMonth();
  } else {
    return moment().daysInMonth();
  }
};

exports.day = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('DD').toUpperCase();
  } else {
    return moment().format('DD').toUpperCase();
  }
};

exports.month = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('MM').toUpperCase();
  } else {
    return moment().format('MM').toUpperCase();
  }
};

exports.year = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('YYYY').toUpperCase();
  } else {
    return moment().format('YYYY').toUpperCase();
  }
};

exports.hour = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('HH').toUpperCase();
  } else {
    return moment().format('HH').toUpperCase();
  }
};

exports.minute = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('mm').toUpperCase();
  } else {
    return moment().format('mm').toUpperCase();
  }
};

exports.second = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('ss').toUpperCase();
  } else {
    return moment().format('ss').toUpperCase();
  }
};

exports.now = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('YYYY-MM-DD HH:mm:ss').toUpperCase();
  } else {
    return moment().format('YYYY-MM-DD HH:mm:ss').toUpperCase();
  }
};

exports.date = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('YYYY-MM-DD').toUpperCase();
  } else {
    return moment().format('YYYY-MM-DD').toUpperCase();
  }
};

exports.time = function (options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format('HH:mm:ss').toUpperCase();
  } else {
    return moment().format('HH:mm:ss').toUpperCase();
  }
};

exports.custom = function (format, options) {
  if (options && options.timezone) {
    return momenttz().tz(options.timezone).format(format).toUpperCase();
  } else {
    return moment().format(format).toUpperCase();
  }
};

exports.add = function (date, len, prefix, options) {
  var n;

  if (options && options.timezone) {
    n = momenttz(date).tz(options.timezone).format('YYYY-MM-DD HH:mm:ss');

    return momenttz(n).tz(options.timezone).add(len, prefix).format('YYYY-MM-DD HH:mm:ss');
  } else {
    n = moment(date).format('YYYY-MM-DD HH:mm:ss');

    return moment(n).add(len, prefix).format('YYYY-MM-DD HH:mm:ss');
  }
};

exports.isExpired = function (date, params, options) {
  const len = (params && params.len) ? params.len : '0';
  const prefix = (params && params.prefix) ? params.prefix : 'second';
  const n = module.exports.now(options);
  const x = module.exports.add(date, len, prefix, options);

  if (n > x) {
    return true;
  } else {
    return false;
  }
};
