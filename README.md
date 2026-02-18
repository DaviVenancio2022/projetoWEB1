# CSI606 - Sistemas WEB I - 2026-01 - Relatorio Trabalho Final

## PetLandia - Sistema de Gerenciamento de Adoção e Resgate de Pets

---

**Discente:** Davi Venancio dos Santos
**Data:** Fevereiro de 2026

---

### Resumo

O PetLandia é uma plataforma web desenvolvida para facilitar o encontro de pets perdidos e incentivar a adoção responsável. O sistema conecta pessoas interessadas em adotar animais com ONGs e protetores independentes, além de permitir o registro e divulgação de animais perdidos, encontrados ou abandonados. Através de uma interface intuitiva e responsiva, os usuários podem visualizar os pets disponíveis organizados por categorias, enquanto administradores possuem um painel completo para gerenciar todas as informações. O projeto foi desenvolvido utilizando Node.js no backend e HTML/CSS/JavaScript puro no frontend, com armazenamento em arquivo JSON e suporte a upload de imagens.

---

### 1. O sistema permite:

- Divulgação de pets disponíveis para adoção
- Registro de animais perdidos e encontrados
- Gerenciamento completo dos animais cadastrados
- Classificação por categorias (perdido, encontrado, abandonado)

---

### 2. Escopo

Este projeto terá as seguintes funcionalidades:

**Funcionalidades do Usuário (Site Público):**

- Visualização da página inicial com informações sobre a PetLandia
- Listagem de pets disponíveis para adoção (perdidos e abandonados)
- Listagem de pets em destaque (encontrados e casos urgentes)
- Acesso a informações de contato via modal
- Links para páginas de formulário de adoção

**Funcionalidades do Administrador (Painel Privado):**

![Pagina Admin](assets/img/Screenshot%202026-02-17%20at%2019.56.42.pngpagina.png)
![Pagina Admin](assets/img/Screenshot%202026-02-17%20at%2019.56.15.png)
![Pagina Admin](assets/img/Screenshot%202026-02-17%20at%2020.06.46.png)
![Pagina Admin](assets/img/Screenshot%202026-02-17%20at%2019.59.05.png)

- **CRUD completo** para gerenciamento dos pets:
    - **Create:** Cadastrar novos pets com nome, idade, localização, tipo, descrição e imagem
    - **Read:** Visualizar todos os pets cadastrados em formato de cards
    - **Update:** Editar informações de pets existentes
    - **Delete:** Remover pets do sistema
- Upload de imagens para cada pet
- Classificação por tipo (perdido/encontrado/abandonado)
- Marcação de pets como "destaque"
- Interface administrativa exclusiva

**Funcionalidades Técnicas:**

- API RESTful para comunicação entre frontend e backend
- Armazenamento persistente em arquivo JSON
- Upload e gerenciamento de imagens
- Layout responsivo (desktop, tablet, mobile)
- Grid dinâmico que se ajusta automaticamente à quantidade de pets

---

### 3. Funcionalidades previstas e não implementadas

Neste trabalho não serão considerados:

1. **Autenticação de usuários** - O sistema não possui tela de login ou níveis de acesso diferenciados. O painel administrativo é acessível diretamente pela URL, pois o foco está nas funcionalidades CRUD.

2. **Geolocalização** - Não há integração com mapas ou sistema de localização por GPS, apenas campos textuais de localização.

3. **Notificações** - O sistema não envia e-mails ou mensagens automáticas.

4. **Busca e filtros avançados** - Apenas a separação básica por tipo (adoção vs. destaques).

---

### 4. Protótipo

Os protótipos das páginas foram elaborados e podem ser encontrados nos seguintes locais:

**Página Inicial (index.html):**

- Estrutura com header contendo menu de navegação
- Hero section com imagem e texto de apresentação
- Seção "Queremos um novo lar!" com card fixo de chamada para doação
- Grid dinâmico de pets disponíveis para adoção
- Seção "Destaques!" com grid de animais em evidência

**Painel Administrativo (admin.html):**

- Cabeçalho com título e botão "Novo Pet"
- Modal de formulário para cadastro/edição (nome, idade, localização, tipo, destaque, descrição, imagem)
- Grid de cards com todos os pets cadastrados
- Cada card contém imagem, informações e botões "Editar" e "Excluir"

**Principais Desafios e dificuldades**

Os principais desafios enfrentados durante o desenvolvimento foram:

- Integração entre frontend estático e backend dinâmico.
- Configuração e conexão com banco MongoDB local.
- Estruturação correta das rotas CRUD.

**Acessando o prototipo:**

- Clonar o repositorio do projeto
- Baixar as dependencias
- npm run dev
- Em seguida o servidor estara rodando em http://localhost:3000
- Painel Admin: http://localhost:3000/admin

---

### 5. Referências

**[1]** EXPRESS. **Express - Framework web para Node.js**. Disponível em: https://expressjs.com/pt-br/. Acesso em: 15 fev. 2026.

**[2]** MDN WEB DOCS. **HTML: Linguagem de Marcação de Hipertexto**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTML. Acesso em: 15 fev. 2026.

**[3]** MDN WEB DOCS. **CSS: Folhas de Estilo em Cascata**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/CSS. Acesso em: 15 fev. 2026.

**[4]** MDN WEB DOCS. **JavaScript**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript. Acesso em: 15 fev. 2026.

**[5]** NODE.JS. **Node.js Documentation**. Disponível em: https://nodejs.org/en/docs/. Acesso em: 15 fev. 2026.

**[6]** MULTER. **Multer - Middleware para upload de arquivos**. Disponível em: https://github.com/expressjs/multer. Acesso em: 15 fev. 2026.

**[7]** GOOGLE FONTS. **Archipo Font Family**. Disponível em: https://fonts.google.com/specimen/Archivo. Acesso em: 15 fev. 2026.

**[8]** SILVA, M. M. **Desenvolvimento Web com Node.js e Express**. São Paulo: Novatec, 2023.

**[9]** FREEMAN, E.; ROBSON, E. **Use a Cabeça! Programação JavaScript**. Rio de Janeiro: Alta Books, 2022.

**[10]** DUCKETT, J. **HTML and CSS: Design and Build Websites**. Indianapolis: John Wiley & Sons, 2021.

---
