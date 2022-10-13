# Roteiro de implementação - ORM (Object Relational Mapper)
# Acessando este branch

Para fazer o clone deste repositório, execute o comando

```git
git clone https://github.com/lifveras/-DSWI6---estrutura-projeto.git
```

No diretório criado pelo git, mude de branch, pois por padrão o repositório local estará no **main**. Mude para este repositório chamado **orm** usando os comandos a seguir:

```git
git checkout orm
git pull origin orm
```

Os arquivos deste repositório remoto devem aparecer no seu diretório do repositório local.

Não se esqueça de baixar as dependências do projeto com o NPM executando o projeto a seguir:

```git
npm install
```

# Instalando o sequelize e o sequelize-cli

 Primeiro, instale o sequelize globalmente:

 > npm -g install sequelize

Nos branchs anteriores, estavamos utilizando o diretório "/app-api/src/api/repositories/database" para simular um banco de dados. Agora, navegue até a pasta "/app-api/src/database" e inicie um projeto sequelize dentro desta pasta. Para isso, execute

> npx sequelize-cli init

As pastas config, migrations, models e seeders devem ter sido criadas.

# Criando os models com o sequelize-cli

Agora, vamos utilizar o comando `model:generate` para criar os models. Nesta aplicação de exemplo nós estamos lidando com quatro entidades/models, como foi especificado na API em YAML:

- Responsavel: prontuario, nome, telefone, email;
- ItemTipo: nome, descricao, imagem;
- ItemPatrimonio: patrimonio, descricao, itemTipo, dataAquisicao, precoAquisicao departamento, responsavel;

Para cada model que criarmos, passamos o seu `name` e a sua lista de `atributes`. Os comandos para criar os models serão:

> npx sequelize-cli model:generate --name Responsavel --attributes prontuario:string,nome:string,telefone:string,email:string
> npx sequelize-cli model:generate --name ItemTipo --attributes nome:string,descricao:string,imagem:string

Perceba que ItemPatrimonio possui associação com ItemTipo e Responsavel. Para definir essa associação, iremos definir campos de id para cada uma das entidades. Posteriormente precisaremos definir as associações entre as classes diretamente em seus arquivos na pasta model.

> npx sequelize-cli model:generate --name ItemPatrimonio --attributes patrimonio:string,descricao:string,itemTipoId:integer,dataAquisicao:date,precoAquisicao:float,departamento:string,responsavelId:string

Como resultado dessas operações, veja dentro da pasta ´/app-api/src/models´ os arquivos itempatrimonio.js, itemtipo.js, responsavel.js. Eles representam os models.

Além dos models, os comandos criaram as migrations. Veja as migrations na pasta homônima. Cada arquivo funciona como um histórico das modificações dos models.

O sequelize, por padrão, pluraliza os nomes dos models para definir as tabelas. Por exemplo, *ItemPatrimonio* se tornará *ItemPatrimonios*. Entretanto, *Responsavel* irá virar *Responsavels*. Corrija isso na migrations criada para a model Responsavel no arquivo **xxxx-create-responsavel.js**.

```javascript
//...
 async up(queryInterface, Sequelize) {
    // Nome do model corrigido de "Responsavels" para "Responsavel"
    await queryInterface.createTable('Responsavel', {
//...
```

```javascript
//...
async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Responsavel');
  }
//...
```

Faça o mesmo para os outras migrations criadas, removendo o seu plural. 

# Definindo a chave primária do model Responsavel

Na migration do model Responsavel, foi criado automaticamente um campo chamado id para servir de chave primária. Entretanto, neste aplicativo usaremos um código de prontuario como chave primária. Remova a definição da coluna "id" e modifique o campo prontuario como segue para torna-lo a chave primária. 

```javascript
//...
   prontuario: {
     allowNull: false,
     autoIncrement: false,
     primaryKey: true,
     type: DataTypes.STRING,
   },
//...
```

# Definindo as associações nas migrations

O sequelize-cli não gera as associações nas migrations. Portanto teremos que configura-las manualmente. Nos arquivos das migrations dentro da pasta **database/migrations** é onde faremos as modificações. Abra o arquivo com o nome no padrão **xxxx-create-item-patrimonio.js** e dentro dos campos *itemTipoId* e *responsavelId* deixe como nas estruturas a seguir

