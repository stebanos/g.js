import assert from 'assert';
import { describe, it } from 'mocha';
import g from '../src/g.js';

describe('The library', function () {

    it('can be imported', function () {
        assert(g.Rect !== undefined);
        assert(g.translate !== undefined);
    });

});

describe('The import function', function () {

    it('can import an empty SVG', function () {
        const group = g.importSVG('<svg></svg>');
        assert.equal(group.shapes.length, 0);
    });

    it('can import a simple path', function () {
        const group = g.importSVG('<svg><path d="M0,0L10,20L30,40Z"/></svg>');
        assert.equal(group.shapes.length, 1);
        const path = group.shapes[0];
        assert.equal(path.commands.length, 4);
    });

    it('can import CSV files', function () {
        function assertTable(table) {
            assert.equal(table.length, 2);
            assert.deepEqual(table[0], { name: 'Alice', age: 42 });
            assert.deepEqual(table[1], { name: 'Bob', age: 33 });

        }

        const csv = 'name,age\nAlice,42\nBob,33';
        const table1 = g.importCSV(csv);
        assertTable(table1);

        const tsv = 'name\tage\nAlice\t42\nBob\t33';
        const table2 = g.importCSV(tsv, '\t');
        assertTable(table2);
    });

});
