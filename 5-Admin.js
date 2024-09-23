import User from "./4-User.js";

class Admin extends User
{
	constructor ( nome, email, nascimento, role = "admin", ativo = true )
	{
		super ( nome, email, nascimento, role, ativo ); // Passar quais parâmetros que usará de User, O que será feito com estes parâmetros estão definidos na Super Class User ( caso algum parâmetro de User não seja necessário em Admin, não passar o parâmetro em super )
	}

	Criar_Curso ( nome_curso, qtd_vagas )
	{
		return `curso ${nome_curso} criado com ${qtd_vagas} vagas.`;
	}
}

const novo_Admin = new Admin ( "Selina", "selina@.com", "15-12-3500" );

console.log ( novo_Admin );
console.log ( `\n` );
console.log ( novo_Admin.Exibir_Info() );
console.log ( `\n` );

console.log ( novo_Admin.Criar_Curso ( "Programação", "1" ));
console.log ( `\n` );
