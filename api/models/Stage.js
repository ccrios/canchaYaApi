/**
 * Stage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'stage',
  primaryKey: 'stage_id',
  attributes: {
    stage_id: {
      type: 'number',
      autoIncrement: true
    },
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 30,
    },
    descripcion: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 500,
    },
    width: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    heigth: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    //foreign
    stage_type_id: {
      model: 'Stage_type',
      columnName: 'stage_type_id',
    },
    sport_space_id: {
      model: 'Sport_space',
      columnName: 'sport_space_id',
    },

  },
};

