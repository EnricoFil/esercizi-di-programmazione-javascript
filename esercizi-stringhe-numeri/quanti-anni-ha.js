/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var AnnoCorr=(2025);
var Annodinascita=(1935);
var Eta= (AnnoCorr-Annodinascita);
var Annimancanti=(100-Eta);
console.log("Lui ha: " + Eta + " anni, gli mancano " + Annimancanti + " anni per arrivare a 100.");
