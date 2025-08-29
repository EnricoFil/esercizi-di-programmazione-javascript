/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/
var a = 5;
var b = -7;
var c = 31;
var d = 43;

var maggiore = a;
var minore = a;

if (b>maggiore) { maggiore = b;

}if (c>maggiore) {maggiore = c;

}if (d>maggiore) {maggiore = d;

}
if (b<minore) {minore = b;

}if (c<minore) {minore = c;

}if (d<minore) {minore = d;

}

console.log("maggiore = " + maggiore);
console.log("minore = " + minore);
