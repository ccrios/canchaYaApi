module.exports = {

    listOccupations: async function (params) {
        try {
            return await Occupation.find(params);
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    getOccupation: async function (params) {
        try {
            const occupationInfo = await Occupation.findOne(params).populate('game_id');
            const reservationInfo = await Reservation.findOne({
                reservation_id: occupationInfo.game_id.game_id
            });
            return { ...occupationInfo, reservationInfo };
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    createOccupation: async function (params) {
        try {
            console.log('on occupation');
            console.log(params);
            return await Occupation.create(params).fetch();
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    updateOccupation: async function (occupationID, params) {
        try {
            return await Occupation.updateOne({ occupation_id: occupationID }).set(params);
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    deleteOccupation: async function (params) {
        try {
            const occupationInfo = await Occupation.destroy(params).fetch();
            const gameInfo = await Game.destroy({ game_id: occupationInfo.game_id }).fetch();
            await Reservation.destroy({ reservation_id: gameInfo.reservation_id });
            return occupationInfo;
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

};
