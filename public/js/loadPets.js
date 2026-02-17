// public/js/loadPets.js
async function carregarPetsDoServidor() {
	try {
		const response = await fetch("/api/pets");
		const pets = await response.json();

		const container = document.getElementById("pets-container");
		if (!container) return;

		container.innerHTML = "";

		pets.forEach((pet) => {
			const card = criarCardPet(pet);
			container.appendChild(card);
		});
	} catch (error) {
		console.error("Erro ao carregar pets:", error);
	}
}

function criarCardPet(pet) {
	const figure = document.createElement("figure");
	figure.className = "card";

	// Garantir que a imagem existe
	const imagemSrc = pet.imagem || "/assets/img/default-pet.jpg";

	figure.innerHTML = `
        <img src="${imagemSrc}" alt="${pet.nome}" 
             onerror="this.src='/assets/img/default-pet.jpg'">
        <figcaption>
            <span class="content-tag">${pet.nome.toLowerCase()}</span>
            <h2 class="text-lg">${pet.idade}</h2>
            <h2 class="text-lg">${pet.localizacao}</h2>
            <a href="form2.html?pet=${pet.id}" class="quero-adotar">Quero Adotar!</a>
        </figcaption>
    `;

	return figure;
}

// Carregar pets quando a página carregar
document.addEventListener("DOMContentLoaded", carregarPetsDoServidor);
