module.exports = {
  createAdministrator: async function (params) {
    try {
      return await Administrator.create(params).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },
};
