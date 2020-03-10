module.exports = {
  createUser: async function (params) {
    try {
      return await User.create(params).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },


  getUserById: async function (user_id) {
    try {
      return await User.findOne({user_id:user_id});
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  getUserByAccount: async function (id_account) {
    try {
      return await User.findOne({id_account:id_account});
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },


  updateUser: async function (params,id) {
    try {
      await User.update({ user_id :id }).set(
				params
      );
      return true;
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },
};
