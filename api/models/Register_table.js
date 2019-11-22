/**
 * Register_table.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tableName: 'register_table',
    primaryKey: 'id_register',
    attributes: {
      id_register: {
        type: 'number',
        autoIncrement: true
      },
      team_name: {
        type: 'string',
        required: true,
        allowNull: false,
        unique: false,
        maxLength: 30,
      },
      points: {
        type: 'number',
        required: true,
        allowNull: false,
        unique: false,
        defaultsTo: 0,
      },
      //Foreign
      user_id: {
        model: 'User',
        columnName: 'user_id'
      },
      tournament_id: {
        model: 'Tournament',
        columnName: 'tournament_id'
      },
    },

  },

};

