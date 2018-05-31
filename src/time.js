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

exports.secondsToTime = function (seconds) {
  const asHours = moment.duration(seconds, 'seconds').hours();
  const asMinutes = moment.duration(seconds, 'seconds').minutes();
  const asSeconds = moment.duration(seconds, 'seconds').seconds();
  const num = function (n) {
    n = String(n);
    return (n.length === 1 || n === 0) ? ('0' + n) : n;
  };
  
  return num(asHours) + ':' + num(asMinutes) + ':' + num(asSeconds);
};

exports.dateDiff = function (start, end, prefix) {
  start = moment(start);
  end = moment(end);
  var diff = end.diff(start);
  diff = moment.duration(diff);

  if (prefix === 'year') return diff.asYears();
  if (prefix === 'month') return diff.asMonths();
  if (prefix === 'week') return diff.asWeeks();
  if (prefix === 'day') return diff.asDays();
  if (prefix === 'hour') return diff.asHours();
  if (prefix === 'minute') return diff.asMinutes();
  if (prefix === 'second') return diff.asSeconds();

  return diff.asDays();
};

exports.timeDiff = function (start, end) {
  start = moment.duration(start).asSeconds();
  end = moment.duration(end).asSeconds();
  var diff = end - start;
  diff = module.exports.secondsToTime(diff);

  return diff;
};