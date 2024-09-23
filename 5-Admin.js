import User from "./4-User.js";

export default class Admin extends User
{
	constructor ( nome, email, nascimento, role = "admin", ativo = true )
	{
		super ( nome, email, nascimento, role, ativo );
	}

	Criar_Curso ( nome_curso, qtd_vagas )
	{
		return `curso ${nome_curso} criado com ${qtd_vagas} vagas.`;
	}

	Exibir_Nome ()
	{
		return `${this.#nome}`
	}
}

// const novo_Admin = new Admin ( "Selina", "selina@.com", "15-12-3500" );

// console.log ( novo_Admin );
// console.log ( `\n` );
// console.log ( novo_Admin.Exibir_Info() );
// console.log ( `\n` );

// console.log ( novo_Admin.Exibir_Nome() );
// console.log ( `\n` );

// console.log ( novo_Admin.Criar_Curso ( "Programação", "1" ));
// console.log ( `\n` );
