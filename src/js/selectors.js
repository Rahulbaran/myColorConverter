export const selectors = {
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
