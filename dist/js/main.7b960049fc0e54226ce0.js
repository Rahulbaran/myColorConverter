/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./js/selectors.js
var selectors = {
  $hexToRgbBtn: document.querySelector(".hextorgb__btn"),
  $rgbToHexBtn: document.querySelector(".rgbtohex__btn"),
  $hexToRgbCard: document.querySelector(".hextorgb__card"),
  $rgbToHexCard: document.querySelector(".rgbtohex__card"),
  $hexInputField: document.querySelector(".hex__input--field"),
  $rgbInputField: document.querySelector(".rgb__input--field"),
  $firstColorWindow: document.querySelector(".card:first-of-type .card__color--window"),
  $lastColorWindow: document.querySelector(".card:last-of-type .card__color--window"),
  $copyBtns: document.querySelectorAll(".btn .bxs-copy"),
  $hexColorLabel: document.querySelector(".hex__value span"),
  $rgbColorLabel: document.querySelector(".rgb__value span"),
  $firstHslColorLabel: document.querySelector(".hextorgb__card .hsl__value span"),
  $lastHslColorLabel: document.querySelector(".rgbtohex__card .hsl__value span")
};
;// CONCATENATED MODULE: ./js/functions.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Convert HEX color value to RGB
 * returns an array of Red, Green & Blue
 *
 * @param  String  Hex value
 * @return Array  The r,g,b values
 */
var hexToRgb = function hexToRgb(hex) {
  if (hex.length === 4) {
    return hex.slice(1).split("").map(function (e) {
      return parseInt(e, 16);
    });
  } else if (hex.length === 7) {
    return hex.slice(1).match(/[\da-f]{2}/gi).map(function (e) {
      return parseInt(e, 16);
    });
  }
};
/**
 * Convert RGB color value to Hex
 * returns a string of hex color value
 *
 * @param  Array   [r,g,b]  red, green & blue values
 * @return String  Hex Value
 */

var rgbToHex = function rgbToHex(rgb) {
  var rgbValues = rgb.slice(4).slice(0, -1).trim().split(/,\s{0,}/).filter(function (e) {
    return e <= 255;
  });
  return rgbValues.length === 3 ? "#" + rgbValues.map(function (e) {
    return (+e).toString(16).length < 2 ? "0" + (+e).toString(16) : (+e).toString(16);
  }).join("") : null;
};
/**
 * Converts RGB color value into HSL.
 * returns an array containing h,s & l
 *
 * @param  Array   [r,g,b]  red, green & blue values
 * @return Array   The hue, stauration & lightness values
 */

var rgbToHsl = function rgbToHsl() {
  var h, s; // Calculate fraction of r,g,b

  for (var _len = arguments.length, rgbArr = new Array(_len), _key = 0; _key < _len; _key++) {
    rgbArr[_key] = arguments[_key];
  }

  var rgb = rgbArr.map(function (val) {
    return val / 255;
  });

  var _rgb = _slicedToArray(rgb, 3),
      r = _rgb[0],
      g = _rgb[1],
      b = _rgb[2]; // Calculate lightness


  var _ref = [Math.min.apply(Math, _toConsumableArray(rgb)), Math.max.apply(Math, _toConsumableArray(rgb))],
      min = _ref[0],
      max = _ref[1];
  var l = (min + max) / 2; // Calculate hue & saturation

  var delta = max - min;
  if (delta === 0) h = s = 0;else {
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
;// CONCATENATED MODULE: ./js/main.js
var _sel$$hexInputField, _sel$$rgbInputField;

function main_toConsumableArray(arr) { return main_arrayWithoutHoles(arr) || main_iterableToArray(arr) || main_unsupportedIterableToArray(arr) || main_nonIterableSpread(); }

function main_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function main_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function main_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return main_arrayLikeToArray(arr); }

function main_slicedToArray(arr, i) { return main_arrayWithHoles(arr) || main_iterableToArrayLimit(arr, i) || main_unsupportedIterableToArray(arr, i) || main_nonIterableRest(); }

function main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return main_arrayLikeToArray(o, minLen); }

