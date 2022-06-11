'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemPatrimonios', {
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
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemPatrimonios');
  }
};