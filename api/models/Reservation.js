/**
 * Reservation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'reservation',
  primaryKey: 'reservation_id',
  attributes: {
    reservation_id: {
      type: 'number',
      autoIncrement: true
    },
    description: {
      type: 'string',
      required: false,
      allowNull: false,
      unique: false,
      maxLength: 500,
    },
    reservation_type: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 30,
    },
    //foreign
    id_account: {
      model: 'Account',
      columnName: 'id_account'
    },
  },
};

