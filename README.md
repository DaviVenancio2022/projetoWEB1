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

### 3. Restrições

Neste trabalho não serão considerados:

1. **Autenticação de usuários** - O sistema não possui tela de login ou níveis de acesso diferenciados. O painel administrativo é acessível diretamente pela URL, pois o foco está nas funcionalidades CRUD.

2. **Banco de dados relacional** - Optou-se por armazenamento em arquivo JSON para simplificar a implementação e evitar a complexidade de configuração de um SGBD.

3. **Sistema de adoção completo** - O formulário "Quero Adotar!" redireciona para uma página estática, sem processamento backend do pedido de adoção.

4. **Geolocalização** - Não há integração com mapas ou sistema de localização por GPS, apenas campos textuais de localização.

5. **Notificações** - O sistema não envia e-mails ou mensagens automáticas.

6. **Múltiplas imagens por pet** - Cada pet pode ter apenas uma imagem principal.

7. **Página de detalhes do pet** - Não há página dedicada com informações detalhadas; tudo é exibido nos cards.

8. **Busca e filtros avançados** - Apenas a separação básica por tipo (adoção vs. destaques).

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

**Design System:**

- **Cores principais:**
    - Primária: #ff6b6b (vermelho suave)
    - Secundária: #4ecdc4 (verde água)
    - Fundo: #0f172a (azul escuro)
    - Cards: #1e293b (azul médio)
- **Tipografia:** Fonte Archivo do Google Fonts
- **Componentes:** Cards com sombreamento e hover effects, botões estilizados, modal centralizado

Os protótipos podem ser visualizados acessando o projeto em execução ou através dos arquivos HTML na pasta `public/`.

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

# CSI606-2024-02 - Remoto - Trabalho Final - Resultados

## PetLandia - Sistema de Gerenciamento de Adoção e Resgate de Pets

---

**Discente:** Princesa Leia (Luke Skywalker)  
**Data:** 15 de Fevereiro de 2026  
**Orientador:** [Nome do Professor]

---

### Resumo

O PetLandia foi desenvolvido como uma solução completa para gerenciamento de adoção e resgate de pets. O sistema permite que administradores cadastrem, editem e excluam animais, enquanto os usuários podem visualizar os pets disponíveis organizados em categorias. O projeto utiliza Node.js e Express no backend, com armazenamento em JSON, e frontend em HTML, CSS e JavaScript puro. Durante o desenvolvimento, foram implementadas todas as funcionalidades CRUD previstas, além de recursos como upload de imagens, grid responsivo e design atrativo. O resultado é uma plataforma funcional, de fácil utilização e pronta para ser expandida com novas funcionalidades futuramente.

**Palavras-chave:** Adoção de pets, CRUD, Node.js, Express, Sistemas Web

---

### 1. Funcionalidades Implementadas

| Categoria    | Funcionalidade                                         | Status       |
| ------------ | ------------------------------------------------------ | ------------ |
| **Backend**  | API RESTful com endpoints GET, POST, PUT, DELETE       | ✅ Concluído |
| **Backend**  | Upload de imagens com Multer                           | ✅ Concluído |
| **Backend**  | Armazenamento persistente em arquivo JSON              | ✅ Concluído |
| **Backend**  | Configuração de CORS para requisições                  | ✅ Concluído |
| **Frontend** | Página inicial com layout responsivo                   | ✅ Concluído |
| **Frontend** | Hero section com apresentação da PetLandia             | ✅ Concluído |
| **Frontend** | Seção de adoção com grid dinâmico                      | ✅ Concluído |
| **Frontend** | Seção de destaques com grid dinâmico                   | ✅ Concluído |
| **Frontend** | Modal de informações de contato                        | ✅ Concluído |
| **Admin**    | Painel administrativo exclusivo                        | ✅ Concluído |
| **Admin**    | Listagem de todos os pets em cards                     | ✅ Concluído |
| **Admin**    | Formulário de cadastro de novos pets                   | ✅ Concluído |
| **Admin**    | Edição de pets existentes                              | ✅ Concluído |
| **Admin**    | Exclusão de pets com confirmação                       | ✅ Concluído |
| **Admin**    | Upload de imagens no cadastro/edição                   | ✅ Concluído |
| **Admin**    | Classificação por tipo (perdido/encontrado/abandonado) | ✅ Concluído |
| **Admin**    | Marcação de pets como destaque                         | ✅ Concluído |
| **Design**   | Grid responsivo com auto-fit/minmax                    | ✅ Concluído |
| **Design**   | Cards padronizados com hover effects                   | ✅ Concluído |
| **Design**   | Modal responsivo para formulários                      | ✅ Concluído |

---

### 2. Funcionalidades Previstas e Não Implementadas

| Funcionalidade                | Motivo da não implementação                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| **Autenticação de usuários**  | Optou-se por focar nas funcionalidades CRUD, deixando a autenticação para uma fase futura |
| **Banco de dados relacional** | O uso de JSON simplificou o desenvolvimento e é suficiente para o escopo proposto         |
| **Página de detalhes do pet** | As informações foram resumidas nos cards para manter a interface limpa                    |
| **Múltiplas imagens por pet** | A complexidade adicional não era necessária para o MVP                                    |
| **Busca e filtros avançados** | A separação por tipo atende ao objetivo principal do sistema                              |
| **Sistema de notificações**   | Demandaria integração com serviços externos de e-mail/SMS                                 |
| **Geolocalização**            | Requer integração com APIs de mapas e maior complexidade                                  |
| **Login para ONGs parceiras** | Funcionalidade prevista para versão 2.0                                                   |
# projetoWEB1
