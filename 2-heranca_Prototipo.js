const user =
{
	nome: 'Sophie',
	email: 'sophie@.com',
	nascimento: '2024-01-01',
	role: 'estudante',
	ativo: true,

	Exibir_Infos: function ()
	{
		console.log ( this.nome, this.email );
	}
}

const admin =
{
	nome: 'Selina',
	email: 'selina@.com',
	nascimento: '2024-01-01',
	role: 'admin',
	ativo: true,

	Criar_Curso: function ()
	{
		console.log ( "Curso criado." );
	}
}

Object.setPrototypeOf ( admin, user ); // Herança de protótipo, admin herda a função Exibir_Info de user
admin.Criar_Curso();
console.log ( `\n` );
admin.Exibir_Infos();
