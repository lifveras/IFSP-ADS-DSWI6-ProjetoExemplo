'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // Nome do model alterado de "ItemPatrimonios" para "ItemPatrimonio"
    await queryInterface.createTable('ItemPatrimonio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patrimonio: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      itemTipoId: {
        type: Sequelize.INTEGER
      },
      dataAquisicao: {
        type: Sequelize.DATE
      },
      precoAquisicao: {
        type: Sequelize.FLOAT
      },
      departamento: {
        type: Sequelize.STRING
      },
      responsavelId: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // Nome do model alterado de "ItemPatrimonios" para "ItemPatrimonio"
    await queryInterface.dropTable('ItemPatrimonio');
  }
};