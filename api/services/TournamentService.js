module.exports = {
  viewDetailTournamentService: async function (paramsTournament){
    try {
      var tournament = await Tournament.find({where: { administrator_id: paramsTournament.administrator_id, tournament_id: paramsTournament.tournament_id}});

      return tournament;
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },
  pgFormatDate: async function(date) {
    /* Via http://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date */
    function zeroPad(d) {
      return ('0' + d).slice(-2);
    }
    var parsed = new Date(date);
    return [parsed.getUTCFullYear(), zeroPad(parsed.getMonth() + 1), zeroPad(parsed.getDate()), zeroPad(parsed.getHours()), zeroPad(parsed.getMinutes()), zeroPad(parsed.getSeconds())].join(' ');
  },
  viewTournamentService: async function (idAdministrator, tournamentStatus) {

    try {
      var tournaments = await Tournament.find({where: { administrator_id: idAdministrator, tournament_status: tournamentStatus}});

      return tournaments;
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },
  createTournamentService: async function (paramsTournamet) {

    try {
      return await Tournament.create(paramsTournamet).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },
  registerParticipant: async function (paramasRegister){
    try {
      return await Register.create(paramasRegister).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },
  registerPayment: async function (paramsPayment){
    try {
      return await Payment.create(paramsPayment).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  }
};
