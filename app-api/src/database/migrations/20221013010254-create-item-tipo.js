'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // Nome do model alterado de "ItemTipos" para "ItemTipo"
    await queryInterface.createTable('ItemTipo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // Nome do model alterado de "ItemTipos" para "ItemTipo"
    await queryInterface.dropTable('ItemTipo');
  }
};