'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPatrimonio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemPatrimonio.hasOne(models.responsavel, {
        foreignKey: 'responsavelId',
        onDelete: 'NOTHING'
      });
      ItemPatrimonio.hasOne(models.itemtipo, {
        foreignKey: 'itemTipoId',
        onDelete: 'NOTHING'
      });
    }
  }
  ItemPatrimonio.init({
    patrimonio: DataTypes.STRING,
    descricao: DataTypes.STRING,
    itemTipoId: DataTypes.INTEGER,
    dataAquisicao: DataTypes.DATE,
    precoAquisicao: DataTypes.FLOAT,
    departamento: DataTypes.STRING,
    responsavelId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ItemPatrimonio',
  });
  return ItemPatrimonio;
};