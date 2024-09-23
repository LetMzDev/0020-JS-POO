import User from "./4-User.js";

class Admin extends User
{
	constructor ( nome, email, nascimento, role = "admin", ativo = true )
	{
		super ( nome, email, nascimento, role, ativo ); // Passar quais parâmetros que usará de User, O que será feito com estes parâmetros estão definidos na Super Class User ( caso algum parâmetro de User não seja necessário em Admin, não passar o parâmetro em super )
	}
}

const novo_Admin = new Admin ( "Selina", "selina@.com", "15-12-3500" );

console.log ( novo_Admin );
console.log ( `\n` );
console.log ( novo_Admin.Exibir_Info() );
console.log ( `\n` );
