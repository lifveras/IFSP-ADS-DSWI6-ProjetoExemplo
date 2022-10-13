'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Responsavel extends Model {
    static associate(models) {
      Responsavel.belongsTo(models.ItemPatrimonio);
    }
  }
  Responsavel.init({
    prontuario: DataTypes.STRING,
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Responsavel',
  });
  return Responsavel;
};