let palabra: string = prompt("Ingrese una palabra")!;
let cont: number = 0;
for (let letra of palabra.toLowerCase()) if ("aeiou".includes(letra)) cont++;
console.log(cont);