const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Caminhos
const publicPath = path.join(__dirname, '..', 'public');
const uploadPath = path.join(publicPath, 'assets', 'uploads');

console.log('📁 Public path:', publicPath);
console.log('📁 Upload path:', uploadPath);

// Criar pasta de uploads se não existir
if (!fs.existsSync(uploadPath)) {
    console.log('📁 Criando pasta de uploads...');
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

// Importar rotas
try {
    const petsRoutes = require('./routes/pets');
    app.use('/api/pets', petsRoutes(upload));
    console.log('✅ Rotas carregadas com sucesso');
} catch (error) {
    console.error('❌ Erro ao carregar rotas:', error.message);
    console.error('Stack:', error.stack);
}

// Rotas das páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(publicPath, 'admin.html'));
});

// Rota de teste
app.get('/teste', (req, res) => {
    res.json({ mensagem: 'Servidor funcionando!' });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📊 Painel Admin: http://localhost:${PORT}/admin`);
    console.log(`🔧 Rota de teste: http://localhost:${PORT}/teste\n`);
});
