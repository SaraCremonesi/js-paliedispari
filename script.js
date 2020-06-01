// *********************ESERCIZIO PALINDROME************************
// // Inizio la costruzione della funzione
// function verificaSePalindroma(parolaDaVerificare) {
//
//   // Converto la parola inserita in minuscolo
//   var parolaDaVerificare = parolaDaVerificare.toLowerCase();
//
//   // Scompongo in lettere la parola inserita
//   var singoleLettere = parolaDaVerificare.split('');
//
// // Creo un array dove contenere le lettere invertite della parola
//   var arrayDiLettereInvertite = [];
//
// // Creo un ciclo for al contrario per inserire le lettere invertire nell'array
//   for (var i = singoleLettere.length -1; i >= 0; i--) {
//     arrayDiLettereInvertite += singoleLettere[i];
//   };
//
// // Creo un ciclo if per verificare se la parola è palindroma
//   if (parolaDaVerificare === arrayDiLettereInvertite) {
//     return console.log('La parola inserita è palindroma');
//   } else {
//     return console.log('La parola inserita non è palindroma');
//   };
//
// };
//
// // Invoco la funzione
// var parolaInserita = prompt('Inserisci una parola');
// var parolaVerificata = verificaSePalindroma(parolaInserita);

// *********************ESERCIZIO PARI E DISPARI************************
// // Chiedo all'utente di scegliere fra pari o dispari
// var scegliPariOppureDispari = prompt('Scegli pari o dispari');
// console.log('L\'utente ha scelto: ' , scegliPariOppureDispari);
//
// // Chiedo all'utente di scegliere un numero da 1 a 5
// var numeroScelto = parseInt(prompt('Scegli un numero da 1 a 5'));
//
// // Creo una funzione per controllare se un numero è pari o dispari
// function pariOdispari(numeroDaVerificare) {
//   var numeroDaVerificare;
//   if (numeroDaVerificare % 2 === 0) {
//     return 'pari';
//   } else {
//     return 'dispari';
//   };
// };
//
// // Creo una funzione per generare un rumero random per il computer
// function generaNumeroRandom() {
//   var numeroRandom = Math.ceil(Math.random() * 5);
//   if (numeroRandom % 2 === 0) {
//     var messaggio = ('Il numero generato è pari ed è: ' + numeroRandom);
//     console.log(messaggio);
//     return numeroRandom;
//   } else {
//     messaggio = ('Il numero generato è dispari ed è: ' + numeroRandom);
//     console.log(messaggio);
//     return numeroRandom;
//   };
// };
//
// // Invoco la funzione per generare un numero random
// var numeroComputer = generaNumeroRandom();
//
// // Invoco la funzione per verificare se un numero è pari o dispari
// var numeroVerificato = pariOdispari(numeroScelto);
// console.log('Il numero inserito dall\'utente è: ' , numeroScelto , 'ed è: ' , numeroVerificato);
//
// // Sommo i due numeri
// var sommaNumeri = numeroScelto + numeroComputer;
//
// // Verifico se la loro somma è pari o dispari
// var sommaVerificata = pariOdispari(sommaNumeri);
//
// console.log('La somma dei due numeri è: ' , sommaNumeri , 'ed è: ' , sommaVerificata);
//
// // Stabilisco chi ha vinto
// if (sommaVerificata === scegliPariOppureDispari) {
//   console.log('Hai vinto!');
// } else {
//   console.log('Hai perso');
// };
