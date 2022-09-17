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
 *
 */

var rgbToHsl = function rgbToHsl() {
  var h, s, l; // Calculate fraction of r,g,b

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
  l = (min + max) / 2; // Calculate hue & saturation

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
//added dark button
const dark=document.querySelector(".dark");
dark.addEventListener("click",function()
{
  document.body.style.backgroundColor="black";
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVbEMsQ0FBVixlQUFnQkMsQ0FBaEIsZUFBc0JDLENBQXRCLE1BQW5CO0lBQ0FPLG9DQUFBLEdBQWlDeUIsYUFBakM7SUFDQXpCLHlDQUFBLGlCQUE2Q2QsQ0FBN0MsZUFBbURDLENBQW5ELGdCQUEwREMsQ0FBMUQsUUFSb0MsQ0FVcEM7O0lBQ0FZLGlEQUFBLEdBQThDeUIsYUFBOUM7RUFDRDtBQUNGLENBZEQ7QUFnQkE7O0FBQ0EsdUJBQUF6Qix3QkFBQSw0RUFBb0JHLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QyxZQUFZO0VBQ3hELElBQUlELFFBQVEsQ0FBQ3FCLElBQVQsQ0FBYyxLQUFLQyxLQUFMLENBQVczQyxJQUFYLEVBQWQsQ0FBSixFQUFzQztJQUNwQztJQUNBLElBQU04QyxRQUFRLEdBQUdqRCxRQUFRLENBQUMsS0FBSzhDLEtBQUwsQ0FBVzNDLElBQVgsRUFBRCxDQUF6Qjs7SUFDQSxJQUFJOEMsUUFBSixFQUFjO01BQ1osaUJBQWtCMUMsY0FBQSxnQ0FBWWhCLFFBQVEsQ0FBQzBELFFBQUQsQ0FBcEIsRUFBbEI7TUFBQTtNQUFBLElBQU96QyxDQUFQO01BQUEsSUFBVUMsQ0FBVjtNQUFBLElBQWFDLENBQWIsaUJBRFksQ0FHWjs7O01BQ0FZLG9DQUFBLEdBQWlDMkIsUUFBakM7TUFDQTNCLHdDQUFBLGlCQUE0Q2QsQ0FBNUMsZUFBa0RDLENBQWxELGdCQUF5REMsQ0FBekQsUUFMWSxDQU9aOztNQUNBWSxnREFBQSxHQUE2QzJCLFFBQTdDO0lBQ0Q7RUFDRjtBQUNGLENBZkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAkaGV4VG9SZ2JCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV4dG9yZ2JfX2J0blwiKSxcbiAgJHJnYlRvSGV4QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJnYnRvaGV4X19idG5cIiksXG4gICRoZXhUb1JnYkNhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV4dG9yZ2JfX2NhcmRcIiksXG4gICRyZ2JUb0hleENhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmdidG9oZXhfX2NhcmRcIiksXG4gICRoZXhJbnB1dEZpZWxkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhleF9faW5wdXQtLWZpZWxkXCIpLFxuICAkcmdiSW5wdXRGaWVsZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZ2JfX2lucHV0LS1maWVsZFwiKSxcbiAgJGZpcnN0Q29sb3JXaW5kb3c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZDpmaXJzdC1vZi10eXBlIC5jYXJkX19jb2xvci0td2luZG93XCIpLFxuICAkbGFzdENvbG9yV2luZG93OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQ6bGFzdC1vZi10eXBlIC5jYXJkX19jb2xvci0td2luZG93XCIpLFxuICAkY29weUJ0bnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuIC5ieHMtY29weVwiKSxcbiAgJGhleENvbG9yTGFiZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV4X192YWx1ZSBzcGFuXCIpLFxuICAkcmdiQ29sb3JMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZ2JfX3ZhbHVlIHNwYW5cIiksXG4gICRmaXJzdEhzbENvbG9yTGFiZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV4dG9yZ2JfX2NhcmQgLmhzbF9fdmFsdWUgc3BhblwiKSxcbiAgJGxhc3RIc2xDb2xvckxhYmVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJnYnRvaGV4X19jYXJkIC5oc2xfX3ZhbHVlIHNwYW5cIilcbn07XG4iLCIvKipcbiAqIENvbnZlcnQgSEVYIGNvbG9yIHZhbHVlIHRvIFJHQlxuICogcmV0dXJucyBhbiBhcnJheSBvZiBSZWQsIEdyZWVuICYgQmx1ZVxuICpcbiAqIEBwYXJhbSAgU3RyaW5nICBIZXggdmFsdWVcbiAqIEByZXR1cm4gQXJyYXkgIFRoZSByLGcsYiB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGhleFRvUmdiID0gaGV4ID0+IHtcbiAgaWYgKGhleC5sZW5ndGggPT09IDQpIHtcbiAgICByZXR1cm4gaGV4XG4gICAgICAuc2xpY2UoMSlcbiAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgLm1hcChlID0+IHBhcnNlSW50KGUsIDE2KSk7XG4gIH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgIHJldHVybiBoZXhcbiAgICAgIC5zbGljZSgxKVxuICAgICAgLm1hdGNoKC9bXFxkYS1mXXsyfS9naSlcbiAgICAgIC5tYXAoZSA9PiBwYXJzZUludChlLCAxNikpO1xuICB9XG59O1xuXG4vKipcbiAqIENvbnZlcnQgUkdCIGNvbG9yIHZhbHVlIHRvIEhleFxuICogcmV0dXJucyBhIHN0cmluZyBvZiBoZXggY29sb3IgdmFsdWVcbiAqXG4gKiBAcGFyYW0gIEFycmF5ICAgW3IsZyxiXSAgcmVkLCBncmVlbiAmIGJsdWUgdmFsdWVzXG4gKiBAcmV0dXJuIFN0cmluZyAgSGV4IFZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCByZ2JUb0hleCA9IHJnYiA9PiB7XG4gIGNvbnN0IHJnYlZhbHVlcyA9IHJnYlxuICAgIC5zbGljZSg0KVxuICAgIC5zbGljZSgwLCAtMSlcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KC8sXFxzezAsfS8pXG4gICAgLmZpbHRlcihlID0+IGUgPD0gMjU1KTtcblxuICByZXR1cm4gcmdiVmFsdWVzLmxlbmd0aCA9PT0gM1xuICAgID8gXCIjXCIgK1xuICAgICAgICByZ2JWYWx1ZXNcbiAgICAgICAgICAubWFwKGUgPT5cbiAgICAgICAgICAgICgrZSkudG9TdHJpbmcoMTYpLmxlbmd0aCA8IDJcbiAgICAgICAgICAgICAgPyBcIjBcIiArICgrZSkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgIDogKCtlKS50b1N0cmluZygxNilcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oXCJcIilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIFJHQiBjb2xvciB2YWx1ZSBpbnRvIEhTTC5cbiAqIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBoLHMgJiBsXG4gKlxuICogQHBhcmFtICBBcnJheSAgIFtyLGcsYl0gIHJlZCwgZ3JlZW4gJiBibHVlIHZhbHVlc1xuICogQHJldHVybiBBcnJheSAgIFRoZSBodWUsIHN0YXVyYXRpb24gJiBsaWdodG5lc3MgdmFsdWVzXG4gKlxuICovXG5leHBvcnQgY29uc3QgcmdiVG9Ic2wgPSAoLi4ucmdiQXJyKSA9PiB7XG4gIGxldCBoLCBzLCBsO1xuXG4gIC8vIENhbGN1bGF0ZSBmcmFjdGlvbiBvZiByLGcsYlxuICBjb25zdCByZ2IgPSByZ2JBcnIubWFwKHZhbCA9PiB2YWwgLyAyNTUpO1xuICBjb25zdCBbciwgZywgYl0gPSByZ2I7XG5cbiAgLy8gQ2FsY3VsYXRlIGxpZ2h0bmVzc1xuICBjb25zdCBbbWluLCBtYXhdID0gW01hdGgubWluKC4uLnJnYiksIE1hdGgubWF4KC4uLnJnYildO1xuICBsID0gKG1pbiArIG1heCkgLyAyO1xuXG4gIC8vIENhbGN1bGF0ZSBodWUgJiBzYXR1cmF0aW9uXG4gIGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuICBpZiAoZGVsdGEgPT09IDApIGggPSBzID0gMDtcbiAgZWxzZSB7XG4gICAgcyA9IGwgPiAwLjUgPyBkZWx0YSAvICgyIC0gbCAqIDIpIDogZGVsdGEgLyAobCAqIDIpO1xuXG4gICAgc3dpdGNoIChtYXgpIHtcbiAgICAgIGNhc2UgcjpcbiAgICAgICAgaCA9IChnIC0gYikgLyBkZWx0YSArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGc6XG4gICAgICAgIGggPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYjpcbiAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBoID0gTWF0aC5yb3VuZChoICogNjApO1xuICB9XG5cbiAgcmV0dXJuIFtoLCArKHMgKiAxMDApLnRvRml4ZWQoMCksICsobCAqIDEwMCkudG9GaXhlZCgwKV07XG59O1xuIiwiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCB7IHNlbGVjdG9ycyBhcyBzZWwgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHJnYlRvSGV4LCBoZXhUb1JnYiwgcmdiVG9Ic2wgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3QgW2hleFJlZ2V4LCByZ2JSZWdleF0gPSBbXG4gIC9eIyhbXFxkYS1mXXszfXxbXFxkYS1mXXs2fSkkL2ksXG4gIC9eKHJnYilcXChcXHN7MCx9KFxcZHsxLDN9XFxzezAsfSxcXHN7MCx9KXsyfVxcZHsxLDN9XFxzezAsfVxcKSQvaVxuXTtcblxuLyotLS0tLS0tLS0tLSBFdmVudCBoYW5kbGVyIGZvciBjYXJkIHN3aXRjaCBidXR0b25zIC0tLS0tLS0tLS0tKi9cbnNlbC4kaGV4VG9SZ2JCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gVG9nZ2xlIGNsYXNzIGluIGJ1dHRvbnNcbiAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImJ0bl9fYWN0aXZlXCIpKVxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImJ0bl9fYWN0aXZlXCIpO1xuICBzZWwuJHJnYlRvSGV4QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJidG5fX2FjdGl2ZVwiKTtcblxuICAvLyBUb2dnbGUgY2xhc3MgaW4gY2FyZHNcbiAgaWYgKCFzZWwuJGhleFRvUmdiQ2FyZC5tYXRjaGVzKFwiLmNhcmQtdmlzaWJsZVwiKSlcbiAgICBzZWwuJGhleFRvUmdiQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZC12aXNpYmxlXCIpO1xuICBzZWwuJHJnYlRvSGV4Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZC12aXNpYmxlXCIpO1xufSk7XG5cbnNlbC4kcmdiVG9IZXhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gVG9nZ2xlIGNsYXNzIGluIGJ1dHRvbnNcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYnRuX19hY3RpdmVcIik7XG4gIHNlbC4kaGV4VG9SZ2JCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImJ0bl9fYWN0aXZlXCIpO1xuXG4gIC8vIFRvZ2dsZSBjbGFzcyBpbiBjYXJkc1xuICBzZWwuJHJnYlRvSGV4Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZC12aXNpYmxlXCIpO1xuICBzZWwuJGhleFRvUmdiQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZC12aXNpYmxlXCIpO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tIEV2ZW50IGhhbmRsZXIgZm9yIGNvcHkgYnV0dG9ucyAtLS0tLS0tLS0tLS0tLSovXG50cnkge1xuICBzZWwuJGNvcHlCdG5zLmZvckVhY2goY3BCdG4gPT4ge1xuICAgIGNwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkXG4gICAgICAgIC53cml0ZVRleHQodGhpcy5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpXG4gICAgICAgIC50aGVuKCgpID0+IGFsZXJ0KFwiY29sb3IgdmFsdWUgaGFzIGJlZW4gY29waWVkXCIpKTtcbiAgICB9KTtcbiAgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICBzZWwuJGNvcHlCdG5zLmZvckVhY2goY3BCdG4gPT4gKGNwQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tIEV2ZW50IEhhbmRsZXIgZm9yIGhleCBpbnB1dCBmaWVsZCAtLS0tLS0tLS0tLS0tLSovXG5zZWwuJGhleElucHV0RmllbGQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChoZXhSZWdleC50ZXN0KHRoaXMudmFsdWUudHJpbSgpKSkge1xuICAgIC8vIENhbGN1bGF0ZSByZ2IgJiBoc2wgdmFsdWVzXG4gICAgY29uc3QgW3IsIGcsIGJdID0gaGV4VG9SZ2IodGhpcy52YWx1ZS50cmltKCkpO1xuICAgIGNvbnN0IFtoLCBzLCBsXSA9IHJnYlRvSHNsKHIsIGcsIGIpO1xuXG4gICAgLy8gRGlzcGxheSByZ2IgJiBoZXggdmFsdWVzIGluIFVJXG4gICAgY29uc3QgcmdiQ29sb3JWYWx1ZSA9IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIHNlbC4kcmdiQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9IHJnYkNvbG9yVmFsdWU7XG4gICAgc2VsLiRmaXJzdEhzbENvbG9yTGFiZWwudGV4dENvbnRlbnQgPSBgaHNsKCR7aH0sICR7c30lLCAke2x9JSlgO1xuXG4gICAgLy8gRGlzcGxheSBjYWxjdWxhdGVkIGNvbG9yIGluIGNvbG9yIHdpbmRvd1xuICAgIHNlbC4kZmlyc3RDb2xvcldpbmRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZ2JDb2xvclZhbHVlO1xuICB9XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0gRXZlbnQgSGFuZGxlciBmb3IgcmdiIGlucHV0IGZpZWxkIC0tLS0tLS0tLS0tLS0tLSovXG5zZWwuJHJnYklucHV0RmllbGQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChyZ2JSZWdleC50ZXN0KHRoaXMudmFsdWUudHJpbSgpKSkge1xuICAgIC8vIENhbGN1bGF0ZSBoZXggJiBoc2wgdmFsdWVzXG4gICAgY29uc3QgaGV4Q29sb3IgPSByZ2JUb0hleCh0aGlzLnZhbHVlLnRyaW0oKSk7XG4gICAgaWYgKGhleENvbG9yKSB7XG4gICAgICBjb25zdCBbaCwgcywgbF0gPSByZ2JUb0hzbCguLi5oZXhUb1JnYihoZXhDb2xvcikpO1xuXG4gICAgICAvLyBEaXNwbGF5IGhleCAmIGhzbCB2YWx1ZXMgaW4gVUlcbiAgICAgIHNlbC4kaGV4Q29sb3JMYWJlbC50ZXh0Q29udGVudCA9IGhleENvbG9yO1xuICAgICAgc2VsLiRsYXN0SHNsQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9IGBoc2woJHtofSwgJHtzfSUsICR7bH0lKWA7XG5cbiAgICAgIC8vIERpc3BsYXkgY2FsY3VhbHRlZCBjb2xvciB2YWx1ZSBpbiBjb2xvciB3aW5kb3dcbiAgICAgIHNlbC4kbGFzdENvbG9yV2luZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhleENvbG9yO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsic2VsZWN0b3JzIiwiJGhleFRvUmdiQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJHJnYlRvSGV4QnRuIiwiJGhleFRvUmdiQ2FyZCIsIiRyZ2JUb0hleENhcmQiLCIkaGV4SW5wdXRGaWVsZCIsIiRyZ2JJbnB1dEZpZWxkIiwiJGZpcnN0Q29sb3JXaW5kb3ciLCIkbGFzdENvbG9yV2luZG93IiwiJGNvcHlCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsIiRoZXhDb2xvckxhYmVsIiwiJHJnYkNvbG9yTGFiZWwiLCIkZmlyc3RIc2xDb2xvckxhYmVsIiwiJGxhc3RIc2xDb2xvckxhYmVsIiwiaGV4VG9SZ2IiLCJoZXgiLCJsZW5ndGgiLCJzbGljZSIsInNwbGl0IiwibWFwIiwiZSIsInBhcnNlSW50IiwibWF0Y2giLCJyZ2JUb0hleCIsInJnYiIsInJnYlZhbHVlcyIsInRyaW0iLCJmaWx0ZXIiLCJ0b1N0cmluZyIsImpvaW4iLCJyZ2JUb0hzbCIsImgiLCJzIiwibCIsInJnYkFyciIsInZhbCIsInIiLCJnIiwiYiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJkZWx0YSIsInJvdW5kIiwidG9GaXhlZCIsInNlbCIsImhleFJlZ2V4IiwicmdiUmVnZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJyZW1vdmUiLCJtYXRjaGVzIiwidG9nZ2xlIiwiZm9yRWFjaCIsImNwQnRuIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicGFyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0ZXh0Q29udGVudCIsInRoZW4iLCJhbGVydCIsImVycm9yIiwic3R5bGUiLCJkaXNwbGF5IiwidGVzdCIsInZhbHVlIiwicmdiQ29sb3JWYWx1ZSIsImJhY2tncm91bmRDb2xvciIsImhleENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==