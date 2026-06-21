'use strict';

const vg = require('./vg/vg');
const img = require('./img/img');

const Img = img.Img;
const Layer = img.Layer;
const ImageCanvas = img.ImageCanvas;
const g = {};

g.blend = function (image1, image2, mode) {
    const b1 = image1.bounds(),
          b2 = image2.bounds(),

          b = new vg.Rect(b1.x, b1.y, b1.width, b1.height).unite(b2),
          width = Math.ceil(b.width),
          height = Math.ceil(b.height),
          dx = width / 2 + b.x,
          dy = height / 2 + b.y,

          canvas = new ImageCanvas(width, height);
	
    const l1 = canvas.addLayer(image1.toLayer());
    l1.translate(-dx, -dy);
    const l2 = canvas.addLayer(image2.toLayer());
    l2.translate(-dx, -dy);
    l2.blendmode = mode;
    return new Img(canvas.render(), dx, dy);
};

g.blur = function (image, radius) {
    const layer = image.toLayer(false);
    layer.addFilter('blur', {radius: radius});
    return image.withCanvas(layer.toCanvas());
};

g.brighten = function (image, brightness, contrast) {
    const layer = image.toLayer(false);
    layer.addFilter('brightness', {brightness: brightness / 100, contrast: contrast / 100});
    return image.withCanvas(layer.toCanvas());
};

g.bump = function (image, position, radius, zoom) {
    const layer = image.toLayer(false);
    layer.addFilter('bump', {dx: position.x, dy: position.y, radius: radius, zoom: zoom / 100});
    return image.withCanvas(layer.toCanvas());
};

g.colorImage = function (width, height, color) {
    const layer = Layer.fromColor(color);
    layer.width = width;
    layer.height = height;
    return new Img(layer.toCanvas());
};

g.crop = function (image, bounding) {
    return image.crop(bounding);
};

g.crossEdges = function (image, strength) {
    const layer = image.toLayer(false);
    layer.addFilter('crossedges', {strength: strength / 100});
    return image.withCanvas(layer.toCanvas());
};

g.dent = function (image, position, radius, zoom) {
    const layer = image.toLayer(false);
    layer.addFilter('dent', {dx: position.x, dy: position.y, radius: radius, zoom: zoom / 100});
    return image.withCanvas(layer.toCanvas());
};

g.emboss = function (image, amount, angle) {
    const layer = image.toLayer(false);
    layer.addFilter('emboss', {amount: amount / 100, angle: angle});
    return image.withCanvas(layer.toCanvas());
};

g.equalize = function (image) {
    const layer = image.toLayer(false);
    layer.addFilter('equalize');
    return image.withCanvas(layer.toCanvas());
};

g.findEdges = function (image) {
    const layer = image.toLayer(false);
    layer.addFilter('findedges');
    return image.withCanvas(layer.toCanvas());
};

g.glow = function (image, amount, kernelSize) {
    const layer = image.toLayer(false);
    layer.addFilter('glow', {amount: amount / 100, kernelSize: kernelSize});
    return image.withCanvas(layer.toCanvas());
};

g.gradientImage = function (width, height, startColor, endColor, type, angle, spread) {
    const layer = Layer.fromGradient(startColor, endColor, type, angle, spread / 100);
    layer.width = width;
    layer.height = height;
    return new Img(layer.toCanvas());
};

g.histogram = function (image, channel, relative) {
    const pixels = image.getPixels(),
          vals = new Array(256);
    let i, c, pixel, comp;

    for (i = 0; i < 256; i += 1) { vals[i] = 0; }

    if (channel === 'lum') {
        for (i = 0; i < pixels.width * pixels.height; i++) {
            pixel = pixels.get(i);
            comp = pixel[0] * 0.2125 + pixel[1] * 0.7154 + pixel[2] * 0.0721;
            vals[Math.round(comp)] += 1;
        }
    } else {
        if (channel === 'red') { c = 0; }
        if (channel === 'green') { c = 1; }
        if (channel === 'blue') { c = 2; }
        if (channel === 'alpha') { c = 3; }
        for (i = 0; i < pixels.width * pixels.height; i++) {
            pixel = pixels.get(i);
            comp = pixel[c];
            vals[comp] += 1;
        }
    }
    if (relative) {
        for (i = 0; i < vals.length; i++) {
            vals[i] /= (pixels.width * pixels.height);
        }
    }
    return vals;
};

