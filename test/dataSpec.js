import assert from 'assert';
import { describe, it } from 'mocha';
import g from '../src/g.js';

describe('The importCSV function', function () {

    it('works with strings', function () {
        const s = 'Name,Age,Group,Grade\nJohn,52,1A,7.5\nPete,66,3C,4.3';
        const imported = g.importCSV(s);
        assert.equal(imported.length, 2);
        assert.deepEqual(imported[0], {Name: 'John', Age: 52, Group: '1A', Grade: 7.5});
    });

});

describe('The filterData function', function () {

    it('works with strings', function () {
        const data = [{name: 'Alice', age: 42}, {name: 'Bob', age: 33}];
        const filtered = g.filterData(data, 'name', '==', 'Alice');
        assert.equal(filtered.length, 1);
        assert.deepEqual(filtered[0], {name: 'Alice', age: 42});
    });

    it('converts numbers', function () {
        const data = [{name: 'Alice', age: 42}, {name: 'Bob', age: 33}];
        const filtered = g.filterData(data, 'age', '==', '33');
        assert.equal(filtered.length, 1);
        assert.deepEqual(filtered[0], {name: 'Bob', age: 33});
    });

    it('supports null value', function () {
        const filtered = g.filterData(null, 'name', '==', 'Alice');
        assert.deepEqual(filtered, []);
    });

});
