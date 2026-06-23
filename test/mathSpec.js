import assert from 'assert';
import { describe, it } from 'mocha';
import g from '../src/g.js';

function assertAlmostEqual(actual, expected) {
    assert(Math.abs(actual - expected) < 0.00001, 'Expected ' + expected + ', got ' + actual);
}

describe('The accumulate function', function () {

    it('accumulates', function () {
        assert.deepEqual(g.accumulate([21, 14, 13, 3, 21]), [0, 21, 35, 48, 51]);
        assert.deepEqual(g.accumulate([]), [0]);
        assert.deepEqual(g.accumulate([42]), [0]);
        assert.deepEqual(g.accumulate(10, 12, 9, 4), [0, 10, 22, 31]);
        assert.deepEqual(g.accumulate(), [0]);
        assert.deepEqual(g.accumulate(42), [0]);
    });

});

describe('The add function', function () {

    it('does addition', function () {
        assert.equal(g.add(), 0);
        assert.equal(g.add(4), 4);
        assert.equal(g.add(4, 20), 24);
        assert.equal(g.add(4, 20, 16, 9, 12), 61);
    });

});

describe('The average function', function () {

    it('returns the average', function () {
        assert.equal(g.average(), 0);
        assert.equal(g.average(0), 0);
        assert.equal(g.average(5), 5);
        assert.equal(g.average(2, 12), 7);
        assert.equal(g.average(1, 2, 3, 4), 2.5);
        assert.equal(g.average([]), 0);
        assert.equal(g.average([0]), 0);
        assert.equal(g.average([1, 2, 3, 4, 5]), 3);
    });

});

describe('The divide function', function () {

    it('does division', function () {
        assert.equal(g.divide(5), 0.2);
        assert.equal(g.divide(12, 3), 4);
        assert.equal(g.divide(21, 7, 6), 0.5);
        assert.equal(g.divide(100, 2, 2, 5, 5), 1);
    });

});

describe('The even function', function () {

    it('returns true if a number is even', function () {
        assert.equal(g.even(0), true);
        assert.equal(g.even(1), false);
        assert.equal(g.even(99), false);
        assert.equal(g.even(100), true);
    });

});

describe('The clamp function', function () {

    it('clamps the value between min and max', function () {
        assert.equal(g.clamp(50, 0, 100), 50);
        assert.equal(g.clamp(0, 0, 100), 0);
        assert.equal(g.clamp(100, 0, 100), 100);
        assert.equal(g.clamp(-50, 0, 100), 0);
        assert.equal(g.clamp(500, 0, 100), 100);
    });

    it('clamps to 0-1 default values', function () {
        assert.equal(g.clamp(0.5), 0.5);
        assert.equal(g.clamp(0.0), 0.0);
        assert.equal(g.clamp(1.0), 1.0);
        assert.equal(g.clamp(-0.5), 0.0);
        assert.equal(g.clamp(10.0), 1.0);
    });

});

describe('The multiply function', function () {

    it('does multiplication', function () {
        assert.equal(g.multiply(), 1);
        assert.equal(g.multiply(0), 0);
        assert.equal(g.multiply(7, 3), 21);
        assert.equal(g.multiply(2, 9, 3, 10), 540);
    });

});

describe('The odd function', function () {

    it('returns true if a number is odd', function () {
        assert.equal(g.odd(0), false);
        assert.equal(g.odd(1), true);
        assert.equal(g.odd(99), true);
        assert.equal(g.odd(100), false);
    });

});

describe('The range function', function () {

    it('returns linear values', function () {
        const s1 = g.range(4, 14, 2);
        assert.deepEqual(s1, [4, 6, 8, 10, 12]);
        const s2 = g.range(4, 14, 2, true);
        assert.deepEqual(s2, [4, 6, 8, 10, 12, 14]);
        const s3 = g.range(3, 14, 2);
        assert.deepEqual(s3, [3, 5, 7, 9, 11, 13]);
        const s4 = g.range(3, 14, 2, true);
        assert.deepEqual(s4, [3, 5, 7, 9, 11, 13]);
        const s5 = g.range(10, 15);
        assert.deepEqual(s5, [10, 11, 12, 13, 14]);
        const s6 = g.range(10, 15, -1);
        assert.equal(s6.length, 0);
        const s7 = g.range(15, 10, 1);
        assert.equal(s7.length, 0);
        const s8 = g.range(14, 4, -2);
        assert.deepEqual(s8, [14, 12, 10, 8, 6]);
        const s9 = g.range(14, 4, -2, true);
        assert.deepEqual(s9, [14, 12, 10, 8, 6, 4]);
        const s10 = g.range(15, 10);
        assert.deepEqual(s10, [15, 14, 13, 12, 11]);

    });

});

