

module.exports = {


  test: async function (params) {
    try {
      return await Role.create(params).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

};
