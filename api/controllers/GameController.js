/**
 * TestContresStageser
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const reservationService = require('../services/ReservationService');
module.exports = {

    listGame: async function (req, res) {
        const accountID = req.param('accountID');

        if (accountID !== undefined) {
            const params = {
                id_account: accountID
            };

            const resStages = await reservationService.listReservations(params);
            if (!resStages) {
                return res.json(AlertMessageService.ErrorListStages);
            }

            AlertMessageService.SuccessListStages['resStages'] = { stages: resStages };
            return res.json(AlertMessageService.SuccessListStages);
        } else {
            return res.json(AlertMessageService.ErrorListStages);
        }
    },

    getGame: async function (req, res) {
        const accountID = req.param('accountID');
        const stageID = req.param('id');

        if (accountID !== undefined && stageID !== undefined) {
            const params = {
                id_account: accountID,
                id_stage: stageID
            };

            const resStage = await reservationService.getReservation(params);
            if (!resStage) {
                return res.json(AlertMessageService.ErrorGetStage);
            }

            AlertMessageService.SuccessGetStage['stage'] = resStage;
            return res.json(AlertMessageService.SuccessGetStage);
        } else {
            return res.json(AlertMessageService.ErrorGetStage);
        }
    },

    createGame: async function (req, res) {
        const values = req.allParams();
        const id_accountParam = req.param('accountID');
        const nameParam = values.form.name;
        const descripcionParam = values.form.descripcion;
        const widthParam = parseInt(values.form.width);
        const heigthParam = parseInt(values.form.heigth);
        const stage_type_idParam = parseInt(values.form.stageType);
        const image_pathParam = "";

        if (id_accountParam !== undefined && nameParam !== undefined && descripcionParam !== undefined && widthParam !== undefined &&
            heigthParam !== undefined && stage_type_idParam !== undefined && image_pathParam !== undefined) {
            const params = {
                id_account: id_accountParam,
                name: nameParam,
                descripcion: descripcionParam,
                width: widthParam,
                heigth: heigthParam,
                stage_type_id: stage_type_idParam,
                image_path: image_pathParam
            };

            const response = await reservationService.createReservation(params);
            if (!response) {
                return res.json(AlertMessageService.ErrorCreateStage);
            }

            AlertMessageService.SuccessCreateStage['newStage'] = response;
            return res.json(AlertMessageService.SuccessCreateStage);
        } else {
            return res.json(AlertMessageService.ErrorCreateStage);
        }
    },

    updateGame: async function (req, res) {
        console.log(req.body);
        const values = req.allParams();
        const stageID = parseInt(values.id);
        const nameParam = values.form.name;
        const descripcionParam = values.form.descripcion;
        const widthParam = parseInt(values.form.width);
        const heigthParam = parseInt(values.form.heigth);
        const stage_type_idParam = parseInt(values.form.stageType);
        const image_pathParam = "";


        if (stageID !== undefined && nameParam !== undefined && descripcionParam !== undefined && widthParam !== undefined &&
            heigthParam !== undefined && stage_type_idParam !== undefined && image_pathParam !== undefined) {
            const params = {
                name: nameParam,
                descripcion: descripcionParam,
                width: widthParam,
                heigth: heigthParam,
                stage_type_id: stage_type_idParam,
                image_path: image_pathParam
            };

            const response = await reservationService.updateReservation(stageID, params);
            if (!response) {
                return res.json(AlertMessageService.ErrorUpdateStage);
            }

            AlertMessageService.SuccessUpdateStage['stage'] = response;
            return res.json(AlertMessageService.SuccessUpdateStage);
        } else {
            return res.json(AlertMessageService.ErrorUpdateStage);
        }
    },

    deleteGame: async function (req, res) {
        const stageID = req.param('id');
        console.log(stageID);
        if (stageID !== undefined) {
            const params = {
                stage_id: stageID
            };

            const resStage = await reservationService.deleteReservation (params);
            if (!resStage) {
                return res.json(AlertMessageService.ErrorDeleteStage);
            }

            AlertMessageService.SuccessDeleteStage['stage'] = resStage;
            return res.json(AlertMessageService.SuccessDeleteStage);
        } else {
            return res.json(AlertMessageService.ErrorDeleteStage);
        }
    },
};

