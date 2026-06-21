'use strict';

const deepEqual = require('./deepequal');
const util = require('./util');
const g = {};

g.combine = function () {
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        const l = arguments[i];
        if (l) {
            result = result.concat(l);
        }
    }
    return result;
};

g.contains = function (l, value) {
    if (!l) { return false; }
    for (let i = 0; i < l.length; i++) {
        if (deepEqual.deepEqual(l[i], value)) {
            return true;
        }
    }
    return false;
};

g.cycle = function (l, length) {
    if (!l || length <= 0) { return []; }
    const ll = l.length;
    const newList = [];
    for (let i = 0; i < length; i++) {
        newList.push(l[i % ll]);
    }
    return newList;
};

g.equals = function (o1, o2) {
    return deepEqual.deepEqual(o1, o2);
};

g.count = function (l) {
    if (l && l.length) {
        return l.length;
    } else {
        return 0;
    }
};

g.cull = function (l, booleans) {
    if (!l) { return []; }
    if (!booleans) { return l; }
    const results = [];
    for (let i = 0; i < l.length; i++) {
        // Cycle through the list of boolean values.
        if (booleans[i % booleans.length]) {
            results.push(l[i]);
        }
    }
    return results;
};

g.distinct = function(l) {
    if (!l) { return []; }
    const result = [],
          seen = [];
    for (let i = 0; i < l.length; i++) {
        const value = l[i];
        if (!g.contains(seen, value)) {
            seen.push(value);
            result.push(l[i]);
        }
    }
    return result;
};

g.first = function (l) {
    if (!l || l.length === 0) { return null; }
    return l[0];
};

g.get = function (l, i) {
    if (!l || l.length === 0) { return null; }
    return l[i];
};

g.interleave = function () {
    const args = Array.from(arguments).filter(l => !!l);
    if (args.length === 0) return [];
    const results = [];
    let elIndex = 0;
    while (true) {
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            if (arg.length > elIndex) {
                results.push(arg[elIndex]);
            } else {
                return results;
            }
        }
        elIndex++;
    }
};

g.last = function (l) {
    if (!l || l.length === 0) { return null; }
    return l[l.length - 1];
};

g.pick = function (l, amount, seed) {
    if (!l || l.length === 0 || amount <= 0) {
        return [];
    }
    if (!seed && seed !== 0) {
        seed = Math.random();
    }
    const rand = util.randomGenerator(seed || 0),
          results = [];
    for (let i = 0; i < amount; i++) {
        results.push(l[Math.floor(rand(0, l.length))]);
    }
    return results;
};

g.randomSample = function (l, amount, seed) {
    if (!l || l.length === 0 || amount <= 0) {
        return [];
    }
    if (!seed && seed !== 0) {
        seed = Math.random();
    }
    const shuffledlist = g.shuffle(l, seed);
    if (!amount) { return shuffledlist; }
    return g.slice(shuffledlist, 0, amount);
};

g.repeat = function (l, amount, perItem) {
    if (!l) { return []; }
    if (!Array.isArray(l)) {
        l = [l];
    }
    if (amount <= 0) { return []; }
    const newList = [];
    if (!perItem) {
        for (let i = 0; i < amount; i++) {
            newList.push.apply(newList, l);
        }
    } else {
        for (let i = 0; i < l.length; i++) {
            const v = l[i];
            for (let j = 0; j < amount; j++) {
                newList.push(v);
            }
        }
    }
    return newList;
};

g.rest = function (l) {
    if (!l) { return []; }
    return l.slice(1);
};

g.reverse = function (l) {
    if (!l) { return []; }
    return l.slice().reverse();
};

g.second = function (l) {
    if (!l || l.length < 2) { return null; }
    return l[1];
};

g.shift = function (l, amount) {
    // If the amount is bigger than the number of items, wrap around.
    if (!l) { return []; }
    amount = amount % l.length;
    const head = l.slice(0, amount);
    const result = l.slice(amount);
    result.push.apply(result, head);
    return result;
};

g.shuffle = function (l, seed) {
    if (!seed && seed !== 0) {
        seed = Math.random();
    }
    const r = util.randomGenerator(seed || 0);
    l = l.slice();
    for (let i = l.length - 1; i > 0; i--) {
        const j = Math.floor(r(0, i + 1));
        const tmp = l[i];
        l[i] = l[j];
        l[j] = tmp;
    }
    return l;
};

g.slice = function (l, start, size, invert) {
    if (!l) return [];
    if (!invert) {
        return l.slice(start, start + size);
    } else {
        const firstList = l.slice(0, start);
        const secondList = l.slice(start + size);
        firstList.push.apply(firstList, secondList);
        return firstList;
    }
};

g.sort = function (l, key) {
    if (!l) return [];
    if (key) {
        if (typeof key === 'string') {
            return l.slice().sort(function (a, b) {
                if (a[key] > b[key]) { return 1; }
                else if (a[key] === b[key]) { return 0; }
                else { return -1; }
            });
        } else if (typeof key === 'function') {
            return l.slice().sort(key);
        }
    }
    if (l && l[0] !== undefined && l[0] !== null && typeof l[0] === 'number') {
        return l.slice().sort(function (a, b) { return a - b; });
    }
    return l.slice().sort();
};

g.switch = function (index) {
    const nLists = (arguments.length - 1);
    index = index % nLists;
    if (index < 0) {
        index += nLists;
    }
    return arguments[index + 1];
};

g.takeEvery = function (l, n, offset) {
    if (!l) return [];
    offset = offset || 0;
    const results = [];
    for (let i = 0; i < l.length; i++) {
        if (i % n === offset) {
            results.push(l[i]);
        }
    }
    return results;
};

g.zipMap = function (keys, vals) {
    const m = {};
    const minLength = Math.min(keys.length, vals.length);
    for (let i = 0; i < minLength; i++) {
        const k = keys[i];
        const v = vals[i];
        m[k] = v;
    }
    return m;
};

module.exports = g;
