const { writeFile } = require('fs');

console.clear();
console.log('===============');
console.log('  Tabla del 5');
console.log('===============');

const num = 3;
let salida = '';

for(let i = 1; i <= 10; i++){
  salida += `${num} x ${i} = ${num * i}\n`;
}

console.log(salida);

writeFile(`tabla-${num}.txt`, salida, (err) => {
  if (err) throw err;

  console.log(`tabla-${num}.txt creado`);
});