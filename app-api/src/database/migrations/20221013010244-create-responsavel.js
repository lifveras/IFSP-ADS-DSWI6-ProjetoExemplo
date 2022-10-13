'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // Nome do model alterado de "Responsaveis" para "Responsavel"
    await queryInterface.createTable('Responsavel', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prontuario: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // Nome do model alterado de "Responsaveis" para "Responsavel"
    await queryInterface.dropTable('Responsavel');
  }
};