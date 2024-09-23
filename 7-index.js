import User from './4-User.js';
import Admin from './5-Admin.js';
import Docente from './6-Docente.js';

const novo_User = new User ( "Eli", "eli@.com", "10-10/1010" );

console.log ( novo_User );

novo_User.#nome = "Zaky";
console.log ( novo_User );
console.log ( novo_User.#nome );
