/**
 * Payment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  tableName: 'payment',
  primaryKey: 'payment_id',
  attributes: {
    payment_id: {
      type: 'number',
      autoIncrement: true
    },
    descripcion: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 500,
    },
    Concept_payment: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 50,
    },
    amount_payment: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    date: {
      type: 'string',
      columnType: 'date',
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

    register_id: {
      model: 'Register',
      columnName: 'register_id',
      required: false,
    },
  },

};

