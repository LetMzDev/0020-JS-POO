export default class User
{
	#nome
	#email
	#nascimento
	#role
	#ativo

	constructor ( nome, email, nascimento, role, ativo = true )
	{
		this.#nome = nome;
		this.#email = email;
		this.#nascimento = nascimento;
		this.#role = role || "estudante";
		this.#ativo = ativo;
	}

	Exibir_Info ()
	{
		const obj_User = this.#Monta_Objeto_User();
		return `${obj_User.nome}, ${obj_User.email}`;
	}

	#Monta_Objeto_User ()
	{
		return (
			{
				nome: this.#nome,
				email: this.#email,
				nascimento: this.#nascimento,
				role: this.#role,
				ativo: this.#ativo,
			}
		)
	}
}

// const novo_User = new User ( "Sophie", "Sophie@.com", "15-11-3500" );

// console.log ( novo_User );
// console.log ( `\n` );
// console.log ( novo_User.Exibir_Info() );
// console.log ( `\n` );

// console.log( User.prototype.isPrototypeOf ( novo_User )); // User é protótipo de novo_User? true
// console.log ( `\n` );

// const novo_User_2 = new User ();
// console.log ( novo_User_2 );
// console.log ( `\n` );
// console.log ( novo_User_2.Exibir_Info() );
