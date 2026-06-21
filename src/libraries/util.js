'use strict';

const randomGenerator = function (seed) {
    // Note: the generator didn't work with negative seed values, so here we
    // transform our original seed into a new (positive) seed value with which we
    // create a new generator.
    if (seed < 0) {
        const gen = randomGenerator(Math.abs(seed));
        for (let i = 0; i < 23; i++) {
            gen();
        }
        return randomGenerator(gen(0, 10000));
    }

    // Based on random number generator from
    // http://indiegamr.com/generate-repeatable-random-numbers-in-js/
    return function (min, max) {
        min = min || 0;
        max = max || 1;
        seed = (seed * 9301 + 49297) % 233280;
        const v = seed / 233280;
        return min + v * (max - min);
    };
};

const flatten = function (arg) {
	const arr = Array.prototype.slice.call(arg);
	const args = [];
	for (let i = 0; i < arr.length; i++) {
		const o = arr[i];
		if (Array.isArray(o)) {
			for (let j = 0; j < o.length; j++) {
				args.push(o[j]);
			}
		} else {
			args.push(o);
		}
	}
	return args;
};

exports.randomGenerator = randomGenerator;
exports.flatten = flatten;