/**
 *
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const AlertMessageService = require('../services/AlertMessageService');
const AccountService = require('../services/AccountService');
const AdministratorService = require('../services/AdministratorService');
const sha256 = require('sha256');
const randomstring = require("randomstring");


module.exports = {

  postRegisterAccountAdmin: async function (req, res) {
    let email = req.param('email');
    email = email.toLowerCase();
    let password = req.param('password');
    //password = sha256(password);

    try {
      Accoungt.validate('email', email);
      Accoungt.validate('password', password);
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
      validate: false,
      emailvalidate: sha256(email + randomstring.generate()),
      role: 1,
    };

    let account_create = await AccountService.createAccount(params_account);
    if (!account_create) {
      return res.json(AlertMessageService.ErrorCreateUser);
    }

    AlertMessageService.SuccessCreateUser['user'] = { accountId: account_create.id };
    return res.json(AlertMessageService.SuccessCreateUser);
  },

  postRegisterAdmin: async function (req, res) {
    let name = req.param('name');
    let lastName = req.param('lastName');
    let phone = req.param('phone');
    let accountId = req.param('accountId');


    if (!(name && lastName && phone && user && userId)) {
      return res.json(AlertMessageService.NoParamsBody);
    }

    try {
      Administrator.validate('name', name);
      Administrator.validate('last_name', name);
      Administrator.validate('phone', phone);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }

    let params_administrator = {
      name: firstname,
      last_name: lastName,
      phone: phone,
      id_account: accountId,
    };

    let administrator_created = await AdministratorService.createAdministrator(params_administrator);

    if (!administrator_created) {
      return res.json(AlertMessageService.ErrorCreateUser);
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



};

