var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);const o={};function r(e){e.preventDefault();let t=document.getElementById("location").value,n=document.getElementById("trip-date").value,r=new Date(n).getTime()/1e3,i=Date.now()/1e3,l=Math.round((r-i)/86400);console.log("Location submitted!"),fetch(`http://api.geonames.org/searchJSON?q=${t}&maxRows=10&username=thecatspajammies`).then(e=>e.json()).then((function(e){let n=e.geonames[0].toponymName,r=e.geonames[0].lat,i=e.geonames[0].lng;console.log(i,r,n),fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${r}&lon=${i}&key=40f1362e73ec49da95974fd37b7ffdcd`).then(e=>e.json()).then((function(e){let r=e.data[l].weather.description,i=e.data[l].temp,a=e.data[l].datetime;console.log(e.data[l].weather.description),console.log(JSON.stringify(e.data[l].weather.description)),console.log(e.data[l]),fetch(`https://pixabay.com/api/?&q=${t}&key=20113405-27d003039b5b454452468ea3e&image_type=photo`).then(e=>e.json()).then((function(e){let t=e.hits[0].webformatURL;console.log(n),console.log(i),console.log(r),console.log(t),o.city=n,o.temperature=i,o.weather=r,o.pic=t,o.departDate=l,console.log(o),document.getElementById("save-delete").innerHTML='<div  class="submit-holder">\n                                                                    <button id="save" onclick="Client.saveTrip()">Save Trip</button>\n                                                                    <button id="delete" onclick="Client.deleteTrip()">Delete Trip</button>\n                                                                </div>',document.getElementById("results").innerHTML=`<div class="picture-container">\n                                                                    \n                                                                <div class="polaroid image1">\n                                                                    <img src=${t} alt="${n}">\n                                                                    \n\n                                                                    <div class="caption-holder">\n                                                                        <p>Your trip to ${n} is ${l} days from now.</p>\n                                                                        \n                                                                        <p>${n}'s weather forecast for ${a} is \n                                                                        ${i} degrees Celsius with ${r}.</p>\n                                                                    </div>\n\n\n                                                                </div>\n                                                                </div>\n                                                                \n                                                            </div>`}))}))}))}function i(){document.getElementById("results").innerHTML="",document.getElementById("save-delete").innerHTML="",alert("Trip Deleted!")}const l=document.getElementById("saved-trips");function a(){const e=document.createElement("li");e.setAttribute("id","upcoming-trip"),e.innerHTML=document.getElementById("results").innerHTML,document.getElementById("save-delete").innerHTML="",l.appendChild(e),document.getElementById("results").innerHTML="",alert("Trip saved!")}function c(){document.getElementById("saved-trips").innerHTML=""}n(0),n(1),n(2),n(3),n(4);n.d(t,"handleSubmit",(function(){return r})),n.d(t,"deleteTrip",(function(){return i})),n.d(t,"saveTrip",(function(){return a})),n.d(t,"clearTrips",(function(){return c})),console.log("CHANGE!!")}]);