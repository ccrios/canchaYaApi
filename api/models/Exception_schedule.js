/**
 * Exception_schedule.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'exception_schedule',
  primaryKey: 'exception_id',
  attributes: {
    exception_id: {
      type: 'number',
      autoIncrement: true
    },
    day: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    month: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    year: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    start_time: {
      type: 'string',
      columnType: 'date',
      required: true,
      unique: false,
    },
    quantity_time: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },

    occupation_type: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 5,
    },

//Foreing Key--------------------------------------------------------
    stage_id: {
      model: 'Stage',
      columnName: 'stage_id',
    },
  },

};

