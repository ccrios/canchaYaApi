/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'Account',
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    user_name: {
      type: 'string',
      required: false,
      allowNull: false,
      unique: true,
      maxLength: 30,
    },
    email: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true,
      maxLength: 100,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 256
    },
    validate: {
      type: 'boolean',
      required: false,
      allowNull: true,
      defaultsTo: false
    },
    emailvalidate: {
      type: 'string',
      required: false,
      allowNull: false,
      unique: true,
    },
    logged_in: {
      type: 'boolean',
      allowNull: false,
      defaultsTo: false
    },
  
  },

};

