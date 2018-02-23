"use strict";

exports.collapse = function (array) {
	const len = array.length;
	var n = [];
	var q = 0;

	if (len > 0) {
		for ( ;q < len; q++) {
			if (Array.isArray(array[q])) {
				var w = 0;
				var e = array[q].length;

				for ( ;w < e; w++) {
					n.push(array[q][w]);
				}
			} else {
				n.push(array[q]);
			}
		}

		return n;
	}

	return [];
};

exports.except = function (array, keys) {
	if (Array.isArray(keys)) {
		const len = keys.length;
		var q = 0;

		for ( ;q < len;q++) {
			if (array.indexOf(keys[q]) >= 0) {
				array = array.filter(function (x) {return x !== keys[q];});
			}
		}

		return array;
	} else {
		return array.filter(function (x) {return x !== keys;});
	}
};

exports.only = function (array, keys) {
	if (Array.isArray(keys)) {
		const len = keys.length;
		var q = 0;
		var n = [];

		for ( ;q < len;q++) {
			if (array.indexOf(keys[q]) >= 0) {
				n.push(keys[q]);
			}
		}

		return n;
	} else {
		return array.filter(function (x) {return x === keys;});
	}
};

exports.first = function (array) {
	return Array.isArray(array) ? array[0] : array;
};

exports.last = function (array) {
	return Array.isArray(array) ? array[array.length - 1] : array;
};