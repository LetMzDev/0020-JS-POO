const user =
{
	nome: 'Sophie',
	email: 's@p.com',
	nascimento: '2024-01-01',
	role: 'estudante',
	ativo: true,
	exibir_Infos: function () {
		console.log ( this.nome, this.email );
	}
}

// user.exibir_Infos();

const exibir = function()
{
	console.log ( this.nome, this.email );
}

const exibir_Nome = exibir.bind ( user ); // Prende à variável o objeto
exibir_Nome();