function main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function main_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function main_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var hexRegex = /^#([\da-f]{3}|[\da-f]{6})$/i,
    rgbRegex = /^(rgb)\(\s{0,}(\d{1,3}\s{0,},\s{0,}){2}\d{1,3}\s{0,}\)$/i;
/*----------- Event handler for card switch buttons -----------*/

selectors.$hexToRgbBtn.addEventListener("click", function () {
  // Toggle class in buttons
  if (!this.classList.contains("btn__active")) this.classList.add("btn__active");
  selectors.$rgbToHexBtn.classList.remove("btn__active"); // Toggle class in cards

  if (!selectors.$hexToRgbCard.matches(".card-visible")) selectors.$hexToRgbCard.classList.add("card-visible");
  selectors.$rgbToHexCard.classList.remove("card-visible");
});
selectors.$rgbToHexBtn.addEventListener("click", function () {
  // Toggle class in buttons
  this.classList.toggle("btn__active");
  selectors.$hexToRgbBtn.classList.toggle("btn__active"); // Toggle class in cards

  selectors.$rgbToHexCard.classList.add("card-visible");
  selectors.$hexToRgbCard.classList.remove("card-visible");
});
/*--------------- Event handler for copy buttons --------------*/

try {
  selectors.$copyBtns.forEach(function (cpBtn) {
    cpBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(this.parentElement.previousElementSibling.textContent).then(function () {
        return alert("color value has been copied");
      });
    });
  });
} catch (error) {
  selectors.$copyBtns.forEach(function (cpBtn) {
    return cpBtn.style.display = "none";
  });
}
/*-------------- Event Handler for hex input field --------------*/


(_sel$$hexInputField = selectors.$hexInputField) === null || _sel$$hexInputField === void 0 ? void 0 : _sel$$hexInputField.addEventListener("input", function () {
  if (hexRegex.test(this.value.trim())) {
    // Calculate rgb & hsl values
    var _hexToRgb = hexToRgb(this.value.trim()),
        _hexToRgb2 = main_slicedToArray(_hexToRgb, 3),
        r = _hexToRgb2[0],
        g = _hexToRgb2[1],
        b = _hexToRgb2[2];

    var _rgbToHsl = rgbToHsl(r, g, b),
        _rgbToHsl2 = main_slicedToArray(_rgbToHsl, 3),
        h = _rgbToHsl2[0],
        s = _rgbToHsl2[1],
        l = _rgbToHsl2[2]; // Display rgb & hex values in UI


    var rgbColorValue = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    selectors.$rgbColorLabel.textContent = rgbColorValue;
    selectors.$firstHslColorLabel.textContent = "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)"); // Display calculated color in color window

    selectors.$firstColorWindow.style.backgroundColor = rgbColorValue;
  }
});
/*--------------- Event Handler for rgb input field ---------------*/

