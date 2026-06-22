import { degrees, radians, clamp } from '../vg/util/math.js';
import { distance } from '../vg/util/geo.js';
export { degrees, radians, clamp, distance };

// Basic affine transform functionality.
export function transform(m) {
    // Identity matrix.
    if (m === undefined) {
        m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    } else {
        m = m.slice();
    }

    // Performs the 3x3 matrix multiplication of the current matrix with the input matrix a.
    function _mmult(a, m) {
        m = m.slice();

        const m0 = m[0];
        const m1 = m[1];
        const m3 = m[3];
        const m4 = m[4];
        const m6 = m[6];
        const m7 = m[7];

        m[0] = a[0] * m0 + a[1] * m3;
        m[1] = a[0] * m1 + a[1] * m4;
        m[3] = a[3] * m0 + a[4] * m3;
        m[4] = a[3] * m1 + a[4] * m4;
        m[6] = a[6] * m0 + a[7] * m3 + m6;
        m[7] = a[6] * m1 + a[7] * m4 + m7;

        return transform(m);
    }

    return {
        matrix: function () {
            return m.slice();
        },

        clone: function () {
            return transform(m);
        },

        prepend: function (t) {
            if (t.matrix) {
                t = t.matrix();
            }
            return _mmult(m, t);
        },

        append: function (t) {
            if (t.matrix) {
                t = t.matrix();
            }
            return _mmult(t, m);
        },

        translate: function (x, y) {
            return _mmult([1, 0, 0, 0, 1, 0, x, y, 1], m);
        },

        scale: function (x, y) {
            if (y === undefined) {
                y = x;
            }
            return _mmult([x, 0, 0, 0, y, 0, 0, 0, 1], m);
        },

        skew: function (x, y) {
            if (y === undefined) {
                y = x;
            }
            const kx = (Math.PI * x) / 180.0;
            const ky = (Math.PI * y) / 180.0;
            return _mmult([1, Math.tan(ky), 0, -Math.tan(kx), 1, 0, 0, 0, 1], m);
        },

        rotate: function (angle) {
            const c = Math.cos(radians(angle));
            const s = Math.sin(radians(angle));
            return _mmult([c, s, 0, -s, c, 0, 0, 0, 1], m);
        },

        transformPoint: function (point) {
            const x = point.x;
            const y = point.y;
            return { x: x * m[0] + y * m[3] + m[6], y: x * m[1] + y * m[4] + m[7] };
        }
    };
}
