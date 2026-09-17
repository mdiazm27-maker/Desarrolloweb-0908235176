let mayor: number = Number.MIN_VALUE;
for (let i = 0; i < 10; i++) {
  let x: number = parseInt(prompt("Ingrese un número")!);
  if (x > mayor) mayor = x;
}
console.log(mayor);