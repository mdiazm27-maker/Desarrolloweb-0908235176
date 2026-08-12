let n: number = parseInt(prompt("Ingrese un número")!);
let primo: boolean = true;
for (let i = 2; i < n; i++) if (n % i === 0) primo = false;
console.log(primo ? "Primo" : "No primo");