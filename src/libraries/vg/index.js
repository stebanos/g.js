// vg.js
// JavaScript library for vector graphics
// https://github.com/nodebox/vg.js
// (c) 2014 EMRG
// vg.js may be freely distributed under the MIT license.
// Based on: canvas.js, https://github.com/clips/pattern/blob/master/pattern/canvas.js (BSD)
// De Smedt T. & Daelemans W. (2012). Pattern for Python. Journal of Machine Learning Research.

// Utility functions
export * from './util/bezier.js';
export * from './util/color.js';
export * from './util/geo.js';
// Exposed as a namespace (vg.math) rather than flattened: its `snap` would
// otherwise collide with the `snap` path filter from ./commands/filters.js.
export * as math from './util/math.js';

// Exposed as a namespace (vg.svg / g.svg.parseString).
export * as svg from './util/svg.js';

// Objects
import Color from './objects/color.js';
import Group from './objects/group.js';
import Matrix4 from './objects/matrix4.js';
import Path from './objects/path.js';
import Point from './objects/point.js';
import Rect from './objects/rect.js';
import Text from './objects/text.js';
import Transform from './objects/transform.js';
import Vec3 from './objects/vec3.js';
import Transformable from './objects/transformable.js';
Object.assign(Point.prototype, Transformable);
Object.assign(Path.prototype, Transformable);
Object.assign(Group.prototype, Transformable);
Object.assign(Text.prototype, Transformable);
export { Color, Group, Matrix4, Path, Point, Rect, Text, Transform, Vec3 };

// Commands

export * from './commands/draw.js';
export * from './commands/filters.js';
export * from './commands/shapes.js';
