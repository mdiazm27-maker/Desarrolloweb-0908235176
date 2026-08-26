let a: number = 0, b: number = 1;
for (let i = 0; i < 20; i++) {
  console.log(a);
  let temp: number = a + b; a = b; b = temp;
}