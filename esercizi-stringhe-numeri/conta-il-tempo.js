/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var totsec= (12560);
var ore= Math.floor(totsec/3600);//1 ora 3600 sec//
var secrimanenti= (totsec%3600);
var minuti= Math.floor(secrimanenti/60);
var secondi= (secrimanenti%60);
console.log(ore+"ore,"+ minuti+ "minuti e "+ secondi+ "secondi.");
