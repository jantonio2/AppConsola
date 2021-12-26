const colors = require('colors');
const { writeFileSync, rmSync } = require('fs');

const crearArchivo = async( base = 5, listar ) => {

  try {
    
    let salida = '';
    
    for(let i = 1; i <= 10; i++){
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    
    if(listar){
      console.log(colors.blue('==============='));
      console.log(colors.blue('  Tabla del: '), colors.red(base));
      console.log(colors.blue('==============='));
      console.log(salida);
    }
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