// *********************ESERCIZIO PALINDROME************************

// Inizio la costruzione della funzione
function verificaSePalindroma(parolaDaVerificare) {

  // Converto la parola inserita in minuscolo
  var parolaDaVerificare = parolaDaVerificare.toLowerCase();

  // Scompongo in lettere la parola inserita
  var singoleLettere = parolaDaVerificare.split('');

// Creo un array dove contenere le lettere invertite della parola
  var arrayDiLettereInvertite = [];

// Creo un ciclo for al contrario per inserire le lettere invertire nell'array
  for (var i = singoleLettere.length -1; i >= 0; i--) {
    arrayDiLettereInvertite += singoleLettere[i];
  };

// Creo un ciclo if per verificare se la parola è palindroma
  if (parolaDaVerificare === arrayDiLettereInvertite) {
    return console.log('La parola inserita è palindroma');
  } else {
    return console.log('La parola inserita non è palindroma');
  };

};

// Invoco la funzione
var parolaInserita = prompt('Inserisci una parola');
var parolaVerificata = verificaSePalindroma(parolaInserita);
