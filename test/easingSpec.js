import assert from 'assert';
import { describe, it } from 'mocha';
import g from '../src/g.js';

function assertAlmostEqual(actual, expected, delta) {
    delta = delta !== undefined ? delta : 0.00001;
    assert(Math.abs(actual - expected) < delta, 'Expected ' + expected + ', got ' + actual);
}

// All easing functions follow the signature (t, b, c, d):
//   t = current time, b = beginning value, c = change in value, d = duration
// At t=0 the result should be b; at t=d the result should be b+c.

const B = 0, C = 100, D = 1;

function assertBoundaries(fn) {
    assertAlmostEqual(fn(0, B, C, D), B, 0.001);
    assertAlmostEqual(fn(D, B, C, D), B + C, 0.001);
}

describe('The easing functions', function () {

    it('easeInQuad eases in', function () {
        assertBoundaries(g.easeInQuad);
        assertAlmostEqual(g.easeInQuad(0.5, B, C, D), 25);
    });

    it('easeOutQuad eases out', function () {
        assertBoundaries(g.easeOutQuad);
        assertAlmostEqual(g.easeOutQuad(0.5, B, C, D), 75);
    });

    it('easeInOutQuad eases in and out', function () {
        assertBoundaries(g.easeInOutQuad);
        assertAlmostEqual(g.easeInOutQuad(0.5, B, C, D), 50);
    });

    it('easeInCubic eases in', function () {
        assertBoundaries(g.easeInCubic);
        assertAlmostEqual(g.easeInCubic(0.5, B, C, D), 12.5);
    });

    it('easeOutCubic eases out', function () {
        assertBoundaries(g.easeOutCubic);
        assertAlmostEqual(g.easeOutCubic(0.5, B, C, D), 87.5);
    });

    it('easeInOutCubic eases in and out', function () {
        assertBoundaries(g.easeInOutCubic);
        assertAlmostEqual(g.easeInOutCubic(0.5, B, C, D), 50);
    });

    it('easeInQuart has correct boundaries', function () {
        assertBoundaries(g.easeInQuart);
    });

    it('easeOutQuart has correct boundaries', function () {
        assertBoundaries(g.easeOutQuart);
    });

    it('easeInOutQuart has correct boundaries', function () {
        assertBoundaries(g.easeInOutQuart);
    });

    it('easeInQuint has correct boundaries', function () {
        assertBoundaries(g.easeInQuint);
    });

    it('easeOutQuint has correct boundaries', function () {
        assertBoundaries(g.easeOutQuint);
    });

    it('easeInOutQuint has correct boundaries', function () {
        assertBoundaries(g.easeInOutQuint);
    });

    it('easeInSine eases in', function () {
        assertBoundaries(g.easeInSine);
        assert(g.easeInSine(0.5, B, C, D) < 50);
    });

    it('easeOutSine eases out', function () {
        assertBoundaries(g.easeOutSine);
        assert(g.easeOutSine(0.5, B, C, D) > 50);
    });

    it('easeInOutSine has correct boundaries', function () {
        assertBoundaries(g.easeInOutSine);
    });

    it('easeInExpo has correct boundaries', function () {
        assertBoundaries(g.easeInExpo);
    });

    it('easeOutExpo has correct boundaries', function () {
        assertBoundaries(g.easeOutExpo);
    });

    it('easeInOutExpo has correct boundaries', function () {
        assertBoundaries(g.easeInOutExpo);
    });

    it('easeInCirc has correct boundaries', function () {
        assertBoundaries(g.easeInCirc);
    });

    it('easeOutCirc has correct boundaries', function () {
        assertBoundaries(g.easeOutCirc);
    });

    it('easeInOutCirc has correct boundaries', function () {
        assertBoundaries(g.easeInOutCirc);
    });

    it('easeInElastic has correct boundaries', function () {
        assertBoundaries(g.easeInElastic);
    });

    it('easeOutElastic has correct boundaries', function () {
        assertBoundaries(g.easeOutElastic);
    });

    it('easeInOutElastic has correct boundaries', function () {
        assertBoundaries(g.easeInOutElastic);
    });

    it('easeInBack has correct boundaries', function () {
        assertBoundaries(g.easeInBack);
    });

    it('easeOutBack has correct boundaries', function () {
        assertBoundaries(g.easeOutBack);
    });

    it('easeInOutBack has correct boundaries', function () {
        assertBoundaries(g.easeInOutBack);
    });

    it('easeInBounce has correct boundaries', function () {
        assertBoundaries(g.easeInBounce);
    });

    it('easeOutBounce has correct boundaries', function () {
        assertBoundaries(g.easeOutBounce);
    });

    it('easeInOutBounce has correct boundaries', function () {
        assertBoundaries(g.easeInOutBounce);
    });

    it('easing dispatches by name', function () {
        assertAlmostEqual(g.easing('easeInQuad', 0.5, B, C, D), g.easeInQuad(0.5, B, C, D));
        assertAlmostEqual(g.easing('easeOutCubic', 0.5, B, C, D), g.easeOutCubic(0.5, B, C, D));
    });

});
