import User from './4-User.js';
import Admin from './5-Admin.js';
import Docente from './6-Docente.js';

const novo_User = new User ( "Eli", "eli@.com", "10-10/1010" );
console.log ( novo_User.Exibir_Info() );
console.log ( `\n` );

const novo_Admin = new Admin ( "Sophie", "sophie@.com", "20-10/1010" );
console.log ( novo_Admin.Exibir_Info() );
console.log ( `\n` );

const novo_Docente = new Docente ( "Selina", "selina@.com", "30-10/1010" );
console.log ( novo_Docente.Exibir_Info() );
console.log ( `\n` );

const dados_Ficticios = User.Exibir_Info ( 'Zaky', 'zaky@c.com' );
console.log ( dados_Ficticios );
console.log ( `\n` );
