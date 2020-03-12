module.exports = {

    listStages: async function (params) {
      try {
        const admin = await Administrator.findOne(params.id_account);
        const sportSpace = await Sport_space.findOne({administrator_id: admin.administrator_id});
        return await Stage.find({sport_space_id: sportSpace.sport_space_id});
      } catch (error) {
        sails.log.error(error);
        return undefined;
      }
    },

    getStage: async function (params) {
      try {
        const admin = await Administrator.findOne({id_account: params.id_account});
        const sportSpace = await Sport_space.findOne({administrator_id: admin.administrator_id});
        return await Stage.findOne({sport_space_id: sportSpace.sport_space_id, stage_id: params.id_stage});
      } catch (error) {
        sails.log.error(error);
        return undefined;
      }
    },

    createStage: async function (params) {
      
      try {
        const admin = await Administrator.findOne({id_account: params.id_account});
        const sportSpace = await Sport_space.findOne({administrator_id: admin.administrator_id});
        params['sport_space_id'] = sportSpace.sport_space_id;
        return await Stage.create(params).fetch();
      } catch (error) {
        sails.log.error(error);
        return undefined;
      }
    },

    updateStage: async function (stageID, params) {
      try {
        return await Stage.update({stage_id: stageID}).set(params).fetch();
      } catch (error) {
        sails.log.error(error);
        return undefined;
      }
    },

    deleteStage: async function (params) {
      try {
        return await Stage.destroy(params).fetch();
      } catch (error) {
        sails.log.error(error);
        return undefined;
      }
    },
  
  };
  