describe('The randomNumbers function', function () {

    function numbersAllInRange(numbers, min, max) {
        let v;
        for (let i = 0; i < numbers.length; i += 1) {
            v = numbers[i];
            if (v < min || v > max) { return false; }
        }
        return true;
    }

    it('returns numbers within the given range', function () {
        const s1 = g.randomNumbers(10, 0, 1);
        assert.equal(s1.length, 10);
        assert.ok(numbersAllInRange(s1, 0, 1));
        const s2 = g.randomNumbers(7, 20);
        assert.equal(s2.length, 7);
        assert.ok(numbersAllInRange(s2, 0, 20));
        const s3 = g.randomNumbers(10, -20);
        assert.ok(numbersAllInRange(s3, -20, 0));
        const s4 = g.randomNumbers(10, -15, 15);
        assert.ok(numbersAllInRange(s4, -15, 15));
        const s5 = g.randomNumbers(10, 15, -15);
        assert.ok(numbersAllInRange(s5, -15, 15));
    });

    it('returns the same numbers when given the same seed', function () {
        assert.deepEqual(g.randomNumbers(10, 0, 100, 5), g.randomNumbers(10, 0, 100, 5));
        assert.notDeepEqual(g.randomNumbers(10, 0, 100, 5), g.randomNumbers(10, 0, 100, 6));
    });

});

describe('The sample function', function () {

    it('returns linear values', function () {
        const s1 = g.sample(5, 0, 8);
        assert.deepEqual(s1, [0, 2, 4, 6, 8]);
    });

    it('returns circular values', function () {
        const s1 = g.sample(5, 0, 10, true);
        assert.deepEqual(s1, [0, 2, 4, 6, 8]);
    });

});

describe('The wave functions', function () {

    it('returns a valid sine wave', function () {
        assertAlmostEqual(g.sineWave(0), 0);
        assertAlmostEqual(g.sineWave(0.25), 1);
        assertAlmostEqual(g.sineWave(0.5), 0);
        assertAlmostEqual(g.sineWave(0.75), -1);
        assertAlmostEqual(g.sineWave(1), 0);

        assertAlmostEqual(g.sineWave(0, 100, 200), 150);
        assertAlmostEqual(g.sineWave(0.25, 100, 200), 200);
        assertAlmostEqual(g.sineWave(0.5, 100, 200), 150);
        assertAlmostEqual(g.sineWave(0.75, 100, 200), 100);
        assertAlmostEqual(g.sineWave(1, 100, 200), 150);

        assertAlmostEqual(g.sineWave(0, -1, 1, 100), 0);
        assertAlmostEqual(g.sineWave(25, -1, 1, 100), 1);
        assertAlmostEqual(g.sineWave(50, -1, 1, 100), 0);
        assertAlmostEqual(g.sineWave(75, -1, 1, 100), -1);
        assertAlmostEqual(g.sineWave(100, -1, 1, 100), 0);

        assertAlmostEqual(g.sineWave(-0.2, -1, 1, 1, 0.2), 0);
    });

    it('returns a valid square wave', function () {
        assert.equal(g.squareWave(0), 1);
        assert.equal(g.squareWave(0.499), 1);
        assert.equal(g.squareWave(0.5), -1);
        assert.equal(g.squareWave(0.501), -1);
        assert.equal(g.squareWave(1), 1);
    });

    it('returns a valid triangle wave', function () {
        assert.equal(g.triangleWave(0), 0);
        assert.equal(g.triangleWave(0.25), 1);
        assert.equal(g.triangleWave(0.5), 0);
        assert.equal(g.triangleWave(0.75), -1);
        assert.equal(g.triangleWave(1), 0);
    });

});

