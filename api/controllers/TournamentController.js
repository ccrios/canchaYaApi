/**
 * TournamentControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const TournamentService = require('../services/TournamentService');
const AlertMessageService = require('../services/AlertMessageService');
const AccountService = require('../services/AccountService');
module.exports = {
  getViewTournamentNoStarting: async function (req,res){
    sails.log(req.param('id'));
    let tournamentView = await TournamentService.viewTournamentService(req.param('id'),'noStarting');
    if (!tournamentView) {
      return res.json(AlertMessageService.ErrorCreateTournament);
    }

    AlertMessageService.SuccessViewTournament['tournamentNoStarting'] = {tournamentView};
    return res.json(AlertMessageService.SuccessViewTournament);

  },
  getViewTournamentActive: async function (req,res){
    let tournamentView = await TournamentService.viewTournamentService(req.param('id'),'active');
    if (!tournamentView) {
      return res.json(AlertMessageService.ErrorCreateTournament);
    }

    AlertMessageService.SuccessViewTournament['tournamentActive'] = {tournamentView};
    return res.json(AlertMessageService.SuccessViewTournament);

  },
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
  postRegisterNewTournamentParticipant: async function (req, res){
    let teamName = req.param('teamName');
    let userId = req.param('userId');
    let tournamentId = req.param('tournamentId');
    let payment = req.param('payment');
    let amountPayment = req.param('amountPayment');

    try {
      Register.validate('team_name', teamName);
      Register.validate('user_id', userId);
      Register.validate('tournament_id', tournamentId);
      if (payment){
        Payment.validate('amount_payment', amountPayment);
      }
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }
    let registerStatus = '';
    let paramsPayment = {};
    let dateRegister = await TournamentService.pgFormatDate(Date.now());
    dateRegister = dateRegister.split(' ');
    let datePayment = dateRegister[2] + '/'+dateRegister[1] + '/'+dateRegister[0] + ' '+dateRegister[3] + ':'+dateRegister[4] + ':'+dateRegister[5] ;
    sails.log(dateRegister);
    if (payment){
      registerStatus = 'payment';

      paramsPayment = {
        descripcion: 'Se registra el ingreso de un nuevo participante a el torneo torneo',
        concept_payment: 'register_tournament',
        amount_payment: amountPayment,
        date: datePayment,
      };
    }else{
      registerStatus = 'no payment';
    }

    let paramsRegister= {
      points: 0,
      team_name: teamName,
      register_status: registerStatus,
      user_id: userId,
      tournament_id: tournamentId,
    };
    let register = await TournamentService.registerParticipant(paramsRegister);
    let registerPayment;
    if(register){
      AlertMessageService.SuccessRegisterParticipantTournament['register'] = register;
      if(payment){
        paramsPayment['register_id'] = register.register_id;
        registerPayment = await TournamentService.registerPayment(paramsPayment);
        if(registerPayment){
          AlertMessageService.SuccessRegisterParticipantTournament['payment'] = registerPayment;
        }
      }else{
        return res.json(AlertMessageService.ErrorViewDetailTournament);
      }
      return res.json(AlertMessageService.ErrorViewDetailTournament);
    }
    return res.json(AlertMessageService.SuccessRegisterParticipantTournament);
  },
  /* Verifica si el email del usuario se encuentra registrado*/
  postVerifyEmailRegisterTournament: async function(req, res){
    let email = req.param('email');

    try{
      Account.validate('email', email);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }
    let accountEmail = await AccountService.existEmailAccount(email);
    if(accountEmail){
      AlertMessageService.EmailExist['status'] = true;
      let accountUser = await AccountService.getAccountWithEmail(email);
      AlertMessageService.EmailExist['usuario']= accountUser ;
    }else{
      AlertMessageService.EmailExist['status'] = false;
    }
    return res.json(AlertMessageService.EmailExist);
  },

  postViewDetailTournament: async function (req,res){
    let idAdministrator = req.param('idAdministrator');
    let idTournament = req.param('idTournament');
    try {
      Tournament.validate('administrator_id',idAdministrator);
      Tournament.validate('tournament_id',idTournament);
    } catch (err) {
      return res.json(AlertMessageService.InvalidField);
    }
    let paramsTournament = {
      tournament_id: idTournament,
      administrator_id: idAdministrator,

    };
    let tournament = await TournamentService.viewDetailTournamentService(paramsTournament);
    if (!tournament) {
      return res.json(AlertMessageService.ErrorViewDetailTournament);
    }

    AlertMessageService.SuccessViewDetailTournament['tournament'] = { tournament};
    return res.json(AlertMessageService.SuccessViewDetailTournament);
  }
};

