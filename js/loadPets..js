// public/js/loadPets.js
async function carregarPetsDoServidor() {
	try {
		console.log("🔍 Carregando pets...");

		const response = await fetch("/api/pets");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const pets = await response.json();
		console.log("✅ Pets carregados:", pets);

		const container = document.getElementById("pets-container");
		if (!container) {
			console.error("❌ Container #pets-container não encontrado!");
			return;
		}

		// Limpar container
		container.innerHTML = "";

		if (pets.length === 0) {
			container.innerHTML =
				'<p class="sem-pets">🐾 Nenhum pet disponível no momento. Volte em breve!</p>';
			return;
		}

		// Adicionar cada pet
		pets.forEach((pet) => {
			const card = criarCardPet(pet);
			container.appendChild(card);
		});

		console.log(`🎉 ${pets.length} pets exibidos com sucesso!`);
	} catch (error) {
		console.error("❌ Erro:", error);
		const container = document.getElementById("pets-container");
		if (container) {
			container.innerHTML =
				'<p class="erro">😕 Erro ao carregar os pets. Tente novamente mais tarde.</p>';
		}
	}
}

function criarCardPet(pet) {
	const figure = document.createElement("figure");
	figure.className = "card";

	// Garantir imagem
	const imagemSrc = pet.imagem || "/assets/img/default-pet.jpg";

	figure.innerHTML = `
        <img src="${imagemSrc}" 
             alt="${pet.nome}"
             loading="lazy"
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

// Carregar quando a página estiver pronta
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", carregarPetsDoServidor);
} else {
	carregarPetsDoServidor();
}
