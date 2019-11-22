/**
 * Stage_type.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  tableName: 'stage_type',
  primaryKey: 'stage_type_id',
  attributes: {
    stage_type_id: {
      type: 'number',
      autoIncrement: true
    },

    type: {
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
  },

};

