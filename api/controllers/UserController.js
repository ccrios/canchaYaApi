/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const AlertMessageService = require('../services/AlertMessageService');
const UserService = require('../services/UserService');

module.exports = {

  postUpdateUser: async function (req, res) {


    let name = req.param('name');
    let lastName = req.param('lastName');
    let phone = req.param('phone');
    let address = req.param('address');
    let user_id = req.param('userId');



    if (!(name && lastName && phone && address && address && user_id)) {
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



    let params_user = {
      name: name,
      last_name: lastName,
      phone: phone,
      address: address,
    };

    let user_created = await UserService.updateUser(params_user,user_id);
    if (!user_created) {
      return res.json(AlertMessageService.ErrorUpdatingUser);
    }

    return res.json(AlertMessageService.SuccessUpdatingUser);
  },






};

