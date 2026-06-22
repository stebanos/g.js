import { Rect, Color } from './vg/index.js';
import { Img, Layer, ImageCanvas } from './img/index.js';

export function blend(image1, image2, mode) {
    const b1 = image1.bounds();
    const b2 = image2.bounds();

    const b = new Rect(b1.x, b1.y, b1.width, b1.height).unite(b2);
    const width = Math.ceil(b.width);
    const height = Math.ceil(b.height);
    const dx = width / 2 + b.x;
    const dy = height / 2 + b.y;

    const canvas = new ImageCanvas(width, height);
    const l1 = canvas.addLayer(image1.toLayer());
    l1.translate(-dx, -dy);
    const l2 = canvas.addLayer(image2.toLayer());
    l2.translate(-dx, -dy);
    l2.blendmode = mode;
    return new Img(canvas.render(), dx, dy);
}

export function blur(image, radius) {
    const layer = image.toLayer(false);
    layer.addFilter('blur', { radius: radius });
    return image.withCanvas(layer.toCanvas());
}

export function brighten(image, brightness, contrast) {
    const layer = image.toLayer(false);
    layer.addFilter('brightness', {
        brightness: brightness / 100,
        contrast: contrast / 100
    });
    return image.withCanvas(layer.toCanvas());
}

export function bump(image, position, radius, zoom) {
    const layer = image.toLayer(false);
    layer.addFilter('bump', {
        dx: position.x,
        dy: position.y,
        radius: radius,
        zoom: zoom / 100
    });
    return image.withCanvas(layer.toCanvas());
}

export function colorImage(width, height, color) {
    const layer = Layer.fromColor(color);
    layer.width = width;
    layer.height = height;
    return new Img(layer.toCanvas());
}

export function crop(image, bounding) {
    return image.crop(bounding);
}

export function crossEdges(image, strength) {
    const layer = image.toLayer(false);
    layer.addFilter('crossedges', { strength: strength / 100 });
    return image.withCanvas(layer.toCanvas());
}

export function dent(image, position, radius, zoom) {
    const layer = image.toLayer(false);
    layer.addFilter('dent', {
        dx: position.x,
        dy: position.y,
        radius: radius,
        zoom: zoom / 100
    });
    return image.withCanvas(layer.toCanvas());
}

export function emboss(image, amount, angle) {
    const layer = image.toLayer(false);
    layer.addFilter('emboss', { amount: amount / 100, angle: angle });
    return image.withCanvas(layer.toCanvas());
}

export function equalize(image) {
    const layer = image.toLayer(false);
    layer.addFilter('equalize');
    return image.withCanvas(layer.toCanvas());
}

export function findEdges(image) {
    const layer = image.toLayer(false);
    layer.addFilter('findedges');
    return image.withCanvas(layer.toCanvas());
}

export function glow(image, amount, kernelSize) {
    const layer = image.toLayer(false);
    layer.addFilter('glow', { amount: amount / 100, kernelSize: kernelSize });
    return image.withCanvas(layer.toCanvas());
}

export function gradientImage(
    width,
    height,
    startColor,
    endColor,
    type,
    angle,
    spread
) {
    const layer = Layer.fromGradient(
        startColor,
        endColor,
        type,
        angle,
        spread / 100
    );
    layer.width = width;
    layer.height = height;
    return new Img(layer.toCanvas());
}

export function histogram(image, channel, relative) {
    const pixels = image.getPixels();
    const vals = new Array(256);
    let i, c, pixel, comp;
    for (i = 0; i < vals.length; i += 1) {
        vals[i] = 0;
    }
    if (channel === 'lum') {
        for (i = 0; i < pixels.width * pixels.height; i += 1) {
            pixel = pixels.get(i);
            comp = pixel[0] * 0.2125 + pixel[1] * 0.7154 + pixel[2] * 0.0721;
            vals[Math.round(comp)] += 1;
        }
    } else {
        if (channel === 'red') {
            c = 0;
        }
        if (channel === 'green') {
            c = 1;
        }
        if (channel === 'blue') {
            c = 2;
        }
        if (channel === 'alpha') {
            c = 3;
        }
        for (i = 0; i < pixels.width * pixels.height; i += 1) {
            pixel = pixels.get(i);
            comp = pixel[c];
            vals[comp] += 1;
        }
    }
    if (relative) {
        for (i = 0; i < vals.length; i += 1) {
            vals[i] /= pixels.width * pixels.height;
        }
    }
    return vals;
}

