'use strict';

const reduce = require('lodash.reduce');

const util = require('./util');
const vg = require('./vg/vg');

const g = {};

const TWO_PI = Math.PI * 2;

g.abs = Math.abs;

g.accumulate = function (values) {
    if (arguments.length > 1) {
        values = arguments;
    } else if (arguments.length === 1 && !Array.isArray(values)) {
        values = [values];
    }
    if (!values || values.length === 0) { return [0.0]; }
    const b = [];
    let currentTotal = 0;
    for (let i = 0; i < values.length; i++) {
        b.push(currentTotal);
        currentTotal += values[i];
    }
    return b;
};

g.add = function (a, b) {
    if (arguments.length === 2) { return a + b; }
    return reduce(arguments, function(total, n) {
        return total + n;
    }, 0);
};

g.and = function (bool1, bool2) {
    const argLength = arguments.length;
    if (argLength === 2) {
        return bool1 && bool2;
    } else if (argLength === 1) {
        return !!bool1;
    } else if (argLength === 0) {
        throw new Error('Wrong number of arguments');
    }
    return reduce(arguments, function(b1, b2) {
        return b1 && b2;
    }, true);
};

g.average = function (values) {
    if (arguments.length > 1) {
        values = arguments;
    } else if (arguments.length === 1 && !Array.isArray(values)) {
        values = [values];
    }
    if (!values || values.length === 0) { return 0; }
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum / values.length;
};

g.boolean = function (v) {
    return !!v;
};

g.ceil = Math.ceil;

g.clamp = function (v, min, max) {
    min = typeof min === 'number' ? min : 0;
    max = typeof max === 'number' ? max : 1;
    return v < min ? min : (v > max ? max : v);
};

g.compare = function (v1, v2, comparator) {
    if (comparator === '<') {
        return v1 < v2;
    } else if (comparator === '>') {
        return v1 > v2;
    } else if (comparator === '<=') {
        return v1 <= v2;
    } else if (comparator === '>=') {
        return v1 >= v2;
    } else if (comparator === '==') {
        return v1 === v2;
    } else if (comparator === '!=') {
        return v1 !== v2;
    }
    throw new Error('Unknown comparison operation ' + comparator);
};

g.cos = Math.cos;

g.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

g.divide = function (a, b) {
    const argLength = arguments.length;
    function checkIfZero(arg) {
        if (arg === 0) {
            throw new Error('Divide by zero');
        }
    }
    if (argLength === 2) {
        checkIfZero(b);
        return a / b;
    } else if (argLength === 1) {
        checkIfZero(a);
        return 1 / a;
    } else if (argLength === 0) {
        throw new Error('Wrong number of arguments');
    }
    return reduce([].slice.call(arguments, 1), function(total, n) {
        checkIfZero(n);
        return total / n;
    }, arguments[0]);
};

g.e = function () {
    return Math.E;
};

g.even = function (v) {
    return v % 2 === 0;
};

g.floor = Math.floor;

g.integer = function (v) {
    return v | 0;
};

g.log = function (v) {
    return v > 0 ? Math.log(v) : -Math.log(-v);
};

g.makeNumbers = function (s, separator) {
    if (!s) { return []; }
    if (!separator) { separator = ''; }
    const strings = s.split(separator),
	      numbers = [];
    for (let i = 0; i < strings.length; i++) {
        const num = parseFloat(strings[i]);
        if (num === 0 || num) {
            numbers.push(num);
        }
    }
    return numbers;
};

g.max = function () {
    let values = arguments;
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        values = arguments[0];
    }
    if (values.length === 0) {
        throw new Error('Wrong number of arguments');
    }
    return Math.max.apply(null, values);
};

g.min = function () {
    let values = arguments;
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        values = arguments[0];
    }
    if (values.length === 0) {
        throw new Error('Wrong number of arguments');
    }
    return Math.min.apply(null, values);
};

g.mod = function (a, b) {
    return a % b;
};

g.multiply = function (a, b) {
    const argLength = arguments.length;
    if (argLength === 2) { return a * b; }
    else if (argLength === 1) { return a; }
    return reduce(arguments, function(total, n) {
        return total * n;
    }, 1);
};

g.negate = function (v) {
    return -v;
};

g.not = function (bool) {
    return !bool;
};

g.number = function (v) {
    return v;
};

g.odd = function (v) {
    return v % 2 !== 0;
};

g.or = function (bool1, bool2) {
    const argLength = arguments.length;
    if (argLength === 2) {
        return bool1 || bool2;
    } else if (argLength === 1) {
        return !!bool1;
    } else if (argLength === 0) {
        throw new Error('Wrong number of arguments');
    }
    return reduce(arguments, function(b1, b2) {
        return b1 || b2;
    }, false);
};

// Compute Perlin noise
g.perlinNoise = function (x, y, z) {
    // Call optimized internal noise function.
    return vg.math.noise(x, y, z);
};

g.pi = function () {
    return Math.PI;
};

g.pow = Math.pow;

g.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

