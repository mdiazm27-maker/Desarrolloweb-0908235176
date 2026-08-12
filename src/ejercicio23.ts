let n: number = parseInt(prompt("Ingrese un número")!);
let cont: number = 0;
while (n > 0) {
  if ((n % 10) % 2 === 0) cont++;
  n = Math.floor(n / 10);
}
console.log(cont);