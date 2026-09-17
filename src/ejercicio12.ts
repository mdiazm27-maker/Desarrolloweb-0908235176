let suma: number = 0;
for (let i = 0; i < 5; i++) {
  let x: number = parseInt(prompt("Ingrese un número")!);
  if (x % 2 === 0) suma += x;
}
console.log(suma);