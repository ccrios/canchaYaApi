/**
 * Publicity_ranking.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'publicity_ranking',
  primaryKey: 'ranking_id',
  attributes: {
    ranking_id: {
      type: 'number',
      autoIncrement: true
    },
    register_date: {
      type: 'string',
      columnType: 'date',
      required: true,
      allowNull: false,
      unique: false,
    },

    //Foreing Key--------------------------------------------------------
    stage_id: {
      model: 'Stage',
      columnName: 'stage_id'
    },
    publicity_type_id: {
      model: 'Publicity_type',
      columnName: 'publicity_type_id'
    },
  },

};

