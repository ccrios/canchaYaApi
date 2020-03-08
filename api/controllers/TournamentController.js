/**
 * TournamentControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const TournamentService = require('../services/TournamentService');
const AlertMessageService = require('../services/AlertMessageService');
module.exports = {
  postCreateTournament: async function (req, res) {
    let tournamentName = req.param('tournamentName');
    let quantityTeam = req.param('quantityTeam');
    let registrationPayment = req.param('registrationPayment');
    let tournamentPrize = req.param('tournamentPrize');
    let initDate = req.param('initDate');
    let administratorId = req.param('administratorId');


    try {
      Tournament.validate('tournament_name',tournamentName);
      Tournament.validate('init_date',initDate);
      Tournament.validate('quantity_team',quantityTeam);
      Tournament.validate('registration_payment',registrationPayment);
      Tournament.validate('tournament_prize',tournamentPrize);
      Tournament.validate('administrator_id',administratorId);


    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }
    let paramsTournament = {
      tournament_name: tournamentName,
      init_date: initDate,
      tournament_status: 'noStarting',
      quantity_team: quantityTeam,
      registration_payment: registrationPayment,
      tournament_prize: tournamentPrize,
      administrator_id : administratorId,
    };
    let tournamentCreate = await TournamentService.createTournamentService(paramsTournament);
    if (!tournamentCreate) {
      return res.json(AlertMessageService.ErrorCreateTournament);
    }

    AlertMessageService.SuccessCreateTournament['tournament'] = { tournamentCreate};
    return res.json(AlertMessageService.SuccessCreateTournament);
  },
  getViewTournamentNoStarting: async function (req,res){
    sails.log(req.param('id'));
    let tournamentView = await TournamentService.viewTournamentService(req.param('id'),'noStarting');
    if (!tournamentView) {
      return res.json(AlertMessageService.ErrorCreateTournament);
    }

    AlertMessageService.SuccessViewTournament['tournamentNoStarting'] = {tournamentView};
    return res.json(AlertMessageService.SuccessViewTournament);

  }

};