```javascript
  itemTipoId: {
        type: DataTypes.INTEGER,
        // Define a relação entre ItemTipo e ItemPatrimonio através da chave primária "id"
        references: {
          model: 'ItemTipos',
          key: 'id',
          as: 'itemTipoId',
        }
  },
```
```javascript
  responsavelId: {
        type: Sequelize.STRING,
        // Define a relação entre Responsavel e ItemPatrimonio através da chave primária "prontuário"
        references: {
          model: 'Responsavel',
          key: 'prontuario',
          as: 'responsavelId',
      }
  },
```

Para outros exemplos e maiores detalhes, veja mais nesse [link](https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7) e nesse [link](https://codeburst.io/sequelize-migrations-setting-up-associations-985d29b61ee7).

# Definindo associações nos Models

Você pode definir as associações utilizando os métodos `.hasOne()`, `.hasMany()` e `..belongsToMany()`. Nas associações deste aplicativo, ItemPatrimonio está associado com um Responsavel e com um ItemTipo, logo usaremos o `.hasOne()` duas vezes no ItemPatrimonio (Source Model) e `.belongsTo()` nos outros models (Target Model) para indicar o outro lado da associação. Nos arquivos de models criados, as associações então ficarão da seguinte forma.

```javascript
  // no arquivo itempatrimonio.js
  static associate(models) {
      // define associação com responsavel
      ItemPatrimonio.hasOne(models.Responsavel, {
        foreignKey: 'responsavelId',
        onDelete: 'NOTHING'
      });
      // define associação com itemtipo
      ItemPatrimonio.hasOne(models.ItemTipo, {
        foreignKey: 'itemTipoId',
        onDelete: 'NOTHING'
      });
    }
```

```javascript
  // no arquivo responsavel.js
  static associate(models) {
      Responsavel.belongsTo(models.ItemPatrimonio);
  }
```

```javascript
  // no arquivo itemtipo.js
  static associate(models) {
      ItemTipo.belongsTo(models.ItemPatrimonio);
  }
```

# Executando as Migrations

Para refletir os models no SGBD, precisamos executar as migrations. Primeiro, certifique-se que o banco de dados exista no SGBD. Em seguida configure os parâmetros de conexão dentro do arquivo "/app-api/src/database/config/config.json". O atributo "timestamps" evita a criação dos campos "createdAt" e "updatedAte" e "freezeTableName" evita a criação das tabelas no plural.

```javascript
  "development": {
    "username": "meu_usuario",
    "password": "minha_senha",
    "database": "almoxarifado_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define":{
      "timestamps": false,
      "freezeTableName": true
    }
  },
```

Neste exemplo foi utilizado o SGBD mysql. Certifique-se de ter adicionado o módulo para conexão com o mysly verificando o arquivo package.json do módulo app-api. Caso não encontra, insta-lo executando o comando na raiz de app-api:

> npm -g install mysql2

> Antes de executar as migrations, certifique-es que o banco almoxarifado_db tenha sido criado no MySQL. O Sequelize não cria o banco de dados, apenas as tabelas e suas associações.

Agora execute as migrations com o comando abaixo no diretórios **/app-api/src/database**:

> npx sequelize-cli db:migrate 

Verifique no seu banco de dados as tabelas criadas.

# Criando, modificando e executando os Seeders

Os seeders permitem gerar uma carga inicial no nosso banco de dados. Para criar os arquivos de seed, execute o comando:

> npx sequelize-cli seed:create --name Responsavel
> npx sequelize-cli seed:create --name ItemTipo
> npx sequelize-cli seed:create --name ItemPatrimonio

Um arquivo de seed para cada model será criado na pasta "/app-api/src/database/seeders". Modifique-os adicionando dados iniciais para cada model. No aplicativo de almoxarifado, iremos modificar o seed de ItemPatrimonio penas, pois como há associação entre esse model e os demais, podemos inserir dados na outras tabelas a partir da mesma.

Veja o arquivo de seed do ItemPatrimonio em "/app-api/src/database/seeders" para ver o exemplo.

Para executar as seeds na ordem (ItemPatrimonio deve vir por último devido às associações), execute o comando a seguir:

> npx sequelize-cli db:seed --seed seeders\20221013011642-Responsavel.js seeders\20221013011646-ItemTipo.js seeders\20221013011651-ItemPatrimonio.js

> Não se esqueça de substituir o número do nome do arquivo das seeds em xxxxxxxxxxxxxx-Responsavel.js pelo número gerado na criação das suas seeds.

# Utilizando os models na API
Como criamos módulos de serviço (dentro da pasta services) para cada model, só precisamos realizar alterações apenas nesses scripts para importar os models criados com o Sequelize. Importe como no exemplo abaixo para ItemPatrimonio.

```javascript
const {ItemPatrimonio} = require("../../database/models")
```


