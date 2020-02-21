/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const TestService =  require('../services/testService');
module.exports = {

  test: async function (req, res) {
    let textValue = req.param('textValue');
    let otro = req.param('otro');


    let params = {
      name: textValue,
      description: otro,
    };

    let roll = await TestService.test(params);
    if (!roll) {
      return res.json(AlertMessageService.ErrorCreateUser);
    }

    AlertMessageService.SuccessCreateUser['roll'] = { roll: roll};
    return res.json(AlertMessageService.SuccessCreateUser);
  }



};

