/**
 * LoginUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const AlertMessageService = require('../services/AlertMessageService');
const AccountService = require('../services/AccountService');
//const sha256 = require('sha256');

module.exports = {


  postLogin: async function (req, res) {
    let email = req.param('email');
    email = email.toLowerCase();
    let password = req.param('password');
    //password = sha256(password);
    try {
      User.validate('email', email);
      User.validate('password', password);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }

    let user = await UserService.getUser(email, password);
    if (!user) {
      return res.json(AlertMessageService.InvalidCrenditial);
    }

    AlertMessageService.LoginSuccesfully['user'] = { user: user, token: sha256(JSON.stringify(user)) };
    return res.json(AlertMessageService.LoginSuccesfully);

  }
};




