let pairs = [[0, ""],[0, "0"],[0, false],["", false],[null, undefined],[null, false],[NaN, NaN],[1, "1"],[" \t\n ", 0]];

let count = 0;

pairs.forEach(([a, b]) => {
  
  
  const eq = a == b;        
  const strictEq = a === b;  
  
  
  const sA = Number.isNaN(a) ? "NaN" : JSON.stringify(a) ;
  const sB = Number.isNaN(b) ? "NaN" : JSON.stringify(b) ;

 
  const expr = `${sA} == ${sB}`.padEnd(20);
  
  const result = `-> ${eq} | ${sA} === ${sB}`.padEnd(35);
  
  console.log(`${expr}${result}-> ${strictEq}`);

  if (eq !== strictEq) {
    count++;
  }
});

console.log("---");

console.log(`${count} paire(s) où == et === donnent des résultats différents`);
