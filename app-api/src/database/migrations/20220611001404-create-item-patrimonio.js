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
        type: Sequelize.INTEGER,
        // Define a relação entre ItemTipo e ItemPatrimonio
        // onDelete: 'NOTHING',
        references: {
          model: 'ItemTipos',
          key: 'id',
          as: 'itemTipoId',
        }
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
        type: Sequelize.STRING,
        // Define a relação entre Responsavel e ItemPatrimonio
        // onDelete: 'NOTHING',
        references: {
          model: 'Responsaveis',
          key: 'prontuario',
          as: 'responsavelId',
        }
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