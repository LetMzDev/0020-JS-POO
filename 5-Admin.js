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

	Exibir_Info ()
	{
		const infos = super.Exibir_Info();
		return `admin - ${infos}`
	}
}
