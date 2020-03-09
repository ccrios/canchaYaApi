/**
 * Tournament.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


    tableName: 'tournament',
    primaryKey: 'tournament_id',
    attributes: {
      tournament_id: {
        type: 'number',
        autoIncrement: true,
      },
      tournament_name: {
        type: 'string',
        required: true,
        allowNull: false,
        unique: false,
        maxLength: 30,
      },
      init_date: {
        type: 'string',
        columnType: 'date',
        required: true,
        unique: false,
      },
      /*
      tournament_status var have the following options:
      - noEmpty
      - active
      - finish
      */
      tournament_status: {
        type: 'string',
        required: true,
        allowNull: false,
        unique: false,
        maxLength: 30,
      },
      quantity_team: {
        type: 'number',
        required: true,
        allowNull: false,
        unique: false,
      },
      registration_payment: {
        type: 'number',
        required: true,
        allowNull: false,
        unique: false,
      },
      tournament_prize: {
        type: 'number',
        required: true,
        allowNull: false,
        unique: false,
      },
      //foreign key
      administrator_id: {
        model: 'Administrator',
        columnName: 'administrator_id'
      },

      //collections
      register_collection: {
        collection: 'Register',
        via: 'tournament_id',
      },

      games_collection: {
        collection: 'Game',
        via: 'tournament_id',
      },
    },


};

