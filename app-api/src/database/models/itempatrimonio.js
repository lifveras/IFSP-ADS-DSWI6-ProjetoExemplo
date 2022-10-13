"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ItemPatrimonio extends Model {
    static associate(models) {
      // define associação com responsavel
      ItemPatrimonio.hasOne(models.Responsavel, {
        foreignKey: 'responsavelId',
        onDelete: 'NOTHING'
      });
      // define associação com itemtipo
      ItemPatrimonio.hasOne(models.ItemTipo, {
        foreignKey: 'itemTipoId',
        onDelete: 'NOTHING'
      });
    }
  }
  ItemPatrimonio.init(
    {
      patrimonio: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      descricao: DataTypes.STRING,
      itemTipoId: {
        type: DataTypes.INTEGER,
        // Define a relação entre ItemTipo e ItemPatrimonio através da chave primária "id"
        references: {
          model: "ItemTipos",
          key: "id",
          as: "itemTipoId",
        },
      },
      dataAquisicao: DataTypes.DATE,
      precoAquisicao: DataTypes.FLOAT,
      departamento: DataTypes.STRING,
      responsavelId: {
        type: DataTypes.STRING,
        // Define a relação entre Responsavel e ItemPatrimonio através da chave primária "prontuário"
        references: {
          model: "Responsavel",
          key: "prontuario",
          as: "responsavelId",
        },
      },
    },
    {
      sequelize,
      modelName: "ItemPatrimonio",
    }
  );
  return ItemPatrimonio;
};
