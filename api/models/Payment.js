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
    payment_ref: {
      type: 'number',
      required: true,
      allowNull: false,
      unique: false,
    },
    descripcion: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 500,
    },

    //foreign
    stage_id: {
      model: 'Concept_payment',
      columnName: 'concept_payment_id',
    },
  },

};