export function lightTunnel(image, position, radius) {
    const layer = image.toLayer(false);
    layer.addFilter('splash', { dx: position.x, dy: position.y, radius: radius });
    return image.withCanvas(layer.toCanvas());
}

export function luminanceBW(image) {
    const layer = image.toLayer(false);
    layer.addFilter('luminancebw');
    return image.withCanvas(layer.toCanvas());
}

export function mask(image, mask) {
    image = image.transformed();
    mask = mask.transformed();

    const layer = image.toLayer(false);
    const maskLayer = mask.toLayer();

    const b1 = image.bounds();
    const b2 = mask.bounds();

    const b = new Rect(b1.x, b1.y, b1.width, b1.height).unite(b2);
    const width = Math.ceil(b.width);
    const height = Math.ceil(b.height);
    const dx = width / 2 + b.x;
    const dy = height / 2 + b.y;
    maskLayer.translate(-dx, -dy);

    const l = layer.mask.addLayer('white');
    l.width = layer.width;
    l.height = layer.height;
    layer.mask.addLayer(maskLayer);
    return image.withCanvas(layer.toCanvas());
}

export function mosaic(image, blockSize) {
    const layer = image.toLayer(false);
    layer.addFilter('mosaic', { blockSize: blockSize });
    return image.withCanvas(layer.toCanvas());
}

export function pinch(image, position, zoom) {
    const layer = image.toLayer(false);
    layer.addFilter('pinch', {
        dx: position.x,
        dy: position.y,
        zoom: zoom / 100
    });
    return image.withCanvas(layer.toCanvas());
}

export function posterize(image, levels) {
    const layer = image.toLayer(false);
    layer.addFilter('posterize', { levels: levels });
    return image.withCanvas(layer.toCanvas());
}

export function removeNoise(image) {
    const layer = image.toLayer(false);
    layer.addFilter('removenoise');
    return image.withCanvas(layer.toCanvas());
}

export function solarize(image) {
    const layer = image.toLayer(false);
    layer.addFilter('solarize');
    return image.withCanvas(layer.toCanvas());
}

export function toBitmap(shape, bounding) {
    const canvas = document.createElement('canvas');
    let bounds;
    if (bounding) {
        bounds = bounding.bounds();
    } else {
        bounds = shape.bounds();
    }
    const x = bounds.x;
    const y = bounds.y;
    const width = (canvas.width = Math.ceil(bounds.width));
    const height = (canvas.height = Math.ceil(bounds.height));
    const ctx = canvas.getContext('2d');
    ctx.translate(-x, -y);
    shape.draw(ctx);
    return new Img(canvas, width / 2 + x, height / 2 + y);
}

export function toPixels(image, step) {
    step = step > 1 ? step : 1;
    const canvas = image.canvas;
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = data.data;
    const stride = canvas.width * 4;

    const outPixels = [];
    for (let y = 0; y < imgHeight; y += step) {
        for (let x = 0; x < imgWidth; x += step) {
            const offset = y * stride + x * 4;
            const pr = pixels[offset];
            const pg = pixels[offset + 1];
            const pb = pixels[offset + 2];
            const pa = pixels[offset + 3];
            outPixels.push({
                x: x - imgWidth / 2,
                y: y - imgHeight / 2,
                r: pr,
                g: pg,
                b: pb,
                a: pa,
                color: new Color(pr / 255, pg / 255, pb / 255, pa / 255)
            });
        }
    }
    return outPixels;
}

export function twirl(image, position, radius, angle) {
    const layer = image.toLayer(false);
    layer.addFilter('twirl', {
        dx: position.x,
        dy: position.y,
        radius: radius,
        angle: angle
    });
    return image.withCanvas(layer.toCanvas());
}
