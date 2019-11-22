/**
 * Publicity_type.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'publicity_type',
  primaryKey: 'publicity_type_id',
  attributes: {
    publicity_type_id: {
      type: 'number',
      autoIncrement: true
    },
    duration_days: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    full_payment: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
  },
};

