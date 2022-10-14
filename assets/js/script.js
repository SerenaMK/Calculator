// Aggiungi il value del pulsante al value mostrato dal display
function numero(number) {
   document.getElementById("display").value += number;
}

// Resetta il display quando si clicca su C
function reset() {
   document.getElementById("display").value = "";
}

// Calcola ciò che c'è sul display e mostra il risultato
var btn = document.getElementById("calcola");

btn.addEventListener("click", function() {
   document.getElementById("display").value = eval(document.getElementById("display").value);
})