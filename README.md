# Roteiro de implementação - Integração Front-end e Back-end
# Acessando este branch

Para fazer o clone deste repositório, execute o comando

```git
git clone https://github.com/lifveras/-DSWI6---estrutura-projeto.git
```

No diretório criado pelo git, mude de branch, pois por padrão o repositório local estará no **main**. Mude para este repositório chamado **integracao** usando os comandos a seguir:

```git
git checkout integracao
git pull origin integracao
```

Os arquivos deste repositório remoto devem aparecer no seu diretório do repositório local.

Não se esqueça de baixar as dependências do projeto com o NPM executando o projeto a seguir:

```git
npm install
```

# Instalando o sequelize e o sequelize-cli

 Primeiro, instale o sequelize no projeto:

 > npm install sequelize

Instale a ferramenta de linha de comando do sequelize usando o comando a seguir:

> npm install --save-dev sequelize-cli

Navegue até a pasta "/database" e inicie um projeto sequelize dentro desta pasta. Para isso, execute .

> npx sequelize-cli init

As pastas config, migrations, models e seeders devem ter sido criadas.

# Criando os models com o sequelize-cli

Agora, Vamos utilizar o comando `model:generate` para criar as models. Nesta aplicação de exemplo nós estamos lidando com quatro entidades/models, como foi especificado na API em YAML:

- Responsavel: prontuario, nome, telefone, email;
- ItemTipo: nome, descricao, imagem;
- ItemPatrimonio: patrimonio, descricao, itemTipo, dataAquisicao, precoAquisicao departamento, responsavel;

Para cada model que criarmos, passamos o seu `name` e a sua lista de `atributes`. Os comandos para criar os models serão:

> npx sequelize-cli model:generate --name Responsavel --attributes prontuario:string,nome:string,telefone:string,email:string
> npx sequelize-cli model:generate --name ItemTipo --attributes nome:string,descricao:string,imagem:string

Perceba que ItemPatrimonio possui associação com ItemTipo e Responsavel. Para definir essa associação, iremos definir campos de id para cada uma das entidades. Posteriormente precisaremos definir as associações entre as classes diretamente em seu arquivo na pasta model.

> npx sequelize-cli model:generate --name ItemPatrimonio --attributes patrimonio:string,descricao:string,itemTipoId:integer,dataAquisicao:date,precoAquisicao:float,departamento:string,responsavelId:integer

Como resultado dessas operações, veja dentro da pasta ´/models´ os arquivos itempatrimonio.js, itemtipo.js, responsavel.js. Eles representam os models.

Além dos models, os comandos criaram as migrations. Veja as migrations na pasta homônima. Cada arquivo funciona como um histórico das modificações dos models.

# Defininfo as assoações nas migrations

https://levelup.gitconnected.com/creating-sequelize-associations-with-the-sequelize-cli-tool-d83caa902233
```javascript
  onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id',
            as: 'userId',
          }
        }
```

# Definindo associações nos Models

Você pode definir as associações utilizando os métodos `.hasOne()`, `.hasMany()` e `..belongsToMany()`. Nas associações deste aplicativo, ItemPatrimonio está associado com um responsável e com um ItemTipo, logo usaremos o `.hasOne()` duas vezes no itemPatrimonio e `.belongsTo()` nos outros models para indicar o outro lado da associação. Nos arquivos de models criados, as associações então ficarão da seguinte forma.

```javascript
  static associate(models) {
      // define associação com responsavel
      ItemPatrimonio.hasOne(models.responsavel, {
        foreignKey: 'responsavelId',
        onDelete: 'NOTHING'
      });
      // define associação com itemtipo
      ItemPatrimonio.hasOne(models.itemtipo, {
        foreignKey: 'itemTipoId',
        onDelete: 'NOTHING'
      });
    }
```

```javascript
  static associate(models) {
      Responsavel.belongsTo(models.itempatrimonio);
  }
```

```javascript
  static associate(models) {
      // define association here
      ItemTipo.belongsTo(models.itempatrimonio);
  }
```

# Executando as Migrations

Para refletir os models no SGBD, precisamos executar as migrations. Primeiro, certifique-se que o banco de dados exista no SGBD. Em seguida configure os parâmetros de conexão dentro do arquivo "/config/config.json".

```javascript
  "development": {
    "username": "root",
    "password": "ifsp",
    "database": "almoxarifado_app",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

Neste exemplo foi utilizado o SGBD mysql. Certifique-se de ter adicionado o módulo para conexão com o mysly verificando o arquivo package.json do módulo app-api. Caso não encontra, insta-lo executando o comando na raiz de app-api:

> npm install mysql

Agora execute as migrations com o comando abaixo:

> npx sequelize-cli db:migrate 

Verifique no seu banco de dados as tabelas criadas.

