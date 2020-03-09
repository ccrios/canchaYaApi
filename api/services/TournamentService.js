module.exports = {


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
  }
};
