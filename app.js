const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      default: false
    }
  })
  .check((argv) => {
    if(isNaN(argv.b)){
      throw "La base tiene que ser un numero";
    }
    return true;
  });

console.clear();

// Sin yargs
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

console.log(argv);

crearArchivo( argv.b, argv.l )
  .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch( console.log );
