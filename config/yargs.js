const { argv } = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Base de la tabla de multiplicar'
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola'
    }
  })
  .check((argv) => {
    if(isNaN(argv.b)){
      throw "La base tiene que ser un numero";
    }
    return true;
  });

module.exports = argv;