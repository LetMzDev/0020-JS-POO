// 'strict mode'

import User from "./4-User.js";

class Docente extends User
{
	constructor ( nome, email, nascimento, role = "docente", ativo = true )
	{
		super ( nome, email, nascimento, role, ativo );
	}

	Aprovar_Estudante ( estudante, curso )
	{
		return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`
	}
}

const nova_Docente = new Docente ( "Ana", "ana@.com", "17-15-3600" );
console.log ( nova_Docente.Aprovar_Estudante ( 'Juliana', 'JavaScript' ));
console.log ( `\n` );

console.log ( nova_Docente.Exibir_Info() );
console.log ( `\n` );