describe('The sign function', function () {

    it('returns the sign of a number', function () {
        assert.equal(g.sign(0), 0);
        assert.equal(g.sign(42), 1);
        assert.equal(g.sign(-42), -1);
    });

});

describe('The subtract function', function () {

    it('does subtraction', function () {
        assert.equal(g.subtract(4), -4);
        assert.equal(g.subtract(30, 6), 24);
        assert.equal(g.subtract(99, 40, 11, 10, 5), 33);
    });

});

describe('The total function', function () {

    it('totals a list of numbers', function () {
        assert.equal(g.total([10, 12, 9, 9]), 40);
        assert.equal(g.total(10, 12, 9, 11), 42);
        assert.equal(g.total(), 0);
        assert.equal(g.total([]), 0);
        assert.equal(g.total(20), 20);
    });

});

describe('The abs function', function () {

    it('returns the absolute value', function () {
        assert.equal(g.abs(5), 5);
        assert.equal(g.abs(-5), 5);
        assert.equal(g.abs(0), 0);
    });

});

describe('The and function', function () {

    it('does logical AND', function () {
        assert.equal(g.and(true, true), true);
        assert.equal(g.and(true, false), false);
        assert.equal(g.and(false, false), false);
        assert.equal(g.and(1), true);
        assert.equal(g.and(0), false);
        assert.equal(g.and(true, true, false), false);
        assert.throws(() => g.and());
    });

});

describe('The boolean function', function () {

    it('converts a value to boolean', function () {
        assert.equal(g.boolean(true), true);
        assert.equal(g.boolean(false), false);
        assert.equal(g.boolean(1), true);
        assert.equal(g.boolean(0), false);
        assert.equal(g.boolean(''), false);
        assert.equal(g.boolean('hello'), true);
    });

});

describe('The ceil function', function () {

    it('rounds up', function () {
        assert.equal(g.ceil(1.1), 2);
        assert.equal(g.ceil(1.9), 2);
        assert.equal(g.ceil(-1.9), -1);
    });

});

describe('The compare function', function () {

    it('compares two values with an operator', function () {
        assert.equal(g.compare(3, 5, '<'), true);
        assert.equal(g.compare(5, 3, '<'), false);
        assert.equal(g.compare(5, 3, '>'), true);
        assert.equal(g.compare(3, 3, '<='), true);
        assert.equal(g.compare(4, 3, '<='), false);
        assert.equal(g.compare(3, 3, '>='), true);
        assert.equal(g.compare(3, 3, '=='), true);
        assert.equal(g.compare(3, 4, '!='), true);
        assert.throws(() => g.compare(1, 2, 'unknown'));
    });

});

describe('The cos function', function () {

    it('returns the cosine', function () {
        assert.equal(g.cos(0), 1);
        assertAlmostEqual(g.cos(Math.PI), -1);
    });

});

describe('The degrees function', function () {

    it('converts radians to degrees', function () {
        assertAlmostEqual(g.degrees(Math.PI), 180);
        assertAlmostEqual(g.degrees(Math.PI / 2), 90);
        assert.equal(g.degrees(0), 0);
    });

});

describe('The e function', function () {

    it('returns Math.E', function () {
        assert.equal(g.e(), Math.E);
    });

});

describe('The floor function', function () {

    it('rounds down', function () {
        assert.equal(g.floor(1.9), 1);
        assert.equal(g.floor(-1.1), -2);
    });

});

describe('The integer function', function () {

    it('truncates to integer', function () {
        assert.equal(g.integer(3.9), 3);
        assert.equal(g.integer(-3.9), -3);
        assert.equal(g.integer(5), 5);
    });

});

describe('The log function', function () {

    it('returns the natural logarithm', function () {
        assert.equal(g.log(1), 0);
        assertAlmostEqual(g.log(Math.E), 1);
        assertAlmostEqual(g.log(-Math.E), -1);
    });

});

describe('The makeNumbers function', function () {

    it('parses numbers from a string', function () {
        assert.deepEqual(g.makeNumbers('1,2,3', ','), [1, 2, 3]);
        assert.deepEqual(g.makeNumbers('1.5 2.5 3.5', ' '), [1.5, 2.5, 3.5]);
        assert.deepEqual(g.makeNumbers(''), []);
        assert.deepEqual(g.makeNumbers(null), []);
    });

});

