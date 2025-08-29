/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var numeroiniziale = 245;
console.log("numero iniziale = "+ numeroiniziale);
var testo = String(numeroiniziale);
console.log(testo.length);
var numeroCifre = testo.length;
if (numeroCifre === 1) {console.log("cifra");

}else {
  console.log("cifre");
}
