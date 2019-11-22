/**
 * Sport_space.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'sport_space',
  primaryKey: 'sport_space_id',
  attributes: {
    sport_space_id: {
      type: 'number',
      autoIncrement: true
    },
    sport_space_image: {
      type: 'string',
      required: false,
      allowNull: true,
      unique: false,
      maxLength: 300,
    },
    nit: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: true,
    },
    address: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true,
      maxLength: 100,
    },
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 30,
    },
    //foreign
    administrator_id: {
      model: 'Administrator',
      columnName: 'administrator_id'
    },
    //collections
    stage_table_collection: {
      collection: "Stage",
      via: "sport_space_id"
    },
  },
};