g.randomNumbers = function (amount, min, max, seed) {
    const argLength = arguments.length;
    if (argLength < 4 || (!seed && seed !== 0)) {
        seed = Math.random();
    }
    if (argLength === 3 || argLength === 4) {
        min = min || 0;
        max = max || (max === 0 ? 0 : 1);
    } else if (argLength === 2) {
        max = min || (min === 0 ? 0 : 1);
        min = 0;
    } else if (argLength === 1) {
        min = 0;
        max = 1;
    }
    if (max < min) {
        const tmp = max;
        max = min;
        min = tmp;
    }
    const delta = max - min,
          rand = util.randomGenerator(seed || 0),
          numbers = [];
    for (let i = 0; i < amount; i++) {
        const v = min + (rand(0, 1) * delta);
        numbers.push(v);
    }
    return numbers;
};

g.range = function (min, max, step, includeMax) {
    if (min === max) { return []; }
    if (step !== 0) {
        step = step || (min < max ? 1 : -1);
    }
    if (step > 0 && min > max) return [];
    if (step < 0 && min < max) return [];
    if (step === 0) return [];
    const values = [];
    if (min < max) {
        if (!!includeMax) {
            for (let i = min; i <= max; i += step) {
                values.push(i);
            }
        } else {
            for (let i = min; i < max; i += step) {
                values.push(i);
            }
        }
    } else {
        if (!!includeMax) {
            for (let i = min; i >= max; i += step) {
                values.push(i);
            }
        } else {
            for (let i = min; i > max; i += step) {
                values.push(i);
            }
        }
    }
    return values;
};

g.round = function (v, a) {
    a = a | 0;
    if (!a) {
        return Math.round(v);
    }
    return Math.round(v / a) * a;
};

g.sample = function (amount, min, max, circular) {
	const values = [];
    values.length = amount;

    let d;
    if (circular) {
        d = (max - min) / amount;
    } else {
        d = (max - min) / (amount - 1);
    }
    for (let i = 0; i < amount; i++) {
        values[i] = min + i * d;
    }
    return values;
};

g.sineWave = function (v, min, max, period, offset) {
    if (min === undefined) min = -1;
    if (max === undefined) max = 1;
    if (period === undefined) period = 1;
    if (offset === undefined) offset = 0;
    const amplitude = (max - min) / 2;
    return (min + amplitude) + Math.sin((offset + v) * TWO_PI / period) * amplitude;
};

g.squareWave = function (v, min, max, period, offset) {
    if (min === undefined) min = -1;
    if (max === undefined) max = 1;
    if (period === undefined) period = 1;
    if (offset === undefined) offset = 0;
    const halfPeriod = period / 2;
    const d = (v + offset) % period;
    if (d < halfPeriod) {
        return max;
    } else {
        return min;
    }
};

g.triangleWave = function (v, min, max, period, offset) {
    if (min === undefined) min = -1;
    if (max === undefined) max = 1;
    if (period === undefined) period = 1;
    if (offset === undefined) offset = 0;
    const amplitude = (max - min) / 2,
          frequency = TWO_PI / period,
	      time = v + offset + period / 4;
	let phase = 0;
    if (time % period !== 0) {
        phase = (time * frequency) % TWO_PI;
    }
    if (phase < 0) { phase += TWO_PI; }
    return 2 * amplitude * (1 + -Math.abs((phase / TWO_PI) * 2 - 1)) + min;
};

g.sawtoothWave = function (v, min, max, period, offset) {
    if (min === undefined) min = -1;
    if (max === undefined) max = 1;
    if (period === undefined) period = 1;
    if (offset === undefined) offset = 0;
    const amplitude = (max - min) / 2,
	      frequency = TWO_PI / period,
	      time = v + offset;
	let phase = 0;
    if (time % period !== 0) {
        phase = (time * frequency) % TWO_PI;
    }
    if (phase < 0) { phase += TWO_PI; }
    return 2 * (phase / TWO_PI) * amplitude + min;
};

g.sign = function (v) {
    if (v > 0) {
        return 1;
    } else if (v === 0) {
        return 0;
    } else {
        return -1;
    }
};

g.sin = Math.sin;

g.sqrt = Math.sqrt;

g.subtract = function (a, b) {
    const argLength = arguments.length;
    if (argLength === 2) { return a - b; }
    else if (argLength === 1) { return -a; }
    else if (argLength === 0) { throw new Error('Wrong number of arguments'); }
    return reduce([].slice.call(arguments, 1), function(total, n) {
        return total - n;
    }, arguments[0]);
};

g.tan = Math.tan;

g.total = function (values) {
    if (arguments.length > 1) {
        values = arguments;
    } else if (arguments.length === 1 && !Array.isArray(values)) {
        values = [values];
    } else if (arguments.length === 0) {
        values = [];
    }
    if (values.length === 0) { return 0; }
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
};

g.xor = function (bool1, bool2) {
    const argLength = arguments.length;
    if (argLength === 2) {
        return !!(bool1 ^ bool2);
    } else {
        throw new Error('Wrong number of arguments');
    }
};

module.exports = g;
