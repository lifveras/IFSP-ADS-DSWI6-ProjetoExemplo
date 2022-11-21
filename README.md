# Roteiro de implementação - Integração Front-end e Back-end
# Acessando este branch

Para fazer o clone deste repositório, execute o comando

```git
git clone https://github.com/lifveras/IFSP-ADS-DSWI6-ProjetoExemplo.git
```

No diretório criado pelo git, mude de branch, pois por padrão o repositório local estará no **main**. Mude para este repositório chamado **integracao** usando os comandos a seguir:

```git
git checkout testes
git pull origin testes
```

Os arquivos deste repositório remoto devem aparecer no seu diretório do repositório local.

Não se esqueça de baixar as dependências do projeto com o NPM executando o projeto a seguir:

```git
npm install
```

# Estrutura projeto Web

Neste projeto, temos 3 módulos:

- **app-api**: api rest com a lógica de negócio da aplicação. Ela fará a comunicação com o banco de dados;
- **app-auth**: api rest de módulo dedicado ao gerenciamento de usuários da aplicação;
- **app-front**: view da aplicação;

## Criando os testes no Jest

Inicialmente, precisamos instalar os módulos do Jest e do supertest.

```bash
  npm install --save-dev jest supertest 
```

É interessante também disponibilizar os tipos de dados do Jest para facilitar o desenvolvimento com o VS Code. Instale esta execução.

```bash
  npm install @types/jest
```

Não se esqueça de também configurar no arquivo package.json o script para rodas o teste.


```json
  "scripts": {
    "test": "jest",
    "serve": "nodemon server.js"
  },
```

Para executar os testes, utilize o comando abaixo no diretório onde está o arquivo package.json.

```bash
  npm run test
```

Outros detalhes sobre exemplos de como programar os testes estão na aula sobre no Moodle.


## Arquivo com os testes unitários

Neste branch, foram implementados testes unitários na aplicação "IFalmoxarifado". Somente o arquivo [patrimonio.test.js](app-api/test/patrimonio.test.js) foi modificado.
