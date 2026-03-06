let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;

let montantReduction = (codePromo !== null && estMembre === true) 
    ? (sousTotal * reductionPourcentage / 100) 
    : 0;


let totalFinal = sousTotal - montantReduction;

let paiementAccepte = soldeCompte >= totalFinal;
let statutPaiement = paiementAccepte ? "Paiement accepté" : "Solde insuffisant";

let nouveauSolde = soldeCompte;
if (paiementAccepte) {
    nouveauSolde = soldeCompte - totalFinal;
}

console.log("===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix.toFixed(2) + " MAD");
console.log("Sous-total: " + sousTotal.toFixed(2) + " MAD");
console.log("Réduction : " + montantReduction.toFixed(3) + " MAS");
console.log("Total     : " + totalFinal.toFixed(3) + " MAS");
console.log("Statut    : " + statutPaiement);
console.log("Solde     : " + nouveauSolde.toFixed(3) + " MAD");
console.log("=========================");