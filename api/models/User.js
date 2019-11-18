/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'User',
	primaryKey:'id',
	attributes: {
		id: {
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
			required: false,
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
    address: {
      type: 'string',
      required: false,
      allowNull: true,
      unique: false,
      maxLength: 100,
    },
    id_account: {
			model: 'Account',
			columnName: 'id_account'
		},
	},

	customToJSON: function() {
		return _.omit(this, ['emailvalidate','password',"validate"]);
	}
};
