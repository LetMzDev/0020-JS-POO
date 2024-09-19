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
console.log ( `\n` );

// Cadeia de Protótipo

console.log ( admin.__proto__ );
console.log ( `\n` );

console.log ( `${admin.__proto__.__proto__}` );
console.log ( `\n` );

console.log ( `${admin.__proto__.__proto__.__proto__}` );
console.log ( `\n` );

console.log ( String.prototype );
console.log ( `\n` );

/*
	__proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto. __proto__ será descontinuado

	prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.
*/
