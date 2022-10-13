"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ItemPatrimonio",
      [
        {
          patrimonio: "IFSP-BR-001",
          descricao: "Projetor Multimidia",
          itemTipoId: 1,
          dataAquisicao: "2022-08-29 09:12:33",
          precoAquisicao: 2999.99,
          departamento: "Informática",
          responsavelId: 1,
        },
        {
          patrimonio: "IFSP-BR-002",
          descricao: "Carteira",
          itemTipoId: 2,
          dataAquisicao: "2022-08-29 09:12:33",
          precoAquisicao: 999.99,
          departamento: "CAE",
          responsavelId: 1,
        },
        {
          patrimonio: "IFSP-BR-003",
          descricao: "Bebedouro",
          itemTipoId: 3,
          dataAquisicao: "2022-08-29 09:12:33",
          precoAquisicao: 599.99,
          departamento: "Almoxarifado",
          responsavelId: 2,
        },
        {
          patrimonio: "IFSP-BR-004",
          descricao: "Mesa de trabalhos professor",
          itemTipoId: 3,
          dataAquisicao: "2022-08-29 09:12:33",
          precoAquisicao: 999.99,
          departamento: "Almoxarifado",
          responsavelId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ItemPatrimonio", null, {});
  },
};
