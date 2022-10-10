/**
 * Converts HEX color value to RGB
 * returns an array of red, green & blue
 *
 * @param  {string} hex - Hex color value
 * @return {Array}      - red,green & blue values
 */
export const hexToRgb = hex => {
  if (hex.length === 4) {
    return hex
      .slice(1)
      .split("")
      .map(e => parseInt(e, 16));
  } else if (hex.length === 7) {
    return hex
      .slice(1)
      .match(/[\da-f]{2}/gi)
      .map(e => parseInt(e, 16));
  }
};

/**
 * Convert RGB color value to HEX
 * returns a string of hex color value
 *
 * @param  {string} rgb(R, G, B)       - RGB color value
 * @return {string}        - Hex color value
 */
export const rgbToHex = rgb => {
  const rgbValues = rgb
    .slice(4)
    .slice(0, -1)
    .trim()
    .split(/,\s{0,}/)
    .filter(e => e <= 255);

  return rgbValues.length === 3
    ? `#${rgbValues
        .map(e =>
          (+e).toString(16).length < 2
            ? `0${(+e).toString(16)}`
            : (+e).toString(16)
        )
        .join("")}`
    : null;
};

/**
 * Converts RGB color value into HSL.
 * returns an array containing hue,saturation & lightness
 *
 * @param  {Array} [r,g,b] - red, green & blue values
 * @return {Array}         - hue, stauration & lightness values
 */
export const rgbToHsl = (...rgbArr) => {
  let h, s;

  // Calculate fraction of r,g,b
  const rgb = rgbArr.map(val => val / 255);
  const [r, g, b] = rgb;

  // Calculate lightness
  const [min, max] = [Math.min(...rgb), Math.max(...rgb)];
  const l = (min + max) / 2;

  // Calculate hue & saturation
  const delta = max - min;
  if (delta === 0) h = s = 0;
  else {
    s = l > 0.5 ? delta / (2 - l * 2) : delta / (l * 2);

    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h = Math.round(h * 60);
  }

  return [h, +(s * 100).toFixed(0), +(l * 100).toFixed(0)];
};

/**
 * TODO: Function for conversion of HSL color value to RGB
 */
