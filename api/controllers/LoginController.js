/**
 * LoginUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const AlertMessageService = require('../services/AlertMessageService');
const AccountService = require('../services/AccountService');
const sha256 = require('sha256');

module.exports = {


  postLogin: async function (req, res) {
    let email = req.param('email');
    email = email.toLowerCase();
    let password = req.param('password');
    //password = sha256(password);
    console.log(email);
    console.log(password);

    // try {
    //   Account.validate('email', email);
    //   Account.validate('password', password);
    // } catch (err) {
    //   return res.json(AlertMessageService.InvalidField);
    // }

    let Account = await AccountService.getAccount(email, password);
    if (!Account) {
      return res.json(AlertMessageService.InvalidCrenditial);
    }

    AlertMessageService.LoginSuccesfully['Account'] = { Account: Account, token: sha256(JSON.stringify(Account)) };
    return res.json(AlertMessageService.LoginSuccesfully);

  }
};




