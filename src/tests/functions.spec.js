import { describe, expect, test } from "vitest";
import { hexToRgb, rgbToHex, rgbToHsl } from "../js/functions";

// * Tests for hexToRgb() function
describe("hexToRgb", () => {
  test("returns an array of r,g,b values", () => {
    const rgbArray = hexToRgb("#123");

    expect(rgbArray).toHaveLength(3);
    expect(rgbArray).toEqual([1, 2, 3]);
  });

  test("returns an array of r,g,b values", () => {
    expect(hexToRgb("#123fad")).toEqual([18, 63, 173]);
  });
});

// * Tests for rgbToHex() function
describe("rgbToHex", () => {
  test("returns a string containing hex color value", () => {
    const hexValue = rgbToHex("rgb(1, 46, 5)");

    expect(hexValue).toHaveLength(7);
    expect(hexValue).toBe("#012e05");
  });

  test("returns null as value", () => {
    expect(rgbToHex("rgb(433, 345, 53)")).toBeNull();
  });

  test("generate snapshot", () => {
    const bool = rgbToHex("rgb(1, 46, 5)") === "#012e05";
    expect(bool).toMatchSnapshot();
  });
});

// * Tests for rgbToHsl() function
describe("rgbToHsl", () => {
  test("returns an array containing hue, stauration & lightness values", () => {
    const hslValue = rgbToHsl(17, 134, 156);

    expect(hslValue).toHaveLength(3);
    expect(hslValue).toEqual([189, 80, 34]);
  });
});
