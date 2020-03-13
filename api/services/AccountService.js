

module.exports = {



  createAccount: async function (params_account) {
    try {
      return await Account.create(params_account).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  existEmailAccount: async function (email) {
    try {
      const account_email = await Account.findOne({ email: email });
      if (account_email) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  getAccount: async function (email, password) {
    try {
      const account = await Account.findOne({ where: { email: email, password: password }, select: ['account_id', 'email', 'role', 'validate'] });
      if (!account) {
        return null;
      }


      if (account.role == 1) {
        const administrator = await Administrator.find({ id_account: account.account_id });
        account['administrator'] = administrator;
      }
      else {
        const user = await User.find({ id_account: account.account_id });
        account['user'] = user;
      }

      return account;
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  updateValidateAccount: async function (validate) {
    try {

      await Account.update({ emailvalidate: validate })
        .set({
          validate: true
        });

      return true;

    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },


  updateAccount: async function (id, params) {
    try {

      await Account.update({ account_id: id })
        .set(params);

      return true;

    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  getValidateAccount: async function (emailvalidate) {
    try {
      const account = await Account.findOne({ where: { emailvalidate: emailvalidate }, select: ['account_id', 'emailvalidate', 'validate'] });
      return account;

    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  getAccountById: async function (id) {
    try {
      const account = await Account.findOne({ where: { account_id: id }, select: ['account_id', 'email', 'role', 'validate', 'emailvalidate'] });
      if (!account) {
        return null;
      }
      const administrator = await Administrator.find({ id_account: account.account_id });
      account['administrator'] = administrator;

      return account;

    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },


  getAccountByIEmail: async function (email) {
    try {
      const account = await Account.findOne({ where: { email: email }, select: ['account_id', 'email', 'role', 'validate', 'emailvalidate'] });
      if (!account) {
        return null;
      }
      return account;

    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },


};
