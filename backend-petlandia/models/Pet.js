const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	nome: String,
	idade: String,
	localizacao: String,
	status: String,
	imagem: String,
});

module.exports = mongoose.model("Pet", PetSchema);
