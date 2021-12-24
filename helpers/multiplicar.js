const { writeFileSync, rmSync } = require('fs');

const crearArchivo = async( base = 5 ) => {

  try {
    console.log('===============');
    console.log('  Tabla del: ', base);
    console.log('===============');
  
    let salida = '';
  
    for(let i = 1; i <= 10; i++){
      salida += `${base} x ${i} = ${base * i}\n`;
    }
  
    console.log(salida);
    // writeFile(`tabla-${num}.txt`, salida, (err) => {
    //   if (err) throw err;
  
    //   console.log(`tabla-${num}.txt creado`);
    // });
    writeFileSync(`tabla-${base}.txt`, salida);
    rmSync(`tabla-${base}.txt`);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }

};

module.exports = {
  crearArchivo
};