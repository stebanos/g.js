// Shape group object

import Path from "../objects/path.js";
import Rect from "../objects/rect.js";
import Color from "../objects/color.js";

export default class Group {
  constructor(shapes) {
    if (!shapes) {
      this.shapes = [];
    } else if (shapes.shapes || shapes.commands) {
      this.shapes = [shapes];
    } else if (shapes) {
      this.shapes = shapes;
    }
  }
  add(shape) {
    this.shapes.push(shape);
  }
  clone() {
    let newShapes = [],
      n = this.shapes.length,
      i;
    newShapes.length = n;
    for (i = 0; i < n; i += 1) {
      newShapes[i] = this.shapes[i].clone();
    }
    return new Group(newShapes);
  }
  colorize(options) {
    const args = arguments;
    if (typeof options !== "object" || options instanceof Color) {
      options = {};
      if (args[0] !== undefined) {
        options.fill = args[0];
      }
      if (args[1] !== undefined) {
        options.stroke = args[1];
      }
      if (args[2] !== undefined) {
        options.strokeWidth = args[2];
      }
    }
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i += 1) {
      shapes[i] = this.shapes[i].colorize(options);
    }
    return new Group(shapes);
  }
  desaturate(options) {
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i += 1) {
      shapes[i] = this.shapes[i].desaturate(options);
    }
    return new Group(shapes);
  }
  invert() {
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i += 1) {
      shapes[i] = this.shapes[i].invert();
    }
    return new Group(shapes);
  }
  bounds() {
    if (this.shapes.length === 0) {
      return new Rect(0, 0, 0, 0);
    }
    let i,
      r,
      shape,
      shapes = this.shapes;
    for (i = 0; i < shapes.length; i += 1) {
      shape = shapes[i];
      if (r === undefined) {
        r = shape.bounds();
      }
      if (
        (shape.shapes && shape.shapes.length !== 0) ||
        (shape.commands && shape.commands.length !== 0)
      ) {
        r = r.unite(shape.bounds());
      }
    }
    return r !== undefined ? r : new Rect(0, 0, 0, 0);
  }
  // Returns true when point (x,y) falls within the contours of the group.
  contains(x, y, precision) {
    if (precision === undefined) {
      precision = 100;
    }
    let i,
      shapes = this.shapes;
    for (i = 0; i < shapes.length; i += 1) {
      if (shapes[i].contains(x, y, precision)) {
        return true;
      }
    }
    return false;
  }
  length(precision) {
    if (precision === undefined) {
      precision = 10;
    }
    let sum = 0;
    const shapes = this.shapes;
    for (let i = 0; i < shapes.length; i += 1) {
      sum += shapes[i].length(precision);
    }
    return sum;
  }
  resampleByAmount(points, perContour) {
    let path;
    if (!perContour) {
      path = new Path.combine(this);
      return path.resampleByAmount(points, perContour);
    }
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i += 1) {
      shapes[i] = this.shapes[i].resampleByAmount(points, perContour);
    }
    return new Group(shapes);
  }
  resampleByLength(length) {
    const shapes = [];
    shapes.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i += 1) {
      shapes[i] = this.shapes[i].resampleByLength(length);
    }
    return new Group(shapes);
  }
  toSVG() {
    const l = [];
    l.length = this.shapes.length;
    for (let i = 0; i < this.shapes.length; i += 1) {
      l[i] = this.shapes[i].toSVG();
    }
    return "<g>" + l.join("") + "</g>";
  }
  // Draw the group to a 2D context.
  draw(ctx) {
    let i,
      shapes = this.shapes,
      nShapes = shapes.length;
    for (i = 0; i < nShapes; i += 1) {
      shapes[i].draw(ctx);
    }
  }
}
