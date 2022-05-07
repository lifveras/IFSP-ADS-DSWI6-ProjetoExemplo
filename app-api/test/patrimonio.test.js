const request = require("supertest");
const app = require("../app");

describe("Testes para o path 'patrimônio'", () => {
    test("[GET /patrimonio] Recupera todos os itens de patrimonio", async () => {
        const res = await request(app)
            .get("/patrimonio")
            // Especifique na API que o tipo enviado é application/json.
            // Caso contrário o Supertest não será capas de fazer o parse da resposta
            // para um objeto javascript, e consequentemente res.body vira vazio.
            .set('Accept', 'application/json');
        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);

        // Teste se foi retornado um array
        expect(res.body).toBeInstanceOf(Array);

        // Espera que o objeto retornado contenha os atributos 
        // definidos no schema definido no OpenAPI.
        // Ver em: https://jestjs.io/pt-BR/docs/expect#tohavepropertykeypath-value
        // ---- Testes para ItemPatrimonio
        // Para simplificar, vamos testar apenas o primeiro objeto
        const objToTest = res.body[0];

        expect(objToTest).toHaveProperty("patrimonio");
        expect(objToTest).toHaveProperty("descricao");

        expect(objToTest).toHaveProperty("itemTipo");
        // Para testar os atributos dentro de ItemTipo, passamos a hierarquia
        // como vetor para toHaveProperty
        expect(objToTest).toHaveProperty(["itemTipo", "nome"]);
        expect(objToTest).toHaveProperty(["itemTipo", "descricao"]);
        expect(objToTest).toHaveProperty(["itemTipo", "imagem"]);

        expect(objToTest).toHaveProperty("dataAquisicao");
        expect(objToTest).toHaveProperty("precoAquisicao");
        expect(objToTest).toHaveProperty("departamento");

        // Para testar os atributos dentro de Responsavel, passamos a hierarquia
        // como vetor para toHaveProperty
        expect(objToTest).toHaveProperty("responsavel");

        expect(objToTest).toHaveProperty(["responsavel", "prontuario"]);
        expect(objToTest).toHaveProperty(["responsavel","nome" ]);
        expect(objToTest).toHaveProperty(["responsavel","telefone" ]);
        expect(objToTest).toHaveProperty(["responsavel","email" ]);
    });

    test("[GET /patrimonio/{patrimonio_id}] Recupera um item de patrimonio por id", async () => {
        const res = await request(app)
            .get("/patrimonio/IFSP-BR-001")
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);

        // Espera que o objeto retornado contenha os atributos 
        // definidos no schema definido no OpenAPI.
        // Ver em: https://jestjs.io/pt-BR/docs/expect#tohavepropertykeypath-value
        // ---- Testes para ItemPatrimonio
        // Para simplificar, vamos testar apenas o primeiro objeto
        expect(res.body).toHaveProperty("patrimonio");
        expect(res.body).toHaveProperty("descricao");

        expect(res.body).toHaveProperty(["itemTipo"]);
        // Para testar os atributos dentro de ItemTipo, passamos a hierarquia
        // como vetor para toHaveProperty
        expect(res.body).toHaveProperty(["itemTipo", "nome"]);
        expect(res.body).toHaveProperty(["itemTipo", "descricao"]);
        expect(res.body).toHaveProperty(["itemTipo", "imagem"]);

        expect(res.body).toHaveProperty("dataAquisicao");
        expect(res.body).toHaveProperty("precoAquisicao");
        expect(res.body).toHaveProperty("departamento");

        // Para testar os atributos dentro de Responsavel, passamos a hierarquia
        // como vetor para toHaveProperty
        expect(res.body).toHaveProperty("responsavel");

        expect(res.body).toHaveProperty(["responsavel", "prontuario"]);
        expect(res.body).toHaveProperty(["responsavel","nome" ]);
        expect(res.body).toHaveProperty(["responsavel","telefone" ]);
        expect(res.body).toHaveProperty(["responsavel","email" ]);
    });

    test("[POST /patrimonio] Criação de um novo item de patrimonio", async () => {
        const res = await request(app)
                            .post("/patrimonio", {
                                "patrimonio": "IFSP-BR-00",
                                "descricao": "Armário de arquivos",
                                "itemTipo": {
                                    "nome": "Escritorio",
                                    "descricao": "Materiais utilizados em escritório",
                                    "imagem": "https://images.unsplash.com/photo-1524820801657-fd59673fbb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80"
                                },
                                "dataAquisicao": "2016-08-29T09:12:33.001Z",
                                "precoAquisicao": 999.99,
                                "departamento": "Informática",
                                "responsavel": {
                                    "prontuario": "BP0910292",
                                    "nome": "Luiz Gustavo Véras",
                                    "telefone": "408-867-5309",
                                    "email": "gustavo_veras@ifsp.edu.br"
                                }
                            })
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);                        

        expect(res.body).toEqual({ status: "Item criado com sucesso." });
    });

    test("[DELETE /patrimonio/{id_patrimonio}] Remove um item de patrimonio por id", async () => {
        const res = await request(app)
            .delete("/patrimonio/IFSP-BR-001")
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200); 
        expect(res.body).toEqual({ status: "Item removido com sucesso." });
    });

    const agent = request.agent(app);

    test("Não retorna objeto pro Id em um GET após executar um DELETE ", async () => {

        // Faz primeiro a requisição DELETE ...        
        const resPOST = await agent
                            .delete("/patrimonio/IFSP-BR-001")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 200
        expect(resPOST.statusCode).toBe(200); 
        expect(resPOST.body).toEqual({ status: "Item removido com sucesso." });

        // ... Para em seguida fazer um GET e obter um 404.
        const resGET = await agent
                            .get("/patrimonio/IFSP-BR-001")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 404 - Not Found
        expect(resGET.statusCode).toBe(404); 
        expect(resGET.body).toEqual({status: `Não foi possível encontrar o item para IFSP-BR-001.`});
    });
});
