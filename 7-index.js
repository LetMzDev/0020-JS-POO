import User from './4-User.js';
import Admin from './5-Admin.js';
import Docente from './6-Docente.js';

const novo_User = new User ( "Eli", "eli@.com", "10-10/1010" );

console.log ( novo_User.Exibir_Info() );
console.log ( `\n` );

const novo_Admin = new Admin ( "Sophie", "sophie@.com", "20-10/1010" );
console.log ( novo_Admin.Exibir_Info() );
