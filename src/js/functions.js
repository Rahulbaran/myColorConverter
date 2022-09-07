// Function for converting hex into rgb
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

// Function for converting rgb into hex
export const rgbToHex = rgb => {
  const rgbValues = rgb
    .slice(4)
    .slice(0, -1)
    .trim()
    .split(/,\s{0,}/)
    .filter(e => e <= 255);

  return rgbValues.length === 3
    ? "#" +
        rgbValues
          .map(e =>
            (+e).toString(16).length < 2
              ? "0" + (+e).toString(16)
              : (+e).toString(16)
          )
          .join("")
    : null;
};

// Function for converting rgb into hsl
export const rgbToHsl = rgbArr => {
  console.log(rgbArr);
};
