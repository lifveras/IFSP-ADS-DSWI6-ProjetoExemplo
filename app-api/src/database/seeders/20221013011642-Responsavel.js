"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Responsavel",
      [
        {
          prontuario: "BP0910292",
          nome: "Luiz Gustavo Véras",
          telefone: "(12) 2222-2222",
          email: "gustavo_veras@ifsp.edu.br",
        },
        {
          prontuario: "BP1231239",
          nome: "Flavio Amate",
          telefone: "(11) 1111-1111",
          email: "flavioamate@ifsp.edu.br",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Responsavel", null, {});
  },
};
