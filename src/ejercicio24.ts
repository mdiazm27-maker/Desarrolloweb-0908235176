let n: number = parseInt(prompt("Ingrese un número")!);
let suma: number = 0;
for (let i = 2; i <= n; i += 2) suma += i;
console.log(suma);