import User from './4-User.js';
import Admin from './5-Admin.js';
import Docente from './6-Docente.js';

const novo_User = new User ( "Eli", "eli@.com", "10-10/1010" );

console.log ( novo_User );

// novo_User.nome = "Zaky";
// console.log ( novo_User );
// console.log ( novo_User.nome );
// console.log ( `\n` );

// console.log ( `Montar Objeto \n` );
// console.log ( novo_User.Exibir_Info() );
// console.log ( `\n` );

console.log ( `ADMIN ------ \n` );

const novo_Admin = new Admin ( "Selina", "selina@.com", "15-12-3500" );

console.log ( novo_Admin );
console.log ( `\n` );
console.log ( novo_Admin.nome );
console.log ( `\n` );

// console.log ( novo_Admin.Exibir_Nome() );
console.log ( `\n` );