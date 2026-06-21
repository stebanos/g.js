export function flatten(arg) {
  const arr = Array.prototype.slice.call(arg);
  const args = [];
  for (let i = 0; i < arr.length; i += 1) {
    const o = arr[i];
    if (Array.isArray(o)) {
      for (let j = 0; j < o.length; j += 1) {
        args.push(o[j]);
      }
    } else {
      args.push(o);
    }
  }
  return args;
}
