let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = [ ["nom", nom], ["age", age], ["ville", ville], ["score", score], ["actif", actif] ];

let def = "valeur par défaut";

console.log("Partie A — opérateur ??");
for (let [name, value] of variables) {
  console.log(name + " ?? \"" + def + "\" -> " + (value ?? def));
}

console.log("\nPartie B — opérateur ||");
for (let [name, value] of variables) {
  console.log(name + " || \"" + def + "\" -> " + (value || def));
}

console.log("\nPartie C — comparaison");
for (let [name, value] of variables) {
  let result = (value ?? def) === (value || def) ? "même résultat" : "résultat différent";
  console.log(name + " : ?? et || -> " + result);
}