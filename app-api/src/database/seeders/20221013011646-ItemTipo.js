"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ItemTipo",
      [
        {
          nome: "Escritorio",
          descricao: "Materiais utilizados em escritório",
          imagem:
            "https://images.unsplash.com/photo-1524820801657-fd59673fbb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80",
        },
        {
          nome: "Sala de aula",
          descricao: "Materiais de sala de aula",
          imagem:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        },
        {
          nome: "Infraestrutura",
          descricao: "Materiais utilizados em corredores e de infraestrutura",
          imagem:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ItemTipo", null, {});
  },
};
