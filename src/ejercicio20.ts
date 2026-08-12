let n: number = parseInt(prompt("Ingrese un número")!);
let suma: number = 0;
while (n > 0) { suma += n % 10; n = Math.floor(n / 10); }
console.log(suma);