import assert from 'assert';
import { describe, it } from 'mocha';
import g from '../src/g.js';

describe('The string module', function () {

    it('has concatenate', function () {
        const s1 = 'foo';
        const s2 = 'bar';
        assert.equal(g.concatenate(), '');
        assert.equal(g.concatenate(s1), 'foo');
        assert.equal(g.concatenate(s1, s2), 'foobar');
        assert.equal(g.concatenate(s1, s2, s1, s2, s1, s2), 'foobarfoobarfoobar');
    });

    it('has substring', function () {
        assert.equal(g.substring('Hello', 0), 'Hello');
        assert.equal(g.substring('Hello', 1), 'ello');
        assert.equal(g.substring('Hello', 1, 3), 'el');
        assert.equal(g.substring('Hello', 1, 3, true), 'ell');
    });

    it('has toCharacterCodes', function () {
        assert.deepEqual(g.toCharacterCodes(), []);
        assert.deepEqual(g.toCharacterCodes(''), []);
        assert.deepEqual(g.toCharacterCodes('ABC'), [65, 66, 67]);
    });

});
