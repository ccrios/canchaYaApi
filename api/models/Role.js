/**
 * Role.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'Role',
	primaryKey:'id',
	attributes: {
		id: {
			type: 'number',
			autoIncrement: true
		},
		name: {
			type: 'string',
			required: true,
			unique: false,
			allowNull:false,
			columnType:'character varying(20) not null'
		},
		description: {
			type: 'string',
			required: true,
			unique: false,
			allowNull:false,
			columnType:'character varying(50) not null'
		}
		
  }
};

