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
        this.patrimonio = itemDados.patrimonio;
        this.descricao = itemDados.descricao;
        this.itemTipo = itemDados.itemTipo;
        this.dataAquisicao = typeof itemDados.dataAquisicao == Date ? 
                                     itemDados.dataAquisicao : new Date(itemDados.dataAquisicao)
        this.precoAquisicao = itemDados.precoAquisicao;
        this.departamento = itemDados.departamento
        this.responsavel = itemDados.responsavel
    }
}

module.exports = ItemPatrimonio;