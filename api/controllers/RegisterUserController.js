/**
 * RegisterUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//const AlertMessageService = require('../services/AlertMessageService');
//const AccountService = require('../services/AccountService');
//const sha256 = require('sha256');
//const randomstring = require("randomstring");
//const Contry = require('../services/CountryService');
//const State = require('../services/StateService');
//const City = require('../services/CityService');



module.exports = {
/*
	pruebaPaises:async function(req,res){

		let user_email = await Contry.createCountry({
			countryname: "Colombia",
			sortname: "CO",
			currency: "COP",
			countrycode: 57

		});
		let aux=req.param('paises');
			for (let index = 0; index < aux.length; index++){
				let estate_param={
					statename:aux[index].departamento,
					country:1,
				};
				let state_create = await State.createState(estate_param);
				for (let index2 = 0; index2 < aux[index].ciudades.length; index2++){
					let city_param={
						cityname:aux[index].ciudades[index2],
						state:aux[index].id+1,

					};

					let state_create = await City.createCity(city_param);
				}
		}


	},


    postRegister: async function(req,res){
		let email = req.param('email');
		email = email.toLowerCase();
		let password = req.param('password');
		password = sha256(password);

		try {
			User.validate('email', email);
			User.validate('password', password);
		} catch (err) {
			return res.json(AlertMessageService.InvalidField);
		}
		let user_email = await UserService.existEmailUser(email);
		if(user_email){
			return res.json(AlertMessageService.EmailExist);
		}

		let params_user = {
			email: email,
            password: password,
            validate:false,
			emailvalidate: sha256(email + randomstring.generate()),
			role:1,
		};

		let user_create = await UserService.createUser(params_user);


		if(!user_create){
			return res.json(AlertMessageService.ErrorCreateUser);
		}

		AlertMessageService.SuccessCreateUser['info_user']={id_user:user_create.id};
		return res.json(AlertMessageService.SuccessCreateUser);

	}*/
};




