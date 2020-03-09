
module.exports = {


  createSportSpaceService: async function (params) {
    try {
      return await Sport_space.create(params).fetch();
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  getSportSpaceById: async function(id) {
		try {
			const sport_space = await Sport_space.findOne({sport_space_id :id});
			if(!sport_space){
				return null;
			}

			return sport_space;

		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
  },

  getSportSpaceByAdmin: async function(administrator_id) {
		try {
			const sport_space = await Sport_space.findOne({administrator_id :administrator_id});
			if(!sport_space){
				return null;
			}
			return sport_space;

		} catch (error) {
			sails.log.error(error);
			return undefined;
		}
  },

  updateSportSpaceService: async function (params,id) {
    try {
      await Sport_space.update({ sport_space_id :id })
			.set(
				params
      );
      return true;

    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },

  updateSportSpaceServiceByAdministrator:  async function (params,id) {
    try {
      await Sport_space.update({ administrator_id :id })
			.set(
				params
      );

      return true;
    } catch (error) {
      sails.log.error(error);
      return undefined;
    }
  },



};
