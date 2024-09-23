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

	get nome ()
	{
		return this.#nome;
	}

	get email ()
	{
		return this.#email
	}

	get nascimento ()
	{
		return this.#nascimento
	}

	get role ()
	{
		return this.#role
	}

	get ativo ()
	{
		return this.#ativo
	}

	set nome ( novo_Nome )
	{
		if ( novo_Nome === "" )
			throw new Error ( "Formado do nome não é válido" );

		this.#nome = novo_Nome;
	}

	Exibir_Info ()
	{
		return `${this.nome}, ${this.email}`;
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
