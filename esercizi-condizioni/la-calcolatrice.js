/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
var a = 12
var b = -12
var operazione = "somma"
if (operazione==="somma") {console.log(a+b);
}
if (operazione==="sottrazione") {console.log(a-b);
}
if (operazione==="moltiplicazione") {console.log(a*b);
}
if (operazione==="divisione") {if (b===0){console.log("impossibile");

}else {
  console.log(a/b);
}
 }
 if (operazione==="modulo") {console.log(Math.floor(a%b));
 }
 if (operazione==="media") {console.log((a+b)/2);

 }
