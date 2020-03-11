module.exports = {

    listReservations: async function (params) {
        try {
            const admin = await Administrator.findOne(params.id_account);
            const sportSpace = await Sport_space.findOne({ administrator_id: admin.administrator_id });
            return await Stage.find({ sport_space_id: sportSpace.sport_space_id });
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    getReservation: async function (params) {
        try {
            const admin = await Administrator.findOne({ id_account: params.id_account });
            const sportSpace = await Sport_space.findOne({ administrator_id: admin.administrator_id });
            return await Stage.findOne({ sport_space_id: sportSpace.sport_space_id, stage_id: params.id_stage });
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    createReservation: async function (params) {
        try {
            console.log('on reservation');
            console.log(params);
            return await Reservation.create(params).fetch();
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    updateReservation: async function (stageID, params) {
        try {
            return await Reservation.update({ stage_id: stageID }).set(params).fetch();
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

    deleteReservation: async function (params) {
        try {
            console.log(params);
            return await Reservation.destroy(params).fetch();
        } catch (error) {
            sails.log.error(error);
            return undefined;
        }
    },

};
