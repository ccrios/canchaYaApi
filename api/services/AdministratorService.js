

module.exports = {


  createAdministrator: async function (params) {
    try {
      return await Administrator.create(params).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },


  getAdministratorById: async function (administrator_id) {
    try {
      return await Administrator.findOne({administrator_id:administrator_id});
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  getAdministratorByAccount: async function (id_account) {
    try {
      return await Administrator.findOne({id_account:id_account});
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },


  updateAdministrator: async function (params,id) {
    try {
      await Administrator.update({ administrator_id :id }).set(
				params
      );
      return true;
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

};
