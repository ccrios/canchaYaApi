/**
 * Games.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'game',
  primaryKey: 'game_id',
  attributes: {
    game_id: {
      type: 'number',
      autoIncrement: true,
    },
    team1_id: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    team2_id: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    game_type: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
    },

//Foreing Key--------------------------------------------------------
    reservation_id: {
      model: 'Reservation',
      columnName: 'reservation_id',
      required: false,
    },
    tournament_id: {
      model: 'Tournament',
      columnName: 'tournament_id',
      required: false,
    },

  },
};

