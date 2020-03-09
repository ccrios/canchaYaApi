/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'account',
  primaryKey: 'account_id',
  attributes: {
    account_id: {
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
    role: {
			model: 'Role',
			columnName: 'role_id'
    }

  },
	customToJSON: function() {
		return _.omit(this, ['emailvalidate','password']);
	}
};

