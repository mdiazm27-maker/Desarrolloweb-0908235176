let n: number = parseInt(prompt("Ingrese un número")!);
let fact: number = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);