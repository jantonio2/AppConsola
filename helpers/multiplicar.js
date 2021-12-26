const colors = require('colors');
const { writeFileSync, rmSync } = require('fs');

const crearArchivo = async( base = 5, listar, hasta ) => {

  try {
    
    let salida = '', consola = '';
    
    for(let i = 1; i <= hasta; i++){
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} x ${i} = ${colors.blue(base * i)}\n`;
    }
    
    if(listar){
      console.log(colors.blue('==============='));
      console.log(colors.blue('  Tabla del: '), colors.red(base));
      console.log(colors.blue('==============='));
      console.log(consola);
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