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
 * Converts HEX color value to RGB
 * returns an array of red, green & blue
 *
 * @param  {string} hex - Hex color value
 * @return {Array}      - red,green & blue values
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
 * Convert RGB color value to HEX
 * returns a string of hex color value
 *
 * @param  {Array} [r,g,b] - red, green & blue values
 * @return {string}        - Hex color value
 */

var rgbToHex = function rgbToHex(rgb) {
  var rgbValues = rgb.slice(4).slice(0, -1).trim().split(/,\s{0,}/).filter(function (e) {
    return e <= 255;
  });
  return rgbValues.length === 3 ? "#".concat(rgbValues.map(function (e) {
    return (+e).toString(16).length < 2 ? "0".concat((+e).toString(16)) : (+e).toString(16);
  }).join("")) : null;
};
/**
 * Converts RGB color value into HSL.
 * returns an array containing hue,saturation & lightness
 *
 * @param  {Array} [r,g,b] - red, green & blue values
 * @return {Array}         - hue, stauration & lightness values
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
/**
 * TODO: Function for conversion of HSL color value to RGB
 */
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
/* ----------- Event handler for card switch buttons -----------*/

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
/* --------------- Event handler for copy buttons --------------*/

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
/* -------------- Event Handler for hex input field --------------*/


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
/* --------------- Event Handler for rgb input field ---------------*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkMsQ0FBVixlQUFnQkMsQ0FBaEIsZUFBc0JDLENBQXRCLE1BQW5CO0lBQ0FRLG9DQUFBLEdBQWlDeUIsYUFBakM7SUFDQXpCLHlDQUFBLGlCQUE2Q2QsQ0FBN0MsZUFBbURDLENBQW5ELGdCQUEwRFMsQ0FBMUQsUUFSb0MsQ0FVcEM7O0lBQ0FJLGlEQUFBLEdBQThDeUIsYUFBOUM7RUFDRDtBQUNGLENBZEQ7QUFnQkE7O0FBQ0EsdUJBQUF6Qix3QkFBQSw0RUFBb0JHLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QyxZQUFZO0VBQ3hELElBQUlELFFBQVEsQ0FBQ3FCLElBQVQsQ0FBYyxLQUFLQyxLQUFMLENBQVczQyxJQUFYLEVBQWQsQ0FBSixFQUFzQztJQUNwQztJQUNBLElBQU04QyxRQUFRLEdBQUdqRCxRQUFRLENBQUMsS0FBSzhDLEtBQUwsQ0FBVzNDLElBQVgsRUFBRCxDQUF6Qjs7SUFDQSxJQUFJOEMsUUFBSixFQUFjO01BQ1osaUJBQWtCMUMsY0FBQSxnQ0FBWWhCLFFBQVEsQ0FBQzBELFFBQUQsQ0FBcEIsRUFBbEI7TUFBQTtNQUFBLElBQU96QyxDQUFQO01BQUEsSUFBVUMsQ0FBVjtNQUFBLElBQWFTLENBQWIsaUJBRFksQ0FHWjs7O01BQ0FJLG9DQUFBLEdBQWlDMkIsUUFBakM7TUFDQTNCLHdDQUFBLGlCQUE0Q2QsQ0FBNUMsZUFBa0RDLENBQWxELGdCQUF5RFMsQ0FBekQsUUFMWSxDQU9aOztNQUNBSSxnREFBQSxHQUE2QzJCLFFBQTdDO0lBQ0Q7RUFDRjtBQUNGLENBZkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAkaGV4VG9SZ2JCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV4dG9yZ2JfX2J0blwiKSxcbiAgJHJnYlRvSGV4QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJnYnRvaGV4X19idG5cIiksXG4gICRoZXhUb1JnYkNhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV4dG9yZ2JfX2NhcmRcIiksXG4gICRyZ2JUb0hleENhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmdidG9oZXhfX2NhcmRcIiksXG4gICRoZXhJbnB1dEZpZWxkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhleF9faW5wdXQtLWZpZWxkXCIpLFxuICAkcmdiSW5wdXRGaWVsZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZ2JfX2lucHV0LS1maWVsZFwiKSxcbiAgJGZpcnN0Q29sb3JXaW5kb3c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY2FyZDpmaXJzdC1vZi10eXBlIC5jYXJkX19jb2xvci0td2luZG93XCJcbiAgKSxcbiAgJGxhc3RDb2xvcldpbmRvdzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jYXJkOmxhc3Qtb2YtdHlwZSAuY2FyZF9fY29sb3ItLXdpbmRvd1wiXG4gICksXG4gICRjb3B5QnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4gLmJ4cy1jb3B5XCIpLFxuICAkaGV4Q29sb3JMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXhfX3ZhbHVlIHNwYW5cIiksXG4gICRyZ2JDb2xvckxhYmVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJnYl9fdmFsdWUgc3BhblwiKSxcbiAgJGZpcnN0SHNsQ29sb3JMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5oZXh0b3JnYl9fY2FyZCAuaHNsX192YWx1ZSBzcGFuXCJcbiAgKSxcbiAgJGxhc3RIc2xDb2xvckxhYmVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJnYnRvaGV4X19jYXJkIC5oc2xfX3ZhbHVlIHNwYW5cIilcbn07XG4iLCIvKipcbiAqIENvbnZlcnRzIEhFWCBjb2xvciB2YWx1ZSB0byBSR0JcbiAqIHJldHVybnMgYW4gYXJyYXkgb2YgcmVkLCBncmVlbiAmIGJsdWVcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGhleCAtIEhleCBjb2xvciB2YWx1ZVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgLSByZWQsZ3JlZW4gJiBibHVlIHZhbHVlc1xuICovXG5leHBvcnQgY29uc3QgaGV4VG9SZ2IgPSBoZXggPT4ge1xuICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgIHJldHVybiBoZXhcbiAgICAgIC5zbGljZSgxKVxuICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAubWFwKGUgPT4gcGFyc2VJbnQoZSwgMTYpKTtcbiAgfSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgcmV0dXJuIGhleFxuICAgICAgLnNsaWNlKDEpXG4gICAgICAubWF0Y2goL1tcXGRhLWZdezJ9L2dpKVxuICAgICAgLm1hcChlID0+IHBhcnNlSW50KGUsIDE2KSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ29udmVydCBSR0IgY29sb3IgdmFsdWUgdG8gSEVYXG4gKiByZXR1cm5zIGEgc3RyaW5nIG9mIGhleCBjb2xvciB2YWx1ZVxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBbcixnLGJdIC0gcmVkLCBncmVlbiAmIGJsdWUgdmFsdWVzXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAtIEhleCBjb2xvciB2YWx1ZVxuICovXG5leHBvcnQgY29uc3QgcmdiVG9IZXggPSByZ2IgPT4ge1xuICBjb25zdCByZ2JWYWx1ZXMgPSByZ2JcbiAgICAuc2xpY2UoNClcbiAgICAuc2xpY2UoMCwgLTEpXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgvLFxcc3swLH0vKVxuICAgIC5maWx0ZXIoZSA9PiBlIDw9IDI1NSk7XG5cbiAgcmV0dXJuIHJnYlZhbHVlcy5sZW5ndGggPT09IDNcbiAgICA/IGAjJHtyZ2JWYWx1ZXNcbiAgICAgICAgLm1hcChlID0+XG4gICAgICAgICAgKCtlKS50b1N0cmluZygxNikubGVuZ3RoIDwgMlxuICAgICAgICAgICAgPyBgMCR7KCtlKS50b1N0cmluZygxNil9YFxuICAgICAgICAgICAgOiAoK2UpLnRvU3RyaW5nKDE2KVxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiXCIpfWBcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIFJHQiBjb2xvciB2YWx1ZSBpbnRvIEhTTC5cbiAqIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBodWUsc2F0dXJhdGlvbiAmIGxpZ2h0bmVzc1xuICpcbiAqIEBwYXJhbSAge0FycmF5fSBbcixnLGJdIC0gcmVkLCBncmVlbiAmIGJsdWUgdmFsdWVzXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAtIGh1ZSwgc3RhdXJhdGlvbiAmIGxpZ2h0bmVzcyB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJnYlRvSHNsID0gKC4uLnJnYkFycikgPT4ge1xuICBsZXQgaCwgcztcblxuICAvLyBDYWxjdWxhdGUgZnJhY3Rpb24gb2YgcixnLGJcbiAgY29uc3QgcmdiID0gcmdiQXJyLm1hcCh2YWwgPT4gdmFsIC8gMjU1KTtcbiAgY29uc3QgW3IsIGcsIGJdID0gcmdiO1xuXG4gIC8vIENhbGN1bGF0ZSBsaWdodG5lc3NcbiAgY29uc3QgW21pbiwgbWF4XSA9IFtNYXRoLm1pbiguLi5yZ2IpLCBNYXRoLm1heCguLi5yZ2IpXTtcbiAgY29uc3QgbCA9IChtaW4gKyBtYXgpIC8gMjtcblxuICAvLyBDYWxjdWxhdGUgaHVlICYgc2F0dXJhdGlvblxuICBjb25zdCBkZWx0YSA9IG1heCAtIG1pbjtcbiAgaWYgKGRlbHRhID09PSAwKSBoID0gcyA9IDA7XG4gIGVsc2Uge1xuICAgIHMgPSBsID4gMC41ID8gZGVsdGEgLyAoMiAtIGwgKiAyKSA6IGRlbHRhIC8gKGwgKiAyKTtcblxuICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICBjYXNlIHI6XG4gICAgICAgIGggPSAoZyAtIGIpIC8gZGVsdGEgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBnOlxuICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGI6XG4gICAgICAgIGggPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgfVxuXG4gIHJldHVybiBbaCwgKyhzICogMTAwKS50b0ZpeGVkKDApLCArKGwgKiAxMDApLnRvRml4ZWQoMCldO1xufTtcblxuLyoqXG4gKiBUT0RPOiBGdW5jdGlvbiBmb3IgY29udmVyc2lvbiBvZiBIU0wgY29sb3IgdmFsdWUgdG8gUkdCXG4gKi9cbiIsImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgeyBzZWxlY3RvcnMgYXMgc2VsIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyByZ2JUb0hleCwgaGV4VG9SZ2IsIHJnYlRvSHNsIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmNvbnN0IFtoZXhSZWdleCwgcmdiUmVnZXhdID0gW1xuICAvXiMoW1xcZGEtZl17M318W1xcZGEtZl17Nn0pJC9pLFxuICAvXihyZ2IpXFwoXFxzezAsfShcXGR7MSwzfVxcc3swLH0sXFxzezAsfSl7Mn1cXGR7MSwzfVxcc3swLH1cXCkkL2lcbl07XG5cbi8qIC0tLS0tLS0tLS0tIEV2ZW50IGhhbmRsZXIgZm9yIGNhcmQgc3dpdGNoIGJ1dHRvbnMgLS0tLS0tLS0tLS0qL1xuc2VsLiRoZXhUb1JnYkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBUb2dnbGUgY2xhc3MgaW4gYnV0dG9uc1xuICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuX19hY3RpdmVcIikpXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYnRuX19hY3RpdmVcIik7XG4gIHNlbC4kcmdiVG9IZXhCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJ0bl9fYWN0aXZlXCIpO1xuXG4gIC8vIFRvZ2dsZSBjbGFzcyBpbiBjYXJkc1xuICBpZiAoIXNlbC4kaGV4VG9SZ2JDYXJkLm1hdGNoZXMoXCIuY2FyZC12aXNpYmxlXCIpKVxuICAgIHNlbC4kaGV4VG9SZ2JDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXZpc2libGVcIik7XG4gIHNlbC4kcmdiVG9IZXhDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkLXZpc2libGVcIik7XG59KTtcblxuc2VsLiRyZ2JUb0hleEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBUb2dnbGUgY2xhc3MgaW4gYnV0dG9uc1xuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJidG5fX2FjdGl2ZVwiKTtcbiAgc2VsLiRoZXhUb1JnYkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYnRuX19hY3RpdmVcIik7XG5cbiAgLy8gVG9nZ2xlIGNsYXNzIGluIGNhcmRzXG4gIHNlbC4kcmdiVG9IZXhDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXZpc2libGVcIik7XG4gIHNlbC4kaGV4VG9SZ2JDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkLXZpc2libGVcIik7XG59KTtcblxuLyogLS0tLS0tLS0tLS0tLS0tIEV2ZW50IGhhbmRsZXIgZm9yIGNvcHkgYnV0dG9ucyAtLS0tLS0tLS0tLS0tLSovXG50cnkge1xuICBzZWwuJGNvcHlCdG5zLmZvckVhY2goY3BCdG4gPT4ge1xuICAgIGNwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkXG4gICAgICAgIC53cml0ZVRleHQodGhpcy5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpXG4gICAgICAgIC50aGVuKCgpID0+IGFsZXJ0KFwiY29sb3IgdmFsdWUgaGFzIGJlZW4gY29waWVkXCIpKTtcbiAgICB9KTtcbiAgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICBzZWwuJGNvcHlCdG5zLmZvckVhY2goY3BCdG4gPT4gKGNwQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLSBFdmVudCBIYW5kbGVyIGZvciBoZXggaW5wdXQgZmllbGQgLS0tLS0tLS0tLS0tLS0qL1xuc2VsLiRoZXhJbnB1dEZpZWxkPy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoaGV4UmVnZXgudGVzdCh0aGlzLnZhbHVlLnRyaW0oKSkpIHtcbiAgICAvLyBDYWxjdWxhdGUgcmdiICYgaHNsIHZhbHVlc1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IGhleFRvUmdiKHRoaXMudmFsdWUudHJpbSgpKTtcbiAgICBjb25zdCBbaCwgcywgbF0gPSByZ2JUb0hzbChyLCBnLCBiKTtcblxuICAgIC8vIERpc3BsYXkgcmdiICYgaGV4IHZhbHVlcyBpbiBVSVxuICAgIGNvbnN0IHJnYkNvbG9yVmFsdWUgPSBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICBzZWwuJHJnYkNvbG9yTGFiZWwudGV4dENvbnRlbnQgPSByZ2JDb2xvclZhbHVlO1xuICAgIHNlbC4kZmlyc3RIc2xDb2xvckxhYmVsLnRleHRDb250ZW50ID0gYGhzbCgke2h9LCAke3N9JSwgJHtsfSUpYDtcblxuICAgIC8vIERpc3BsYXkgY2FsY3VsYXRlZCBjb2xvciBpbiBjb2xvciB3aW5kb3dcbiAgICBzZWwuJGZpcnN0Q29sb3JXaW5kb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmdiQ29sb3JWYWx1ZTtcbiAgfVxufSk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSBFdmVudCBIYW5kbGVyIGZvciByZ2IgaW5wdXQgZmllbGQgLS0tLS0tLS0tLS0tLS0tKi9cbnNlbC4kcmdiSW5wdXRGaWVsZD8uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJnYlJlZ2V4LnRlc3QodGhpcy52YWx1ZS50cmltKCkpKSB7XG4gICAgLy8gQ2FsY3VsYXRlIGhleCAmIGhzbCB2YWx1ZXNcbiAgICBjb25zdCBoZXhDb2xvciA9IHJnYlRvSGV4KHRoaXMudmFsdWUudHJpbSgpKTtcbiAgICBpZiAoaGV4Q29sb3IpIHtcbiAgICAgIGNvbnN0IFtoLCBzLCBsXSA9IHJnYlRvSHNsKC4uLmhleFRvUmdiKGhleENvbG9yKSk7XG5cbiAgICAgIC8vIERpc3BsYXkgaGV4ICYgaHNsIHZhbHVlcyBpbiBVSVxuICAgICAgc2VsLiRoZXhDb2xvckxhYmVsLnRleHRDb250ZW50ID0gaGV4Q29sb3I7XG4gICAgICBzZWwuJGxhc3RIc2xDb2xvckxhYmVsLnRleHRDb250ZW50ID0gYGhzbCgke2h9LCAke3N9JSwgJHtsfSUpYDtcblxuICAgICAgLy8gRGlzcGxheSBjYWxjdWFsdGVkIGNvbG9yIHZhbHVlIGluIGNvbG9yIHdpbmRvd1xuICAgICAgc2VsLiRsYXN0Q29sb3JXaW5kb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGV4Q29sb3I7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJzZWxlY3RvcnMiLCIkaGV4VG9SZ2JCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkcmdiVG9IZXhCdG4iLCIkaGV4VG9SZ2JDYXJkIiwiJHJnYlRvSGV4Q2FyZCIsIiRoZXhJbnB1dEZpZWxkIiwiJHJnYklucHV0RmllbGQiLCIkZmlyc3RDb2xvcldpbmRvdyIsIiRsYXN0Q29sb3JXaW5kb3ciLCIkY29weUJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJGhleENvbG9yTGFiZWwiLCIkcmdiQ29sb3JMYWJlbCIsIiRmaXJzdEhzbENvbG9yTGFiZWwiLCIkbGFzdEhzbENvbG9yTGFiZWwiLCJoZXhUb1JnYiIsImhleCIsImxlbmd0aCIsInNsaWNlIiwic3BsaXQiLCJtYXAiLCJlIiwicGFyc2VJbnQiLCJtYXRjaCIsInJnYlRvSGV4IiwicmdiIiwicmdiVmFsdWVzIiwidHJpbSIsImZpbHRlciIsInRvU3RyaW5nIiwiam9pbiIsInJnYlRvSHNsIiwiaCIsInMiLCJyZ2JBcnIiLCJ2YWwiLCJyIiwiZyIsImIiLCJNYXRoIiwibWluIiwibWF4IiwibCIsImRlbHRhIiwicm91bmQiLCJ0b0ZpeGVkIiwic2VsIiwiaGV4UmVnZXgiLCJyZ2JSZWdleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsIm1hdGNoZXMiLCJ0b2dnbGUiLCJmb3JFYWNoIiwiY3BCdG4iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJlbnRFbGVtZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInRleHRDb250ZW50IiwidGhlbiIsImFsZXJ0IiwiZXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ0ZXN0IiwidmFsdWUiLCJyZ2JDb2xvclZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiaGV4Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9