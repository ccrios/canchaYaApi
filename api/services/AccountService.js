

module.exports = {



    createAccount: async function(params_account){
		try {
			return await Account.create(params_account).fetch();
		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
    },

	existEmailAccount: async function(email) {
		try {
      const account_email = await Account.findOne({email: email});
			if(account_email){
				return true;
			}else {
				return false;
			}
		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
	},

	getAccount: async function(email,password) {
		try {
			const account = await Account.findOne( {where: {email: email,password: password}, select: ['id','email','role','validate']});
			if(!account){
				return null;
			}
			const person = await PersonService.getPerson(account.id);
			account['person']=person;

			return account;

		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
  },
  getAccountWithEmail: async function(email) {
		try {
			const account = await Account.findOne( {where: {email: email}});
			if(!account){
				return null;
      }
      const person = await User.findOne({where: {id_account: account.account_id}});
			account['person']=person;

			return account;

		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
	},

	updateValidateAccount: async function(validate) {
		try {

			await Account.updateOne({ emailvalidate:validate })
			.set({
				validate:true
			});

			return true;

		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
	},

	getValidateAccount: async function(emailvalidate) {
		try {
			const account = await Account.findOne( {where: {emailvalidate:emailvalidate}, select: ['id','emailvalidate','validate']});
			return account;

		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
	},

	getAccountById: async function(id) {
		try {
			const account = await Account.findOne( {where: {id:id}, select: ['id','email','role','validate','emailvalidate']});
			if(!account){
				return null;
			}
			const person = await PersonService.getPerson(account.id);
			account['person']=person;

			return account;

		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
	},


};
