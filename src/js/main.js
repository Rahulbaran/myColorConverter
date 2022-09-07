import "../scss/main.scss";
import { selectors as sel } from "./selectors";
import { rgbToHex, hexToRgb, rgbToHsl } from "./functions";

const [hexRegex, rgbRegex] = [
  /^#([\da-f]{3}|[\da-f]{6})$/i,
  /^(rgb)\((\d{1,3}\s{0,},\s{0,}){2}\d{1,3}\s{0,}\)$/i
];

/*----------- Event handler for card switch buttons -----------*/
sel.$hexToRgbBtn.addEventListener("click", function () {
  // Toggle class in buttons
  if (!this.classList.contains("btn__active"))
    this.classList.add("btn__active");
  sel.$rgbToHexBtn.classList.remove("btn__active");

  // Toggle class in cards
  if (!sel.$hexToRgbCard.matches(".card-visible"))
    sel.$hexToRgbCard.classList.add("card-visible");
  sel.$rgbToHexCard.classList.remove("card-visible");
});

sel.$rgbToHexBtn.addEventListener("click", function () {
  // Toggle class in buttons
  this.classList.toggle("btn__active");
  sel.$hexToRgbBtn.classList.toggle("btn__active");

  // Toggle class in cards
  sel.$rgbToHexCard.classList.add("card-visible");
  sel.$hexToRgbCard.classList.remove("card-visible");
});

/*--------------- Event handler for copy buttons --------------*/
try {
  sel.$copyBtns.forEach(cpBtn => {
    cpBtn.addEventListener("click", function () {
      navigator.clipboard
        .writeText(this.parentElement.previousElementSibling.textContent)
        .then(() => alert("color value has been copied"));
    });
  });
} catch (error) {
  sel.$copyBtns.forEach(cpBtn => (cpBtn.style.display = "none"));
}

/*-------------- Event Handler for hex input field --------------*/
sel.$hexInputField?.addEventListener("input", function () {
  if (hexRegex.test(this.value.trim())) {
    // Calculate rgb & hsl values
    const rgbData = hexToRgb(this.value.trim());
    const hslData = rgbToHsl(rgbData);

    // Display rgb & hex values in UI
    const rgbColorValue = `rgb(${rgbData[0]}, ${rgbData[1]}, ${rgbData[2]})`;
    sel.$rgbColorLabel.textContent = rgbColorValue;

    // Display calculated color in color window
    sel.$firstColorWindow.style.backgroundColor = rgbColorValue;
  }
});

/*--------------- Event Handler for rgb input field ---------------*/
sel.$rgbInputField?.addEventListener("input", function () {
  if (rgbRegex.test(this.value.trim())) {
    // Calculate hex & hsl values
    const hexColor = rgbToHex(this.value.trim());
    if (hexColor) {
      const hslData = rgbToHsl(hexToRgb(hexColor));

      // Display hex & hsl values in UI
      sel.$hexColorLabel.textContent = hexColor;

      // Display calcualted color value in color window
      sel.$lastColorWindow.style.backgroundColor = hexColor;
    }
  }
});
