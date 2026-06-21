// Shape group object

'use strict';

const Path = require('../objects/path');
const Rect = require('../objects/rect');
const Color = require('../objects/color');

const Group = function (shapes) {
    if (!shapes) {
        this.shapes = [];
    } else if (shapes.shapes || shapes.commands) {
        this.shapes = [shapes];
    } else if (shapes) {
        this.shapes = shapes;
    }
};

Group.prototype.add = function (shape) {
    this.shapes.push(shape);
};

Group.prototype.clone = function () {
    const n = this.shapes.length;
	const newShapes = [];
    newShapes.length = n;
    for (let i = 0; i < n; i++) {
        newShapes[i] = this.shapes[i].clone();
    }
    return new Group(newShapes);
};

Group.prototype.colorize = function (options) {
    if (typeof options !== 'object' || options instanceof Color) {
        options = {};
        if (arguments[0] !== undefined) { options.fill = arguments[0]; }
        if (arguments[1] !== undefined) { options.stroke = arguments[1]; }
        if (arguments[2] !== undefined) { options.strokeWidth = arguments[2]; }
    }
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i++) {
        shapes[i] = this.shapes[i].colorize(options);
    }
    return new Group(shapes);
};

Group.prototype.desaturate = function (options) {
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i++) {
        shapes[i] = this.shapes[i].desaturate(options);
    }
    return new Group(shapes);
};

Group.prototype.invert = function () {
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i++) {
        shapes[i] = this.shapes[i].invert();
    }
    return new Group(shapes);
};

Group.prototype.bounds = function () {
    if (this.shapes.length === 0) { return new Rect(0, 0, 0, 0); }
    const shapes = this.shapes;
    let r;
    for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (r === undefined) {
            r = shape.bounds();
        }
        if ((shape.shapes && shape.shapes.length !== 0) ||
            (shape.commands && shape.commands.length !== 0)) {
            r = r.unite(shape.bounds());
        }
    }
    return (r !== undefined) ? r : new Rect(0, 0, 0, 0);
};

// Returns true when point (x,y) falls within the contours of the group.
Group.prototype.contains = function (x, y, precision) {
    if (precision === undefined) { precision = 100; }
    const shapes = this.shapes;
    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].contains(x, y, precision)) {
            return true;
        }
    }
    return false;
};

Group.prototype.length = function (precision) {
    if (precision === undefined) { precision = 10; }
    const shapes = this.shapes;
    let sum = 0;
    for (let i = 0; i < shapes.length; i++) {
        sum += shapes[i].length(precision);
    }
    return sum;
};

Group.prototype.resampleByAmount = function (points, perContour) {
    if (!perContour) {
        const path = new Path.combine(this);
        return path.resampleByAmount(points, perContour);
    }
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i++) {
        shapes[i] = this.shapes[i].resampleByAmount(points, perContour);
    }
    return new Group(shapes);
};

Group.prototype.resampleByLength = function (length) {
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i++) {
        shapes[i] = this.shapes[i].resampleByLength(length);
    }
    return new Group(shapes);
};

Group.prototype.toSVG = function () {
    const l = [];
    l.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i++) {
        l[i] = this.shapes[i].toSVG();
    }
    return '<g>' + l.join('') + '</g>';
};

// Draw the group to a 2D context.
Group.prototype.draw = function (ctx) {
    const shapes = this.shapes;
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].draw(ctx);
    }
};

module.exports = Group;
