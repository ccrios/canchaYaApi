/**
 * RegisterPersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const EnvConfig = require('../../config/EnvConfig').commonConfig.domain;


module.exports = {

   /*

	getRegister: async function(req,res){
		let countries = await CountryService.findall();
		if(countries){
		  return res.json({status:true,countries:countries});
		}else {
		  return res.json({status:false, message:"Error search coutries"});
		}
	 },

	postCities: async function(req,res){
		let cities = await CityService.getCitiesByState(req.param('state_id'));
		if(cities){
		  return res.json({status:true,cities:cities});
		}else {
		  return res.json({status:false, message:"Error search coutries"});
		}
	 },


	 getvValidateAccount: async function(req,res){



		let user = await UserService.getValidateUser(req.param('validate'));

		if (!user){

			return res.json({status:false, message:"error processing the data"});
		}

		let update = await UserService.updateValidateUser(req.param('validate'));
		if (!update){
			return res.json({status:false, message:"error updating the account"});
		}
		return res.json({status:true});
	},


	postRegister: async function(req,res){
		let firstname = req.param('firstname');
		let lastname = req.param('lastname');
		let phone = req.param('phone');
		let user_id=req.param('user_id');
		let country_id = req.param('country_id');
		let state_id = req.param('state_id');
		let city_id = req.param('city_id');
		let zipcode = req.param('zipcode');
		let address = req.param('address');


		if(!(firstname && lastname && phone  && country_id && state_id && city_id &&  address)){
			return res.json(AlertMessageService.NoParamsBody);
		}

		try {
			Person.validate('firstname', firstname);
			Person.validate('lastname', lastname);
			Person.validate('phone', phone);
			Location.validate('address', address);
			// Location.validate('zipcode', zipcode);
		} catch (err) {
			return res.json(AlertMessageService.InvalidField);
		}

		let country = await CountryService.getCountryById(country_id);
		if (!country) {
			return res.json(AlertMessageService.NotFoundCountry);
		};
		let state = await StateService.existStateWithCountry(state_id,country_id);
		if (!state) {
			return res.json(AlertMessageService.NotFoundState);
		};
		let city =  await CityService.existCityWithState(city_id, state_id);
		if (!city) {
			return res.json(AlertMessageService.NotFoundCity);
		};



		let params_location={
			address: address,
			zipcode: zipcode,
			city: city_id,
			country: country_id,
			state: state_id,
			user:user_id,
		};

		let location = await LocationService.createLocation(params_location);
		if(!location){
			return res.json(AlertMessageService.ErrorCreateLocation);
		}

		let params_person = {
			firstname: firstname,
			lastname: lastname,
			phone: phone,
			location: location.id,
            user:user_id,
        };

		let person_create = await PersonService.createPerson(params_person);

		if(!person_create){
			return res.json(AlertMessageService.ErrorCreateUser);
		}

		let user = await UserService.getUserById(person_create.user);

		sails.hooks.email.send("confirmationRegister", {
			name: firstname,
			url: EnvConfig.url+"/validateAccount/" + user.emailvalidate
		},
		{
			to:user.email,
			subject: "Validate Account/Validar Cuenta"
		},
		function(err) {if(err){sails.log.error(err);}}
	);


		return res.json(AlertMessageService.SuccessRegister);
	},


	reSend: async function(req,res){
		let user = await UserService.getUserById(req.param('id'));

		sails.hooks.email.send("confirmationRegister", {
			name: user.person.firstname,
			url: EnvConfig.url+"/validateAccount/" + user.emailvalidate
		},
		{
			to:user.email,
			subject: "Validate Account/Validar Cuenta"
		},
		function(err) {if(err){sails.log.error(err);}}
	);


		return res.json(AlertMessageService.SuccessReSend);
	}
    */

};



