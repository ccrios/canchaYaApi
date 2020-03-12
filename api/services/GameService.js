module.exports = {

    listGames: async function (params) {
        try {
            const admin = await Administrator.findOne(params.id_account);
            const sportSpace = await Sport_space.findOne({ administrator_id: admin.administrator_id });
            return await Stage.find({ sport_space_id: sportSpace.sport_space_id });
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    getGame: async function (params) {
        try {
            const admin = await Administrator.findOne({ id_account: params.id_account });
            const sportSpace = await Sport_space.findOne({ administrator_id: admin.administrator_id });
            return await Stage.findOne({ sport_space_id: sportSpace.sport_space_id, stage_id: params.id_stage });
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    createGame: async function (params) {
        try {
            return await Game.create(params).fetch();
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    updateGame: async function (gameID, params) {
        try {
            return await Game.updateOne({ game_id: gameID }).set(params);
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    deleteGame: async function (params) {
        try {
            console.log(params);
            return await Stage.destroy(params).fetch();
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

};
