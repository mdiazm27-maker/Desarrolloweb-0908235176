let suma: number = 0;
for (let i = 0; i < 5; i++) suma += parseInt(prompt("Ingrese nota")!);
let prom: number = suma / 5;
console.log(prom >= 60 ? "Aprobado" : "Reprobado");