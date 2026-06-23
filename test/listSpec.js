import assert from 'assert';
import { describe, it } from 'mocha';
import g from '../src/g.js';

describe('The interleave function', function () {

    it('works', function () {
        assert.deepEqual(g.interleave(null), []);
        assert.deepEqual(g.interleave(null, null), []);
        assert.deepEqual(g.interleave(null, [1, 2, 3], [11, 22]), [1, 11, 2, 22, 3]);
        assert.deepEqual(g.interleave(), []);
        assert.deepEqual(g.interleave([1]), [1]);
        assert.deepEqual(g.interleave([1], [2]), [1, 2]);
        assert.deepEqual(g.interleave([1, 3], [2]), [1, 2, 3]);
        assert.deepEqual(g.interleave([1], [2, 99]), [1, 2]);
        assert.deepEqual(g.interleave([1, 4], [2, 5], [3]), [1, 2, 3, 4, 5]);
    });

});

describe('The sort function', function () {

    it('works', function () {
        assert.deepEqual(g.sort([]), []);
        assert.deepEqual(g.sort([1]), [1]);
        assert.deepEqual(g.sort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    });

    it('supports keys', function () {
        assert.deepEqual(g.sort([{ x: 2 }, { x: 3 }, { x: 1 }], 'x'), [{ x: 1 }, { x: 2 }, { x: 3 }]);
    });

    it('supports null values', function () {
        assert.deepEqual(g.sort(null), []);
    });

});

describe('The repeat function', function () {

    it('works with simple items', function () {
        assert.deepEqual(g.repeat(42, -1), []);
        assert.deepEqual(g.repeat(42, 0), []);
        assert.deepEqual(g.repeat(42, 1), [42]);
        assert.deepEqual(g.repeat(42, 3), [42, 42, 42]);
    });

    it('works with list items', function () {
        assert.deepEqual(g.repeat([1, 8], 3), [1, 8, 1, 8, 1, 8]);
        assert.deepEqual(g.repeat([], 3), []);
    });

    it('works per-item', function () {
        assert.deepEqual(g.repeat([1, 8], 3, true), [1, 1, 1, 8, 8, 8]);
        assert.deepEqual(g.repeat([], 3, true), []);
    });

});

describe('The reverse function', function () {
    it('works', function () {
        assert.deepEqual(g.reverse([]), []);
        assert.deepEqual(g.reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
    });

    it('supports null values', function () {
        assert.deepEqual(g.reverse(null), []);
    });
});

describe('The combine function', function () {
    it('concatenates multiple lists', function () {
        assert.deepEqual(g.combine([1, 2], [3, 4]), [1, 2, 3, 4]);
        assert.deepEqual(g.combine([1, 2], null, [3, 4]), [1, 2, 3, 4]);
        assert.deepEqual(g.combine(), []);
    });
});

describe('The contains function', function () {
    it('checks if a list contains a value', function () {
        assert.equal(g.contains([1, 2, 3], 2), true);
        assert.equal(g.contains([1, 2, 3], 4), false);
        assert.equal(g.contains(null, 1), false);
        assert.equal(g.contains([{ x: 1 }], { x: 1 }), true);
    });
});

describe('The count function', function () {
    it('returns the length of the list', function () {
        assert.equal(g.count([1, 2, 3]), 3);
        assert.equal(g.count([]), 0);
        assert.equal(g.count(null), 0);
    });
});

describe('The cull function', function () {
    it('filters a list by a boolean mask', function () {
        assert.deepEqual(g.cull([1, 2, 3, 4], [true, false, true, false]), [1, 3]);
        assert.deepEqual(g.cull([1, 2, 3, 4, 5], [true, false]), [1, 3, 5]);
        assert.deepEqual(g.cull([1, 2, 3], null), [1, 2, 3]);
        assert.deepEqual(g.cull(null, [true]), []);
    });
});

describe('The cycle function', function () {
    it('repeats a list to a given length', function () {
        assert.deepEqual(g.cycle([1, 2, 3], 5), [1, 2, 3, 1, 2]);
        assert.deepEqual(g.cycle([1, 2], 4), [1, 2, 1, 2]);
        assert.deepEqual(g.cycle(null, 5), []);
        assert.deepEqual(g.cycle([1, 2], 0), []);
    });
});

describe('The distinct function', function () {
    it('removes duplicates', function () {
        assert.deepEqual(g.distinct([1, 2, 1, 3, 2]), [1, 2, 3]);
        assert.deepEqual(g.distinct([{ x: 1 }, { x: 1 }, { x: 2 }]), [{ x: 1 }, { x: 2 }]);
        assert.deepEqual(g.distinct(null), []);
    });
});

describe('The equals function', function () {
    it('does deep equality', function () {
        assert.equal(g.equals([1, 2, 3], [1, 2, 3]), true);
        assert.equal(g.equals([1, 2, 3], [1, 2, 4]), false);
        assert.equal(g.equals({ a: 1 }, { a: 1 }), true);
    });
});

describe('The first function', function () {
    it('returns the first element', function () {
        assert.equal(g.first([1, 2, 3]), 1);
        assert.equal(g.first([]), null);
        assert.equal(g.first(null), null);
    });
});

describe('The get function', function () {
    it('returns the element at an index', function () {
        assert.equal(g.get([1, 2, 3], 1), 2);
        assert.equal(g.get([], 0), null);
        assert.equal(g.get(null, 0), null);
    });
});

describe('The last function', function () {
    it('returns the last element', function () {
        assert.equal(g.last([1, 2, 3]), 3);
        assert.equal(g.last([]), null);
        assert.equal(g.last(null), null);
    });
});

describe('The pick function', function () {
    it('randomly picks elements using a seed', function () {
        const r1 = g.pick([1, 2, 3, 4, 5], 3, 42);
        assert.equal(r1.length, 3);
        assert.deepEqual(r1, g.pick([1, 2, 3, 4, 5], 3, 42));
        assert.notDeepEqual(r1, g.pick([1, 2, 3, 4, 5], 3, 99));
        assert.deepEqual(g.pick([], 3, 42), []);
        assert.deepEqual(g.pick([1, 2, 3], 0, 42), []);
    });
});

describe('The randomSample function', function () {
    it('samples without replacement using a seed', function () {
        const r1 = g.randomSample([1, 2, 3, 4, 5], 3, 42);
        assert.equal(r1.length, 3);
        assert.deepEqual(r1, g.randomSample([1, 2, 3, 4, 5], 3, 42));
        assert.notDeepEqual(r1, g.randomSample([1, 2, 3, 4, 5], 3, 99));
        assert.deepEqual(g.randomSample([], 3, 42), []);
    });
});

describe('The rest function', function () {
    it('returns everything but the first element', function () {
        assert.deepEqual(g.rest([1, 2, 3]), [2, 3]);
        assert.deepEqual(g.rest([1]), []);
        assert.deepEqual(g.rest(null), []);
    });
});

describe('The second function', function () {
    it('returns the second element', function () {
        assert.equal(g.second([1, 2, 3]), 2);
        assert.equal(g.second([1]), null);
        assert.equal(g.second(null), null);
    });
});

describe('The shift function', function () {
    it('rotates a list by a given amount', function () {
        assert.deepEqual(g.shift([1, 2, 3, 4, 5], 2), [3, 4, 5, 1, 2]);
        assert.deepEqual(g.shift([1, 2, 3], 0), [1, 2, 3]);
        assert.deepEqual(g.shift(null, 2), []);
    });
});

describe('The shuffle function', function () {
    it('shuffles deterministically with a seed', function () {
        const s1 = g.shuffle([1, 2, 3, 4, 5], 42);
        assert.equal(s1.length, 5);
        assert.deepEqual(s1, g.shuffle([1, 2, 3, 4, 5], 42));
        assert.notDeepEqual(s1, g.shuffle([1, 2, 3, 4, 5], 99));
        assert.deepEqual([...s1].sort((a, b) => a - b), [1, 2, 3, 4, 5]);
    });
});

describe('The slice function', function () {
    it('slices a list', function () {
        assert.deepEqual(g.slice([1, 2, 3, 4, 5], 1, 3), [2, 3, 4]);
        assert.deepEqual(g.slice(null, 0, 2), []);
    });

    it('can invert the selection', function () {
        assert.deepEqual(g.slice([1, 2, 3, 4, 5], 1, 3, true), [1, 5]);
    });
});

describe('The switch_ function', function () {
    it('selects a value by index', function () {
        assert.equal(g.switch_(0, 'a', 'b', 'c'), 'a');
        assert.equal(g.switch_(1, 'a', 'b', 'c'), 'b');
        assert.equal(g.switch_(3, 'a', 'b', 'c'), 'a');
        assert.equal(g.switch_(-1, 'a', 'b', 'c'), 'c');
    });
});

describe('The takeEvery function', function () {
    it('takes every nth element', function () {
        assert.deepEqual(g.takeEvery([1, 2, 3, 4, 5, 6], 2), [1, 3, 5]);
        assert.deepEqual(g.takeEvery([1, 2, 3, 4, 5, 6], 2, 1), [2, 4, 6]);
        assert.deepEqual(g.takeEvery(null, 2), []);
    });
});

describe('The zipMap function', function () {
    it('creates an object from keys and values', function () {
        assert.deepEqual(g.zipMap(['a', 'b', 'c'], [1, 2, 3]), { a: 1, b: 2, c: 3 });
        assert.deepEqual(g.zipMap(['a', 'b'], [1, 2, 3]), { a: 1, b: 2 });
    });
});
