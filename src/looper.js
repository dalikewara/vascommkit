"use strict";

exports.looper = function (start, stop, callback, done) {
	var task, looper;
	var current = start;

	looper = function () {
		if (current >= stop) {
			clearInterval(task);

			if (done) {
				done();
			}
		} else {
			callback(current++);
		}
	};

	task = setInterval(looper, 0);
};
