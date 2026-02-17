const express = require('express');
const fs = require('fs');
const path = require('path');

module.exports = (upload) => {
    const router = express.Router();
    const petsFilePath = path.join(__dirname, '../data/pets.json');
    
    console.log('📁 Arquivo pets.json:', petsFilePath);

    // Garantir que a pasta data existe
    const dataDir = path.join(__dirname, '../data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Criar arquivo se não existir
    if (!fs.existsSync(petsFilePath)) {
        const initialPets = [
            {
                id: 1,
                nome: "Bob",
                idade: "3 Meses",
                localizacao: "Carneirinhos, JOÃO MONLEVADE, MG",
                imagem: "/assets/img/Image 06.jpg",
                tipo: "perdido",
                destaque: false,
                descricao: "Bob é um filhote muito brincalhão"
            },
            {
                id: 2,
                nome: "Mila",
                idade: "2 Meses",
                localizacao: "Sion, JOÃO MONLEVADE, MG",
                imagem: "/assets/img/Image 03.png",
                tipo: "encontrado",
                destaque: true,
                descricao: "Mila é muito dócil"
            }
        ];
        fs.writeFileSync(petsFilePath, JSON.stringify(initialPets, null, 2));
        console.log('✅ Arquivo pets.json criado');
    }

    // Função para ler pets
    const readPets = () => {
        try {
            const data = fs.readFileSync(petsFilePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Erro ao ler pets:', error);
            return [];
        }
    };

    // Função para escrever pets
    const writePets = (pets) => {
        try {
            fs.writeFileSync(petsFilePath, JSON.stringify(pets, null, 2));
            return true;
        } catch (error) {
            console.error('Erro ao escrever pets:', error);
            return false;
        }
    };

    // GET - Listar todos
    router.get('/', (req, res) => {
        try {
            const pets = readPets();
            res.json(pets);
        } catch (error) {
            res.status(500).json({ erro: 'Erro interno' });
        }
    });

    // GET - Buscar por ID
    router.get('/:id', (req, res) => {
        try {
            const pets = readPets();
            const pet = pets.find(p => p.id === parseInt(req.params.id));
            if (!pet) {
                return res.status(404).json({ erro: 'Pet não encontrado' });
            }
            res.json(pet);
        } catch (error) {
            res.status(500).json({ erro: 'Erro interno' });
        }
    });

    // POST - Criar
    router.post('/', upload.single('imagem'), (req, res) => {
        try {
            const pets = readPets();
            const novoPet = {
                id: pets.length > 0 ? Math.max(...pets.map(p => p.id)) + 1 : 1,
                nome: req.body.nome,
                idade: req.body.idade,
                localizacao: req.body.localizacao,
                tipo: req.body.tipo || 'perdido',
                destaque: req.body.destaque === 'true',
                descricao: req.body.descricao || '',
                imagem: req.file ? `/assets/uploads/${req.file.filename}` : '/assets/img/default-pet.jpg'
            };
            
            pets.push(novoPet);
            if (writePets(pets)) {
                res.status(201).json(novoPet);
            } else {
                res.status(500).json({ erro: 'Erro ao salvar' });
            }
        } catch (error) {
            res.status(500).json({ erro: 'Erro interno' });
        }
    });

    // PUT - Atualizar
    router.put('/:id', upload.single('imagem'), (req, res) => {
        try {
            const pets = readPets();
            const index = pets.findIndex(p => p.id === parseInt(req.params.id));
            
            if (index === -1) {
                return res.status(404).json({ erro: 'Pet não encontrado' });
            }

            pets[index] = {
                ...pets[index],
                nome: req.body.nome || pets[index].nome,
                idade: req.body.idade || pets[index].idade,
                localizacao: req.body.localizacao || pets[index].localizacao,
                tipo: req.body.tipo || pets[index].tipo,
                destaque: req.body.destaque === 'true',
                descricao: req.body.descricao || pets[index].descricao,
                imagem: req.file ? `/assets/uploads/${req.file.filename}` : pets[index].imagem
            };

            if (writePets(pets)) {
                res.json(pets[index]);
            } else {
                res.status(500).json({ erro: 'Erro ao salvar' });
            }
        } catch (error) {
            res.status(500).json({ erro: 'Erro interno' });
        }
    });

    // DELETE - Remover
    router.delete('/:id', (req, res) => {
        try {
            const pets = readPets();
            const index = pets.findIndex(p => p.id === parseInt(req.params.id));
            
            if (index === -1) {
                return res.status(404).json({ erro: 'Pet não encontrado' });
            }

            pets.splice(index, 1);
            
            if (writePets(pets)) {
                res.json({ mensagem: 'Pet removido com sucesso' });
            } else {
                res.status(500).json({ erro: 'Erro ao salvar' });
            }
        } catch (error) {
            res.status(500).json({ erro: 'Erro interno' });
        }
    });

    return router;
};
