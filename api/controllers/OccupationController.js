/**
 * TestContresStageser
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const reservationService = require('../services/ReservationService');
const gameService = require('../services/GameService');
const occupationService = require('../services/OccupationService');
module.exports = {

    listOccupations: async function (req, res) {
        //For RESERVATION
        const stageID = parseInt(req.param('id'));
        //AGREGAR STAGE_ID y GAME_ID

        if (stageID !== undefined) {
            const params = {
                stage_id: stageID
            };

            const resOccupation = await occupationService.listOccupations(params);
            if (!resOccupation) {
                return res.json(AlertMessageService.ErrorListOccupations);
            }

            AlertMessageService.SuccessListOccupations['occupation'] = resOccupation;
            return res.json(AlertMessageService.SuccessListOccupations);
        } else {
            return res.json(AlertMessageService.ErrorListOccupations);
        }
    },

    getOccupation: async function (req, res) {

        const occupationID = parseInt(req.param('id'));
        //AGREGAR STAGE_ID y GAME_ID

        if (occupationID !== undefined) {
            const params = {
                occupation_id: occupationID
            };

            const resOccupation = await occupationService.getOccupation(params);
            if (!resOccupation) {
                return res.status(404).json(AlertMessageService.ErrorGetOccupation);
            }

            AlertMessageService.SuccessGetOccupation['occupation'] = resOccupation;
            return res.json(AlertMessageService.SuccessGetOccupation);
        } else {
            return res.status(404).json(AlertMessageService.ErrorGetOccupation);
        }
    },

    createOccupation: async function (req, res) {
        const values = req.allParams();
        //For RESERVATION
        const accountID = parseInt(values.accountID);
        const descriptionParam = values.form.description;
        const reservation_typeParam = values.form.reservation_type;
        const reservation_statusParam = values.form.reservation_status;

        if (accountID !== undefined && descriptionParam !== undefined &&
            reservation_typeParam !== undefined && reservation_statusParam !== undefined) {
            let reservationID;

            const reservationParams = {
                id_account: accountID,
                description: descriptionParam,
                reservation_type: reservation_typeParam,
                reservation_status: reservation_statusParam
            };

            const responseReservation = await reservationService.createReservation(reservationParams);
            if (!responseReservation) {
                return res.json(AlertMessageService.ErrorCreateReservation);//ERROR al crear reservacion
            }
            // AlertMessageService.SuccessCreateStage['newStage'] = responseReservation;
            reservationID = responseReservation.reservation_id;

            if (reservationID !== undefined) {
                //For GAME
                const team1_idParam = values.form.team1_id;
                const team2_idParam = values.form.team2_id;
                const game_typeParam = values.form.game_type;

                if (team1_idParam !== undefined && team2_idParam !== undefined &&
                    game_typeParam !== undefined) {
                    let gameID;
                    const gameParams = {
                        team1_id: team1_idParam,
                        team2_id: team2_idParam,
                        game_type: game_typeParam,
                        reservation_id: reservationID
                    };

                    const responseGame = await gameService.createGame(gameParams);
                    if (!responseGame) {
                        return res.json(AlertMessageService.ErrorCreateStage);//ERROR al crear juego
                    }

                    gameID = responseGame.game_id;

                    if (gameID !== undefined) {
                        //AGREGAR RESERVATION_ID o TOURNAMENT_ID
                        //For OCCUPATION
                        const startParam = values.form.start;
                        const endParam = values.form.end;
                        const occupation_typeParam = values.form.occupation_type;

                        if (startParam !== undefined && endParam !== undefined) {
                            const occupationParams = {
                                start: startParam,
                                end: endParam,
                                occupation_type: occupation_typeParam,
                                stage_id: values.form.stage_id,
                                game_id: gameID
                            };

                            const responseOccupation = await occupationService.createOccupation(occupationParams);
                            if (!responseOccupation) {
                                return res.json(AlertMessageService.ErrorCreateOccupation);//ERROR al crear la ocupacion
                            }

                            AlertMessageService.SuccessUpdateStage['occupation'] = responseOccupation;
                            return res.json(AlertMessageService.SuccessCreateOccupation);//Exito al crear la ocupacion
                        }
                    }
                }
            }
        }
    },

    updateOccupation: async function (req, res) {
        const values = req.allParams();
        const occupationId = parseInt(values.id);
        try {
            const { start, end, occupation_type, stage_id } = values.form;
            const occupationInfo = await occupationService.updateOccupation(occupationId, { start, end, occupation_type, stage_id });
            if (!occupationInfo) {
                return res.status(500).json(AlertMessageService.ErrorUpdateOccupation);
            }
            
            const gameId = occupationInfo.game_id;
            const { team1_id, team2_id, game_type } = values.form;
            const gameInfo = await gameService.updateGame(gameId, { team1_id, team2_id, game_type });
            if (!gameInfo) {
                return res.status(500).json(AlertMessageService.ErrorUpdateGame);
            }

            const reservationId = gameInfo.reservation_id;
            const { reservation_status, reservation_type, description } = values.form
            const reservationInfo = await reservationService.updateReservation(reservationId, { reservation_status, reservation_type, description });
            if (!reservationInfo) {
                return res.status(500).json(AlertMessageService.ErrorUpdateReservation);
            }

            return res.status(200).json(AlertMessageService.SuccessUpdateOccupation);
        } catch (error) {
            console.log(error);
            return res.status(500).json(AlertMessageService.ErrorUpdateOccupation);
        }

    },

    deleteOccupation: async function (req, res) {
        const occupationID = parseInt(req.param('id'));

        if (occupationID !== undefined) {
            const params = {
                occupation_id: occupationID
            };

            const resOccupation = await occupationService.deleteOccupation(params);
            if (!resOccupation) {
                return res.status(500).json(AlertMessageService.ErrorDeleteOccupation);
            }

            AlertMessageService.SuccessDeleteOccupation['occupation'] = resOccupation;
            return res.json(AlertMessageService.SuccessDeleteOccupation);
        } else {
            return res.status(404).json(AlertMessageService.ErrorDeleteOccupation);
        }
    },
};

