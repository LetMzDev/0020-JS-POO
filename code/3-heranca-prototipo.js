const userDefault = {
	exibirInfos: function () {
		console.log(this.nome, this.email);
	},
	cadastraEmail: function (email) {
		console.log(`email ${email} cadastrado com sucesso`);
	}
};

const atendente = {
	nome: "Rodrigo",
	email: "r@r.com",
	role: "atendente",
}

const gerente = {
	nome: "Juliana",
	email: "j@j.com",
	role: "gerente sênior",
	removeUsuario: function (idUsuario) {
		console.log(`usuário ${idUsuario} removido`);
	}
}

Object.setPrototypeOf(atendente, userDefault)
Object.setPrototypeOf(gerente, userDefault)

gerente.removeUsuario(123)