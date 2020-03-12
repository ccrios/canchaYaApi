/**
 *
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const AlertMessageService = require('../services/AlertMessageService');
const AccountService = require('../services/AccountService');
const AdministratorService = require('../services/AdministratorService');
const UserService = require('../services/UserService');
const SportSpaceService = require('../services/SportSpaceService');
const sha256 = require('sha256');
const randomstring = require("randomstring");
const EnvConfig = require('../../config/EnvConfig').commonConfig.domain;

module.exports = {
  postRegisterAccountAdmin: async function (req, res) {
    let userName= req.param('userName');
    let email = req.param('email');
    email = email.toLowerCase();
    let password = req.param('password');
    //password = sha256(password);
    try {
      Account.validate('email', email);
      Account.validate('password', password);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }

    let account_email = await AccountService.existEmailAccount(email);
    if (account_email) {
      return res.json(AlertMessageService.EmailExist);
    }

    let params_account = {
      user_name: userName,
      email: email,
      password: password,
      validate: false,
      emailvalidate: sha256(email + randomstring.generate()),
      role: 1,
    };

    let account_create = await AccountService.createAccount(params_account);
    if (!account_create) {
      return res.json(AlertMessageService.ErrorCreateUser);
    }

    AlertMessageService.SuccessCreateUser['user'] = { accountId: account_create.account_id };
    return res.json(AlertMessageService.SuccessCreateUser);
  },

  postRegisterAdmin: async function (req, res) {
    let name = req.param('name');
    let lastName = req.param('lastName');
    let phone = req.param('phone');
    let accountId = req.param('accountId');

    let sportSpaceImage = req.param('sportSapaceImage');
    let sportSpacenit = req.param('sportSapacenit');
    let sportSpaceaddres = req.param('sportSapaceaddres');
    let sportSpaceName = req.param('sportSapaceName');


    if (!(name && lastName && phone && accountId && sportSpacenit && sportSpaceaddres && sportSpaceName)) {
      return res.json(AlertMessageService.NoParamsBody);
    }

    try {
      Administrator.validate('name', name);
      Administrator.validate('last_name', lastName);
      Administrator.validate('phone', phone);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }

    let params_administrator = {
      name: name,
      last_name: lastName,
      phone: phone,
      id_account: accountId,
    };

    let administrator_created = await AdministratorService.createAdministrator(params_administrator);

    if (!administrator_created) {
      return res.json(AlertMessageService.ErrorCreateUser);
    }

    let params_sport_space = {
      sport_space_image: sportSpaceImage,
      nit: sportSpacenit,
      address: sportSpaceaddres,
      name: sportSpaceName,
      administrator_id: administrator_created.administrator_id
    }

    let sport_space = await SportSpaceService.createSportSpaceService(params_sport_space);
    if (!sport_space) {
      return res.json(AlertMessageService.ErrorCreateSportSpace);
    }


    // let user = await UserService.getUserById(person_create.user);

    // sails.hooks.email.send("confirmationRegister", {
    //   name: firstname,
    //   url: EnvConfig.url + "/validateAccount/" + user.emailvalidate
    // },
    //   {
    //     to: user.email,
    //     subject: "Validate Account/Validar Cuenta"
    //   },
    //   function (err) { if (err) { sails.log.error(err); } }
    // );


    return res.json(AlertMessageService.SuccessRegister);
  },

///// aqui voy register user

  postRegisterUser: async function (req, res) {


    let name = req.param('name');
    let lastName = req.param('lastName');
    let phone = req.param('phone');
    let address = req.param('address');


    let email = req.param('email');
    email = email.toLowerCase();
    let password = req.param('password');
    if(!password) {
      password=sha256("123");
    }
    //password = sha256(password);
    try {
      Account.validate('email', email);
      Account.validate('password', password);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }

    if (!(name && lastName && phone && address && email && password)) {
      return res.json(AlertMessageService.NoParamsBody);
    }

    try {
      Administrator.validate('name', name);
      Administrator.validate('last_name', lastName);
      Administrator.validate('phone', phone);
      Administrator.validate('address', address);

    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }


    let account_email = await AccountService.existEmailAccount(email);
    if (account_email) {
      return res.json(AlertMessageService.EmailExist);
    }

    let params_account = {
      email: email,
      password: password,
      validate: true,
      emailvalidate: sha256(email + randomstring.generate()),
      role: 2,
    };

    let account_create = await AccountService.createAccount(params_account);
    if (!account_create) {
      return res.json(AlertMessageService.ErrorCreateUser);
    }


    let params_user = {
      name: name,
      last_name: lastName,
      phone: phone,
      address: address,
      id_account: account_create.account_id,
    };

    let user_created = await UserService.createUser(params_user);
    if (!user_created) {
      return res.json(AlertMessageService.ErrorCreateUser);
    }




    // sails.hooks.email.send("confirmationRegister", {
    //    name: firstname,
    //    url: EnvConfig.url + "/validateAccount/" + account_create.emailvalidate
    //  },
    //    {
    //      to: user.email,
    //      subject: "Validate Account/Validar Cuenta"
    //    },
    //    function (err) { if (err) { sails.log.error(err); } }
    // );

    AlertMessageService.SuccessCreateUser['user'] = { accountId: account_create.account_id };
    return res.json(AlertMessageService.SuccessCreateUser);
  },







  restorePassword: async function (req, res) {
    let email = req.param('email');
    email = email.toLowerCase();

    try {

      Account.validate('email', email);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }

    let account_email = await AccountService.existEmailAccount(email);
    if (!account_email) {
      return res.json(AlertMessageService.NotFoundUser);
    }


    let account = await AccountService.getAccountByIEmail(email);
    if (!account) {
      return res.json(AlertMessageService.NotFoundUser);
    }

    let params= {
      emailvalidate: sha256(email + randomstring.generate()),
    }

    let updateAccount= await AccountService.updateAccount(account.account_id,params);
    if(!updateAccount){
      return res.json(AlertMessageService.NotFoundUser);
    }


    sails.hooks.email.send("RestablecerContraseña", {
      url: EnvConfig.url + "/restoredPassword/" + params.emailvalidate
    },
      {
        to: email,
        subject: "Restablecer contraseña"
      },
      function (err) { if (err) { sails.log.error(err); } }
    );

    return res.json({status:true});
  },


  chamgePassword: async function (req, res) {
    let validate = req.param('validate');
    let password = req.param('password');


    if(!(validate && password)){
      return res.json(AlertMessageService.InvalidField);
    }

    let account = await AccountService.getValidateAccount(validate);
    if (!account) {
      return res.json(AlertMessageService.NoFounAccount);
    }


    let params= {
      password: password
    }

    let updateAccount= await AccountService.updateAccount(account.account_id,params);
    if(!updateAccount){
      return res.json(AlertMessageService.ErrorUpdatingAccount);
    }

    return res.json({status:true});
  },




};