g.lightTunnel = function (image, position, radius) {
    const layer = image.toLayer(false);
    layer.addFilter('splash', {dx: position.x, dy: position.y, radius: radius});
    return image.withCanvas(layer.toCanvas());
};

g.luminanceBW = function (image) {
    const layer = image.toLayer(false);
    layer.addFilter('luminancebw');
    return image.withCanvas(layer.toCanvas());
};

g.mask = function (image, mask) {
    image = image.transformed();
    mask = mask.transformed();

    const layer = image.toLayer(false),
          maskLayer = mask.toLayer(),

          b1 = image.bounds(),
          b2 = mask.bounds(),

          b = new vg.Rect(b1.x, b1.y, b1.width, b1.height).unite(b2),
          width = Math.ceil(b.width),
          height = Math.ceil(b.height),
          dx = width / 2 + b.x,
          dy = height / 2 + b.y;

    maskLayer.translate(-dx, -dy);

    const l = layer.mask.addLayer('white');
    l.width = layer.width;
    l.height = layer.height;
    layer.mask.addLayer(maskLayer);
    return image.withCanvas(layer.toCanvas());
};

g.mosaic = function (image, blockSize) {
    const layer = image.toLayer(false);
    layer.addFilter('mosaic', {blockSize: blockSize});
    return image.withCanvas(layer.toCanvas());
};

g.pinch = function (image, position, zoom) {
    const layer = image.toLayer(false);
    layer.addFilter('pinch', {dx: position.x, dy: position.y, zoom: zoom / 100});
    return image.withCanvas(layer.toCanvas());
};

g.posterize = function (image, levels) {
    const layer = image.toLayer(false);
    layer.addFilter('posterize', {levels: levels});
    return image.withCanvas(layer.toCanvas());
};

g.removeNoise = function (image) {
    const layer = image.toLayer(false);
    layer.addFilter('removenoise');
    return image.withCanvas(layer.toCanvas());
};

g.solarize = function (image) {
    const layer = image.toLayer(false);
    layer.addFilter('solarize');
    return image.withCanvas(layer.toCanvas());
};

g.toBitmap = function (shape, bounding) {
    const canvas = document.createElement('canvas'),
          bounds = bounding ? bounding.bounds() : shape.bounds(),
          x = bounds.x,
          y = bounds.y,
          width = canvas.width = Math.ceil(bounds.width),
          height = canvas.height = Math.ceil(bounds.height),
          ctx = canvas.getContext('2d');
    ctx.translate(-x, -y);
    shape.draw(ctx);
    return new Img(canvas, width / 2 + x, height / 2 + y);
};

g.toPixels = function (image, step) {
    step = step > 1 ? step : 1;
    const canvas = image.canvas,
          imgWidth = canvas.width,
          imgHeight = canvas.height,
          ctx = canvas.getContext('2d'),
          data = ctx.getImageData(0, 0, canvas.width, canvas.height),
          pixels = data.data,
          stride = canvas.width * 4;

    const outPixels = [];
    for (let y = 0; y < imgHeight; y += step) {
        for (let x = 0; x < imgWidth; x += step) {
            const offset = y * stride + x * 4,
                  pr = pixels[offset],
                  pg = pixels[offset + 1],
                  pb = pixels[offset + 2],
                  pa = pixels[offset + 3];
            outPixels.push({
                x: x - imgWidth / 2,
                y: y - imgHeight / 2,
                r: pr,
                g: pg,
                b: pb,
                a: pa,
                color: new vg.Color(pr / 255, pg / 255, pb / 255, pa / 255)
            });
        }
    }
    return outPixels;
};

g.twirl = function (image, position, radius, angle) {
    const layer = image.toLayer(false);
    layer.addFilter('twirl', {dx: position.x, dy: position.y, radius: radius, angle: angle});
    return image.withCanvas(layer.toCanvas());
};

module.exports = g;
