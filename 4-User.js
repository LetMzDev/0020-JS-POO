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

	// Exibir_Info ()
	// {
	// 	return `${this.nome}, ${this.email}`;
	// }

	Exibir_Info ()
	{
		if ( this.role === "estudante" )
			return `dados estudante: ${this.nome}`

		if ( this.role === "admin" )
			return `dados admin: ${this.nome}, ${this.role}`

		if ( this.role === "docente" )
			return `dados docente: ${this.nome}, ${this.email}`
	}
}
