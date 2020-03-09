/**
 * SportSpaceControllesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const AlertMessageService = require('../services/AlertMessageService');
const AccountService = require('../services/AccountService');
const AdministratorService = require('../services/AdministratorService');
const SportSpaceService = require('../services/SportSpaceService');


module.exports = {

  postUpdateSportSpace: async function (req, res) {


    let adminId = req.param('adminId');
    let name = req.param('name');
    let lastName = req.param('lastName');
    let phone = req.param('phone');

    let sportSpaceImage = req.param('sportSapaceImage');
    let sportSpacenit = req.param('sportSpacenit');
    let sportSpaceaddres = req.param('sportSpaceaddres');
    let sportSpaceName = req.param('sportSpaceName');
    if(!sportSpaceImage)
    {sportSpaceImage='';}

    //console.log(adminId +"-"+"-"+ name  +"-"+"-"+ lastName  +"-"+"-"+ phone  +"-"+"-"+ sportSpacenit  +"-"+"-"+sportSpaceaddres  +"-"+"-"+ sportSpaceName);
    if (!(adminId && name && lastName && phone && sportSpacenit && sportSpaceaddres && sportSpaceName)) {
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
    };

    let administrator = await AdministratorService.updateAdministrator(params_administrator,adminId);

    if (!administrator) {
      return res.json(AlertMessageService.rrorUpdatingAdmin);
    }

    let params_sport_space = {
      sport_space_image: sportSpaceImage,
      nit: sportSpacenit,
      address: sportSpaceaddres,
      name: sportSpaceName,
    }

    let sport_space = await SportSpaceService.updateSportSpaceServiceByAdministrator(params_sport_space,adminId);
    if (!sport_space) {
      return res.json(AlertMessageService.ErrorUpdatingSportSpace);
    }
    return res.json(AlertMessageService.SuccessUpdatingSportSpace);
  },


  getSportSpaceByAccount: async function (req, res) {
    const accountId=req.param("id");
    let admin = await AdministratorService.getAdministratorByAccount(accountId);
    if (!admin) {
      return res.json(AlertMessageService.NoAdministratorFound);
    }

    let SportSpace = await SportSpaceService.getSportSpaceByAdmin(admin.administrator_id);
    if (!SportSpace) {
      return res.json(AlertMessageService.NoSportSpaceFouns);
    }

    return res.json({status:true, sportSpace:SportSpace, administrator:admin});

  },






};

