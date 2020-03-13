/**
 * Register.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


    tableName: 'register',
    primaryKey: 'register_id',
    attributes: {
      register_id: {
        type: 'number',
        autoIncrement: true,
      },
      points: {
        type: 'number',
        allowNull: false,
        unique: false,
        defaultsTo: 0,
      },
      team_name: {
        type: 'string',
        required: true,
        allowNull: false,
        unique: false,
        maxLength: 30,
      },
      register_status: {
        type: 'string',
        required: true,
        allowNull: false,
        unique: false,
        maxLength: 30,
      },


//Foreing Key--------------------------------------------------------
      user_id: {
        model: 'User',
        columnName: 'user_id'
      },
      tournament_id: {
        model: 'Tournament',
        columnName: 'tournament_id'
      },
    },



};