(_sel$$rgbInputField = selectors.$rgbInputField) === null || _sel$$rgbInputField === void 0 ? void 0 : _sel$$rgbInputField.addEventListener("input", function () {
  if (rgbRegex.test(this.value.trim())) {
    // Calculate hex & hsl values
    var hexColor = rgbToHex(this.value.trim());

    if (hexColor) {
      var _rgbToHsl3 = rgbToHsl.apply(void 0, main_toConsumableArray(hexToRgb(hexColor))),
          _rgbToHsl4 = main_slicedToArray(_rgbToHsl3, 3),
          h = _rgbToHsl4[0],
          s = _rgbToHsl4[1],
          l = _rgbToHsl4[2]; // Display hex & hsl values in UI


      selectors.$hexColorLabel.textContent = hexColor;
      selectors.$lastHslColorLabel.textContent = "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)"); // Display calcualted color value in color window

      selectors.$lastColorWindow.style.backgroundColor = hexColor;
    }
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCQyxDQUFoQixlQUFzQkMsQ0FBdEIsTUFBbkI7SUFDQVEsb0NBQUEsR0FBaUN5QixhQUFqQztJQUNBekIseUNBQUEsaUJBQTZDZCxDQUE3QyxlQUFtREMsQ0FBbkQsZ0JBQTBEUyxDQUExRCxRQVJvQyxDQVVwQzs7SUFDQUksaURBQUEsR0FBOEN5QixhQUE5QztFQUNEO0FBQ0YsQ0FkRDtBQWdCQTs7QUFDQSx1QkFBQXpCLHdCQUFBLDRFQUFvQkcsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDLFlBQVk7RUFDeEQsSUFBSUQsUUFBUSxDQUFDcUIsSUFBVCxDQUFjLEtBQUtDLEtBQUwsQ0FBVzNDLElBQVgsRUFBZCxDQUFKLEVBQXNDO0lBQ3BDO0lBQ0EsSUFBTThDLFFBQVEsR0FBR2pELFFBQVEsQ0FBQyxLQUFLOEMsS0FBTCxDQUFXM0MsSUFBWCxFQUFELENBQXpCOztJQUNBLElBQUk4QyxRQUFKLEVBQWM7TUFDWixpQkFBa0IxQyxjQUFBLGdDQUFZaEIsUUFBUSxDQUFDMEQsUUFBRCxDQUFwQixFQUFsQjtNQUFBO01BQUEsSUFBT3pDLENBQVA7TUFBQSxJQUFVQyxDQUFWO01BQUEsSUFBYVMsQ0FBYixpQkFEWSxDQUdaOzs7TUFDQUksb0NBQUEsR0FBaUMyQixRQUFqQztNQUNBM0Isd0NBQUEsaUJBQTRDZCxDQUE1QyxlQUFrREMsQ0FBbEQsZ0JBQXlEUyxDQUF6RCxRQUxZLENBT1o7O01BQ0FJLGdEQUFBLEdBQTZDMkIsUUFBN0M7SUFDRDtFQUNGO0FBQ0YsQ0FmRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL2pzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICRoZXhUb1JnYkJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXh0b3JnYl9fYnRuXCIpLFxuICAkcmdiVG9IZXhCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmdidG9oZXhfX2J0blwiKSxcbiAgJGhleFRvUmdiQ2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXh0b3JnYl9fY2FyZFwiKSxcbiAgJHJnYlRvSGV4Q2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZ2J0b2hleF9fY2FyZFwiKSxcbiAgJGhleElucHV0RmllbGQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV4X19pbnB1dC0tZmllbGRcIiksXG4gICRyZ2JJbnB1dEZpZWxkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJnYl9faW5wdXQtLWZpZWxkXCIpLFxuICAkZmlyc3RDb2xvcldpbmRvdzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkOmZpcnN0LW9mLXR5cGUgLmNhcmRfX2NvbG9yLS13aW5kb3dcIiksXG4gICRsYXN0Q29sb3JXaW5kb3c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZDpsYXN0LW9mLXR5cGUgLmNhcmRfX2NvbG9yLS13aW5kb3dcIiksXG4gICRjb3B5QnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4gLmJ4cy1jb3B5XCIpLFxuICAkaGV4Q29sb3JMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXhfX3ZhbHVlIHNwYW5cIiksXG4gICRyZ2JDb2xvckxhYmVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJnYl9fdmFsdWUgc3BhblwiKSxcbiAgJGZpcnN0SHNsQ29sb3JMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXh0b3JnYl9fY2FyZCAuaHNsX192YWx1ZSBzcGFuXCIpLFxuICAkbGFzdEhzbENvbG9yTGFiZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmdidG9oZXhfX2NhcmQgLmhzbF9fdmFsdWUgc3BhblwiKVxufTtcbiIsIi8qKlxuICogQ29udmVydCBIRVggY29sb3IgdmFsdWUgdG8gUkdCXG4gKiByZXR1cm5zIGFuIGFycmF5IG9mIFJlZCwgR3JlZW4gJiBCbHVlXG4gKlxuICogQHBhcmFtICBTdHJpbmcgIEhleCB2YWx1ZVxuICogQHJldHVybiBBcnJheSAgVGhlIHIsZyxiIHZhbHVlc1xuICovXG5leHBvcnQgY29uc3QgaGV4VG9SZ2IgPSBoZXggPT4ge1xuICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgIHJldHVybiBoZXhcbiAgICAgIC5zbGljZSgxKVxuICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAubWFwKGUgPT4gcGFyc2VJbnQoZSwgMTYpKTtcbiAgfSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgcmV0dXJuIGhleFxuICAgICAgLnNsaWNlKDEpXG4gICAgICAubWF0Y2goL1tcXGRhLWZdezJ9L2dpKVxuICAgICAgLm1hcChlID0+IHBhcnNlSW50KGUsIDE2KSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ29udmVydCBSR0IgY29sb3IgdmFsdWUgdG8gSGV4XG4gKiByZXR1cm5zIGEgc3RyaW5nIG9mIGhleCBjb2xvciB2YWx1ZVxuICpcbiAqIEBwYXJhbSAgQXJyYXkgICBbcixnLGJdICByZWQsIGdyZWVuICYgYmx1ZSB2YWx1ZXNcbiAqIEByZXR1cm4gU3RyaW5nICBIZXggVmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IHJnYlRvSGV4ID0gcmdiID0+IHtcbiAgY29uc3QgcmdiVmFsdWVzID0gcmdiXG4gICAgLnNsaWNlKDQpXG4gICAgLnNsaWNlKDAsIC0xKVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoLyxcXHN7MCx9LylcbiAgICAuZmlsdGVyKGUgPT4gZSA8PSAyNTUpO1xuXG4gIHJldHVybiByZ2JWYWx1ZXMubGVuZ3RoID09PSAzXG4gICAgPyBcIiNcIiArXG4gICAgICAgIHJnYlZhbHVlc1xuICAgICAgICAgIC5tYXAoZSA9PlxuICAgICAgICAgICAgKCtlKS50b1N0cmluZygxNikubGVuZ3RoIDwgMlxuICAgICAgICAgICAgICA/IFwiMFwiICsgKCtlKS50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgOiAoK2UpLnRvU3RyaW5nKDE2KVxuICAgICAgICAgIClcbiAgICAgICAgICAuam9pbihcIlwiKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogQ29udmVydHMgUkdCIGNvbG9yIHZhbHVlIGludG8gSFNMLlxuICogcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGgscyAmIGxcbiAqXG4gKiBAcGFyYW0gIEFycmF5ICAgW3IsZyxiXSAgcmVkLCBncmVlbiAmIGJsdWUgdmFsdWVzXG4gKiBAcmV0dXJuIEFycmF5ICAgVGhlIGh1ZSwgc3RhdXJhdGlvbiAmIGxpZ2h0bmVzcyB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJnYlRvSHNsID0gKC4uLnJnYkFycikgPT4ge1xuICBsZXQgaCwgcztcblxuICAvLyBDYWxjdWxhdGUgZnJhY3Rpb24gb2YgcixnLGJcbiAgY29uc3QgcmdiID0gcmdiQXJyLm1hcCh2YWwgPT4gdmFsIC8gMjU1KTtcbiAgY29uc3QgW3IsIGcsIGJdID0gcmdiO1xuXG4gIC8vIENhbGN1bGF0ZSBsaWdodG5lc3NcbiAgY29uc3QgW21pbiwgbWF4XSA9IFtNYXRoLm1pbiguLi5yZ2IpLCBNYXRoLm1heCguLi5yZ2IpXTtcbiAgY29uc3QgbCA9IChtaW4gKyBtYXgpIC8gMjtcblxuICAvLyBDYWxjdWxhdGUgaHVlICYgc2F0dXJhdGlvblxuICBjb25zdCBkZWx0YSA9IG1heCAtIG1pbjtcbiAgaWYgKGRlbHRhID09PSAwKSBoID0gcyA9IDA7XG4gIGVsc2Uge1xuICAgIHMgPSBsID4gMC41ID8gZGVsdGEgLyAoMiAtIGwgKiAyKSA6IGRlbHRhIC8gKGwgKiAyKTtcblxuICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICBjYXNlIHI6XG4gICAgICAgIGggPSAoZyAtIGIpIC8gZGVsdGEgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBnOlxuICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGI6XG4gICAgICAgIGggPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgfVxuXG4gIHJldHVybiBbaCwgKyhzICogMTAwKS50b0ZpeGVkKDApLCArKGwgKiAxMDApLnRvRml4ZWQoMCldO1xufTtcbiIsImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgeyBzZWxlY3RvcnMgYXMgc2VsIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyByZ2JUb0hleCwgaGV4VG9SZ2IsIHJnYlRvSHNsIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmNvbnN0IFtoZXhSZWdleCwgcmdiUmVnZXhdID0gW1xuICAvXiMoW1xcZGEtZl17M318W1xcZGEtZl17Nn0pJC9pLFxuICAvXihyZ2IpXFwoXFxzezAsfShcXGR7MSwzfVxcc3swLH0sXFxzezAsfSl7Mn1cXGR7MSwzfVxcc3swLH1cXCkkL2lcbl07XG5cbi8qLS0tLS0tLS0tLS0gRXZlbnQgaGFuZGxlciBmb3IgY2FyZCBzd2l0Y2ggYnV0dG9ucyAtLS0tLS0tLS0tLSovXG5zZWwuJGhleFRvUmdiQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFRvZ2dsZSBjbGFzcyBpbiBidXR0b25zXG4gIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5fX2FjdGl2ZVwiKSlcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJidG5fX2FjdGl2ZVwiKTtcbiAgc2VsLiRyZ2JUb0hleEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYnRuX19hY3RpdmVcIik7XG5cbiAgLy8gVG9nZ2xlIGNsYXNzIGluIGNhcmRzXG4gIGlmICghc2VsLiRoZXhUb1JnYkNhcmQubWF0Y2hlcyhcIi5jYXJkLXZpc2libGVcIikpXG4gICAgc2VsLiRoZXhUb1JnYkNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmQtdmlzaWJsZVwiKTtcbiAgc2VsLiRyZ2JUb0hleENhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNhcmQtdmlzaWJsZVwiKTtcbn0pO1xuXG5zZWwuJHJnYlRvSGV4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFRvZ2dsZSBjbGFzcyBpbiBidXR0b25zXG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImJ0bl9fYWN0aXZlXCIpO1xuICBzZWwuJGhleFRvUmdiQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJidG5fX2FjdGl2ZVwiKTtcblxuICAvLyBUb2dnbGUgY2xhc3MgaW4gY2FyZHNcbiAgc2VsLiRyZ2JUb0hleENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmQtdmlzaWJsZVwiKTtcbiAgc2VsLiRoZXhUb1JnYkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNhcmQtdmlzaWJsZVwiKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLSBFdmVudCBoYW5kbGVyIGZvciBjb3B5IGJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0qL1xudHJ5IHtcbiAgc2VsLiRjb3B5QnRucy5mb3JFYWNoKGNwQnRuID0+IHtcbiAgICBjcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgICAud3JpdGVUZXh0KHRoaXMucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50KVxuICAgICAgICAudGhlbigoKSA9PiBhbGVydChcImNvbG9yIHZhbHVlIGhhcyBiZWVuIGNvcGllZFwiKSk7XG4gICAgfSk7XG4gIH0pO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgc2VsLiRjb3B5QnRucy5mb3JFYWNoKGNwQnRuID0+IChjcEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLSBFdmVudCBIYW5kbGVyIGZvciBoZXggaW5wdXQgZmllbGQgLS0tLS0tLS0tLS0tLS0qL1xuc2VsLiRoZXhJbnB1dEZpZWxkPy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoaGV4UmVnZXgudGVzdCh0aGlzLnZhbHVlLnRyaW0oKSkpIHtcbiAgICAvLyBDYWxjdWxhdGUgcmdiICYgaHNsIHZhbHVlc1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IGhleFRvUmdiKHRoaXMudmFsdWUudHJpbSgpKTtcbiAgICBjb25zdCBbaCwgcywgbF0gPSByZ2JUb0hzbChyLCBnLCBiKTtcblxuICAgIC8vIERpc3BsYXkgcmdiICYgaGV4IHZhbHVlcyBpbiBVSVxuICAgIGNvbnN0IHJnYkNvbG9yVmFsdWUgPSBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICBzZWwuJHJnYkNvbG9yTGFiZWwudGV4dENvbnRlbnQgPSByZ2JDb2xvclZhbHVlO1xuICAgIHNlbC4kZmlyc3RIc2xDb2xvckxhYmVsLnRleHRDb250ZW50ID0gYGhzbCgke2h9LCAke3N9JSwgJHtsfSUpYDtcblxuICAgIC8vIERpc3BsYXkgY2FsY3VsYXRlZCBjb2xvciBpbiBjb2xvciB3aW5kb3dcbiAgICBzZWwuJGZpcnN0Q29sb3JXaW5kb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmdiQ29sb3JWYWx1ZTtcbiAgfVxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tIEV2ZW50IEhhbmRsZXIgZm9yIHJnYiBpbnB1dCBmaWVsZCAtLS0tLS0tLS0tLS0tLS0qL1xuc2VsLiRyZ2JJbnB1dEZpZWxkPy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAocmdiUmVnZXgudGVzdCh0aGlzLnZhbHVlLnRyaW0oKSkpIHtcbiAgICAvLyBDYWxjdWxhdGUgaGV4ICYgaHNsIHZhbHVlc1xuICAgIGNvbnN0IGhleENvbG9yID0gcmdiVG9IZXgodGhpcy52YWx1ZS50cmltKCkpO1xuICAgIGlmIChoZXhDb2xvcikge1xuICAgICAgY29uc3QgW2gsIHMsIGxdID0gcmdiVG9Ic2woLi4uaGV4VG9SZ2IoaGV4Q29sb3IpKTtcblxuICAgICAgLy8gRGlzcGxheSBoZXggJiBoc2wgdmFsdWVzIGluIFVJXG4gICAgICBzZWwuJGhleENvbG9yTGFiZWwudGV4dENvbnRlbnQgPSBoZXhDb2xvcjtcbiAgICAgIHNlbC4kbGFzdEhzbENvbG9yTGFiZWwudGV4dENvbnRlbnQgPSBgaHNsKCR7aH0sICR7c30lLCAke2x9JSlgO1xuXG4gICAgICAvLyBEaXNwbGF5IGNhbGN1YWx0ZWQgY29sb3IgdmFsdWUgaW4gY29sb3Igd2luZG93XG4gICAgICBzZWwuJGxhc3RDb2xvcldpbmRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZXhDb2xvcjtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInNlbGVjdG9ycyIsIiRoZXhUb1JnYkJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRyZ2JUb0hleEJ0biIsIiRoZXhUb1JnYkNhcmQiLCIkcmdiVG9IZXhDYXJkIiwiJGhleElucHV0RmllbGQiLCIkcmdiSW5wdXRGaWVsZCIsIiRmaXJzdENvbG9yV2luZG93IiwiJGxhc3RDb2xvcldpbmRvdyIsIiRjb3B5QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkaGV4Q29sb3JMYWJlbCIsIiRyZ2JDb2xvckxhYmVsIiwiJGZpcnN0SHNsQ29sb3JMYWJlbCIsIiRsYXN0SHNsQ29sb3JMYWJlbCIsImhleFRvUmdiIiwiaGV4IiwibGVuZ3RoIiwic2xpY2UiLCJzcGxpdCIsIm1hcCIsImUiLCJwYXJzZUludCIsIm1hdGNoIiwicmdiVG9IZXgiLCJyZ2IiLCJyZ2JWYWx1ZXMiLCJ0cmltIiwiZmlsdGVyIiwidG9TdHJpbmciLCJqb2luIiwicmdiVG9Ic2wiLCJoIiwicyIsInJnYkFyciIsInZhbCIsInIiLCJnIiwiYiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJsIiwiZGVsdGEiLCJyb3VuZCIsInRvRml4ZWQiLCJzZWwiLCJoZXhSZWdleCIsInJnYlJlZ2V4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwibWF0Y2hlcyIsInRvZ2dsZSIsImZvckVhY2giLCJjcEJ0biIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInBhcmVudEVsZW1lbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGV4dENvbnRlbnQiLCJ0aGVuIiwiYWxlcnQiLCJlcnJvciIsInN0eWxlIiwiZGlzcGxheSIsInRlc3QiLCJ2YWx1ZSIsInJnYkNvbG9yVmFsdWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZXhDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=