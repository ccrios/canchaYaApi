

module.exports = {



    createPerson: async function(params_user){
		try {
			return await Person.create(params_user).fetch();
			
		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
    },
    
	
	existDocumentPerson: async function(document) {
		try {
			const person_document = await Person.findOne({document: document});
			if(person_document){
				return true;
			}else {
				return false;
			}
		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
	},
	
	existUser: async function(id_user) {
		try{
			const user = await User.findOne({id: id_user});
			if(user){
				return true;
			}else {
				return false;
			}
		}catch(err){
			sails.log.error(err);
			return undefined;
		}
	},

	getPerson: async function(id_user) {
		try{
			const person = await Person.findOne({user: id_user});
			
				return person;
			
		}catch(err){
			sails.log.error(err);
			return undefined;
		}
	},

	
};