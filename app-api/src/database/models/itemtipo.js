'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemTipo extends Model {
    static associate(models) {
      ItemTipo.belongsTo(models.ItemPatrimonio);
    }
  }
  ItemTipo.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ItemTipo',
  });
  return ItemTipo;
};