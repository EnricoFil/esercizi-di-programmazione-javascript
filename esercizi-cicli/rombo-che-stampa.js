/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
var n = 5;


for (var i = 1; i <= Math.ceil(n / 2); i++) {
  var numX = 2 * i - 1;
  var numSpazi = (n - numX) / 2;

  var linea = "";


  for (var s = 0; s < numSpazi; s++) {
    linea += " ";
  }

  for (var x = 0; x < numX; x++) {
    linea += "X";
  }

  console.log(linea);
}

for (var i = Math.floor(n / 2); i >= 1; i--) {
  var numX = 2 * i - 1;
  var numSpazi = (n - numX) / 2;

  var linea = "";
  for (var s = 0; s < numSpazi; s++) {
   linea += " ";
 }

 for (var x = 0; x < numX; x++) {
   linea += "X";
 }

 console.log(linea);
}


\\questo veramente terribile btw\\
