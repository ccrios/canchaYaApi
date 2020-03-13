/**
 * Administrator.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'administrator',
  primaryKey: 'administrator_id',
  attributes: {
    administrator_id: {
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
    last_name: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 30,
    },
    phone: {
      type: 'string',
      required: false,
      allowNull: true,
      unique: false,
      maxLength: 30,
    },
//Foreing Key--------------------------------------------------------
    id_account: {
      model: 'Account',
      columnName: 'account_id',
      unique:true,
    },

  },
};

