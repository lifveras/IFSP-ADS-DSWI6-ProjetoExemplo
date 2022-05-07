class ItemPatrimonio {
    constructor(itemDados) {
        // this.patrimonio = itemDados.patrimonio;
        // this.descricaoItem = itemDados.descricaoItem;
        // this.tipo = itemDados.tipo;
        // this.dataAquisicao = typeof itemDados.dataAquisicao == Date ? 
        //                              itemDados.dataAquisicao : new Date(itemDados.dataAquisicao)
        // this.precoAquisicao = itemDados.precoAquisicao;
        // this.departamento = itemDados.departamento
        // this.responsavel = itemDados.responsavel
        console.log(itemDados);
        this.patrimonio = itemDados.patrimonio ;
        this.descricao = itemDados.descricao;
        this.itemTipo = typeof(itemDados.itemTipo) === "object" ? itemDados.itemTipo : {
            nome: itemDados.itemTipo,           
            descricao: "None",        
            imagem: 'https://images.unsplash.com/photo-1602506860730-b690f1a6f662?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        };
        this.dataAquisicao = typeof itemDados.dataAquisicao == Date ? 
                                     itemDados.dataAquisicao : new Date(itemDados.dataAquisicao)
        this.precoAquisicao = itemDados.precoAquisicao;
        this.departamento = itemDados.departamento
        this.responsavel = typeof(itemDados.itemTipo) === "object" ? itemDados.responsavel : {
          prontuario: "BP0910292",
          nome: itemDados.responsavel,  
          telefone: "408-867-5309",
          email: "gustavo_veras@ifsp.edu.br"
        }
    }
}

module.exports = ItemPatrimonio;