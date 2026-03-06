let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";


let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

let ageCorrige = parseInt(age);
let ageRapport = (Number.isNaN(ageCorrige) || ageCorrige <= 0) ? "valeur invalide" : `${ageCorrige} (valide)`;

let indexArobase = email.indexOf("@");
let emailValide = indexArobase !== -1 && email.indexOf(".", indexArobase) !== -1;
let emailRapport = emailValide ? "valide" : "invalide : pas de point après @";

let scoreCorrige = parseInt(scoreJeu);
if (Number.isNaN(scoreCorrige)) scoreCorrige = 0;

let estAdminBool = (estAdmin === "true");

let derniereConnexionRapport = derniereConnexion ?? "Jamais connecté";

let nbConnexionsNum = Number(nombreConnexions);
let nbConnexionsRapport = (nbConnexionsNum === 0) ? "Aucune connexion" : nbConnexionsNum;


console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom : ${nomCorrige} (corrigé : espaces supprimés)`);
console.log(`age : ${ageRapport}`);
console.log(`email : ${email} (${emailRapport})`);
console.log(`scoreJeu : ${scoreCorrige} (extrait depuis ${scoreJeu})`);
console.log(`estAdmin : ${estAdminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion : ${derniereConnexionRapport} (valeur par défaut via ??)`);
console.log(`nombreConnexions : ${nbConnexionsRapport} (${nbConnexionsNum} après conversion)`);
console.log("================================");
