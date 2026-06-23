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

    it('has characterAt', function () {
        assert.equal(g.characterAt('Hello', 0), 'H');
        assert.equal(g.characterAt('Hello', 4), 'o');
        assert.equal(g.characterAt('Hello', -1), 'o');
        assert.equal(g.characterAt('', 0), '');
        assert.equal(g.characterAt(null, 0), '');
    });

    it('has startsWith', function () {
        assert.equal(g.startsWith('Hello', 'He'), true);
        assert.equal(g.startsWith('Hello', 'lo'), false);
        assert.equal(g.startsWith(null, 'He'), false);
        assert.equal(g.startsWith('Hello', null), false);
    });

    it('has endsWith', function () {
        assert.equal(g.endsWith('Hello', 'lo'), true);
        assert.equal(g.endsWith('Hello', 'He'), false);
        assert.equal(g.endsWith(null, 'lo'), false);
        assert.equal(g.endsWith('Hello', null), false);
    });

    it('has stringContains', function () {
        assert.equal(g.stringContains('Hello', 'ell'), true);
        assert.equal(g.stringContains('Hello', 'xyz'), false);
        assert.equal(g.stringContains(null, 'el'), false);
    });

    it('has stringEquals', function () {
        assert.equal(g.stringEquals('Hello', 'Hello'), true);
        assert.equal(g.stringEquals('Hello', 'hello'), false);
        assert.equal(g.stringEquals('Hello', 'hello', true), true);
        assert.equal(g.stringEquals('Hello', 'World'), false);
    });

    it('has stringLength', function () {
        assert.equal(g.stringLength('Hello'), 5);
        assert.equal(g.stringLength(''), 0);
        assert.equal(g.stringLength(null), 0);
    });

    it('has stringReplace', function () {
        assert.equal(g.stringReplace('Hello World', 'o', '0'), 'Hell0 W0rld');
        assert.equal(g.stringReplace('abc', 'b', 'B'), 'aBc');
    });

    it('has stringSplit', function () {
        assert.deepEqual(g.stringSplit('Hello World', ' '), ['Hello', 'World']);
        assert.deepEqual(g.stringSplit('abc', ''), ['a', 'b', 'c']);
        assert.deepEqual(g.stringSplit(null, ' '), []);
    });

    it('has stringTrim', function () {
        assert.equal(g.stringTrim('  Hello  '), 'Hello');
        assert.equal(g.stringTrim(null), null);
    });

    it('has toCharacters', function () {
        assert.deepEqual(g.toCharacters('abc'), ['a', 'b', 'c']);
        assert.deepEqual(g.toCharacters(null), []);
    });

    it('has toLowerCase', function () {
        assert.equal(g.toLowerCase('Hello'), 'hello');
        assert.equal(g.toLowerCase('WORLD'), 'world');
    });

    it('has toUpperCase', function () {
        assert.equal(g.toUpperCase('Hello'), 'HELLO');
        assert.equal(g.toUpperCase('world'), 'WORLD');
    });

    it('has toTitleCase', function () {
        assert.equal(g.toTitleCase('hello world'), 'Hello World');
        assert.equal(g.toTitleCase('foo bar baz'), 'Foo Bar Baz');
    });

    it('has wordCount', function () {
        assert.equal(g.wordCount('Hello World'), 2);
        assert.equal(g.wordCount('Hello'), 1);
        assert.equal(g.wordCount(null), 0);
    });

    it('has toWords', function () {
        assert.deepEqual(g.toWords('Hello World'), ['Hello', 'World']);
        assert.deepEqual(g.toWords('foo  bar'), ['foo', 'bar']);
    });

});
