/**
 * Archivo que reune todas las posibles respuestas que puede dar el servidor al cliente en un servicio
 */
module.exports = {
	//-------------GENERAL---------
	InvalidField: { status: false, code: "INF", message: "Invalid Field" },
	NoParamsBody: { status: false, code: "NPB", message: "Not params body" },
	Error500: { status: false, code: "ERSR", message: "Error 500" },
	error500: function (err) { sails.log.error(err); return this.Error500; },
	//--------------LOGIN----------
	InvalidCrenditial: { status: false, code: "IVC", message: "Invalid Credential" },
	Accountnotactivated: { status: false, code: "ANA", message: "Account not activated" },
	LoginSuccesfully: { status: true, code: "LSC", message: "Login Succesfully" },
	SuccessRegister: { status: true, code: "RSC", message: " Register Succesfully" },
	SuccessReSend: { status: true, code: "RSSC", message: " Send Email Succesfully" },
	//--------------USER-----------

	DocumentExist:{status:false,code:"EDC",message:" Exist Document" },
	EmailExist: {status: false, code:"EXM", message:" Exist email"},
	successfullyChangedPassword:{status: true, code:"SCHPSS", message: "Sucess changed pass"},
	InvalidUser:{ status: false, code:"IVU",message: "Invalid User" },
	NotFoundUser:{status:false,code:"NUFS",message:"Not Found User"},
	ErrorCreateUser:{status:false,code:"ECU",message:"Error Create User"},
	SuccessCreateUser:{status:true,code:"SUCU",message:"Success Create User"},
	ErrorUpdatingUser:{status:false, code:"EUU", message: "Error Updating User"},
  SuccessUpdatingUser:{status:true, code:"SUU", message: "Success Updating User"},
  ErrorCreateTournament:{status:false,code:"ECT",message:"Error Create Tournament"},
  SuccessCreateTournament:{status:true,code:"SCT",message:"Success Create Tournament"},
  SuccessViewTournament: {status:true,code:"SVT", message: "Success View Tournament"},
  SuccessViewDetailTournament: {status:true,code:"SVDT", message: "Success View Detail Tournament"},
  ErrorViewDetailTournament: {status:false,code:"EVDT", message: "Error View Detail Tournament"},
  SuccessRegisterParticipantTournament: {status:true,code:"SRPT", message: "Registro torneo exitoso"},
	//-----------purchase-------------------------------------
	ErrorTokenInPurchase:{status:false, code:"EUU", message: "Error processing the purchase"},


  //---------------------------------------------------------------------
  ErrorCreateSportSpace:{status:false,code:"ECSP",message:"Error Create Sport Space"},
  SuccessUpdatingSportSpace:{status:true, code:"SUSP", message: "Success Updating Sport Space"},
  ErrorUpdatingSportSpace:{status:false, code:"EUSP", message: "Error Updating Sport Space"},


  //---------------------------------------------------------no administrator found
  NoAdministratorFound:{status:false, code:"NAF", message: "No administrator found"},
  NoSportSpaceFouns:{status:false, code:"NSsF", message: "No sport space found"},
  NoFounAccount:{status:false, code:"NSsF", message: "No found account"},
  ErrorUpdatingAdmin:{status:false, code:"EUA", message: "Error Updating Admin"},
  ErrorUpdatingAccount:{status:false, code:"EUA", message: "Error Updating Account"},



	//--------------STAGE-----------
	SuccessListStages: { status: true, code: "SLS", message: "Success List Stages" },
	ErrorListStages: { status: false, code: "ELS", message: "Error List Stages" },
	SuccessGetStage: { status: true, code: "SGS", message: "Success Getting Stage" },
	ErrorGetStage: { status: false, code: "EGS", message: "Error Getting Stage" },
	SuccessCreateStage: { status: true, code: "SCS", message: "Success Create Stage" },
	ErrorCreateStage: { status: false, code: "ECS", message: "Error Create Stage" },
	SuccessUpdateStage: { status: true, code: "SUS", message: "Success Updating Stage" },
	ErrorUpdateStage: { status: false, code: "EUS", message: "Error Updating Stage" },
	SuccessDeleteStage: { status: true, code: "SDS", message: "Success Deleting Stage" },
	ErrorDeleteStage: { status: false, code: "EDS", message: "Error Deleting Stage" },
	//--------------OCCUPATION-----------
	SuccessListOccupations: { status: true, code: "SLO", message: "Success List Occupations" },
	ErrorListOccupations: { status: false, code: "ELO", message: "Error List Occupations" },
	SuccessGetOccupation: { status: true, code: "SGO", message: "Success Getting Occupation" },
	ErrorGetOccupation: { status: false, code: "EGO", message: "Error Getting Occupation" },
	SuccessCreateOccupation: { status: true, code: "SCO", message: "Success Create Occupation" },
	ErrorCreateOccupation: { status: false, code: "ECO", message: "Error Create Occupation" },
	SuccessUpdateOccupation: { status: true, code: "SUO", message: "Success Updating Occupation" },
	ErrorUpdateOccupation: { status: false, code: "EUO", message: "Error Updating Occupation" },
	SuccessDeleteOccupation: { status: true, code: "SDO", message: "Success Deleting Occupation" },
	ErrorDeleteOccupation: { status: false, code: "EDO", message: "Error Deleting Occupation" },
	//--------------RESERVATION-----------
	SuccessCreateReservation: { status: true, code: "SCR", message: "Success Create Reservation" },
	ErrorCreateReservation: { status: false, code: "ECR", message: "Error Create Reservation" },
	//--------------RESERVATION-----------
	ErrorUpdateReservation: { status: false, code: "EUR", message: "Error updating the reservation" },
	//--------------GAME-----------
	ErrorUpdateGame: { status: false, code: "EUG", message: "Error updating the game" },

};

