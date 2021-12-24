const { writeFileSync, rmSync } = require('fs');

const crearArchivo = async( num = 5 ) => {

  try {
    console.log('===============');
    console.log('  Tabla del: ', num);
    console.log('===============');
  
    let salida = '';
  
    for(let i = 1; i <= 10; i++){
      salida += `${num} x ${i} = ${num * i}\n`;
    }
  
    console.log(salida);
    // writeFile(`tabla-${num}.txt`, salida, (err) => {
    //   if (err) throw err;
  
    //   console.log(`tabla-${num}.txt creado`);
    // });
    writeFileSync(`tabla-${num}.txt`, salida);
    rmSync(`tabla-${num}.txt`);
    return `tabla-${num}.txt`;
  } catch (error) {
    throw error;
  }

};

module.exports = {
  crearArchivo
};