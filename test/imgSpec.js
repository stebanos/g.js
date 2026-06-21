import assert from 'assert';
import { describe, it } from 'mocha';
import * as img from '../src/libraries/img/index.js';

describe('The library', function () {

    it('can be imported', function () {
        assert(img.Img !== undefined);
        assert(img.merge !== undefined);
    });

});
