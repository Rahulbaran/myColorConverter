System.register([],(function(e,t){"use strict";return{execute:function(){const e={$hexToRgbBtn:document.querySelector(".hextorgb__btn"),$rgbToHexBtn:document.querySelector(".rgbtohex__btn"),$hexToRgbCard:document.querySelector(".hextorgb__card"),$rgbToHexCard:document.querySelector(".rgbtohex__card"),$hexInputField:document.querySelector(".hex__input--field"),$rgbInputField:document.querySelector(".rgb__input--field"),$firstColorWindow:document.querySelector(".card:first-of-type .card__color--window"),$lastColorWindow:document.querySelector(".card:last-of-type .card__color--window"),$copyBtns:document.querySelectorAll(".btn .bxs-copy"),$hexColorLabel:document.querySelector(".hex__value span"),$rgbColorLabel:document.querySelector(".rgb__value span"),$firstHslColorLabel:document.querySelector(".hextorgb__card .hsl__value span"),$lastHslColorLabel:document.querySelector(".rgbtohex__card .hsl__value span")},t=e=>4===e.length?e.slice(1).split("").map((e=>parseInt(e,16))):7===e.length?e.slice(1).match(/[\da-f]{2}/gi).map((e=>parseInt(e,16))):void 0,o=(...e)=>{let t,o;const r=e.map((e=>e/255)),[n,l,s]=r,[i,a]=[Math.min(...r),Math.max(...r)],c=(i+a)/2,d=a-i;if(0===d)t=o=0;else{switch(o=c>.5?d/(2-2*c):d/(2*c),a){case n:t=(l-s)/d+(l<s?6:0);break;case l:t=(s-n)/d+2;break;case s:t=(n-l)/d+4}t=Math.round(60*t)}return[t,+(100*o).toFixed(0),+(100*c).toFixed(0)]},[r,n]=[/^#([\da-f]{3}|[\da-f]{6})$/i,/^(rgb)\(\s{0,}(\d{1,3}\s{0,},\s{0,}){2}\d{1,3}\s{0,}\)$/i];e.$hexToRgbBtn.addEventListener("click",(function(){this.classList.contains("btn__active")||this.classList.add("btn__active"),e.$rgbToHexBtn.classList.remove("btn__active"),e.$hexToRgbCard.matches(".card-visible")||e.$hexToRgbCard.classList.add("card-visible"),e.$rgbToHexCard.classList.remove("card-visible")})),e.$rgbToHexBtn.addEventListener("click",(function(){this.classList.toggle("btn__active"),e.$hexToRgbBtn.classList.toggle("btn__active"),e.$rgbToHexCard.classList.add("card-visible"),e.$hexToRgbCard.classList.remove("card-visible")}));try{e.$copyBtns.forEach((e=>{e.addEventListener("click",(function(){navigator.clipboard.writeText(this.parentElement.previousElementSibling.textContent).then((()=>alert("color value has been copied")))}))}))}catch(l){e.$copyBtns.forEach((e=>e.style.display="none"))}e.$hexInputField?.addEventListener("input",(function(){if(r.test(this.value.trim())){const[r,n,l]=t(this.value.trim()),[s,i,a]=o(r,n,l),c=`rgb(${r}, ${n}, ${l})`;e.$rgbColorLabel.textContent=c,e.$firstHslColorLabel.textContent=`hsl(${s}, ${i}%, ${a}%)`,e.$firstColorWindow.style.backgroundColor=c}})),e.$rgbInputField?.addEventListener("input",(function(){if(n.test(this.value.trim())){const r=(e=>{const t=e.slice(4).slice(0,-1).trim().split(/,\s{0,}/).filter((e=>e<=255));return 3===t.length?`#${t.map((e=>(+e).toString(16).length<2?`0${(+e).toString(16)}`:(+e).toString(16))).join("")}`:null})(this.value.trim());if(r){const[n,l,s]=o(...t(r));e.$hexColorLabel.textContent=r,e.$lastHslColorLabel.textContent=`hsl(${n}, ${l}%, ${s}%)`,e.$lastColorWindow.style.backgroundColor=r}}}))}}}));
//# sourceMappingURL=index-legacy.e1b6672d.js.map