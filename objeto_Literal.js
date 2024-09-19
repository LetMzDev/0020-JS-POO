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