describe('The max function', function () {

    it('returns the maximum value', function () {
        assert.equal(g.max(1, 2, 3), 3);
        assert.equal(g.max([1, 2, 3]), 3);
        assert.equal(g.max(), 0);
        assert.equal(g.max(-5, -1, -3), -1);
    });

});

describe('The min function', function () {

    it('returns the minimum value', function () {
        assert.equal(g.min(1, 2, 3), 1);
        assert.equal(g.min([1, 2, 3]), 1);
        assert.equal(g.min(), 0);
        assert.equal(g.min(-5, -1, -3), -5);
    });

});

describe('The mod function', function () {

    it('returns the modulo', function () {
        assert.equal(g.mod(10, 3), 1);
        assert.equal(g.mod(9, 3), 0);
        assert.equal(g.mod(-7, 3), -1);
    });

});

describe('The negate function', function () {

    it('negates a number', function () {
        assert.equal(g.negate(5), -5);
        assert.equal(g.negate(-3), 3);
        assert.equal(g.negate(0), 0);
    });

});

describe('The not function', function () {

    it('returns the logical NOT', function () {
        assert.equal(g.not(true), false);
        assert.equal(g.not(false), true);
        assert.equal(g.not(0), true);
        assert.equal(g.not(1), false);
    });

});

describe('The number function', function () {

    it('is the identity function', function () {
        assert.equal(g.number(5), 5);
        assert.equal(g.number('hello'), 'hello');
    });

});

describe('The or function', function () {

    it('does logical OR', function () {
        assert.equal(g.or(true, false), true);
        assert.equal(g.or(false, false), false);
        assert.equal(g.or(5), true);
        assert.equal(g.or(0), false);
        assert.equal(g.or(false, false, true), true);
        assert.throws(() => g.or());
    });

});

describe('The perlinNoise function', function () {

    it('returns noise values', function () {
        assert.equal(g.perlinNoise(0, 0, 0), 0.5);
    });

});

describe('The pi function', function () {

    it('returns Math.PI', function () {
        assert.equal(g.pi(), Math.PI);
    });

});

describe('The pow function', function () {

    it('raises a number to a power', function () {
        assert.equal(g.pow(2, 10), 1024);
        assert.equal(g.pow(3, 3), 27);
        assert.equal(g.pow(5, 0), 1);
    });

});

describe('The radians function', function () {

    it('converts degrees to radians', function () {
        assertAlmostEqual(g.radians(180), Math.PI);
        assertAlmostEqual(g.radians(90), Math.PI / 2);
        assert.equal(g.radians(0), 0);
    });

});

describe('The round function', function () {

    it('rounds to the nearest integer', function () {
        assert.equal(g.round(1.4), 1);
        assert.equal(g.round(1.5), 2);
        assert.equal(g.round(-1.5), -1);
    });

    it('rounds to a given multiple', function () {
        assert.equal(g.round(123, 10), 120);
        assert.equal(g.round(155, 10), 160);
    });

});

describe('The sawtoothWave function', function () {

    it('returns a valid sawtooth wave', function () {
        assertAlmostEqual(g.sawtoothWave(0), -1);
        assertAlmostEqual(g.sawtoothWave(0.5), 0);
        assertAlmostEqual(g.sawtoothWave(0.75), 0.5);
        assertAlmostEqual(g.sawtoothWave(1), -1);
    });

});

describe('The sin function', function () {

    it('returns the sine', function () {
        assert.equal(g.sin(0), 0);
        assertAlmostEqual(g.sin(Math.PI / 2), 1);
    });

});

describe('The sqrt function', function () {

    it('returns the square root', function () {
        assert.equal(g.sqrt(4), 2);
        assert.equal(g.sqrt(9), 3);
        assert.equal(g.sqrt(0), 0);
    });

});

describe('The tan function', function () {

    it('returns the tangent', function () {
        assert.equal(g.tan(0), 0);
        assertAlmostEqual(g.tan(Math.PI / 4), 1);
    });

});

describe('The xor function', function () {

    it('does exclusive OR', function () {
        assert.equal(g.xor(true, false), true);
        assert.equal(g.xor(false, true), true);
        assert.equal(g.xor(true, true), false);
        assert.equal(g.xor(false, false), false);
        assert.throws(() => g.xor(true));
    });

});
