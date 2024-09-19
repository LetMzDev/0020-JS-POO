function exibe_Mensagem ( nome, email )
{
	console.log ( `usuário: ${nome}, email ${email}` );
}

const user =
{
	nome: 'Mariana',
	email: 'm@m.com',
	executa_Funcao: function ( fn )
	{
		fn.apply ( user, [ this.nome, this.email ]);
	}
}
user.executa_Funcao ( exibe_Mensagem ); //usuário: Mariana, email m@m.com

/*
	O método apply() é similar ao call(), mas com uma diferença principal: ele passa os argumentos para a função como um array.

	O apply() executa uma função com um contexto de this definido (neste caso, user) e aceita os argumentos da função como um array, enquanto o call() passa os argumentos de forma individual.
*/
