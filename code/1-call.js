function exibe_Infos ()
{
	console.log ( this.nome, this.email );
}

const user =
{
	nome: 'Mariana',
	email: 'm@m.com'
}

exibe_Infos.call ( user );

/*
	O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this, ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.

	O método call() "vincula" temporariamente a função a um objeto específico, permitindo que a função use o objeto como seu contexto (this), mesmo que ela tenha sido definida separadamente.
*/

function exibe_Mensagem ( nome, email )
{
	console.log(`usuário: ${nome}, email ${email}`)
}

const user_2 =
{
	nome: 'Mariana',
	email: 'm@m.com',
	executa_Funcao: function ( fn )
	{
		fn.call ( user, this.nome, this.email );
	}
}

user_2.executa_Funcao ( exibe_Mensagem ); //usuário: Mariana, email m@m.com