/**
 * Concept_payment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'concept_payment',
  primaryKey: 'cpncept_payment_id',
  attributes: {
    concept_payment_id: {
      type: 'number',
      autoIncrement: true
    },

    type_payment: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: false,
      maxLength: 30,
    },
  }
  ,

};

