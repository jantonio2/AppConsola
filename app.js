const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const num = 3;

crearArchivo( num )
  .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch( console.log );
