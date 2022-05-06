const ItemPatrimonio = require("../model/ItemPatrimonio");

module.exports = (database) => {
    database.addItem(
        new ItemPatrimonio(
            {
                patrimonio: "IFSP-BR-001",
                descricaoItem: "Carteira",
                tipo: "Escritorio",
                dataAquisicao: new Date("2020-01-01"),
                precoAquisicao: 119.90,
                departamento: "CAE",
                responsavel: "Panhan"
            }
        )
    )

    database.addItem(new ItemPatrimonio(
        {
            patrimonio: "IFSP-BR-002",
            descricaoItem: "Computador",
            tipo: "Informática",
            dataAquisicao: new Date("2019-01-01"),
            precoAquisicao: 2500.00,
            departamento: "Informática",
            responsavel: "Panhan"
        }))

    database.addItem(new ItemPatrimonio(
        {
            patrimonio: "IFSP-BR-003",
            descricaoItem: "Lousa",
            tipo: "Sala de aula",
            dataAquisicao: new Date("2020-01-01"),
            precoAquisicao: 119.90,
            departamento: "Informática",
            responsavel: "Panhan"
        }))

    database.addItem(new ItemPatrimonio(
        {
            patrimonio: "IFSP-BR-004",
            descricaoItem: "Lousa",
            tipo: "Sala de aula",
            dataAquisicao: new Date("2020-01-01"),
            precoAquisicao: 119.90,
            departamento: "Informática",
            responsavel: "Panhan"
        }))
}