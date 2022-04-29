# Roteiro de implementação - Integração Front-end e Back-end

# Estrutura projeto Web

Neste projeto, temos 3 módulos:

- **app-api**: api rest com a lógica de negócio da aplicação. Ela fará a comunicação com o banco de dados;
- **app-auth**: api rest de módulo dedicado ao gerenciamento de usuários da aplicação;
- **app-front**: view da aplicação;

## Repositórios no Github

Neste branch, forem implementadas funcionalidades de uma aplicação de exemplo chamada "IFalmoxarifado", que tem como objetivo atender aos seguintes requisitos:

- Mostrar os itens de inventários em uma tabela
- Mostrar os itens como blocos de dados (Cards)
- Permitir buscar os item de inventário
- Permitir deletar um item de inventário
- Permitir inserir um novo item de inventário

Você fará o mesmo, porém para as especificações que você e seu grupo enviaram no projeto de aplicação web da disciplina.

## Sugestão de desenvolvimento

Aqui seguem algumas sugestões sobre como vocês, em grupo, podem dar andamento às atividades de desenvolvimento do projeto.

1. Divida seu grupo em especialistas: uma parte para back-end, e a outra para fron-end.
2. Insiram cada um dos membros do grupo no repositório do GitHub enviado para a primeira avaliação da disciplina.
3. Como vocês jás criaram o arquivo de especificação de API no formato YAML, cada subgrupo poderá criar um mock a partir dele para trabalhar, já que os dados já foram especificados.
4. Se uma das partes precisar alterar a estrutura da especificação, não esqueça de avisar os demais ou verificar se estão de acordo com a alteração. Para evitar duplicação de versões da especificação da API, adicionem o arquivo no repositório do grupo no GitHub.
5. Para mockar a API, uma forma fácil sugerido é o uso do módulo Node chamado prism. Para utiliza-lo, basta:
    - Instalar globalmente o prism com o comando ```npm install -g prism```
    - Executar o prism, passando o seu arquivo YAML como parâmetro no comando ``` prism mock <arqivo.yaml>```
6. Nesta aplicação, você pode verificar o arquivo de especificação "dswi6-TesteAPI-1.0.0-swagger.yaml" 

## Front-end

Para executar o projeto de front-end, digite o comando a seguir dentro do diretório da pasta "app-front".

> npm install
> npm run dev

O link de acesso para a aplicação front-end será apresentada no console após o seu build.

### Observações:
Vimos no momento de criar o projeto Nuxt.js a sua configuração com a biblioteca axios. Ela será a responsável por fazer requisições HTTP para a API criada com o Node. Enquanto ela não está pronta, utilize o mock da especificação da API.

Para configurar a URL para acesso ao mock (ou ao servidor da API da sua aplicação), modifique o arquivo nuxt.config.js.

 ```js
  axios: {
    baseURL: 'http://127.0.0.1:4010/',
  },
 ```
Troque a URL acima pela informada pelo prism ou ferramenta de mock escolhida por você.

Abaixo, segue o exemplo da requisição get no documento de exemplo. A função asyncModel é invocada quando o componente Vue for criado. Recebemos por parâmetro o objeto que representa o axios, usando a notação ```{$axios}```. Lembre-se que para adicionar o valor retornado pelo axios a propriedade data do componente vue, devemos retorna-la entre {}.

```javascript
  async asyncData({ $axios }) {
    let items, totalRows;
    try {
      const response = await $axios.$get('patrimonio');
      items = response;
      totalRows = items.length;
    } catch (ex) {
      console.log(ex);
    }
    return { items, totalRows }
  },
```

## Back-end

O back-end da aplicação de exemplo ainda não foi implementado. Siga as instruções das aulas anteriores, onde no back-end devem constar

  - As rotas da API
  - Os controllers das rotas
  - Implementação dos testes

**Obs**: Nesta etapa, não estaremos usando banco de dados ainda. Portanto os dados podem ser *hardcoded*.

> SUGESTÃO:
>
> Para implementação dos testes, é considerada uma boa prática que os mesmos sejam escritos primeiro, falhem, e em seguida o código necessário para fazê-lo passar é implementado. Isso está em acordo com os principios do Desenvolvimento Orientado a Testes (do inglês, Test-driven Development). Porém, é só uma sugestão, faça como achar mais adequado.